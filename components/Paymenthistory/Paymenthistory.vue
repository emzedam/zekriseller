<template>

  
    <dataset
      v-slot="{ ds }"
      :ds-data="paymentsList"
      :ds-sortby="sortBy"
      :ds-sort-as="{}"
      :ds-search-in="[
        'orderId',
  
        'orderTrendUp',
  
        'orderName',
  
        'orderStatus',
  
        'orderCreate',
  
        'orderDueDate',
  
        'orderTotal',
  
        'orderAction',
      ]"
      :ds-search-as="{}"
    >
      <div class="mb-6 bg-white border border-gray-200 product-info rounded-xl">
        <div
          class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200"
        >
          <h6
            class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa"
          >
            <i
              class="fa-duotone fa-credit-card text-[20px] !w-5 !h-5 text-teal-500 ml-1"
            ></i
            >
           پرداخت ها
          </h6>
  
          <p
            class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
          >
            از این بخش می توانید پرداخت ها را مدیریت یا حذف نمایید
          </p>
        </div>
  
        <div
          class="grid gap-4 px-6 py-6 bg-stripes-purple lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
        >
          <div class="flex gap-2">
            <dataset-show />
  
            <dataset-status @doFilterStatus="doFilter($event)" />
          </div>
  
          <div class="relative w-full lg:flex lg:justify-end">
            <button
              class="box-border relative z-0 flex items-center justify-center w-full p-2 overflow-hidden font-medium text-gray-500 transition-all duration-300 bg-gray-100 border rounded-md cursor-pointer lg:w-full group ease focus:outline-none"
            >
              <span
                class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
              ></span
              ><span
                class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
              ></span
              ><span
                class="relative z-20 flex items-center justify-center w-full text-center"
                ><i class="pl-2 text-2xl text-gray-400 fa-thin fa-file-export"></i
                ><span class="w-full text-gray-400">دریافت لیست</span></span
              >
            </button>
  
         
          </div>
  
          <dataset-search ds-search-placeholder="جستجو در لیست..." />
        </div>
  
        <div class="flex flex-col">
          <div class="min-w-full align-middle">
            <div class="flex flex-col lg:hidden">
              <div class="inline-block min-w-full align-middle">
                <div class="relative overflow-hidden">
                  <div class="w-full table-auto min-w-max">
                    <div>
                      <div
                        class="text-sm leading-normal text-right text-gray-600 uppercase border-t border-gray-200"
                      >
                        <div scope="col" class="px-6 py-3 font-semibold">پرداخت ها</div>
                      </div>
                    </div>
  
                    <dataset-item
                      tag="ul"
                      class="bg-white divide-gray-200 last:border-b"
                      name="fade"
                      is="transition-group"
                    >
                      <template #default="{ row, rowIndex }">
                        <li
                          class="flex items-center justify-between border-t border-gray-200 divide-gray-200 cursor-pointer"
                          v-on:click.prevent="openSubMobileTable(row.id)"
                        >
                          <div class="flex px-6 py-2 text-right whitespace-nowrap">
                            <div class="w-8h-8 ml-2 avatar avatar-sm">
                              <img
                                :src="row.orderImage"
                                alt="Avatar"
                                class="rounded-full w-8 h-8"
                              />
                            </div>
  
                            <div class="pr-3 flex items-center">
                              <div class="text-base font-semibold">
                                {{ row.orderName }}
                              </div>
  
  
                            </div>
                          </div>
  
                          <div class="px-6 py-3" scope="col">
                            <div class="flex justify-center cursor-pointer item-center">
                              <div
                                class="flex items-center justify-center w-4 font-extrabold transform hover:text-gray-500 hover:scale-110"
                              >
                                <i
                                  :class="{
                                    'fa-minus': mobileSubmenuIndex == row.id,
  
                                    'fa-plus': mobileSubmenuIndex != row.id,
                                  }"
                                  class="w-4 h-4 text-indigo-500 transition-transform transform fa-solid"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </li>
  
                        <collapse-transition>
                          <div
                            v-show="mobileSubmenuIndex == row.id"
                            class="border-transparent border-y border-b-slate-200"
                          >
                            <div colspan="100" class="p-0">
                              <div class="border-l border-r rounded-b-lg">
                                <div class="pb-4">
                                  <div
                                    class="min-w-full overflow-x-auto is-scrollbar-hidden"
                                  >
                                    <div class="w-full text-left is-hoverable">
                                      <div class="border-b border-gray-200 divide-gray-200">
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-base font-semibold"
                                          >
                                            شناسه :
  
                                            <span
                                              class="mr-1 font-medium text-indigo-500 ltr"
                                            >
                                              {{ row.orderId }}
                                            </span>
                                          </div>
                                        </div>
  
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-base font-semibold"
                                          >
                                            وضعیت:
  
                                            <span
                                              v-if="row.isPayed == true"
                                              class="w-full py-2 badge bg-green-50 text-green-500"
                                              >پرداخت شده</span
                                            >
  
                                            <span
                                              v-else
                                              class="w-full py-2 badge bg-orange-50 text-orange-500"
                                              >پرداخت نشده</span
                                            >
                                          </div>
                                        </div>
  
    
  
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-base font-semibold"
                                          >
                                            تاریخ پرداخت:
  
                                            <span class="mr-1 font-medium text-gray-400">{{
                                              row.orderDueDate
                                            }}</span>
                                          </div>
                                        </div>
  
                                        <div
                                          class="flex px-6 py-3 text-right border-b whitespace-nowrap"
                                        >
                                          <div
                                            class="flex items-center text-base font-semibold"
                                          >
                                            مبلغ پرداختی خالص:
  
                                            <span class="mr-1 font-medium text-gray-400">
                                              {{ row.orderTotal }}
  
                                              {{ row.orderCurrency }}</span
                                            >
                                          </div>
                                        </div>
  
                                    
                                      </div>
                                    </div>
                                  </div>
  
                                  <div class="mr-6 text-right">
                                    <button
                                      v-on:click.prevent="Expanded = false"
                                      class="btn mt-2 h-8 rounded px-3 text-xs+ font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25"
                                    >
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
  
                  <nav
                    class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                    aria-label="Table navigation"
                  >
                    <dataset-info />
                    <dataset-pager />
                  </nav>
                </div>
              </div>
            </div>
  
            <div class="hidden lg:block Desktop-Table overflow-y-hidden xl:scrollbar-none relative scrollbar-h-1  scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400/40">
              <table class="w-full " id="printMe">
                <thead>
                  <tr
                    class="text-sm leading-normal text-right text-gray-600 uppercase border border-gray-200 divide-x"
                  >
                    <th scope="col" class="relative w-10 px-6 border-l sm:w-8 sm:px-8">
                      <input
                        type="checkbox"
                        class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 right-4 top-1/2 focus:ring-green-500 sm:right-6"
                      />
                    </th>
  
                    <th
                      scope="col"
                      v-for="(th, index) in cols"
                      :key="th.field"
                      :class="['sort', th.sort]"
                      @click="click($event, index)"
                      class="px-3 py-2 font-semibold text-center uppercase align-middle bg-transparent border-b border-collapse border-solid shadow-none d text-xxs tracking-none whitespace-nowrap text-slate-700 opacity-70"
                    >
                      <div
                        v-if="th.hasIcon == 'orderTrendUp'"
                        class="flex items-center justify-center"
                      >
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
  
                <dataset-item
                  tag="tbody"
                  class="bg-white divide-gray-200 "
                  name="fade"
                  is="transition-group"
                >
                  <template #default="{ row, rowIndex }">
                    <tr class="border-b border-gray-200 divide-x">
                      <td class="relative w-10 px-6 border-l sm:w-8 sm:px-8">
                        <div class="absolute inset-y-0 right-0 w-0.5 bg-green-600"></div>
  
                        <input
                          type="checkbox"
                          class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 rounded right-4 top-1/2 focus:ring-green-500 sm:right-6"
                        />
                      </td>
  
                     
                      <td
                        class="relative px-6 py-2 text-sm text-center text-indigo-500 border-l ltr whitespace-nowrap"
                      >
   <RouterLink to="/view-detail-payout">
                        {{ row.orderId }}
  </RouterLink>
                      </td>
  
  
  
                      <td class="flex px-6 py-2 text-right whitespace-nowrap">
                            <div class="w-8 h-8 avatar avatar-sm me-2">
                              <img :src="row.orderImage" alt="Avatar" class="rounded-full w-8 h-8" />
                            </div>
                            <div class="pr-3  flex items-center">
                        
                                <div class="text-base font-semibold text-gray-500">
                                  {{ row.orderName }}
                                </div>
                  
  
                           
                            </div>
                          </td>
  
                      <td>
                        <span
                          class="relative flex items-center justify-center leading-tight text-center text-green-500 font-extralight"
                        >
                          <div v-if="row.isPayed == true">
                            <Tooltip tag="span" tooltip="پرداخت شده">
                              <i
                                class="text-green-500 fa-thin fa-file-invoice text-[25px]"
                              ></i>
                            </Tooltip>
                          </div>
  
                          <div v-else="row.isPayed == false">
                            <Tooltip tooltip="پرداخت نشده">
                              <i
                                class="text-red-500 fa-thin fa-file-invoice text-[25px]"
                              ></i>
                            </Tooltip>
                          </div>
                        </span>
                      </td>
  
                      <td class="px-6 py-2 text-right whitespace-nowrap">
                        <div class="flex items-center justify-center text-center">
                          <span
                            v-if="row.isPayed == true"
                            class="w-full py-1 badge bg-green-100 text-green-500 rounded-md"
                            >پرداخت شده</span
                          >
  
                          <span v-else class="w-full py-1  bg-red-100 text-red-500 rounded-md"
                            > پرداخت نشده</span
                          >
                        </div>
                      </td>
  
                      <td class="px-6 py-2 text-center whitespace-nowrap">
                        {{ row.orderDueDate }}
                      </td>
  
                      <td class="px-6 py-2 text-center whitespace-nowrap">
                        {{ row.orderTotal }} {{ row.orderCurrency }}
                      </td>
  
                      <td class="px-6 py-2 text-center whitespace-nowrap">
                        {{ row.orderPursant }} 
                      </td>
  
                   
                    </tr>
                  </template>
                </dataset-item>
              </table>
  
              <nav
                class="items-center justify-between block pt-4 pb-4 mx-4 lg:flex"
                aria-label="Table navigation"
              >
                <dataset-info />
                <dataset-pager />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </dataset>
  
    <div class="bg-white border border-gray-200 rounded-lg card mb-6">
      <div class="header border-b flex items-center justify-between p-4">
            <h5 class="card-header font-semibold text-indigo-500">جدول زمانی پرداخت ها</h5>
            <button type="button" class="all bg-indigo-50 text-indigo-500 px-3 py-2 rounded-lg hover:bg-indigo-500 hover:transition-all duration-500 hover:duration-300 hover:text-white">
              مشاهده همه
            </button>
  
      </div>
  
      <div class="pb-0 card-body p-6">
        <ul class="mb-0 timeline space-y-2">
          <li class="timeline-item timeline-item-transparent">
            <span class="timeline-point timeline-point-primary"></span>
            <div class="timeline-event">
              <div class="mb-1 timeline-header flex justify-between">
                <h6 class="mb-0">تسویه حساب شماره :<span class="text-green-500 font-semibold">2792354</span></h6>
                <small class="text-muted">12 دقیقه پیش</small>
              </div>
              <small class="mb-2 text-xs text-gray-500">درگاه بانک ملت</small>
            </div>
          </li>
  
          <li class="timeline-item timeline-item-transparent">
            <span class="timeline-point timeline-point-primary"></span>
            <div class="timeline-event">
              <div class="mb-1 timeline-header flex justify-between">
                <h6 class="mb-0">تسویه حساب شماره :<span class="text-green-500 font-semibold">2792354</span></h6>
                <small class="text-muted">12 دقیقه پیش</small>
              </div>
              <small class="mb-2 text-xs text-gray-500">درگاه بانک ملت</small>
            </div>
          </li>
          <li class="timeline-item timeline-item-transparent">
            <span class="timeline-point timeline-point-primary"></span>
            <div class="timeline-event">
              <div class="mb-1 timeline-header flex justify-between">
                <h6 class="mb-0">تسویه حساب شماره :<span class="text-green-500 font-semibold">2792354</span></h6>
                <small class="text-muted">12 دقیقه پیش</small>
              </div>
              <small class="mb-2 text-xs text-gray-500">درگاه بانک ملت</small>
            </div>
          </li>
  
          <li class="timeline-item timeline-item-transparent">
            <span class="timeline-point timeline-point-primary"></span>
            <div class="timeline-event">
              <div class="mb-1 timeline-header flex justify-between">
                <h6 class="mb-0">تسویه حساب شماره :<span class="text-green-500 font-semibold">2792354</span></h6>
                <small class="text-muted">12 دقیقه پیش</small>
              </div>
              <small class="mb-2 text-xs text-gray-500">درگاه بانک ملت</small>
            </div>
          </li>
        
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import orders from "@/assets/payouts.json";
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
        Addorder: false,
        Status: false,
        Count: false,
        Expanded: null,
        Discount: false,
        paymentsList: [],
        filteredCounts: {
          paiedCount: 0,
          unpaiedCount: 0,
          allCount: 0,
        },
        filteredContainer: [],
        cols: [
          {
            name: "شناسه پرداخت",
            field: "orderId",
            sort: "",
            hasIcon: "orderId",
          },
          {
            name: "درگاه پرداخت",
            field: "orderName",
            sort: "",
            hasIcon: "orderName",
          },
  
          {
            name: "",
            field: "orderTrendUp",
            sort: "",
            hasIcon: "orderTrendUp",
          }, 
        
          {
            name: "وضعیت",
            field: "orderStatus",
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
            name: "مبلغ پرداختی خالص",
            field: "orderTotal",
            sort: "",
            hasIcon: "orderTotal",
          }, {
            name: "کد رهگیری",
            field: "orderPursant",
            sort: "",
            hasIcon: "orderPursant",
          },
          
        ],
      };
    },
  
    mounted() {
      this.paymentsList = orders;
      this.filteredContainer = orders;
  
      this.filterStart();
    },
  
    methods: {
      openSubMobileTable(stateId) {
        if (stateId == this.mobileSubmenuIndex) this.mobileSubmenuIndex = null;
        else this.mobileSubmenuIndex = stateId;
      },
      doFilter(type) {
        if (type == "paied") {
          this.filteredContainer = orders;
          const filterpayments = this.filteredContainer.filter((val, index) => {
            return val.isPayed == true;
          });
  
          this.paymentsList = filterpayments;
        } else if (type == "unpaied") {
          this.filteredContainer = orders;
          const filterpayments = this.filteredContainer.filter((val, index) => {
            return val.isPayed == false;
          });
  
          this.paymentsList = filterpayments;
        } else {
          this.paymentsList = orders;
        }
      },
      filterStart() {
        const filterpayments = orders.filter((val, index) => {
          return val.isPayed == true;
        });
  
        if (filterpayments.length) this.filteredCounts.paiedCount = filterpayments.length;
  
        const unpaids = this.filteredContainer.filter((val, index) => {
          return val.isPayed == false;
        });
  
        if (unpaids.length) this.filteredCounts.unpaiedCount = unpaids.length;
  
        this.filteredCounts.allCount = orders.length;
      },
  
      click(event, i) {
        let toset;
        const sortEl = this.cols[i];
  
        if (!event.shiftKey) {
          this.cols.forEach((o) => {
            if (o.field !== sortEl.field) {
              o.sort = "";
            }
          });
        }
        if (!sortEl.sort) {
          toset = "asc";
        }
        if (sortEl.sort === "desc") {
          toset = event.shiftKey ? "" : "asc";
        }
        if (sortEl.sort === "asc") {
          toset = "desc";
        }
        sortEl.sort = toset;
      },
    },
    computed: {
      sortBy() {
        return this.cols.reduce((acc, o) => {
          if (o.sort) {
            o.sort === "asc" ? acc.push(o.field) : acc.push("-" + o.field);
          }
  
          return acc;
        }, []);
      },
    },
  };
  </script>
  