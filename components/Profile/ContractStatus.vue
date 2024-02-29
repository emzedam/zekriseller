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


      <div class="flex justify-between items-center py-3 lg:py-4 px-4 border rounded-lg m-4">
         <div >
            <div class="flex items-center">
               <p class="text-body-1 text-gray-900 ml-1 font-semibold">امضانشده</p>
            </div>
            <p v-on:click.prevent="ContractModal = !ContractModal" class="font-semibold text-cyan-500 mt-2 text-right text-md cursor-pointer">از اینجا امضا کنید</p>
         </div>
         <div class="cursor-pointer">
            <div class="flex">
               <span class="!hidden"> <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
               <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
               <span class=""><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
            </div>

            <span class="hidden lg:inline-block"> </span>
            <span class="inline-block lg:hidden" v-on:click.prevent="ContractModal = !ContractModal">
               <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
            </span>
         </div>
      </div>
      </div>



   </div>
</div>

<!-- ============== وضعیت قرارداد======================= -->
<transition-group name="modal">
   <div v-if="ContractModal" class="fixed top-0 left-0 z-[1000] flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div v-on:click.prevent="ContractModal = !ContractModal" class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div class="relative rounded-lg shadow-lg shadow-gray-300/40    bg-white w-full  lg:m-auto m-6 left-0 right-0 max-w-6xl">
                <button v-on:click.prevent="ContractModal = !ContractModal" type="button" class="z-[1] absolute w-8 h-8 text-gray-400 transform translate-x-5 -translate-y-3 transition-transform hover:translate-x-4 hover:transition-transform hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center">
                        <i class="text-lg fa fa-times"></i>
                      </button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <div class="text-xl font-semibold block text-gray-500">جزءیات درخواست برداشت</div>
                    </div>
                </div>

  <ContractModal/>
  </div>
  </div>
</transition-group>
</template>

<script>
  import ContractModal from "@/components/Modals/Profile/Contract/ContractModal.vue";
export default {
   
  components: {
   ContractModal
   },

  data() {
    return {
      ContractModal: false,
    }
  },
}
</script>