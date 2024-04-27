<template>
    <!-- ============== اطلاعات فروشگاه====================== -->
<div class="lg:col-span-9" v-if="storeInfoe != null">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <nuxt-link to="/profile" class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></nuxt-link>
         <span class="leading-3">اطلاعات فروشگاه</span>
      </h2>
      <p class="p-4 font-medium text-gray-500 w-full border-b">برای اینکه فروشگاه شما وجهه بهتری داشته باشد، اطلاعات زیر را تکمیل کنید</p>
      <div class="flex flex-col lg:grid lg:grid-cols-2">
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">وضعیت فروشنده</p>
               </div>
               <p class="font-medium text-gray-700">{{ storeInfoe.store_state == 0 ? "حقیقی" : "حقوقی" }}</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block"></span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">کد فروشنده</p>
               </div>
               <p class="font-medium text-gray-700">{{ storeInfoe.store_code }}</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block"> </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">نام فروشگاه</p>
                  <div v-if="storeInfoe.store_name_status == true" class="rounded-lg px-2 text-caption-strong text-green-500 bg-green-50">تاییدشده</div>
                  <div v-if="storeInfoe.store_name_status == false" class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50">در حال بررسی</div>
               </div>
               <p class="font-medium text-gray-700">{{ storeInfoe.store_name }}</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i 
                        @click="open_modal('ShopNameModal')" 
                        v-if="storeInfoe.store_name == null"
                     class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span
                        @click="open_modal('ShopNameModal')" 
                        v-if="storeInfoe.store_name != null"
                     ><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">درباره فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700">{{ storeInfoe.about_store != null ? storeInfoe.about_store : "وارد کنید" }}</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i 
                        v-if="storeInfoe.about_store == null"
                        @click="open_modal('ShopAboutModal')" 
                     class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span 
                        v-if="storeInfoe.about_store != null"
                        @click="open_modal('ShopAboutModal')"
                     ><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b border-l">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">شماره تلفن ثابت فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700 font-fa">{{ storeInfoe.static_phone_store != null ? storeInfoe.static_phone_store : "وارد کنید" }}</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i 
                        @click="open_modal('ShopPhoneModal')"
                        v-if="storeInfoe.static_phone_store == null"
                     class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span
                        v-if="storeInfoe.static_phone_store != null"
                        @click="open_modal('ShopPhoneModal')"
                     ><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400">
                     <i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i>
                  </div>
               </span>
            </div>
         </div>
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">وب‌سایت فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700">{{ storeInfoe.site_url_store != null ? storeInfoe.site_url_store : "وارد کنید" }}</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i 
                     @click="open_modal('ShopSiteModal')"
                     v-if="storeInfoe.site_url_store == null"
                     class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span
                     @click="open_modal('ShopSiteModal')"
                     v-if="storeInfoe.site_url_store != null"
                     ><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
         <div class="hidden justify-between items-center py-3 lg:py-4 px-4 border-b border-l">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">روزهای کاری فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700">۱۷، ۲۴ آذر</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex"><i class="fa-light fa-pen-to-square hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="hidden justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">روزهای تعطیل فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700">وارد کنید</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex"><i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 lg:border-l">
            <div class="flex items-center">
               <div class="relative border border-dashed rounded-lg h-16 w-16 flex items-center justify-center text-4xl overflow-hidden ml-4">
                  <i class="fa-solid fa-image p-4 text-cyan-500 opacity-30"></i><i class="fa fa-plus absolute text-xl text-black/50"></i>
               </div>
               <div>
                  <div class="flex items-center">
                     <p class="text-body-1 text-gray-900 ml-1 font-semibold">نماد فروشگاه (لوگو)</p>
                     <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50" 
                     v-if="storeInfoe.store_logo_status != null && storeInfoe.store_logo_status == false">در حال بررسی</div>
                     <div class="rounded-lg px-2 text-caption-strong text-green-500 bg-green-50" 
                     v-if="storeInfoe.store_logo_status != null && storeInfoe.store_logo_status == true">تایید شده</div>
                  </div>
                  <p class="font-medium text-gray-700 text-sm">اگر لوگو دارید بارگذاری کنید</p>
                  <small class="text-gray-500">250px*250px</small>
               </div>
            </div>

            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex"><i class="fa-light fa-upload hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="justify-between items-center py-3 lg:py-4 px-4 hidden">
            <div class="flex items-center">
               <div class="relative border border-dashed rounded-lg h-16 w-28 flex items-center justify-center text-4xl overflow-hidden ml-4">
                  <i class="fa-solid fa-image p-4 text-cyan-500 opacity-30"></i><i class="fa fa-plus absolute text-xl text-black/50"></i>
               </div>
               <div>
                  <div class="flex items-center">
                     <p class="text-body-1 text-gray-900 ml-1 font-semibold">بنر بالای فروشگاه (بنر)</p>
                     <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50">در حال بررسی</div>
                  </div>
                  <p class="font-medium text-gray-700 text-sm">اگر بنر دارید بارگذاری کنید</p>
                  <small class="text-gray-500">1400px*350px</small>
               </div>
            </div>

            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex"><i class="fa-light fa-upload hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
      </div>
   </div>

   <ShopNameModal
      :activeModal="activeModal"
      @close="activeModal = null"
      @updateStoreInfo="(data) => storeInfoe = data"
      :storeName="storeInfoe.store_name"
   />
   <ShopAboutModal
      :activeModal="activeModal"
      @close="activeModal = null"
      @updateStoreInfo="(data) => storeInfoe = data"
      :aboutStore="storeInfoe.about_store"
   />

   <ShopPhoneModal
      :activeModal="activeModal"
      @close="activeModal = null"
      @updateStoreInfo="(data) => storeInfoe = data"
      :telphoneStore="storeInfoe.static_phone_store"
   />
   <ShopWebsiteModal
      :activeModal="activeModal"
      @close="activeModal = null"
   />
</div>

<!-- ============== اطلاعات فروشگاه======================= -->
</template>
<script setup>
import { useSellersStore } from '~/store/sellersStore';
import ShopNameModal from "@/components/Modals/Profile/StoreInformation/Shop-name-modal.vue"
import ShopAboutModal from "@/components/Modals/Profile/StoreInformation/Shop-About-Modal.vue"
import ShopLogoModal from "@/components/Modals/Profile/StoreInformation/Shop-Logo-Modal.vue"
import ShopPhoneModal from "@/components/Modals/Profile/StoreInformation/Shop-Phone-Modal.vue"
import ShopWebsiteModal from "@/components/Modals/Profile/StoreInformation/Shop-Website-Modal.vue"
const activeModal = ref(null);
const sellerStore = useSellersStore()
const storeInfoe = ref(null)

onMounted(async () => {
   await get_store_info()
})

const get_store_info = async () => {
   const result = await sellerStore.get_store_info()
   if(result.status == 200) {
      storeInfoe.value = result.result
      console.log(result.result)
   }
}

const open_modal = async (name) => {
   activeModal.value = name
}
</script>