<template>
  <div class="relative w-full h-full inset-0 z-[100]" v-if="authSeller != null">
    <!-- bg open -->
    <span
      class="fixed bg-gray-900 backdrop-blur-[2px] bg-opacity-30 w-full h-full inset-x-0 top-0 block lg:hidden"
      @click="close_navmenu_action()"
      :class="NavMenu == true ? 'w-full translate-x-0 transition-opacity' : 'hidden'"
    ></span>
    <nav
      :class="NavMenu == false ? 'right-[-400px]' : 'right-0'"
      class="fixed w-72 transition-all duration-500 ease-in-out h-screen bg-white/90 dark:bg-gray-800/90 border-l z-[1000] top-0"
    >
      <div class="h-full overflow-y-auto scrollbars">
        <!--logo-->
        <div class="mh-18 text-center py-5 flex items-center p-3 border-b mb-3">
          <button
            class="border-2 border-dashed rounded-lg p-4 items-center justify-center text-cyan-500 w-16 h-16"
            type="button"
          >
            <i class="fa fa-plus text-2xl"></i>
          </button>
          <div
            class="py-5 px-2 flex-shrink max-w-full w-full flex justify-start text-right"
          >
            <div class="font-semibold flex flex-col">
              <NuxtLink
                to="/profile"
                class="text-gray-800 dark:text-gray-300 hover:text-cyan-500 flex items-center"
                ><span v-if="authSeller.infoes.firstname == null">{{
                  authSeller.infoes.store_name
                }}</span
                ><span v-else>{{
                  `${authSeller.infoes.firstname} ${authSeller.infoes.lastname}`
                }}</span
                ><i class="fa-solid fa-badge-check text-cyan-500 pr-1"></i></NuxtLink
              ><span class="text-sm font-light text-gray-600">فروشنده</span>
            </div>
          </div>
        </div>

        <!-- ===============منو سمت راست داشبورد کاربر======================== -->
        <ul class="flex-col flex space-y-4">
          <NuxtLink to="/profile" :class="$route.path == '/profile' ? 'text-cyan-500' : ''">
            <li
              class="p-3 hover:bg-gray-50 transition-all duration-300 relative cursor-pointer font-medium items-center justify-between flex"
            >
              <div class="flex items-center">
                <span><i class="fa-light fa-user pl-2 text-xl"></i></span
                ><span>اطلاعات مالک کسب‌وکار</span>
                <div
                  v-if="$route.path == '/profile'"
                  class="before:absolute before:bottom-0 before:bg-cyan-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
                ></div>
              </div>
              <i
                class="fa-solid fa-chevron-left pl-2 text-sm text-left block lg:hidden"
              ></i>
            </li>
          </NuxtLink>

          <NuxtLink to="/profile/store-information/" :class="$route.path == '/profile/store-information/' ? 'text-cyan-500' : ''">
            <li
              class="p-3 hover:bg-gray-50 transition-all duration-300 relative cursor-pointer font-medium items-center justify-between flex text-right"
            >
              <div class="title">
                <span><i class="fa-light fa-store pl-2 text-xl"></i></span
                ><span> اطلاعات فروشگاه</span>
                <div
                  v-if="$route.path == '/profile/store-information/'"
                  class="before:absolute before:bottom-0 before:bg-cyan-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
                ></div>
              </div>

              <i
                class="fa-solid fa-chevron-left pl-2 text-sm text-left block lg:hidden"
              ></i>
            </li>
          </NuxtLink>

          <NuxtLink to="/profile/addresses/" :class="$route.path == '/profile/addresses/' ? 'text-cyan-500' : ''">
            <li
              class="p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer relative font-medium items-center justify-between flex"
            >
              <div class="title flex items-center">
                <span><i class="fa-light fa-map-location-dot pl-2 text-xl"></i></span
                ><span>آدرس ها</span>
                <div
                  v-if="$route.path == '/profile/addresses/'"
                  class="before:absolute before:bottom-0 before:bg-cyan-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
                ></div>
              </div>

              <i
                class="fa-solid fa-chevron-left pl-2 text-sm text-left block lg:hidden"
              ></i>
            </li>
          </NuxtLink>

          <NuxtLink to="/profile/financial/" :class="$route.path == '/profile/financial/' ? 'text-cyan-500' : ''">
            <li
              class="p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-between flex relative overflow-hidden"
            >
              <div class="flex items-center">
                <span><i class="fa-light fa-credit-card pl-2 text-xl"></i></span
                ><span> مالی</span>
                <div
                  v-if="$route.path == '/profile/financial/'"
                  class="before:absolute before:bottom-0 before:bg-cyan-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
                ></div>
              </div>
              <i
                class="fa-solid fa-chevron-left pl-2 text-sm text-left block lg:hidden"
              ></i>
            </li>
          </NuxtLink>

          <NuxtLink to="/profile/documents/" :class="$route.path == '/profile/documents/' ? 'text-cyan-500' : ''">
            <li
              class="p-3 hover:bg-gray-50 transition-all releative duration-300 cursor-pointer font-medium items-center justify-between flex relative overflow-hidden"
            >
              <div class="flex items-center">
                <span><i class="fa-light fa-upload pl-2 text-xl"></i></span
                ><span> مدارک</span>
                <div
                  v-if="$route.path == '/profile/documents/'"
                  class="before:absolute before:bottom-0 before:bg-cyan-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
                ></div>
              </div>
              <i
                class="fa-solid fa-chevron-left pl-2 text-sm text-left block lg:hidden"
              ></i>
            </li>
          </NuxtLink>

          <NuxtLink to="/profile/contract-status/" :class="$route.path == '/profile/contract-status/' ? 'text-cyan-500' : ''">
            <li
              class="p-3 hover:bg-gray-50 transition-all releative duration-300 cursor-pointer font-medium items-center justify-between flex relative overflow-hidden"
            >
              <div class="flex items-center">
                <span><i class="fa-light fa-file pl-2 text-xl"></i></span
                ><span> قرارداد</span>
                <div
                  v-if="$route.path == '/profile/contract-status/'"
                  class="before:absolute before:bottom-0 before:bg-cyan-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
                ></div>
              </div>
              <i
                class="fa-solid fa-chevron-left pl-2 text-sm text-left block lg:hidden"
              ></i>
            </li>
          </NuxtLink>


          <NuxtLink to="/profile/tutorials/" :class="$route.path == '/profile/tutorials/' ? 'text-cyan-500' : ''">
            <li
              class="p-3 hover:bg-gray-50 transition-all releative duration-300 cursor-pointer font-medium items-center justify-between flex relative overflow-hidden"
            >
              <div class="flex items-center">
                <span><i class="fa-light fa-video pl-2 text-xl"></i></span
                ><span> آموزش</span>
                <div
                  v-if="$route.path == '/profile/tutorials/'"
                  class="before:absolute before:bottom-0 before:bg-cyan-500 before:rounded-t-sm before:h-full before:right-0 before:w-1"
                ></div>
              </div>
              <i
                class="fa-solid fa-chevron-left pl-2 text-sm text-left block lg:hidden"
              ></i>
            </li>
          </NuxtLink>
          

          <li
            @click="doLogout()"
            class="p-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium items-center justify-between flex"
          >
            <div class="flex items-center">
              <span><i class="fa-light fa-right-from-bracket pl-2 text-xl"></i></span
              ><span> خروج</span>
            </div>
            <i
              class="fa-solid fa-chevron-left pl-2 text-sm text-left block lg:hidden"
            ></i>
          </li>
        </ul>
        <!-- ===============منو سمت راست داشبورد کاربر======================== -->
      </div>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps(["NavMenu", "authSeller"]);
const emit = defineEmits(["close_navmenu_action"]);

const close_navmenu_action = () => {
  emit("close_navmenu_action");
};

const doLogout = async () => {
  if(confirm("آیا از خروج حساب کاربری خود مطمعن هستید ؟")) {
    
  }
}
</script>
