<template>
  <div class="relative w-full h-full inset-0 z-[100]">
    <!-- bg open -->
    <span
      class="fixed bg-gray-900 backdrop-blur-[2px] bg-opacity-30 w-full h-full inset-x-0 top-0 block lg:hidden"
      @click="close_navmenu_action()"
      :class="NavMenu == true ? 'w-full translate-x-0 transition-opacity' : 'hidden'"
    ></span>
    <nav
      :class="NavMenu == true ? 'translate-x-0 w-64' : 'translate-x-80'"
      class="p-3 fixed transition-all duration-500 ease-in-out h-screen bg-white/90 dark:bg-gray-800/90 border-l z-[1000] right-0 top-0"
    >
      <div class="h-full overflow-y-auto scrollbars">
        <!--logo-->
        <div class="mh-18 text-center py-5">
          <a href="#" class="relative">
            <h2
              class="text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden hidden-compact"
            >
              <img
                class="inline-block w-20 h-auto ltr:mr-2 rtl:ml-2 -mt-1"
                src="@/assets/images/petman.png"
              />
            </h2>
          </a>
        </div>

        <!-- Sidebar menu -->
        <ul class="flex flex-col gap-1">
          <li>
            <nuxt-link to="/" class="active">
              <!-- هنگام اکتیو ایتم -->
              <!-- text-white bg-gradient-to-r  from-green-400/70 to-green-500 via-primary/50 -->
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i class="fa-light fa-gauge text-[18px]"></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  پیشخوان
                </p>
              </button>
            </nuxt-link>
          </li>

          <li>
            <nuxt-link to="/orders" class="active">
              <!-- هنگام اکتیو ایتم -->
              <!-- text-white bg-gradient-to-r  from-green-400/70 to-green-500 via-primary/50 -->
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i class="fa-light fa-bag-shopping text-[18px]"></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  سفارشات
                </p>
              </button>
            </nuxt-link>
          </li>

          <li>
            <button
              @click="openSubMenu(1)"
              class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
              type="button"
            >
              <span class="pr-1">
                <i class="fa-light fa-cart-shopping text-[18px] text-slate-500"></i>
              </span>
              <p
                class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
              >
                محصولات
              </p>
              <i
                :class="submenuIndex == 1 ? 'fa-chevron-down' : 'fa-chevron-left'"
                class="fa-light text-[15px] text-slate-500"
              ></i>
            </button>
            <!-- Dropdown menu -->
            <collapse-transition>
              <div class="z-10 px-1 font-fa" v-if="submenuIndex == 1">
                <ul
                  class="text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarButton"
                >
                  <li>
                    <RouterLink to="/Ecommerce/Products/AddProduct">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          اضافه کردن محصول
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Ecommerce/Products/ListProducts">
                      <span
                        class="flex items-center justify-between w-full gap-4 px-4 py-2 text-xs font-bold text-gray-500 capitalize transition-all rounded-lg middle none font-fa center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r"
                      >
                        <span class="pr-1">
                          <i
                            class="fa-light fa-draw-circle text-[12px] text-gray-500"
                          ></i>
                        </span>
                        <p
                          class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                        >
                          لیست محصولات
                        </p>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </collapse-transition>
          </li>

          <li>
            <nuxt-link to="/withdraw/">
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i
                    class="fa-light fa-money-bill-transfer text-[18px] text-slate-500"
                  ></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  تسویه حساب
                </p>
              </button>
            </nuxt-link>
          </li>

          <li>
            <nuxt-link to="/payment">
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i class="fa-light fa-history text-[18px] text-slate-500"></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  تاریخچه پرداخت
                </p>
              </button>
            </nuxt-link>
          </li>

          <li>
            <RouterLink to="/vitrin">
              <button
                class="middle none font-fa font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 rounded-lg text-gray-500 active:opacity-[0.85] active:bg-green-50/20 focus:bg-gray-100 focus:text-gray-500 w-full flex justify-between items-center gap-4 px-4 capitalize"
                type="button"
              >
                <span class="pr-1">
                  <i class="fa-light fa-gear text-[18px] text-slate-500"></i>
                </span>
                <p
                  class="block w-full text-base antialiased font-medium leading-relaxed text-right capitalize font-fa"
                >
                  ویترین فروشگاه
                </p>
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import CollapseTransition from "@/plugins/CollapseTransition.vue";
const props = defineProps(["NavMenu"]);
const emit = defineEmits(["close_navmenu_action"]);

const submenuIndex = ref(0);

const openSubMenu = (index) => {
  if (submenuIndex.value == index) {
    submenuIndex.value = 0;
  } else {
    submenuIndex.value = index;
  }
};

const close_navmenu_action = () => {
  emit("close_navmenu_action");
};
</script>
