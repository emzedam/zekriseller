<template>
  <div class="col-span-12 lg:col-span-4">
    <div
      class="relative mt-6 border border-gray-200 rounded-lg card h-[72vh] overflow-hidden"
    >
      <div class="block p-4">
        <div class="flex status">
          <div class="flex w-full gap-4 rounded-md">
            <div class="relative w-full focus-within:z-10">
              <button
                type="button"
                class="inline-flex items-center justify-between w-full px-4 py-4 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none focus:ring-cyan-500"
              >
                <i
                  class="fa-duotone fa-list-check text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                ></i
                ><span class="w-full pr-2 text-right">انتخاب مشتری</span
                ><i
                  class="fa-duotone fa-angle-down text-[15px] ml-1 w-3 h-3 leading-[15px]"
                ></i>
              </button>
              <div
                class="absolute z-10 hidden w-full mt-2 bg-white border rounded-lg"
              >
                <div class="w-full p-3">
                  <div class="flex mt-1 rounded-md">
                    <div class="relative flex justify-end w-full">
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <i
                          class="fa-duotone fa-search text-[22px] m w-5 h-5 text-gray-500 leading-[15px]"
                        ></i>
                      </div>
                      <input
                        type="search"
                        class="block w-full p-2 pl-10 text-sm font-normal text-gray-900 border border-gray-200 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="جستجو..."
                      />
                    </div>
                  </div>
                </div>
                <ul class="h-40 p-3 overflow-y-auto text-sm text-gray-700">
                  <li>
                    <div
                      class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                    >
                      <input
                        id="checkbox-item-11"
                        type="hidden"
                        value=""
                        class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                      /><label
                        for="checkbox-item-11"
                        class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                        ><span class="flex items-center w-full pr-2 text-right"
                          >محبوب حسین زاده</span
                        ><i
                          class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                        ></i
                      ></label>
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex items-center w-full my-1 bg-cyan-500 border rounded hover:bg-gray-100"
                    >
                      <input
                        id="checkbox-item-11"
                        type="hidden"
                        value=""
                        class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                      /><label
                        for="checkbox-item-11"
                        class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-800 transition-colors rounded hover:text-gray-600"
                        ><span class="flex items-center w-full pr-2 text-right"
                          >حسن محمد زاده</span
                        ><i
                          class="flex items-center pl-2 text-left fa-solid fa-check"
                        ></i
                      ></label>
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                    >
                      <input
                        id="checkbox-item-11"
                        type="hidden"
                        value=""
                        class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                      /><label
                        for="checkbox-item-11"
                        class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                        ><span class="flex items-center w-full pr-2 text-right">
                          فرزانه فرهادیفر</span
                        ><i
                          class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                        ></i
                      ></label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button
            @click="openModal2()"
            type="button"
            class="flex items-center justify-center px-4 py-2 mr-2 bg-gray-100 rounded-md"
          >
            <i class="text-xl text-cyan-500 fa-duotone fa-truck"></i>
          </button>
        </div>

        <div
          class="w-full h-48 overflow-y-auto"
        >
          <ul
            role="list"
            class="relative  space-y-3 text-sm font-medium w-full p-2"
          >
            <li
              class="relative flex items-center py-2 space-x-4 border rounded-lg"
            >
              <div class="w-10 col-auto pt-1">
                <div class="grid flex-col items-center grid-cols-1">
                  <button
                    class="col-auto text-cyan-500 btn btn-icon btn-sm"
                    type="button"
                    data-type="plus"
                    data-field="qty-0"
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                  <input
                    type="text"
                    name="qty-0"
                    v-focus
                    class="text-center border-0 border-transparent col flex-grow-1 fs-16 input-number focus:border-transparent focus:ring-0"
                    placeholder="1"
                    value="1"
                    min="1"
                    max="10000"
                  />
                  <button
                    class="col-auto text-cyan-500 btn btn-icon btn-sm"
                    type="button"
                    data-type="minus"
                    data-field="qty-0"
                  >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
              </div>
              <img
                src="https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg"
                alt="Front of zip tote bag with white canvas, white handles, and black drawstring top."
                class="flex-none object-cover object-center mx-3 border rounded-md w-14 h-14"
              />
              <div class="space-y-1">
                <h3 class="text-xs text-gray-800">گوشی سامسونگ اس 21 اولترا</h3>
                <p class="text-xs text-gray-500">مشکی</p>
                <p class="text-xs font-medium text-gray-500 font-en">128 GB</p>
              </div>
              <p
                class="flex-auto text-base font-medium text-left text-gray-800"
              >
                2500 تومان
              </p>
              <p
                class="absolute bottom-0 left-0 px-3 pt-2 text-base font-medium text-red-500 bg-gray-100 rounded-t-lg cursor-pointer"
              >
                <i class="fa-thin fa-trash-can"></i>
              </p>
            </li>
            <li
              class="relative flex items-center py-2 space-x-4 border rounded-lg"
            >
              <div class="w-10 col-auto pt-1">
                <div class="grid flex-col items-center grid-cols-1">
                  <button
                    class="col-auto text-cyan-500 btn btn-icon btn-sm"
                    type="button"
                    data-type="plus"
                    data-field="qty-0"
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                  <input
                    type="text"
                    name="qty-0"
                    v-focus
                    class="text-center border-0 border-transparent col flex-grow-1 fs-16 input-number focus:border-transparent focus:ring-0"
                    placeholder="1"
                    value="1"
                    min="1"
                    max="10000"
                  />
                  <button
                    class="col-auto text-cyan-500 btn btn-icon btn-sm"
                    type="button"
                    data-type="minus"
                    data-field="qty-0"
                  >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
              </div>
              <img
                src="https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg"
                alt="Front of zip tote bag with white canvas, white handles, and black drawstring top."
                class="flex-none object-cover object-center mx-3 border rounded-md w-14 h-14"
              />
              <div class="space-y-1">
                <h3 class="text-xs text-gray-800">گوشی سامسونگ اس 21 اولترا</h3>
                <p class="text-xs text-gray-500">مشکی</p>
                <p class="text-xs font-medium text-gray-500 font-en">128 GB</p>
              </div>
              <p
                class="flex-auto text-base font-medium text-left text-gray-800"
              >
                2500 تومان
              </p>
              <p
                class="absolute bottom-0 left-0 px-3 pt-2 text-base font-medium text-red-500 bg-gray-100 rounded-t-lg cursor-pointer"
              >
                <i class="fa-thin fa-trash-can"></i>
              </p>
            </li>
          </ul>
        </div>

        <div class="total">
          <dl
            class="pt-4 space-y-2 text-sm font-medium text-gray-500 border-t border-gray-200"
          >
            <div class="flex justify-between">
              <dt>جمع جزء</dt>
              <dd class="text-gray-900">70000 تومان</dd>
            </div>

            <div class="flex justify-between">
              <dt>حمل و نقل</dt>
              <dd class="text-gray-900">75000 تومان</dd>
            </div>

            <div class="flex justify-between">
              <dt>ارزش افزوده</dt>
              <dd class="text-gray-900">9000 تومان</dd>
            </div>
            <div class="flex justify-between">
              <dt>تخفیف</dt>
              <dd class="text-gray-900">900 تومان</dd>
            </div>
            <div
              class="flex items-center justify-between pt-2 font-bold text-gray-900 border-t border-gray-200"
            >
              <dt class="text-base">جمع کل</dt>
              <dd class="text-base">369000 تومان</dd>
            </div>
          </dl>
        </div>

        <div
          class="absolute left-0 right-0 grid w-full grid-cols-3 gap-2 px-2 mt-3 bg-white bottom-3"
        >
          <button
            @click="openModalPay()"
            class="box-border relative z-0 inline-flex items-center justify-center px-2 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
            >
              <i class="pl-2 text-xl text-white fa-duotone fa-cart-plus"></i>
              <span class="w-full">ثبت سفارش</span>
            </span>
          </button>

          <button
            v-on:click.prevent="Discount = !Discount"
            class="box-border relative z-0 inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-gray-900 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
            >
              <i class="pl-2 text-xl text-gray-900 fa fa-angle-up"></i>
              <span class="w-full">تخفیف</span>
            </span>
          </button>

          <button
            v-on:click.prevent="Shipping = !Shipping"
            class="box-border relative z-0 inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-gray-900 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
            >
              <i class="pl-2 text-xl text-gray-900 fa fa-angle-up"></i>
              <span class="w-full">حمل و نقل</span>
            </span>
          </button>
        </div>

        <div
          @click="Shipping = false"
          v-if="Shipping"
          class="absolute inset-0 transition-opacity duration-300 bg-white/20 backdrop-blur-[2px]"
        >
          <i class="pt-4 pr-4 text-gray-900 cursor-pointer fa fa-times"></i>
        </div>
        <Transition name="scale">
          <div
            v-if="Shipping"
            @blur="Shipping = false"
            class="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full p-6 bg-white border-t rounded-b-lg"
          >
            <div class="flex w-full mt-1 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-truck text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  @blur="Shipping = false"
                  type="text"
                  v-focus
                  class="block w-full pr-10 text-right border-gray-300 rounded-md focus:border-gray-200 focus:ring-transparent sm:text-sm"
                  placeholder="حمل و نقل"
                  value="0"
                />
                <div
                  class="absolute inset-y-0 left-0 flex items-center px-3 text-gray-900 bg-gray-100 pointer-events-none rounded-l-md"
                >
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <Transition name="scale">
          <div
            v-if="Discount"
            class="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full p-6 bg-white border-t rounded-b-lg z-10"
          >
            <div class="flex w-full mt-1 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-badge-percent text-emerald-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  @blur="Discount = false"
                  type="text"
                  v-focus
                  class="block w-full pr-10 text-right border-gray-300 rounded-md focus:border-gray-200 focus:ring-transparent sm:text-sm "
                  placeholder="مالیات"
                  value="0"
                />
                <div
                  class="absolute inset-y-0 left-0 flex items-center px-3 text-gray-900 border-r pointer-events-none rounded-l-md"
                >
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <div
          @click="Discount = false"
          v-if="Discount"
          class="absolute inset-0 transition-opacity duration-300 bg-white/20 backdrop-blur-[2px]"
        >
          <i class="pt-4 pr-4 text-gray-900 cursor-pointer fa fa-times"></i>
        </div>
      </div>
    </div>
  </div>

  <div
    :class="Modal3 == true ? 'show hidden' : 'fade hidden'"
    class="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
  >
    <div
      :class="Modal3 == true ? 'active' : ''"
      @click="closeModalAddress()"
      class="absolute inset-0 transition-opacity duration-300 backdrop-blur-sm bg-slate-400/50"
    ></div>
    <div
      class="relative flex flex-col w-full max-w-lg overflow-hidden transition-all duration-300 origin-top bg-white rounded-lg"
    >
      <div
        class="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-t-lg dark:bg-navy-800 sm:px-5"
      >
        <h3 class="flex items-center text-base font-medium text-slate-700">
          <i class="pl-2 text-xl text-cyan-500 fa-duotone fa-truck"></i>
          آدرس حمل و نقل
        </h3>
        <button
          @click="openModalAddress()"
          class="btn -mr-1.5 h-6 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <i class="w-4 h-4 text-2xl fa fa-times"></i>
        </button>
      </div>
      <div class="flex flex-col overflow-y-auto">
        <div class="grid grid-cols-4 gap-2 px-4 py-4">
          <div
            class="relative h-full col-span-4 overflow-y-scroll sm:col-span-4 scrollbar scrollbar-thumb-white scrollbar-track-slate-50"
          >
            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-map text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <textarea
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="آدرس"
                ></textarea>
              </div>
            </div>

            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-building text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="شرکت"
                />
              </div>
            </div>

            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-hashtag text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="کد پستی "
                />
              </div>
            </div>

            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-city text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="شهر"
                />
              </div>
            </div>

            <div class="status">
              <div class="flex mt-3 rounded-md">
                <div class="relative w-full focus-within:z-10">
                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                  >
                    <i
                      class="fa-duotone fa-list-check text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span class="w-full pr-2 text-right">انتخاب کشور</span>
                    <i
                      class="fa-duotone fa-angle-down text-[15px] ml-1 w-3 h-3 leading-[15px]"
                    ></i>
                  </button>
                  <div
                    class="z-10 hidden w-full mt-2 bg-white border rounded-lg"
                  >
                    <ul class="h-40 p-3 overflow-y-auto text-sm text-gray-700">
                      <li>
                        <div
                          class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                        >
                          <input
                            id="checkbox-item-11"
                            type="hidden"
                            value=""
                            class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                          />
                          <label
                            for="checkbox-item-11"
                            class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          >
                            <span
                              class="flex items-center w-full pr-2 text-right"
                              >ایران</span
                            >
                            <i
                              class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                            ></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex items-center w-full my-1 bg-cyan-500 border rounded hover:bg-gray-100"
                        >
                          <input
                            id="checkbox-item-11"
                            type="hidden"
                            value=""
                            class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                          />
                          <label
                            for="checkbox-item-11"
                            class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-white transition-colors rounded hover:text-gray-600"
                          >
                            <span
                              class="flex items-center w-full pr-2 text-right"
                              >کویت</span
                            >
                            <i
                              class="flex items-center pl-2 text-left fa-solid fa-check"
                            ></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                        >
                          <input
                            id="checkbox-item-11"
                            type="hidden"
                            value=""
                            class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                          />
                          <label
                            for="checkbox-item-11"
                            class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          >
                            <span
                              class="flex items-center w-full pr-2 text-right"
                            >
                              انگلیس</span
                            >
                            <i
                              class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                            ></i>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3 Client">
              <div class="flex mt-1 rounded-md">
                <div class="relative w-full focus-within:z-10">
                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                  >
                    <i
                      class="fa-duotone fa-list-check text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span class="w-full pr-2 text-right">انتخاب استان</span>
                    <i
                      class="fa-duotone fa-angle-down text-[15px] ml-1 w-3 h-3 leading-[15px]"
                    ></i>
                  </button>
                  <div
                    class="z-10 hidden w-full mt-2 bg-white border rounded-lg"
                  >
                    <div class="relative px-2 mt-4 search">
                      <div class="flex mt-1 rounded-md">
                        <div
                          class="relative flex items-stretch flex-grow focus-within:z-10"
                        >
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <i
                              class="fa-duotone fa-search text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                            placeholder="انتخاب استان"
                          />
                        </div>
                      </div>
                    </div>
                    <ul class="h-40 px-2 overflow-y-auto text-sm text-gray-700">
                      <li>
                        <div class="flex items-center w-full my-1">
                          <input
                            id="checkbox-item-11"
                            type="hidden"
                            value=""
                            class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                          />
                          <label
                            for="checkbox-item-11"
                            class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          >
                            <span
                              class="flex items-center w-full pr-2 text-right"
                            >
                              ارومیه</span
                            >
                            <i
                              class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                            ></i>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-mobile text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="شماره موبایل"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="grid w-full grid-cols-3 gap-2 p-4 px-4 mt-6 bg-white border-t"
        >
          <button
            href="#_"
            class="box-border relative z-0 inline-flex items-center justify-center px-2 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
              ><i class="pl-2 text-xl text-white fa-duotone fa-cart-plus"></i
              ><span class="w-full">ذخیره آدرس</span></span
            ></button
          ><button
            @click="closeModalAddress()"
            class="box-border relative z-0 inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-gray-900 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
              ><i class="pl-2 text-xl text-gray-900 fa fa-times"></i
              ><span class="w-full">بستن</span></span
            >
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    :class="Modal2 == true ? 'show hidden' : 'fade hidden'"
    class="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
  >
 <div
      :class="Modal2 == true ? 'active' : ''"
      @click="closeModal2()"
      class="absolute inset-0 transition-opacity duration-300 backdrop-blur-sm bg-slate-400/50"
    ></div>
    
    <div
      class="relative flex flex-col w-full max-w-lg overflow-hidden transition-all duration-300 origin-top bg-white rounded-lg"
    >
      <div
        class="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-t-lg dark:bg-navy-800 sm:px-5"
      >
        <h3 class="flex items-center text-base font-medium text-slate-700">
          <i class="pl-2 text-xl text-cyan-500 fa-duotone fa-truck"></i>
          آدرس حمل و نقل
        </h3>
        <button
          @click="openModal2()"
          class="btn -mr-1.5 h-6 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <i class="w-4 h-4 text-2xl fa fa-times"></i>
        </button>
      </div>
      <div class="flex flex-col overflow-y-auto">
        <div class="hidden text-gray-600 no-addres">
          <ul>
            <li class="px-3 py-2">
              <span class="pl-1 font-medium">آدرس :</span
              ><span class="block pt-4 text-sm"
                >آدرسی برای حمل و نقل تنظیم نشده</span
              >
            </li>
          </ul>
        </div>

        <div class="grid grid-cols-1 px-4 py-4">
          <label
            class="relative block px-6 py-4 bg-white border rounded-lg cursor-pointer focus:outline-none sm:flex sm:justify-between"
          >
            <input
              type="radio"
              name="server-size"
              value="Hobby"
              class="sr-only"
              aria-labelledby="server-size-0-label"
              aria-describedby="server-size-0-description-0 server-size-0-description-1"
              checked
            />
            <span class="flex items-center">
              <span class="flex flex-col text-sm">
                <ul class="space-y-1">
                  <li>
                    <span class="font-medium"> آدرس :</span
                    ><span> خیابان امام کوچه ولیعصر</span>
                  </li>
                  <li>
                    <span class="font-medium">کد پستی :</span
                    ><span>5875896245</span>
                  </li>
                  <li>
                    <span class="font-medium"> شهر :</span><span>خوی</span>
                  </li>
                  <li>
                    <span class="font-medium"> استان :</span
                    ><span>آذربایجان غربی</span>
                  </li>
                  <li>
                    <span class="font-medium"> کشور :</span><span>ایران</span>
                  </li>
                  <li>
                    <span class="font-medium"> شماره موبایل :</span
                    ><span>09030264300</span>
                  </li>
                </ul>
              </span>
            </span>
            <span
              class="flex mt-2 text-sm sm:mt-0 sm:mr-4 sm:flex-col sm:text-right"
            >
              <span class="font-medium text-cyan-500"
                ><i class="fa fa-map"></i
              ></span>
            </span>

            <span
              class="absolute border border-cyan-500 rounded-lg pointer-events-none -inset-px"
              aria-hidden="true"
            ></span>
          </label>

          <label
            class="relative block px-6 py-4 mt-4 bg-white border rounded-lg cursor-pointer focus:outline-none sm:flex sm:justify-between"
          >
            <input
              type="radio"
              name="server-size"
              value="Hobby"
              class="sr-only"
              aria-labelledby="server-size-0-label"
              aria-describedby="server-size-0-description-0 server-size-0-description-1"
              checked
            />
            <span class="flex items-center">
              <span class="flex flex-col text-sm">
                <ul class="space-y-1">
                  <li>
                    <span class="font-medium"> آدرس :</span
                    ><span> خیابان امام کوچه ولیعصر</span>
                  </li>
                  <li>
                    <span class="font-medium">کد پستی :</span
                    ><span>5875896245</span>
                  </li>
                  <li>
                    <span class="font-medium"> شهر :</span><span>خوی</span>
                  </li>
                  <li>
                    <span class="font-medium"> استان :</span
                    ><span>آذربایجان غربی</span>
                  </li>
                  <li>
                    <span class="font-medium"> کشور :</span><span>ایران</span>
                  </li>
                  <li>
                    <span class="font-medium"> شماره موبایل :</span
                    ><span>09030264300</span>
                  </li>
                </ul>
              </span>
            </span>
            <span
              class="flex mt-2 text-sm sm:mt-0 sm:mr-4 sm:flex-col sm:text-right"
            >
              <span class="font-medium text-cyan-500"
                ><i class="fa fa-map"></i
              ></span>
            </span>

            <span
              class="absolute pointer-events-none borderrounded-lg -inset-px"
              aria-hidden="true"
            ></span>
          </label>

          <button
            @click="openModalAddress()"
            type="button"
            class="flex items-center justify-center w-full h-16 p-6 mt-4 text-gray-600 border rounded-lg"
          >
            افزودن آدرس جدید
          </button>
        </div>

        <div
          class="grid w-full grid-cols-3 gap-2 p-4 px-4 mt-6 bg-white border-t"
        >
          <button
            href="#_"
            class="box-border relative z-0 inline-flex items-center justify-center px-2 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
              ><i class="pl-2 text-xl text-white fa-duotone fa-cart-plus"></i
              ><span class="w-full">تایید آدرس</span></span
            ></button
          ><button
            @click="closeModal2()"
            class="box-border relative z-0 inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-gray-900 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
              ><i class="pl-2 text-xl text-gray-900 fa fa-times"></i
              ><span class="w-full">بستن</span></span
            >
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    :class="Modal1 == true ? 'show hidden' : 'fade hidden'"
    class="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
  >
    <div
      :class="Modal1 == true ? 'active' : ''"
      @click="closeModal1()"
      class="absolute inset-0 transition-opacity duration-300 backdrop-blur-sm bg-slate-400/50"
    ></div>
    <div
      class="relative flex flex-col w-full max-w-lg overflow-hidden transition-all duration-300 origin-top bg-white rounded-lg"
    >
      <div
        class="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-t-lg dark:bg-navy-800 sm:px-5"
      >
        <h3 class="flex items-center text-base font-medium text-slate-700">
          <i class="pl-2 text-xl text-cyan-500 fa-duotone fa-truck"></i>
          آدرس حمل و نقل
        </h3>
        <button
          @click="openModal1()"
          class="btn -mr-1.5 h-6 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <i class="w-4 h-4 text-2xl fa fa-times"></i>
        </button>
      </div>
      <div class="flex flex-col overflow-y-auto">
        <div class="hidden text-gray-600 no-addres">
          <ul>
            <li class="px-3 py-2">
              <span class="pl-1 font-medium">آدرس :</span
              ><span class="block pt-4 text-sm"
                >آدرسی برای حمل و نقل تنظیم نشده</span
              >
            </li>
          </ul>
        </div>

        <div class="grid grid-cols-4 gap-2 px-4 py-4">
          <div
            class="relative h-full col-span-4 overflow-y-scroll sm:col-span-4 scrollbar scrollbar-thumb-white scrollbar-track-slate-50"
          >
            <div class="flex mt-1 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-user text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="نام و نام خانوادگی"
                />
              </div>
            </div>

            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-building text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="شرکت"
                />
              </div>
            </div>

            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-map text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="آدرس"
                />
              </div>
            </div>

            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-hashtag text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="کد پستی "
                />
              </div>
            </div>

            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-city text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="شهر"
                />
              </div>
            </div>

            <div class="status">
              <div class="flex mt-3 rounded-md">
                <div class="relative w-full focus-within:z-10">
                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                  >
                    <i
                      class="fa-duotone fa-list-check text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span class="w-full pr-2 text-right">انتخاب کشور</span>
                    <i
                      class="fa-duotone fa-angle-down text-[15px] ml-1 w-3 h-3 leading-[15px]"
                    ></i>
                  </button>
                  <div
                    class="z-10 hidden w-full mt-2 bg-white border rounded-lg"
                  >
                    <ul class="h-40 p-3 overflow-y-auto text-sm text-gray-700">
                      <li>
                        <div
                          class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                        >
                          <input
                            id="checkbox-item-11"
                            type="hidden"
                            value=""
                            class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                          />
                          <label
                            for="checkbox-item-11"
                            class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          >
                            <span
                              class="flex items-center w-full pr-2 text-right"
                              >ایران</span
                            >
                            <i
                              class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                            ></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex items-center w-full my-1 bg-cyan-500 border rounded hover:bg-gray-100"
                        >
                          <input
                            id="checkbox-item-11"
                            type="hidden"
                            value=""
                            class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                          />
                          <label
                            for="checkbox-item-11"
                            class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-white transition-colors rounded hover:text-gray-600"
                          >
                            <span
                              class="flex items-center w-full pr-2 text-right"
                              >کویت</span
                            >
                            <i
                              class="flex items-center pl-2 text-left fa-solid fa-check"
                            ></i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                        >
                          <input
                            id="checkbox-item-11"
                            type="hidden"
                            value=""
                            class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                          />
                          <label
                            for="checkbox-item-11"
                            class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          >
                            <span
                              class="flex items-center w-full pr-2 text-right"
                            >
                              انگلیس</span
                            >
                            <i
                              class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                            ></i>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3 Client">
              <div class="flex mt-1 rounded-md">
                <div class="relative w-full focus-within:z-10">
                  <button
                    type="button"
                    class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                  >
                    <i
                      class="fa-duotone fa-list-check text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                    ></i>
                    <span class="w-full pr-2 text-right">انتخاب استان</span>
                    <i
                      class="fa-duotone fa-angle-down text-[15px] ml-1 w-3 h-3 leading-[15px]"
                    ></i>
                  </button>
                  <div
                    class="z-10 hidden w-full mt-2 bg-white border rounded-lg"
                  >
                    <div class="relative px-2 mt-4 search">
                      <div class="flex mt-1 rounded-md">
                        <div
                          class="relative flex items-stretch flex-grow focus-within:z-10"
                        >
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <i
                              class="fa-duotone fa-search text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                            placeholder="انتخاب استان"
                          />
                        </div>
                      </div>
                    </div>
                    <ul class="h-40 px-2 overflow-y-auto text-sm text-gray-700">
                      <li>
                        <div class="flex items-center w-full my-1">
                          <input
                            id="checkbox-item-11"
                            type="hidden"
                            value=""
                            class="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded-lg"
                          />
                          <label
                            for="checkbox-item-11"
                            class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          >
                            <span
                              class="flex items-center w-full pr-2 text-right"
                            >
                              ارومیه</span
                            >
                            <i
                              class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                            ></i>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-mobile text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="شماره موبایل"
                />
              </div>
            </div>

            <div class="flex mt-3 rounded-md">
              <div
                class="relative flex items-stretch flex-grow focus-within:z-10"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-envelope text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                  placeholder="ایمیل"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="grid w-full grid-cols-3 gap-2 p-4 px-4 mt-6 bg-white border-t"
        >
          <button
            href="#_"
            class="box-border relative z-0 inline-flex items-center justify-center px-2 py-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
              ><i class="pl-2 text-xl text-white fa-duotone fa-cart-plus"></i
              ><span class="w-full">تایید آدرس</span></span
            ></button
          ><button
            @click="closeModal1()"
            class="box-border relative z-0 inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-gray-900 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center text-[13px]"
              ><i class="pl-2 text-xl text-gray-900 fa fa-times"></i
              ><span class="w-full">بستن</span></span
            >
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    :class="Modal4 == true ? 'show hidden' : 'fade hidden'"
    class="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5 h-screen"
  >
    <div
      :class="Modal4 == true ? 'active' : ''"
      @click="closeModalPay()"
      class="absolute inset-0 transition-opacity duration-300 backdrop-blur-sm bg-slate-400/50"
    ></div>
    <div
      class="relative flex flex-col w-full max-w-5xl overflow-hidden transition-all duration-300 origin-top bg-white rounded-lg"
    >
      <div
        class="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-t-lg dark:bg-navy-800 sm:px-5"
      >
        <h3 class="flex items-center text-base font-medium text-slate-700">
          <i class="pl-2 text-xl text-cyan-500 fa-duotone fa-truck"></i>
          خلاصه سفارش
        </h3>
        <button
          @click="closeModalPay()"
          class="btn -mr-1.5 h-6 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <i class="w-4 h-4 text-2xl fa fa-times"></i>
        </button>
      </div>
      <div class="overflow-y-scroll form scrollbar scrollbar-thumb-custom scrollbar-track-custom-light">
        <form
          class="px-6 mt-4 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
        >
          <section aria-labelledby="cart-heading" class="lg:col-span-6">
                     <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
              اطلاعات سفارش
            </h2>
            <ul role="list" class="relative pb-6 mt-4 space-y-3 text-sm font-medium">
              <li
                class="relative flex items-center py-2 space-x-4 border rounded-lg"
              >
                <img
                  src="https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg"
                  alt="Front of zip tote bag with white canvas, white handles, and black drawstring top."
                  class="flex-none object-cover object-center w-20 h-20 mx-3 border rounded-md"
                />
                <div class="space-y-1">
                  <h3 class="text-xs text-gray-800">
                    گوشی سامسونگ اس 21 اولترا
                  </h3>
                  <p class="text-xs text-gray-500">مشکی</p>
                  <p
                    class="w-auto py-1 text-xs font-medium text-gray-500 rounded-lg font-en"
                  >
                    128 GB
                  </p>
                  <p class="text-xs font-medium text-gray-800">تعداد : 23</p>
                </div>
                <p
                  class="flex-auto text-base font-medium text-left text-gray-800"
                >
                  2500 تومان
                </p>
              </li>
            </ul>
          </section>

          <!-- Order summary -->
          <section
            aria-labelledby="summary-heading"
            class="orounded-lg lg:col-span-6"
          >
            <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
              اطلاعات مشتری
            </h2>
            <div
              class="relative block px-6 py-4 mt-4 mb-4 bg-white border rounded-lg cursor-pointer sm:flex sm:justify-between"
              ><span class="flex items-center"
                >
                <span class="flex flex-col text-sm"
                  ><ul class="space-y-1">
                    <li>
                      <span class="font-medium"> آدرس :</span
                      ><span> خیابان امام کوچه ولیعصر</span>
                    </li>
                    <li>
                      <span class="font-medium">کد پستی :</span
                      ><span>5875896245</span>
                    </li>
                    <li>
                      <span class="font-medium"> شهر :</span><span>خوی</span>
                    </li>
                    <li>
                      <span class="font-medium"> استان :</span
                      ><span>آذربایجان غربی</span>
                    </li>
                    <li>
                      <span class="font-medium"> کشور :</span><span>ایران</span>
                    </li>
                    <li>
                      <span class="font-medium"> شماره موبایل :</span
                      ><span>09030264300</span>
                    </li>
                  </ul></span
                ></span
              ><span
                class="flex mt-2 text-sm sm:mt-0 sm:mr-4 sm:flex-col sm:text-right"
                ><span class="font-medium text-cyan-500"
                  ><i class="fa fa-map"></i></span></span
              >
                </div>

            <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
              صورتحساب
            </h2>

            <dl class="p-3 mt-4 space-y-2 border rounded-lg">
              <div class="flex items-center justify-between">
                <dt class="text-sm text-gray-600">قیمت جزئی</dt>
                <dd class="text-sm font-medium text-gray-900">90000 تومان</dd>
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-gray-200"
              >
                <dt class="flex items-center text-sm text-gray-600">
                  <span>حمل و نقل</span>
                </dt>
                <dd class="text-sm font-medium text-gray-900">10000 تومان</dd>
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-gray-200"
              >
                <dt class="flex text-sm text-gray-600">
                  <span>ارزش افزوده</span>
                </dt>
                <dd class="text-sm font-medium text-gray-900">3000 تومان</dd>
              </div>
              <div
                class="flex items-center justify-between pt-4 border-t border-gray-200"
              >
                <dt class="text-base font-medium text-gray-900">جمع کل</dt>
                <dd class="text-base font-medium text-gray-900">58000 تومان</dd>
              </div>
            </dl>
          </section>
        </form>

     
      </div>
         <div
          class="grid w-full grid-cols-4 gap-4 p-4 px-4 mt-6 bg-white border-t"
        >
          <button
            class="box-border relative z-0 inline-flex items-center justify-center px-2 py-4 overflow-hidden font-medium text-white transition-all duration-300 bg-indigo-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-sm font-medium text-center"
              ><i class="pl-2 text-xl text-white fa-duotone fa-money-bill"></i
              ><span class="w-full">پرداخت نقدی</span></span
            >
          </button>

          <button
            href="#_"
            class="box-border relative z-0 inline-flex items-center justify-center px-2 py-4 overflow-hidden font-medium text-white transition-all duration-300 bg-gray-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-sm font-medium text-center"
              ><i class="pl-2 text-xl text-white fa-duotone fa-credit-card"></i
              ><span class="w-full">پرداخت آفلاین</span></span
            >
          </button>

          <button
            href="#_"
            class="box-border relative z-0 inline-flex items-center justify-center px-2 py-4 overflow-hidden font-medium text-white transition-all duration-300 bg-green-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-sm font-medium text-center"
              ><i class="pl-2 text-xl text-white fa-duotone fa-wallet"></i
              ><span class="w-full">پرداخت از کیف پول</span></span
            >
          </button>

        </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      Modal1: null,
      Modal2: null,
      Modal3: null,
      Modal4: null,
      Shipping: false,
      Discount: false,
    };
  },

  mounted() {
    this.Modal1 = false;
    this.Modal2 = false;
    this.Modal3 = false;
    this.Modal4 = false;
  },

  methods: {
    openModal1(data) {
      this.Modal1 = !this.Modal1;
    },
    closeModal1(data) {
      this.Modal1 = data;
    },

    openModal2(data) {
      this.Modal2 = !this.Modal2;
    },
    closeModal2(data) {
      this.Modal2 = data;
    },

    openModalAddress(data) {
      this.Modal3 = !this.Modal3;
      this.Modal2 = false;
    },
    closeModalAddress(data) {
      this.Modal3 = data;
    },

    openModalPay(data) {
      this.Modal4 = !this.Modal5;
    },
    closeModalPay(data) {
      this.Modal4 = data;
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  z-index: 0;
  left: 0px;
  top: 0px;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
}

.overlay.active {
  z-index: 49;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: translateY(0.9);
}
</style>
