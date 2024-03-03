<template>
  <!-- ==============  آموزش ====================== -->
  <div
    :class="
      activeComponent == 'SellerLearnVideo' ? 'top-0 visible' : 'top-[900px] invisible'
    "
    class="lg:col-span-9 w-full absolute transition-all overflow-y-scroll"
  >
    <div class="lg:rounded-md w-full mb-4 border h-full">
      <h2
        class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b"
      >
        <span
          @click="go_to_back()"
          class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
          ><i class="fa-duotone fa-arrow-right !leading-3"></i
        ></span>
        <span class="leading-3"> آموزش</span>
      </h2>

      <p class="p-4 font-semibold text-gray-500 text-md">
        تماشای ویدیوهای آموزشی اجباری است. اینجا می‌توانید فوت‌وفن‌های فروش در ذکری مارکت
        را یاد بگیرید
      </p>

      <div class="bg-cyan-50 rounded-lg m-4 p-4">
        <div class="p-2 flex items-center justify-between border-b mb-4 text-gray-700">
          <span class="font-semibold">موضوع</span>
          <strong>از اینجا ویدئو یا مطلب را مشاهده کنید</strong>
        </div>
        <ul
          v-if="videoesList.length != 0"
          class="space-y-4 divide-y font-semibold text-gray-700"
        >
          <li
            class="p-2 flex items-center justify-between"
            v-for="(video, index) in videoesList"
            :key="index"
          >
            <span>{{ video.video_title }}</span>
            <nuxt-link
              to="/"
              class="border rounded-lg border-cyan-500 px-4 py-1 font-semi-bold hover:bg-cyan-100 transition-all text-cyan-500"
            >
              مشاهده
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="border rounded-lg m-4 hidden">
        <ul class="lg:flex md:flex-1">
          <li
            class="swiper-day overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-cyan-500 hover:after:bottom-0 hover:after:duration-300 lg:border-b-2 border-b-cyan-500 md:border-b sm:border-b sm:border-b relative"
          >
            <div
              class="py-2 h-full block color-600 cursor-pointer px-4 md:text-right text-center"
            >
              <span class="text-2xl block lg:text-center text-cyan-500">شنبه</span
              ><span class="text-4xl block lg:text-center font-bold">14</span>
            </div>
            <!---->
          </li>
          <li
            class="swiper-day overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-cyan-500 hover:after:bottom-0 hover:after:duration-300 lg:border-b-0 md:border-b sm:border-b sm:border-b relative"
          >
            <div
              class="py-2 h-full block color-600 cursor-pointer px-4 md:text-right text-center"
            >
              <span class="text-2xl block lg:text-center text-cyan-500">یکشنبه</span
              ><span class="text-3xl block lg:text-center font-bold text-gray-500"
                >15</span
              >
            </div>
            <!---->
          </li>
          <li
            class="swiper-day overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-cyan-500 hover:after:bottom-0 hover:after:duration-300 lg:border-b-0 md:border-b sm:border-b sm:border-b relative"
          >
            <div
              class="py-2 h-full block color-600 cursor-pointer px-4 md:text-right text-center"
            >
              <span class="text-2xl block lg:text-center text-cyan-500">سه شنبه</span
              ><span class="text-3xl block lg:text-center font-bold text-gray-500"
                >16</span
              >
            </div>
            <!---->
          </li>
        </ul>
        <ul>
          <li class="Collapse p-4 border-t lg:block hidden">
            <div class="flex items-center ml-4">
              <input
                checked=""
                id="red-checkbox"
                type="radio"
                value=""
                class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <label for="red-checkbox" class="mr-2 text-xl font-medium text-gray-900"
                ><span class="pl-2">ساعت</span> <span class="pl-2">14</span
                ><span class="pl-2">تا</span><span class="pl-2">16</span></label
              >
            </div>
          </li>

          <li class="Collapse p-4 border-t lg:block hidden">
            <div class="flex items-center ml-4">
              <input
                id="red-checkbox"
                type="radio"
                value=""
                class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <label for="red-checkbox" class="mr-2 text-xl font-medium text-gray-900"
                ><span class="pl-2">ساعت</span> <span class="pl-2">10</span
                ><span class="pl-2">تا</span><span class="pl-2">12</span></label
              >
            </div>
          </li>
        </ul>
      </div>

      <div class="relative flex gap-4">
        <button
          type="button"
          @click="skip_this_level()"
          class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
        >
          <span
            class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
          ></span
          ><span
            class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
          ></span
          ><span class="relative z-20 flex iteme-center justify-center w-full text-center"
            ><span class="w-full"> بعدا انتخاب می کنم</span></span
          >
        </button>

        <button
          @click="verify_this_level()"
          class="bg-cyan-500 box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 rounded-md cursor-pointer group ease focus:outline-none"
        >
          <span
            class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
          ></span
          ><span
            class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
          ></span
          ><span class="relative z-20 flex iteme-center justify-center w-full text-center"
            ><span class="w-full">تایید و ادامه</span></span
          >
        </button>
        <!-- وقتی از روی نقشه مکان رو انتخاب کرد هنگامی که روی دکمه تایید کلیک کرد از طرف راست مثل دی جی کالا قسمت فروشندگان فرم ادرس باز میشه میتونه همون لحظه روی نقشه ادرس رو اصلاح کنه -->
      </div>
    </div>
  </div>
  <!-- ==============  آموزش======================= -->
</template>

<script setup>
import { useSellersStore } from "~/store/sellersStore.js";
const props = defineProps(["activeComponent"]);
const emit = defineEmits(["go_to_back", "change_to_next_level"]);
const sellerStore = useSellersStore();
const videoesList = ref([]);

onMounted(async () => {
  await get_videos_list();
});

const go_to_back = () => {
  emit("go_to_back", "1,0");
};

const skip_this_level = () => {
  emit("change_to_next_level", false);
};

const verify_this_level = () => {
  emit("change_to_next_level", true);
};

const get_videos_list = async () => {
  const result = await sellerStore.get_videos_list();
  if (result.status == 200) {
    videoesList.value = result.result;
  }
};
</script>
