<template>
  <!-- Navbar -->
  <nav
    :class="NavMenu == true ? 'lg:mr-72 mr-0' : 'lg:mr-0 mr-0'"
    class="z-50 fixed flex flex-row flex-nowrap items-center justify-between mt-0 py-2 start-0 end-0 px-6 backdrop-blur bg-white/80 supports-backdrop-blur:bg-white/40 dark:bg-gray-800/80 border-b transition-all duration-500 ease-in-out ms-0"
    id="desktop-menu"
  >
    <!-- sidenav button-->
    <button
      type="button"
      @click="open_navmenu_action()"
      class="inline-flex items-center justify-center text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-0"
    >
      <span class="sr-only">Mobile menu</span>

      <i class="text-2xl fa-light fa-bars-staggered"></i>
    </button>

    <!-- Search -->
    <form class="hidden sm:inline-block md:hidden lg:inline-block mx-5">
      <div class="flex flex-wrap items-stretch w-full relative">
        <div class="flex -mr-px">
          <button
            class="flex items-center py-2 px-4 ltr:-ml-1 rtl:-mr-1 ltr:rounded-r rtl:rounded-l leading-5 text-gray-500 text-2xl"
            type="button"
          >
            <i class="fa-light fa-search"></i>
          </button>
        </div>

        <input
          type="text"
          class="ltr text-right flex-shrink flex-grow max-w-full leading-5 relative text-sm py-2 px-4 ltr:rounded-l rtl:rounded-r text-gray-800 overflow-x-auto focus:outline-none focus:ring-0 dark:text-gray-400 border-0"
          placeholder=" (Ctrl+/)  جستجو "
          aria-label="Search"
        />
      </div>
    </form>

    <!-- menu -->
    <ul class="flex ltr:ml-auto rtl:mr-auto mt-2">
      <!-- Customizer (Only for demo purpose) -->
      <li class="relative">
        <a href="" class="py-3 px-4 flex text-sm rounded-full focus:outline-none">
          <span class="sr-only">Questions</span>
          <i class="text-2xl fa-light fa-comment-question"></i>
        </a>
      </li>

      <!-- messages -->
      <li class="relative">
        <a
          href="javascript:;"
          class="py-3 px-4 flex text-sm rounded-full focus:outline-none"
          id="messages"
          @click="peyamha = !peyamha"
        >
          <div class="relative inline-block">
            <i class="text-2xl fa-light fa-envelope"></i>
            <span
              class="flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs"
              ><span class="align-self-center">3</span></span
            >
          </div>
        </a>

        <div
          v-if="peyamha"
          @click="peyamha = false"
          class="w-72 origin-top-right absolute ltr:-right-36 md:ltr:right-0 rtl:-left-36 md:rtl:left-0 rounded-b-xl top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white/80 backdrop-blur-sm mt-2 dark:bg-gray-800/70 border dark:border-gray-700"
        >
          <div class="p-3 font-normal border-b border-gray-200 dark:border-gray-700">
            <div class="relative">
              <div class="font-bold">پیام ها</div>
            </div>
          </div>
          <div
            class="max-h-60 overflow-y-auto scrollbars scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-200"
          >
            <a href="#">
              <div
                class="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-80 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-100"
              >
                <div class="flex-shrink max-w-full px-2 w-1/4 text-center">
                  <div class="relative">
                    <img
                      src="@/assets/images/avatar.png"
                      class="h-10 w-10 rounded-full mx-auto"
                      alt="Daniel Esteban"
                    />
                    <span
                      title="online"
                      class="flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-green-500 border border-white w-3 h-3 rounded-full"
                    ></span>
                  </div>
                </div>
                <div class="flex-shrink max-w-full px-2 w-3/4">
                  <div class="text-sm font-bold">تایید ثبت نام وبینار</div>
                  <div class="text-gray-500 text-sm mt-1">
                    ثبت نام شما در پتو من تایید شد
                  </div>
                  <div class="text-gray-500 text-sm mt-1">12 دقیقه پیش</div>
                </div>
              </div>
            </a>
            <a href="#">
              <div
                class="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-40 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50"
              >
                <div class="flex-shrink max-w-full px-2 w-1/4 text-center">
                  <div class="relative">
                    <img
                      src="@/assets/images/avatar.png"
                      class="h-10 w-10 rounded-full mx-auto"
                      alt="Carlos Garcia"
                    />
                    <span
                      title="busy"
                      class="flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-pink-500 border border-white w-3 h-3 rounded-full"
                    ></span>
                  </div>
                </div>
                <div class="flex-shrink max-w-full px-2 w-3/4">
                  <div class="text-sm font-bold">تایید مدارک</div>
                  <div class="text-gray-500 text-sm mt-1">
                    مدارک شما در پتومن تایید شد
                  </div>
                  <div class="text-gray-500 text-sm mt-1">3 دقیقه پیش</div>
                </div>
              </div>
            </a>
          </div>
          <div class="p-3 text-center font-normal">
            <a href="#" class="hover:underline">مشاهده همه پیام ها</a>
          </div>
        </div>
      </li>

      <!-- notification -->
      <li class="relative">
        <a
          href="javascript:;"
          class="py-3 px-4 flex text-sm rounded-full focus:outline-none"
          id="notify"
          @click="Notification = !Notification"
        >
          <div class="relative inline-block">
            <i class="text-2xl fa-light fa-bell"></i>
            <span
              class="flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs"
              ><span class="align-self-center">1</span></span
            >
          </div>
        </a>

        <div
          v-if="Notification"
          @click="Notification = false"
          class="w-72 origin-top-right absolute ltr:right-0 rtl:left-0 rounded-b-xl top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white/80 backdrop-blur-sm dark:bg-gray-800 border dark:border-gray-700 mt-2"
        >
          <div class="p-3 font-normal border-b border-gray-200 dark:border-gray-700">
            <div class="relative">
              <div class="font-bold">اعلان ها</div>
              <div class="absolute top-0 ltr:right-0 rtl:left-0">
                <a
                  href="#"
                  class="inline-block ltr:mr-2 rtl:ml-2 text-red-500"
                  title="پاکسازی همه"
                >
                  <i class="fa-light fa-trash-alt inline-block"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="max-h-60 overflow-y-auto scrollbars">
            <a class="relative" href="#">
              <div
                class="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-40 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50"
              >
                <div class="flex-shrink max-w-full px-2 w-1/4 text-center">
                  <div
                    class="flex justify-center mx-auto w-8 h-8 rounded-full bg-cyan-500 text-white"
                  >
                    <i class="self-center fa-light fa-calendar"></i>
                  </div>
                </div>
                <div class="flex-shrink max-w-full px-2 w-3/4">
                  <div class="text-sm font-bold">اطلاعیه بلک فرایدی</div>
                  <div class="text-gray-500 text-sm mt-1">
                    جلسه آموزشی بک فرایدی سه شنبه از ساعت 10 الی 12
                  </div>
                  <div class="text-gray-500 text-sm mt-1">1 ساعت پیش</div>
                </div>
              </div>
            </a>
          </div>
          <div class="p-3 text-center font-normal">
            <a href="#" class="hover:underline">مشاهده همه اعلان ها</a>
          </div>
        </div>
      </li>

      <!-- profile -->
      <li class="relative">
        <a
          href="javascript:;"
          class="px-3 flex text-sm rounded-full focus:outline-none"
          id="user-menu-button"
          @click="profile = !profile"
        >
          <div class="relative">
            <img
              class="h-10 w-10 rounded-full border border-gray-700 bg-gray-700"
              src="@/assets/images/avatar.png"
              alt="avatar"
            />
            <span
              title="online"
              class="flex justify-center absolute -bottom-0.5 ltr:right-1 rtl:left-1 text-center bg-green-500 border border-white w-3 h-3 rounded-full"
            ></span>
          </div>
        </a>
        <transition-group name="modal">
          <ul
            v-if="profile"
            @click="profile = false"
            class="origin-top-right absolute ltr:right-0 rtl:left-0 rounded-b-xl top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white/90 backdrop-blur-sm dark:bg-gray-800 border dark:border-gray-700 w-80 mt-2 font-semibold"
          >
            <li class="relative">
              <div class="py-5 px-6 flex-shrink max-w-full w-full flex justify-between">
                <div class="font-semibold flex flex-col" v-if="authSeller != null">
                  <a
                    v-if="authSeller.infoes.firstname == null"
                    href="javascript:void(0)"
                    class="text-gray-800 dark:text-gray-300 hover:text-cyan-500"
                    >{{ authSeller.infoes.store_name }}</a
                  >
                  <a
                    v-else
                    href="javascript:void(0)"
                    class="text-gray-800 dark:text-gray-300 hover:text-cyan-500"
                    >{{
                      `${authSeller.infoes.firstname} ${authSeller.infoes.lastname}`
                    }}</a
                  >

                  <span class="text-sm font-light text-gray-600">فروشنده</span>
                </div>
                <nuxt-link
                  to="/profile"
                  class="text-gray text-sm mt-1 text-cyan-500 font-semibold"
                  >مشاهده پروفایل</nuxt-link
                >
              </div>
            </li>
            <li class="relative">
              <hr class="border-t border-gray-100 dark:border-gray-700 my-0" />
            </li>
            <li class="relative">
              <a
                class="flex items-center w-full py-4 px-6 clear-both whitespace-nowrap hover:text-cyan-500"
                href="#"
              >
                <i
                  class="inline ltr:mr-2 rtl:ml-2 w-4 h-4 bi bi-gear fa-light fa-wallet"
                ></i>
                <span>کیف پول</span>
              </a>
            </li>
            <li class="relative">
              <hr class="border-t border-gray-100 dark:border-gray-700 my-0" />
            </li>
            <li class="relative">
              <a
                class="flex items-center w-full py-4 px-6 clear-both whitespace-nowrap hover:text-cyan-500"
                href="#"
              >
                <i
                  class="inline ltr:mr-2 rtl:ml-2 w-4 h-4 bi bi-question-circle fa-light fa-question-circle"
                ></i>
                <span>راهنمایی و پشتیبانی</span>
              </a>
            </li>
            <li class="relative">
              <hr class="border-t border-gray-100 dark:border-gray-700 my-0" />
            </li>
            <li class="relative">
              <a
                class="flex items-center w-full py-4 px-6 clear-both whitespace-nowrap hover:text-cyan-500"
                href="#"
              >
                <i class="inline ltr:mr-2 rtl:ml-2 fa-light fa-user"></i>
                پروفایل
              </a>
            </li>
            <li class="relative">
              <hr class="border-t border-gray-100 dark:border-gray-700 my-0" />
            </li>
            <li class="relative">
              <a
                class="flex items-center w-full py-4 px-6 clear-both whitespace-nowrap text-red-500"
                href="#"
              >
                <i
                  class="inline ltr:mr-2 rtl:ml-2 w-4 h-4 bi bi-box-arrow-in-right fa-light fa-sign-out-alt"
                ></i>
                <span>خروج از حساب</span>
              </a>
            </li>
          </ul>
        </transition-group>
      </li>
    </ul>
  </nav>
  <!-- End Navbar -->
</template>

<script setup>
const props = defineProps(["NavMenu", "authSeller"]);
const profile = ref(false);
const Notification = ref(false);
const submenuIndex = ref(false);
const peyamha = ref(false);

const emit = defineEmits(["open_navmenu_action"]);
const open_navmenu_action = () => {
  emit("open_navmenu_action");
};
</script>
