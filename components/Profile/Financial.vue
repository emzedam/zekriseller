<template>
 <!-- ==============  مالی====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <span class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></span>
         <span class="leading-3">اطلاعات مالی</span>
      </h2>
      <p class="p-4 font-medium text-gray-500 w-full border-b">حساب بانکی باید به نام مالک پنل باشد</p>
      <div class="flex flex-col lg:grid lg:grid-cols-2">
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">شماره کارت</p>
                  <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50"
                  v-if="authSeller != null && authSeller.financial != null && authSeller.financial.cardnumber_status == false && authSeller.financial.cardnumber != null">در حال بررسی</div>
               </div>
               <p class="font-semibold text-gray-900 mt-2 ltr text-right text-md">{{ authSeller != null && authSeller.financial != null && authSeller.financial.cardnumber != null ? authSeller.financial.cardnumber : 'شماره کارت را وارد کنید' }}</p>
            </div>
            <div class="cursor-pointer">
               <div class="flex">
                  <span v-if="authSeller != null && authSeller.financial == null || authSeller != null && authSeller.financial.cardnumber == null" @click="activeModal = 'cardnumber'"> 
                     <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                  <span v-if="authSeller != null && authSeller.financial != null && authSeller.financial.cardnumber != null" @click="activeModal = 'cardnumber'">
                     <i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                  </span>
               </div>

               <span class="hidden lg:inline-block"></span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1"> شماره شبا  </p>
                  <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50"
                  v-if="authSeller != null && authSeller.financial != null && authSeller.financial.shabanumber_status == false">در حال بررسی</div>
                 </div>
               <p class="font-medium text-gray-700 mt-2 text-md">
                  {{ authSeller != null && authSeller.financial != null && authSeller.financial.shabanumber != null ? authSeller.financial.shabanumber : 'شماره شبا را وارد کنید' }}
               </p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <span v-if="authSeller != null && authSeller.financial == null || authSeller != null && authSeller.financial.shabanumber == null" @click="activeModal = 'shabamodal'"> 
                        <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span v-if="authSeller != null && authSeller.financial != null && authSeller.financial.shabanumber != null" @click="activeModal = 'shabamodal'">
                        <i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     </span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">مشمول مالیات بر ارزش افزوده</p>
                  <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50"
                  v-if="authSeller != null && authSeller.financial != null && authSeller.financial.maliat_files_status == false && authSeller.financial.maliat_files != null">در حال بررسی</div>
                  </div>
               <p class="font-medium text-gray-700 font-fa text-md">
                  {{ authSeller != null && authSeller.financial != null && authSeller.financial.is_maliat != null ? authSeller.financial.is_maliat == false ? 'خیر' : 'بله' : 'مشخص نشده' }}
               </p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i 
                     v-if="authSeller != null && authSeller.financial == null || authSeller != null && authSeller.financial.maliat_files == null"
                     @click="activeModal = 'maliatmodal'" class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span
                     v-if="authSeller != null && authSeller.financial == null || authSeller != null && authSeller.financial.maliat_files != null"
                     @click="activeModal = 'maliatmodal'"
                     ><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
      </div>
   </div>

   <CardnumberModal 
      v-model="activeModal" 
      @inputCardNumber="(text) => cardnumber = text"
      :cardnumber="cardnumber"
      :requestLoading="requestLoading"
      @cardnumberStore="cardNumberStore()"
   />
   <MaliatModal
      :maliatData="maliatData"
      :requestLoading="requestLoading"
      @change_maliat_status="(state) => maliatData.is_maliat = state"
      v-model="activeModal" 
      @doSetFiles="(files) => setMaliatFiles(files)"
      @doFilesStore="doFilesStore()"
      ref="maliatcomponentRef"
   />
   <ShabaModal 
      :shabanumber="shabanumber"
      @inputShabaNumber="(text) => shabanumber = text"
      :requestLoading="requestLoading"
      @shabanumberStore="shabaNumberStore()"
      v-model="activeModal" 
   />
</div>

<!-- ============== مالی======================= -->


   
</template>

<script setup>
import { useToast } from "vue-toastification";
import CardnumberModal from '@/components/Modals/Profile/Financial/Financial-Card-Modal.vue'
import MaliatModal from '@/components/Modals/Profile/Financial/maliat-modal.vue'
import ShabaModal from '@/components/Modals/Profile/Financial/shaba-modal.vue'
import { useSellersStore } from '~/store/sellersStore';
import { storeToRefs } from 'pinia';

const maliatcomponentRef = ref(null)
const toast = useToast();
const requestLoading = ref(false)
const sellerStore = useSellersStore()
const { authSeller } = storeToRefs(sellerStore)

const activeModal = ref(null)

onMounted(() => {
   setCardVsShabaDefault()
})

const cardnumber = ref("")
const shabanumber = ref("")
const maliatData = reactive({
   is_maliat: false,
   files: []
})


const setCardVsShabaDefault = () => {
   if(authSeller.value != null) {
      if(authSeller.value.financial != null && authSeller.value.financial.cardnumber != null) {
         cardnumber.value = authSeller.value.financial.cardnumber
      }

      if(authSeller.value.financial != null && authSeller.value.financial.shabanumber != null) {
         shabanumber.value = authSeller.value.financial.shabanumber
      }
   }
}

watch(cardnumber, (newVal, oldVal) => {
    if (newVal != "") {
      let realNumber = cardnumber.value.replace(
        /-/gi,
        ""
      );
      let dashedNumber = realNumber.match(/.{1,4}/g);
      cardnumber.value = dashedNumber.join("-");
    }
  }
);


const cardNumberStore = async () => {
   if(cardnumber.value != ""){
      requestLoading.value = true
      const result = await sellerStore.update_seller_cardnumber({cardnumber: cardnumber.value})
      if(result.status == 200){
         requestLoading.value = false
         toast.success(result.message)
         if(authSeller.value != null && authSeller.value.financial != null){
            authSeller.value.financial = result.result
            cardnumber.value = result.result.cardnumber
         }
         activeModal.value = null
      }else{
         toast.error(result.message)
         requestLoading.value = false
      }
   }else{
      toast.error("لطفا شماره کارت را وارد کنید");
      requestLoading.value = false
   }
}

const shabaNumberStore = async () => {
   if(shabanumber.value != ""){
      requestLoading.value = true
      const result = await sellerStore.update_seller_shabanumber({shabanumber: shabanumber.value})
      if(result.status == 200){
         requestLoading.value = false
         toast.success(result.message)
         if(authSeller.value != null && authSeller.value.financial != null){
            authSeller.value.financial = result.result
            shabanumber.value = result.result.shabanumber
         }
         activeModal.value = null
      }else{
         toast.error(result.message)
         requestLoading.value = false
      }
   }else{
      toast.error("لطفا شماره شبا را وارد کنید");
      requestLoading.value = false
   }
}

const setMaliatFiles = (files) => {
   if(files.length != 0){
      for(let i = 0; i < files.length; i++){
         const types = ["image/png", "image/jpeg", "image/jpg"]
         if(!types.includes(files[i].type)) {
            toast.error("فایل های انتخابی باید از نوع عکس باشند")
            maliatcomponentRef.value.fileInputRefs.value = ""
            maliatData.files = []
         }else if(files[i].size > 3000000){
            toast.error("حجم فایل نمیتواند بیشتر از ۳ مگابایت باشد")
            maliatcomponentRef.value.fileInputRefs.value = ""
            maliatData.files = []
         }else {
            maliatData.files = [files[i] , ...maliatData.files]
         }
      }
   }else{
      maliatcomponentRef.value.fileInputRefs.value = ""
   }
}

const doFilesStore = async () => {
   if(maliatData.is_maliat == true) {
      if(maliatData.files.length != 0){
         sendFilesWithResult()
      }else {
         toast.error("لطفا مدارک مربوطه را انتخاب کنید !")
      }
   }else{
      sendFilesWithResult()
   }
}

const sendFilesWithResult = async () => {
   requestLoading.value = true
   const result = await sellerStore.store_seller_maliat_files(maliatData)
   if(result.status == 200) {
      toast.success(result.message)
      authSeller.value.financial = result.result
      activeModal.value = null

      maliatData.files = []
      requestLoading.value = false
   }else {
      toast.error(result.message)
      requestLoading.value = false
   }
}

</script>