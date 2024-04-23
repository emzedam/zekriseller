<template>
 <!-- ==============  آموزش ====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <nuxt-link to="/profile/contract-status/"  class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></nuxt-link>
         <span class="leading-3"> آموزش</span>
      </h2>

      <p class="p-4 font-semibold text-gray-500 text-md">تماشای ویدیوهای آموزشی اجباری است. اینجا می‌توانید فوت‌وفن‌های فروش در پتومن را یاد بگیرید</p>

      <div class="bg-white rounded-lg m-4  border">
         <div class=" flex items-center justify-between border-b  text-gray-700 p-4">
            <span class="font-semibold">موضوع</span>
            <strong>از اینجا ویدئو یا مطلب را مشاهده کنید</strong>
         </div>
         <ul class="divide-y font-semibold text-gray-700" v-if="videos.length != 0"> 

            <!-- <li class="p-2 flex items-center justify-between hover:bg-cyan-50 transition-all duration-500 cursor-pointer">
               <span>همه چیز در مورد درج کالا</span>
               <div class="gap-4 flex items-center">
                <nuxt-link to="/view" class="border rounded-lg border-cyan-500 px-4 py-1 font-semi-bold hover:bg-cyan-100 transition-all text-cyan-500">
                  مشاهده مجدد
               </nuxt-link>
               <nuxt-link to="/view" class="border rounded-lg border-green-500 px-4 py-1 font-semi-bold bg-green-100 transition-all text-green-500 flex items-center">
                  <i class="fa fa-check-circle pl-1"></i>
                  مشاهده شده
               </nuxt-link>
               </div>

            </li> -->
            <li v-for="(video , index) in videos" :key="index" class="p-2 flex items-center justify-between  hover:bg-cyan-50 transition-all duration-500 cursor-pointer">
               <span>  {{ video.video_title }} </span>
               <div class="gap-4 flex items-center">
                  <a href="javascript:void(0)" @click="doPlayMovie(video.video_file)" class="border rounded-lg border-cyan-500 px-4 py-1 font-semi-bold hover:bg-cyan-100 transition-all text-cyan-500">
                     مشاهده
                  </a>
               </div>
            </li>
         </ul>
      </div>

      <div class="border rounded-lg m-4 hidden">
         <ul class="lg:flex md:flex-1">
            <li
               class="swiper-day overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-cyan-500 hover:after:bottom-0 hover:after:duration-300 lg:border-b-2 border-b-cyan-500 md:border-b sm:border-b sm:border-b relative"
            >
               <div class="py-2 h-full block color-600 cursor-pointer px-4 md:text-right text-center">
                  <span class="text-2xl block lg:text-center text-cyan-500">شنبه</span><span class="text-4xl block lg:text-center font-bold">14</span>
               </div>
               <!---->
            </li>
            <li
               class="swiper-day overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-cyan-500 hover:after:bottom-0 hover:after:duration-300 lg:border-b-0 md:border-b sm:border-b sm:border-b relative"
            >
               <div class="py-2 h-full block color-600 cursor-pointer px-4 md:text-right text-center">
                  <span class="text-2xl block lg:text-center text-cyan-500">یکشنبه</span><span class="text-3xl block lg:text-center font-bold text-gray-500">15</span>
               </div>
               <!---->
            </li>
            <li
               class="swiper-day overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-cyan-500 hover:after:bottom-0 hover:after:duration-300 lg:border-b-0 md:border-b sm:border-b sm:border-b relative"
            >
               <div class="py-2 h-full block color-600 cursor-pointer px-4 md:text-right text-center">
                  <span class="text-2xl block lg:text-center text-cyan-500">سه شنبه</span><span class="text-3xl block lg:text-center font-bold text-gray-500">16</span>
               </div>
               <!---->
            </li>
         </ul>
         <ul>
            <li class="Collapse p-4 border-t lg:block hidden">
               <div class="flex items-center ml-4">
                  <input cid="red-checkbox" type="radio" value="" class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2" />
                  <label for="red-checkbox" class="mr-2 text-xl font-medium text-gray-900"><span class="pl-2">ساعت</span> <span class="pl-2">14</span><span class="pl-2">تا</span><span class="pl-2">16</span></label>
               </div>
            </li>

            <li class="Collapse p-4 border-t lg:block hidden">
               <div class="flex items-center ml-4">
                  <input id="red-checkbox" type="radio" value="" class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2" />
                  <label for="red-checkbox" class="mr-2 text-xl font-medium text-gray-900"><span class="pl-2">ساعت</span> <span class="pl-2">10</span><span class="pl-2">تا</span><span class="pl-2">12</span></label>
               </div>
            </li>
         </ul>
      </div>

      <player
         :playMovie="playMovie"
         @unsetPlayerModal="() => unsetPlayerModal()"
      />
   </div>
</div>

<!-- ==============  آموزش======================= -->
  
</template>

<script setup>
import { useSellersStore } from '~/store/sellersStore';
import player from '@/components/Profile/player.vue'

const  { $player } = useNuxtApp();
const sellersStore = useSellersStore()
const videos = ref([])
const playMovie = ref(false)


onMounted(async () => {
   await get_videos_list()
})

const doPlayMovie = (videoName) => {
   playMovie.value = true;
   $player({ url: `https://api.zekrimarket.com/storage/files_container/sellers/learning_videos/${videoName}` });
}

const unsetPlayerModal = () => {
  playMovie.value = false;
  $player().remove();
};

const get_videos_list = async () => {
   const result = await sellersStore.get_seller_learning_videos()
   if(result.status == 200){
      videos.value = result.result
   }
}
</script>