<template>
  <!-- ==============  وضعیت قرارداد====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <span class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></span>
         <span class="leading-3"> قرارداد</span>
      </h2>

      <div class="grid lg:grid-cols-2 w-full">
        <div class="flex items-center">
          <p class="p-4 font-semibold text-gray-500 text-md">وضعیت قرارداد</p>
        </div>


      <div class="flex justify-between items-center py-3 lg:py-4 px-4 border rounded-lg m-4" :class="contractInfo != null && contractInfo.contract_status == true ? 'bg-gray-100' : ''">
         <div >
            <div class="flex items-center">
               <p class="text-body-1 text-gray-900 ml-1 font-semibold" v-if="contractInfo == null || contractInfo.contract_status == false">امضانشده</p>
               <p class="text-body-1 text-gray-900 ml-1 font-semibold" v-else>امضا شده</p>
            </div>
            <p v-on:click.prevent="contractInfo.contract_status != true ? activeModal = !activeModal: false" class="font-semibold text-cyan-500 mt-2 text-right text-md cursor-pointer">از اینجا امضا کنید</p>
         </div>
         <div class="cursor-pointer">

            <div class="flex">
               <span class="!hidden">
                  <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
               </span>
               <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
               <span class="">
                  <i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
               </span>
            </div>

            <span class="hidden lg:inline-block"> </span>
            <span class="inline-block lg:hidden" v-on:click.prevent="activeModal = !activeModal">
               <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
            </span>
         </div>
      </div>
      </div>



   </div>
</div>

<!-- ============== وضعیت قرارداد======================= -->


  <ContractModal
      v-model="activeModal"
      @saveSign="saveSellerSign()"
      ref="contractModalRef"
      :requestLoading="requestLoading"
  />
 

</template>

<script setup>
   import { useToast } from "vue-toastification";
   import { useSellersStore } from '~/store/sellersStore';
   import ContractModal from "@/components/Modals/Profile/Contract/ContractModal.vue";

   const contractModalRef = ref(null)
   const activeModal = ref(false)
   const toast = useToast();
   const requestLoading = ref(false)
   const sellerStore = useSellersStore()
   const contractInfo = ref(null)

   onMounted(async() => {
      await get_contract_object()
   })

   const get_contract_object = async () => {
      const result = await sellerStore.get_seller_contract_state()
      if(result.status == 200){
         contractInfo.value = result.result
         contractModalRef.value.contractValue = result.result.contarct_status == true ? 1 : 0
      }
   }

   const saveSellerSign = async () => {
      requestLoading.value = true
      const result = await sellerStore.save_seller_sign_contract(contractModalRef.value.contractValue)
      if(result.status == 200){
         requestLoading.value = false
         contractInfo.value = result.result
         activeModal.value = false
         toast.success(result.message)
      }else {
         toast.error(result.message)
         requestLoading.value = false
      }
   }
</script>