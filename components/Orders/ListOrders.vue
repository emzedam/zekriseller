<template>
  <div class="grid gap-4   font-medium lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa">
    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">سفارشات تکمیل شده</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">215</h4>
            <span class="font-bold text-green-500">(+29%)</span>
          </div>
          <span class="text-xs text-gray-500">مجموع سفارشات تکمیل شده</span>
        </div>
        <span class="flex items-center justify-center w-8 h-8 p-2 text-green-500 bg-green-100 rounded badge">
          <i class="fa-duotone fa-bags-shopping"></i>
        </span>
      </div>
    </div>
    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">سفارشات در حال پردازش</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">215</h4>
            <span class="font-bold text-green-500">(+29%)</span>
          </div>
          <span class="text-xs text-gray-500">
            مجموع سفارشات در حال پردازش</span>
        </div>
        <span class="flex items-center justify-center w-8 h-8 p-2 text-orange-500 bg-orange-100 rounded badge">
          <i class="fa-duotone fa-user-gear"></i>
        </span>
      </div>
    </div>

    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">سفارشات در حال انتظار</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">215</h4>
            <span class="font-bold text-green-500">(+29%)</span>
          </div>
          <span class="text-xs text-gray-500">سفارشات در حال انتظار</span>
        </div>
        <span class="flex items-center justify-center w-8 h-8 p-2 text-indigo-500 bg-indigo-100 rounded badge">
          <i class="fa-duotone fa-calendar-clock"></i>
        </span>
      </div>
    </div>

    <div class="col-span-1 row-span-1 p-6 border rounded-lg">
      <div class="flex items-start content-between justify-between">
        <div class="content-left">
          <span class="text-sm text-gray-500">سفارشات لغو شده</span>
          <div class="flex items-center my-1">
            <h4 class="mb-0 ml-2 font-bold">215</h4>
            <span class="font-bold text-green-500">(+29%)</span>
          </div>
          <span class="text-xs text-gray-500">مجموع سفارشات لغو شده</span>
        </div>
        <span class="flex items-center justify-center w-8 h-8 p-2 text-red-500 bg-red-100 rounded badge">
          <i class="fa-duotone fa-xmark"></i>
        </span>
      </div>
    </div>
  </div>
  <collapse-transition>

  </collapse-transition>
  <dataset v-slot="{ ds }" :ds-data="usersList" :ds-sortby="sortBy" :ds-sort-as="{ orderCreate: isoDateToDate }"
    :ds-search-in="[
      'orderId',
      'orderTrendUp',
      'orderName',
      'orderStatus',
      'orderCreate',
      'orderDueDate',
      'orderTotal',
      'orderAction',
    ]" :ds-search-as="{ orderCreate: searchAsEuroDate }">
    <div class="col-span-12 font-fa">
      <div class="mt-6 mb-6 bg-white border border-gray-200 product-info rounded-xl">
        <div
          class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200">
          <h6 class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa">
            <i class="fa-duotone fa-cart-circle-check text-[20px] !w-5 !h-5 text-teal-500 ml-1"></i>سفارشات
          </h6>
          <p class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa">
            از این بخش می توانید سفارشات را مدیریت یا حذف نمایید
          </p>
        </div>

        <div class="grid gap-4 px-6 py-6 bg-stripes-purple lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
          <div class="relative flex w-full gap-4">
            <dataset-show />
            <nuxt-link to="/orders/AddOrder"
              class="box-border relative z-0 flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-indigo-500 rounded-md cursor-pointer group ease focus:outline-none">
              <span
                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="relative z-20 flex items-center justify-center w-full text-center"><i
                  class="pl-2 text-2xl text-white fa-duotone fa-cart-plus"></i><span class="w-full">ایجاد سفارش
                  جدید</span></span>
            </nuxt-link>
          </div>
          <dataset-status @doFilterStatus="doFilter($event)" />

          <!-- <div class="relative w-full lg:flex lg:justify-end">
            <button v-on:click.prevent="Export = !Export"
              class="box-border relative z-0 flex lg:w-40 w-full items-center justify-center p-2.5 overflow-hidden font-medium text-gray-500 transition-all duration-300 bg-gray-100 rounded-md cursor-pointer group ease focus:outline-none">
              <span
                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="relative z-20 flex items-center justify-center w-full text-center"><i
                  class="pl-2 text-2xl text-gray-400 fa-duotone fa-file-export"></i><span class="w-full">انتخاب
                  خروجی</span></span>
            </button>
            <div v-if="Export" class="absolute z-10 w-full mt-6 bg-white border rounded-lg top-6 lg:w-40">
              <ul class="h-40 p-3 overflow-y-auto text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
                <li @click="print" class="cursor-pointer">
                  <div class="flex items-center w-full my-1 border rounded hover:bg-gray-100">
                    <input id="checkbox-item-11" type="hidden" value=""
                      class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-lg" /><label
                      for="checkbox-item-11"
                      class="flex items-center justify-center w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"><span
                        class="flex items-center w-full pr-2 text-right">پرینت</span><i
                        class="flex items-center pl-2 text-left text-indigo-500 fa-duotone fa-print"></i></label>
                  </div>
                </li>

                <export-excel :data="usersList" :fields="excelFields" :title="`لیست سفارشات فروشگاه اینترنتی ذکری مارکت`"
                  :name="`alish.xls`">
                  <li class="cursor-pointer">
                    <div class="flex items-center w-full my-1 border rounded hover:bg-gray-100">
                      <input id="checkbox-item-11" type="hidden" value=""
                        class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-lg" /><label
                        for="checkbox-item-11"
                        class="flex items-center justify-center w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"><span
                          class="flex items-center w-full pr-2 text-right">اکسل</span><i
                          class="flex items-center pl-2 text-left text-green-500 fa-duotone fa-file-spreadsheet"></i>
                      </label>
                    </div>
                  </li>
                </export-excel>
                <li>
                  <div class="flex items-center w-full my-1 bg-indigo-100 border-indigo-100 rounded">
                    <input id="checkbox-item-11" type="hidden" value=""
                      class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-lg" /><label for="checkbox-item-11"
                      class="flex items-center justify-center w-full py-2 mr-2 text-sm font-medium text-gray-500 transition-colors rounded"><span
                        class="flex items-center w-full pr-2 text-right text-gray-500">
                        پی دی اف</span><i
                        class="flex items-center pl-2 text-left text-red-500 fa-duotone fa-file-pdf"></i></label>
                  </div>
                </li>
              </ul>
            </div>
          </div> -->

          <dataset-search ds-search-placeholder="جستجو در لیست..." />
        </div>

        <div class="flex flex-col">
          <div class="overflow-hidden">
            <div class="min-w-full align-middle">
              <div class="flex flex-col lg:hidden">
                <div class="overflow-hidden">
                  <div class="inline-block min-w-full align-middle">
                    <div class="relative overflow-hidden">
                      <div class="w-full table-auto min-w-max">
                        <div>
                          <div class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200">
                            <div scope="col" class="px-6 py-3 font-semibold">سفارشات</div>
                          </div>
                        </div>
                        <dataset-item tag="ul" class="bg-white divide-gray-200 last:border-b" name="fade"
                          is="transition-group">
                          <template #default="{ row, rowIndex }">
                            <li
                              class="flex border-t border-gray-200 divide-gray-200 cursor-pointer items-centerjustify-between "
                              v-on:click.prevent="openSubMobileTable(row.id)">
                              <div class="flex px-6 py-2 text-right whitespace-nowrap">
                                <div class="w-12 h-12 avatar avatar-sm me-2">
                                  <img :src="row.orderImage" alt="Avatar" class="rounded-full" />
                                </div>
                                <div class="pr-3">
                                  <div class="text-base font-semibold">
                                    {{ row.orderName }}
                                  </div>

                                  <div class="font-normal text-gray-500">
                                    {{ row.orderEmail }}
                                  </div>
                                </div>
                              </div>

                              <div class="px-6 py-3" scope="col">
                                <div class="flex justify-center cursor-pointer item-center">
                                  <div
                                    class="flex items-center justify-center w-4 font-extrabold transform hover:text-gray-500 hover:scale-110">
                                    <i :class="{
                                      'fa-minus': mobileSubmenuIndex == row.id,
                                      'fa-plus': mobileSubmenuIndex != row.id,
                                    }" class="w-4 h-4 text-indigo-500 transition-transform transform fa-solid"
                                      aria-hidden="true"></i>
                                  </div>
                                </div>
                              </div>
                            </li>



                            <collapse-transition>
                              <div v-show="mobileSubmenuIndex == row.id"
                                class="border-transparent border-y border-b-slate-200">
                                <div colspan="100" class="p-0">
                                  <div class="border-l border-r rounded-b-lg">
                                    <div class="pb-4">
                                      <div class="min-w-full overflow-x-auto is-scrollbar-hidden">
                                        <div class="w-full text-left is-hoverable">
                                          <div class="border-b border-gray-200 divide-gray-200">
                                            <div class="flex px-6 py-3 text-right border-b whitespace-nowrap">
                                              <div class="flex items-center text-base font-semibold">
                                                شناسه :
                                                <span class="mr-1 font-medium text-indigo-500 ltr">
                                                  #{{ row.orderId }}
                                                </span>
                                              </div>
                                            </div>

                                            <div class="flex px-6 py-3 text-right border-b whitespace-nowrap">
                                              <div class="flex items-center text-base font-semibold">
                                                وضعیت:
                                                <span v-if="row.isPayed == true"
                                                  class="w-full py-2 badge bg-label-success">پرداخت شده</span>
                                                <span v-else class="w-full py-2 badge bg-label-danger">پرداخت نشده</span>
                                              </div>
                                            </div>

                                            <div class="flex px-6 py-3 text-right border-b whitespace-nowrap">
                                              <div class="flex items-center text-base font-semibold">
                                                تاریخ ایجاد:
                                                <span class="mr-1 font-medium text-gray-400">
                                                  {{ row.orderCreate }}</span>
                                              </div>
                                            </div>

                                            <div class="flex px-6 py-3 text-right border-b whitespace-nowrap">
                                              <div class="flex items-center text-base font-semibold">
                                                تاریخ پرداخت:
                                                <span class="mr-1 font-medium text-gray-400">{{ row.orderDueDate }}</span>
                                              </div>
                                            </div>

                                            <div class="flex px-6 py-3 text-right border-b whitespace-nowrap">
                                              <div class="flex items-center text-base font-semibold">
                                                مجموع:
                                                <span class="mr-1 font-medium text-gray-400">
                                                  {{ row.orderTotal }}
                                                  {{ row.orderCurrency }}</span>
                                              </div>
                                            </div>

                                            <div class="flex px-6 py-3 text-right whitespace-nowrap">
                                              <div class="flex items-center text-base font-semibold">
                                                <span class="mr-1">
                                                  <div class="flex justify-center item-center">
                                                    <div
                                                      class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110">
                                                      <i
                                                        class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 font-normal"></i>
                                                    </div>
                                                    <nuxt-link to="/orders/AddOrder">
                                                      <div
                                                        class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110">
                                                        <i class="fa-thin fa-edit text-[18px] !w-5 !h-5 font-normal"></i>
                                                      </div>
                                                    </nuxt-link>

                                                    <div
                                                      class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110">
                                                      <i
                                                        class="fa-thin fa-download text-[18px] !w-5 !h-5 font-normal"></i>
                                                    </div>
                                                    <nuxt-link to="/orders/ViewInvoice">
                                                      <button
                                                        class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110">
                                                        <i class="fa-solid fa-eye text-[18px] !w-5 !h-5 font-normal"></i>
                                                      </button>
                                                    </nuxt-link>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="mr-6 text-right">
                                        <button v-on:click.prevent="Expanded = false"
                                          class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25">
                                          بستن
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </collapse-transition>


                          </template>
                        </dataset-item>
                      </div>

                      <nav class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                        aria-label="Table navigation">
                        <dataset-info />
                        <dataset-pager />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative hidden overflow-x-auto border-t lg:block Desktop-Table">
                <div class="w-auto px-6 py-6">
                  <div class="relative flex flex-row items-center justify-start gap-4 filterBtn">
                    <div @click="activeBtn = 'btn1'" :class="{ filteractive1: activeBtn === 'btn1' }">
                      <button @click="doFilter('all')" type="button"
                        class="relative w-32 p-1 text-gray-500 bg-gray-100 border border-gray-200 rounded-3xl">
                        <span
                          class="absolute flex items-center justify-center w-6 h-6 text-white bg-indigo-400 border-2 border-indigo-200 rounded-full -left-2 top-1">{{ filteredCounts.allCount }}</span>
                        همه
                      </button>
                    </div>
                    <div @click="activeBtn = 'btn2'" :class="{ filteractive2: activeBtn === 'btn2' }">
                      <button type="button"
                        class="relative w-32 p-1 text-gray-500 bg-gray-100 border border-gray-200 rounded-3xl"
                        @click="doFilter('paied')">
                        <span
                          class="absolute flex items-center justify-center w-6 h-6 text-white bg-green-400 border-2 border-green-200 rounded-full -left-2 top-1">{{ filteredCounts.paiedCount }}</span>پرداخت
                        شده
                      </button>
                    </div>

                    <div @click="activeBtn = 'btn3'" :class="{ filteractive3: activeBtn === 'btn3' }">
                      <button type="button"
                        class="relative w-32 p-1 text-gray-500 bg-gray-100 border border-gray-200 rounded-3xl"
                        @click="doFilter('unpaied')">
                        <span
                          class="absolute flex items-center justify-center w-6 h-6 text-white bg-red-400 border-2 border-red-200 rounded-full -left-2 top-1">{{ filteredCounts.unpaiedCount }}</span>
                        پرداخت نشده
                      </button>
                    </div>
                  </div>
                </div>


                <table class="w-full" id="printMe">
                  <thead>
                    <tr class="text-sm leading-normal text-right text-gray-600 uppercase border border-gray-200 divide-x">
                      <th scope="col" class="relative w-10 px-6 border-l sm:w-8 sm:px-8">
                        <input type="checkbox"
                          class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 right-4 top-1/2 focus:ring-green-500 sm:right-6" />
                      </th>

                      <th scope="col" v-for="(th, index) in cols" :key="th.field" :class="['sort', th.sort]"
                        @click="click($event, index)"
                        class="px-3 py-2 font-semibold text-center uppercase align-middle bg-transparent border-b border-collapse border-solid shadow-none d text-xxs tracking-none whitespace-nowrap text-slate-700 opacity-70">
                        <div v-if="th.hasIcon == 'orderTrendUp'" class="flex items-center justify-center ">
                          <span>{{ th.name }}</span>
                          <i class="fa fa-arrow-trend-up"></i>
                        </div>

                        <div v-else class="flex items-center justify-center">
                          <i class="ml-1 gg-select" v-if="th.hasIcon != 'checkbox'"></i>
                          <span>{{ th.name }}</span>

                        </div>
                      </th>
                    </tr>
                  </thead>


                  <dataset-item tag="tbody" class="bg-white divide-gray-200" name="fade" is="transition-group">

                    <template #default="{ row, rowIndex }">

                      <tr class="border-b border-gray-200 divide-x">
                        <td class="relative w-10 px-6 border-l sm:w-8 sm:px-8">
                          <div class="absolute inset-y-0 right-0 w-0.5 bg-green-600"></div>
                          <input type="checkbox"
                            class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 rounded right-4 top-1/2 focus:ring-green-500 sm:right-6" />
                        </td>

                        <td
                          class="relative px-6 py-2 font-bold text-right text-indigo-500 border-l ltr whitespace-nowrap">
                          #{{ row.orderId }}


                        </td>



                        <td>
                          <span
                            class="text-[25px] font-extralight leading-tight text-green-500 text-center justify-center items-center flex">
                            <i v-if="row.isPayed == true" class="text-green-500 fa-thin fa-file-invoice"></i>
                            <i v-else class="text-red-500 fa-thin fa-file-invoice"></i>
                          </span>
                        </td>

                        <td class="flex px-6 py-2 text-right whitespace-nowrap">
                          <!-- <span
                        class="flex items-center justify-center w-12 h-12 font-bold leading-3 text-center rounded-full bg-label-success"
                        >MM</span
                      > -->
                          <div class="w-12 h-12 avatar avatar-sm me-2">
                            <img :src="row.orderImage" alt="Avatar" class="rounded-full" />
                          </div>
                          <div class="pr-3">
                            <nuxt-link to="/client-view">
                              <div class="text-base font-semibold">
                                {{ row.orderName }}
                              </div>
                            </nuxt-link>

                            <div class="font-normal text-gray-500">
                              {{ row.orderEmail }}
                            </div>
                          </div>
                        </td>

                        <td class="px-6 py-2 text-right whitespace-nowrap">
                          <div class="flex items-center justify-start">
                            <span v-if="row.isPayed == true" class="w-full py-2 badge bg-label-success">پرداخت شده</span>
                            <span v-else class="w-full py-2 badge bg-label-danger">پرداخت نشده</span>
                          </div>
                        </td>

                        <td class="px-6 py-2 text-right whitespace-nowrap">
                          {{ row.orderCreate }}
                        </td>

                        <td class="px-6 py-2 text-right whitespace-nowrap">
                          {{ row.orderDueDate }}
                        </td>

                        <td class="px-6 py-2 text-center whitespace-nowrap">
                          {{ row.orderTotal }} {{ row.orderCurrency }}
                        </td>

                        <td scope="col" class="px-3 py-3 text-center border-l">
                          <div class="flex justify-center item-center">
                            <div class="w-4 ml-4  cursor-pointer hover:text-gray-500 hover:scale-110">
                              <i class="fa-thin fa-trash-can text-[18px] !w-5 !h-5 text-red-500"
                                :class="row.orderDelete"></i>
                            </div>

                            <nuxt-link to="/orders/AddOrder">
                              <div class="w-4 ml-4  cursor-pointer hover:text-gray-500 hover:scale-110">
                                <i class="fa-thin fa-edit text-[18px] !w-5 !h-5 text-indigo-500"
                                  :class="row.orderEdit"></i>
                              </div>
                            </nuxt-link>

                            <div class="w-4 ml-4  cursor-pointer hover:text-gray-500 hover:scale-110">
                              <i class="fa-thin fa-download text-[18px] !w-5 !h-5 text-green-500"
                                :class="row.orderDownload"></i>
                            </div>

                            <nuxt-link to="/orders/ViewInvoice"
                              class="w-4 ml-4  cursor-pointer hover:text-gray-500 hover:scale-110">
                              <i class="fa-solid fa-eye text-[18px] !w-5 !h-5 text-pink-500" :class="row.orderEye"></i>
                            </nuxt-link>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </dataset-item>
                </table>

                <nav class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex" aria-label="Table navigation">
                  <dataset-info />
                  <dataset-pager />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dataset>

  <transition name="bounce">
    <div v-if="ShowDetailes"
      class="fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5 font-fa">
      <div class="absolute inset-0 transition-opacity duration-300 bg-gray-100/60 backdrop-blur"
        @click="ShowDetailes = false"></div>
      <div
        class="relative flex flex-col w-full max-w-xl overflow-hidden transition-all duration-300 origin-top bg-white rounded-lg">
        <div class="flex justify-between rounded-t-lg bg-slate-100">
          <h3 class="flex items-center justify-center w-full pr-4 text-base font-medium text-slate-700">
            سفارش : 2385#
            <span class="flex justify-center px-4 py-3 w-30 bg-label-success">تکمیل شده</span>
          </h3>

          <button @click="ShowDetailes = !ShowDetailes"
            class="flex items-center justify-center h-[48px] px-4 py-3 ml-0 btn w-10 border-r hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
            <i class="fa-solid fa-times text-[18px] h-4.5 w-4.5 text-gray-900"></i>
          </button>
        </div>
        <div class="px-4 py-4 overflow-y-auto sm:px-5">
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="order-detailes">
              <div class="relative pt-4 border rounded-md detailes">
                <h2 class="absolute flex items-center justify-center px-2 py-2 font-bold bg-white -top-4 right-5">
                  جزئیات صورتحساب
                </h2>
                <ul>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام مشتری:</span><span class="text-sm">محبوب حسین زاده</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام شرکت:</span><span class="text-sm">آلیش</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام خیابان:</span><span class="text-sm">ستارخان</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام استان:</span><span class="text-sm">آ.غ</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام شهر:</span><span class="text-sm">خوی</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium"> کد پستی:</span><span class="text-sm">5878965421</span>
                  </li>
                </ul>
              </div>
              <div class="mt-6">
                <div class="px-3 py-2">
                  <span class="block pl-1 font-medium text-indigo-500">ایمیل:</span><span class="text-sm"><a
                      href="mailto:info@alish.co.ir">info@alish.co.ir</a></span>
                </div>
                <div class="px-3 py-2">
                  <span class="block pl-1 font-medium text-indigo-500">تلفن:</span><span class="text-sm"><a
                      href="tel:09030264300">09030264300</a></span>
                </div>
                <div class="px-3 py-2">
                  <span class="block pl-1 font-medium text-indigo-500">شیوه پرداخت:</span><span class="text-sm">پرداخت
                    هنگام دریافت</span>
                </div>
              </div>
            </div>

            <div class="order-address">
              <div class="relative pt-4 border rounded-md">
                <h2 class="absolute flex items-center justify-center px-2 py-2 font-bold bg-white -top-4 right-5">
                  جزئیات حمل و نقل
                </h2>
                <ul>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام مشتری:</span><span class="text-sm">محبوب حسین زاده</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام شرکت:</span><span class="text-sm">آلیش</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام خیابان:</span><span class="text-sm">ستارخان</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام استان:</span><span class="text-sm">آ.غ</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium">نام شهر:</span><span class="text-sm">خوی</span>
                  </li>
                  <li class="flex items-center px-3 py-2">
                    <span class="pl-1 font-medium"> کد پستی:</span><span class="text-sm">5878965421</span>
                  </li>
                </ul>
              </div>
              <div class="mt-6">
                <div class="px-3 py-2">
                  <span class="block pl-1 font-medium text-indigo-500">روش حمل و نقل:</span><span class="text-sm">حمل و
                    نقل رایگان </span>
                </div>
                <div class="px-3 py-2">
                  <span class="block pl-1 font-medium text-indigo-500">یادداشت:</span><span class="text-sm">لطفا قبل از
                    ارسال مرسوله تماس بپیرید</span>
                </div>
                <div class="px-3 py-2">
                  <span class="block pl-1 font-medium text-indigo-500"></span><span class="text-sm"></span>
                </div>
              </div>
            </div>

            <button
              class="relative z-0 flex items-center justify-center w-full p-3 px-8 py-3 my-2 mt-6 mb-6 overflow-hidden font-medium text-white transition-all duration-300 bg-orange-500 rounded-md cursor-pointer box-b order group ease focus:outline-none">
              <span
                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="relative z-20 flex items-center justify-center w-full text-center"><i
                  class="pl-2 text-2xl text-white fa-duotone fa-circle"></i><span class="w-full">درحال انجام
                </span></span>
            </button>

            <button
              class="relative z-0 flex items-center justify-center w-full p-3 px-8 py-3 my-2 mt-6 mb-6 overflow-hidden font-medium text-white transition-all duration-300 bg-indigo-500 rounded-md cursor-pointer box-b order group ease focus:outline-none">
              <span
                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span
                class="relative z-20 flex items-center justify-center w-full text-center"><i
                  class="pl-2 text-2xl text-white fa-duotone fa-edit"></i><span class="w-full">ویرایش</span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>


import orders from "@/assets/orders.json";
import Dataset from "@/plugins/DataTable/Dataset.vue";
import DatasetInfo from "@/plugins/DataTable/DatasetInfo.vue";
import DatasetItem from "@/plugins/DataTable/DatasetItem.vue";
import DatasetPager from "@/plugins/DataTable/DatasetPager.vue";
import DatasetSearch from "@/plugins/DataTable/DatasetSearch.vue";
import DatasetShow from "@/plugins/DataTable/DatasetShow.vue";
import DatasetStatus from "@/plugins/DataTable/DatasetStatus.vue";
export default {
  components: {
    Dataset,
    DatasetInfo,
    DatasetItem,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
    DatasetStatus,
  },

  data() {
    return {
      mobileSubmenuIndex: null,
      ShowDetailes: false,
      isOpenA: false,
      activeBtn: "",
      Addorder: false,
      Export: false,
      Status: false,
      Count: false,
      Expanded: null,
      Shipping: false,
      Discount: false,
      usersList: [],
      filteredCounts: {
        paiedCount: 0,
        unpaiedCount: 0,
        allCount: 0,
      },
      filteredContainer: [],
      cols: [
        {
          name: "شناسه",
          field: "orderId",
          sort: "",
          hasIcon: "orderId",
        },
        {
          name: "",
          field: "orderTrendUp",
          sort: "",
          hasIcon: "orderTrendUp",
        },
        {
          name: "مشتری",
          field: "orderName",
          sort: "",
          hasIcon: "orderName",
        },
        {
          name: "وضعیت",
          field: "orderStatus",
          sort: "",
          hasIcon: "orderStatus",
        },
        {
          name: "تاریخ ایجاد",
          field: "orderCreate",
          sort: "",
          hasIcon: "orderStatus",
        },
        {
          name: "تاریخ پرداخت",
          field: "orderDueDate",
          sort: "",
          hasIcon: "orderDueDate",
        },
        {
          name: "مجموع",
          field: "orderTotal",
          sort: "",
          hasIcon: "orderTotal",
        },
        {
          name: "عملیات",
          field: "orderAction",
          sort: "",
          hasIcon: "orderAction",
        },
      ],
    };
  },

  mounted() {
    this.usersList=orders;
    this.filteredContainer=orders;

    this.filterStart();
  },

  methods: {
    openSubMobileTable(stateId) {
      if (stateId==this.mobileSubmenuIndex)
        this.mobileSubmenuIndex=null
      else
        this.mobileSubmenuIndex=stateId
    },
    doFilter(type) {
      if (type=="paied") {
        this.filteredContainer=orders;
        const filterUsers=this.filteredContainer.filter((val, index) => {
          return val.isPayed==true;
        });

        this.usersList=filterUsers;
      } else if (type=="unpaied") {
        this.filteredContainer=orders;
        const filterUsers=this.filteredContainer.filter((val, index) => {
          return val.isPayed==false;
        });

        this.usersList=filterUsers;
      } else {
        this.usersList=orders;
      }
    },
    filterStart() {
      const filterUsers=orders.filter((val, index) => {
        return val.isPayed==true;
      });

      if (filterUsers.length)
        this.filteredCounts.paiedCount=filterUsers.length;

      const unpaids=this.filteredContainer.filter((val, index) => {
        return val.isPayed==false;
      });

      if (unpaids.length) this.filteredCounts.unpaiedCount=unpaids.length;

      this.filteredCounts.allCount=orders.length;
    },

    click(event, i) {
      let toset;
      const sortEl=this.cols[i];

      if (!event.shiftKey) {
        this.cols.forEach((o) => {
          if (o.field!==sortEl.field) {
            o.sort="";
          }
        });
      }
      if (!sortEl.sort) {
        toset="asc";
      }
      if (sortEl.sort==="desc") {
        toset=event.shiftKey? "":"asc";
      }
      if (sortEl.sort==="asc") {
        toset="desc";
      }
      sortEl.sort=toset;
    },
  },
  computed: {
    sortBy() {
      return this.cols.reduce((acc, o) => {
        if (o.sort) {
          o.sort==="asc"? acc.push(o.field):acc.push("-"+o.field);
        }

        return acc;
      }, []);
    },
  },
};
</script>

<style>
.gg-select {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(1);
  width: 22px;
  height: 22px;
}

.gg-select:after,
.gg-select:before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px;
  height: 8px;
  left: 7px;
  transform: rotate(-45deg);
}

.gg-select:before {
  border-left: 2px solid;
  border-bottom: 2px solid;
  bottom: 4px;
  opacity: 0.3;
}

.gg-select:after {
  border-right: 2px solid;
  border-top: 2px solid;
  top: 4px;
  opacity: 0.3;
}

th.sort {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

th.sort.asc .gg-select:after,
th.sort.desc .gg-select:before {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.filteractive1 button {
  background: #818cf8;
  color: white;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}

.filteractive2 button {
  background: #4ade80;
  color: white;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}

.filteractive3 button {
  background: #f87171;
  color: white;
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}

.filterBtn button:hover {
  background: #ebebeb;
  color: rgb(100, 100, 100);
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}
</style>
