<template>
  <div class="Step-reg-map border lg:rounded-lg p-6 h-full">
    <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold mt-6 h-10">
      <span
        class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
      >
        <i class="fa-duotone fa-arrow-right !leading-3"></i
      ></span>

      <span class="leading-3">انتخاب موقعیت مکانی روی نقشه</span>
    </h2>

    <div class="inline-block w-full input py-8">
      <div class="relative rounded-md">
        <div
          class="modal-body font-fa relative overflow-hidden h-full bg-white rounded-b-lg"
        >
          <div class="map h-96 w-full bg-cyan-100 relative rounded-lg overflow-hidden">
            <form class="relative overflow-hidden z-10 px-6 py-4">
              <div class="relative overflow-hidden lg:w-2/4">
                <div
                  class="absolute inset-y-0 left-4 flex items-center pr-3 pointer-events-none z-10"
                >
                  <i class="fa fa-search text-md text-gray-400"></i>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 pr-5 text-md font-semibold text-gray-600 border-0 shadow-md border-gray-300 rounded-lg bg-white focus:ring-transparent focus:border-transparent placeholder:text-gray-400/60 relative overflow-hidden"
                  placeholder="جستجوی آدرس"
                  required=""
                />
              </div>
            </form>

            <transition-group name="slide">
              <div>
                <div
                  class="bg-white w-full lg:w-2/4 h-screen absolute right-0 top-0 z-10 rounded-r-lg p-6"
                  v-if="showMapForm"
                  :showMapForm="showMapForm"
                >
                  <div class="grid grid-cols-4 gap-4">
                    <div class="relative col-span-4 sm:col-span-2">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span>استان</span></label
                      >
                      <div class="flex mt-1 rounded-md">
                        <div class="relative w-full focus-within:z-10">
                          <button
                            type="button"
                            class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                          >
                            <i
                              class="fa-duotone fa-building-flag text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                            ></i
                            ><span class="w-full pr-2 text-right">انتخاب استان</span
                            ><i
                              class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                            ></i>
                          </button>
                          <div class="z-10 hidden w-full mt-2 bg-white border rounded-lg">
                            <ul
                              class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                              aria-labelledby="dropdownSearchButton"
                            >
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
                                    ><span
                                      class="flex items-center w-full pr-2 text-right"
                                      >ارومیه</span
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
                                    class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-white transition-colors rounded hover:text-gray-600"
                                    ><span
                                      class="flex items-center w-full pr-2 text-right"
                                      >تبریز</span
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
                                    ><span
                                      class="flex items-center w-full pr-2 text-right"
                                    >
                                      اردبیل </span
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
                    </div>
                    <div class="relative col-span-4 sm:col-span-2">
                      <label class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span> شهر</span></label
                      >
                      <div class="flex mt-1 rounded-md">
                        <div class="relative w-full focus-within:z-10">
                          <button
                            type="button"
                            class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                          >
                            <i
                              class="fa-duotone fa-tree-city text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                            ></i
                            ><span class="w-full pr-2 text-right">انتخاب شهرستان</span
                            ><i
                              class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                            ></i>
                          </button>
                          <div class="z-10 hidden w-full mt-2 bg-white border rounded-lg">
                            <ul
                              class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                              aria-labelledby="dropdownSearchButton"
                            >
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
                                    ><span
                                      class="flex items-center w-full pr-2 text-right"
                                      >ارومیه</span
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
                                    class="flex items-center justify-between w-full py-2 mr-2 text-sm font-medium text-white transition-colors rounded hover:text-gray-600"
                                    ><span
                                      class="flex items-center w-full pr-2 text-right"
                                      >تبریز</span
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
                                    ><span
                                      class="flex items-center w-full pr-2 text-right"
                                    >
                                      اردبیل </span
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
                    </div>
                    <div class="relative col-span-4">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span>آدرس آدرس پستی *</span></label
                      >
                      <div class="flex mt-1 rounded-md">
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
                            placeholder="آدرس پستی"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="relative col-span-4 sm:col-span-2">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span>کد پستی</span></label
                      >
                      <div class="flex mt-1 rounded-md">
                        <div
                          class="relative flex items-stretch flex-grow focus-within:z-10"
                        >
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <i
                              class="fa-duotone fa-signs-post text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                            placeholder="کد پستی"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="relative col-span-4 sm:col-span-2">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span> پلاک *</span></label
                      >
                      <div class="flex mt-1 rounded-md">
                        <div
                          class="relative flex items-stretch flex-grow focus-within:z-10"
                        >
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <i
                              class="fa-regular fa-input-numeric text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <div class="relative flex gap-4">
          <button
            href="#_"
            class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex iteme-center justify-center w-full text-center"
              ><span class="w-full"> بعدا انتخاب می کنم</span></span
            >
          </button>

          <button
            @click="showMapForm = !showMapForm"
            class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex iteme-center justify-center w-full text-center"
              ><span class="w-full">تایید و ادامه</span></span
            >
          </button>

          <!-- وقتی از روی نقشه مکان رو انتخاب کرد هنگامی که روی دکمه تایید کلیک کرد از طرف راست مثل دی جی کالا قسمت فروشندگان فرم ادرس باز میشه میتونه همون لحظه روی نقشه ادرس رو اصلاح کنه -->
        </div>
      </div>
    </div>
  </div>
</template>
