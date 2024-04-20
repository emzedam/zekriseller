<template>
 <!-- ==============  مدارک====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <span class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></span>
         <span class="leading-3"> مدارک</span>
      </h2>

      <div class="p-4 font-medium text-gray-500 w-full border-b flex items-center justify-between">
         <div class="note"><span v-if="sellerDocs.length == 0">هنوز مدارک خود را اضافه نکرده‌اید.</span> مدارک شما توسط کارشناسان پتومن بررسی می‌شود</div>
         <div class="submit-addres">
            <button @click="activeModal = true"  class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-cyan-500 px-6 py-3 text-white w-full flex items-center rounded-lg justify-center">
               <i class="fa-light fa-upload pl-2 text-xl"></i>بارگذاری مدارک
            </button>
         </div>
      </div>



      <div class="uploads-list grid grid-cols-4" v-if="sellerDocs.length != 0">
         <div class="item w-full col-span-4 sm:col-span-2 p-4" v-for="(doc , index) in sellerDocs" :key="index">
            <div class="flex gap-4 items-center justify-start w-full">
               <img src="/_nuxt/assets/images/seller.png" class="h-24 w-24 rounded-lg border" />

               <div class="space-y-2">
                  <span class="font-semibold">{{ doc.doc_title }}</span>
                  <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50" v-if="doc.status == false">در حال بررسی</div>
                  <div class="rounded-lg px-2 text-caption-strong text-green-500 bg-green-50" v-else>تایید شده</div>
               </div>
            </div>
         </div>
      </div>
      <div v-else>
         <img class="m-auto py-10" src="/sellerDocuments.png" />
      </div> 
   </div>


   <MadarekModal
      :madarekData="madarekData"
      :requestLoading="requestLoading"
      v-model="activeModal" 
      @doSetFiles="(files) => setMadarekFiles(files)"
      @doFilesStore="doFilesStore()"
      ref="madarekcomponentRef"
      :titleLists="titleLists"
      @doSelectDocTitle="(data) => doSelectDocTitle(data)"
   />
</div>

<!-- ============== مدارک======================= -->
   
</template>

<script setup>
import { useToast } from "vue-toastification";
import { useSellersStore } from '~/store/sellersStore';
import { storeToRefs } from 'pinia';
import MadarekModal from '@/components/Modals/Profile/Documents/Upload-Documents.vue'

const titleLists = ref([])
const madarekcomponentRef = ref(null)
const toast = useToast();
const requestLoading = ref(false)
const sellerStore = useSellersStore()
const { authSeller } = storeToRefs(sellerStore)
const activeModal = ref(false)
const sellerDocs = ref([])

const madarekData = reactive({
   title: "",
   title_id: "",
   files: []
})

onMounted(async () => {
   await getSellerDocTitles()
   await getSellerDocs()
})

const doSelectDocTitle = (data) => {
   madarekData.title = data.title
   madarekData.title_id = data.id
}

const setMadarekFiles = (files) => {
   if(files.length != 0){
      for(let i = 0; i < files.length; i++){
         const types = ["image/png", "image/jpeg", "image/jpg"]
         if(!types.includes(files[i].type)) {
            toast.error("فایل های انتخابی باید از نوع عکس باشند")
            madarekcomponentRef.value.fileInputRefs.value = ""
            madarekData.files = []
         }else if(files[i].size > 3000000){
            toast.error("حجم فایل نمیتواند بیشتر از ۳ مگابایت باشد")
            madarekcomponentRef.value.fileInputRefs.value = ""
            madarekData.files = []
         }else {
            madarekData.files = [files[i] , ...madarekData.files]
         }
      }
   }else{
      madarekcomponentRef.value.fileInputRefs.value = ""
   }
}
const doFilesStore = async () => {
   if(madarekData.files.length == 0){
      toast.error("لطفا مدارک مربوطه را جهت آپلود انتخاب کنید !")
   }else if(madarekData.title == "") {
      toast.error("لطفا عنوان مربوط به مدارک را انتخاب کنید")
   }else if(madarekData.title_id == "") {
      toast.error("لطفا عنوان مربوط به مدارک را انتخاب کنید")
   }else{
      sendFilesWithResult()
   }
}
const sendFilesWithResult = async () => {
   requestLoading.value = true
   const result = await sellerStore.store_seller_document_files(madarekData)
   if(result.status == 200) {
      toast.success(result.message)
      sellerDocs.value = result.result
      activeModal.value = false

      madarekData.files = []
      madarekData.title = ""
      madarekData.title_id = ""
      requestLoading.value = false
   }else {
      toast.error(result.message)
      requestLoading.value = false
   }
}
const getSellerDocTitles = async () => {
   const result = await sellerStore.get_seller_document_titles()
   if(result.status == 200) {
      titleLists.value = result.result
   }
}

const getSellerDocs = async () => {
   const result = await sellerStore.get_seller_documents()
   if(result.status == 200){
      sellerDocs.value = result.result
   }
}
</script>