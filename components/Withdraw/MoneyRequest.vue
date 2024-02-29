<template>
    <div class="grid gap-4   font-medium lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa">
    
    
        <div class="col-span-1 row-span-1 p-6 bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600 bg-indigo-500 rounded-lg">
            <div class="flex items-start content-between justify-between">
                <div class="content-left">
                    <span class="text-sm text-white">مجموع درآمد کسب شده</span>
                    <div class="flex items-center my-1">
                        <h4 class="mb-0 ml-2 font-bold text-3xl text-white">215000 تومان</h4>
                    </div>
                    <span class="text-xs text-white">درآمد در انتظار تایید</span>
                </div>
                <span class="flex items-center justify-center w-8 h-8 p-2 text-indigo-500 bg-indigo-100 rounded badge">
                          <i class="fa-duotone fa-dollar"></i>
                        </span>
            </div>
        </div>
    
        <div class="col-span-1 row-span-1 p-6 border rounded-lg cursor-pointer" v-on:click.prevent="withdrawModal = !withdrawModal">
            <div class="flex-col justify-center items-center w-full text-center">
                <div class="text-center justify-center flex">
                    <span class="flex items-center justify-center w-16 h-16 p-2 text-green-500 bg-green-100 rounded badge">
                            <i class="fa-duotone fa-plus"></i>
                        </span>
                </div>
    
                <div class="content-left mt-4">
                    <div class="flex-col items-center my-1">
                        <h4 class="mb-0 ml-2 font-bold text-gray-500">ارسال درخواست برداشت</h4>
                    </div>
    
                </div>
    
            </div>
        </div>
    </div>
    
    <dataset v-slot="{ ds }" :ds-data="withdrawsList" :ds-sortby="sortBy" :ds-sort-as="{ withdrawCreate: isoDateToDate }" :ds-search-in="[
                      'withdrawId',
                      'withdrawTrendUp',
                      'withdrawName',
                      'withdrawStatus',
                      'withdrawCreate',
                      'withdrawMassage',
                      'withdrawTotal',
                      'withdrawAction',
                    ]" :ds-search-as="{ withdrawCreate: searchAsEuroDate }">
        <div class="col-span-12 font-fa">
            <div class="mt-6 mb-6 bg-white border border-gray-200 product-info rounded-xl">
                <div class="relative px-6 py-6 pb-4 m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200">
                    <h6 class="flex items-center gap-1 text-xs antialiased font-semibold leading-normal text-gray-600 font-fa">
                        <i class="fa-duotone fa-dollar-circle text-[20px] !w-5 !h-5 text-teal-500 ml-1"></i>تاریخچه برداشت وجه
                    </h6>
                    <p class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa">
                        از این بخش می توانید تاریخچه برداشت را مدیریت یا حذف نمایید
                    </p>
                </div>
    
                <div class="grid gap-4 px-6 py-6 bg-stripes-purple lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                    <div class="relative flex w-full gap-4">
                        <dataset-show />
                        <div v-on:click.prevent="withdrawModal = !withdrawModal" class="box-border relative z-0 flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-indigo-500 rounded-md cursor-pointer group ease focus:outline-none">
                            <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                            <span class="relative z-20 flex items-center justify-center w-full text-center"><i class="pl-2 text-2xl text-white fa-duotone fa-dollar-circle"></i><span class="w-full"> 
                                  درخواست برداشت وجه</span></span>
                        </div>
                    </div>
                    <dataset-status @doFilterStatus="doFilter($event)" />
    
    
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
                                                <dataset-item tag="ul" class="bg-white divide-gray-200 last:border-b" name="fade" is="transition-group">
                                                    <template #default="{ row, rowIndex }">
                                            <li
                                              class="flex border-t border-gray-200 divide-gray-200 cursor-pointer items-centerjustify-between "
                                              v-on:click.prevent="openSubMobileTable(row.id)">
                                              <div class="flex px-6 py-2 text-right whitespace-nowrap">
                                                <div class="w-12 h-12 avatar avatar-sm me-2">
                                                  <img :src="row.withdrawImage" alt="Avatar" class="rounded-full" />
                                                </div>
                                                <div class="pr-3">
                                                  <div class="text-base font-semibold">
                                                    {{ row.withdrawName }}
                                                  </div>
                
                                                  <div class="font-normal text-gray-500">
                                                    {{ row.withdrawEmail }}
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
                                                                  #{{ row.withdrawId }}
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
                                                                  {{ row.withdrawCreate }}</span>
                                                              </div>
                                                            </div>
                
                                                            <div class="flex px-6 py-3 text-right border-b whitespace-nowrap">
                                                              <div class="flex items-center text-base font-semibold">
                                                                تاریخ پرداخت:
                                                                <span class="mr-1 font-medium text-gray-400">{{ row.withdrawMassage }}</span>
                                                              </div>
                                                            </div>
                
                                                            <div class="flex px-6 py-3 text-right border-b whitespace-nowrap">
                                                              <div class="flex items-center text-base font-semibold">
                                                                مجموع:
                                                                <span class="mr-1 font-medium text-gray-400">
                                                                  {{ row.withdrawTotal }}
                                                                  {{ row.withdrawCurrency }}</span>
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
                                                            
                                                                      <div
                                                                        class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110">
                                                                        <i class="fa-thin fa-edit text-[18px] !w-5 !h-5 font-normal"></i>
                                                                      </div>
                                                               
                
                                                                    <div
                                                                      class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110">
                                                                      <i
                                                                        class="fa-thin fa-download text-[18px] !w-5 !h-5 font-normal"></i>
                                                                    </div>
                                                                
                                                                      <button
                                                                        class="w-4 ml-4 cursor-pointer hover:text-gray-500 hover:scale-110">
                                                                        <i class="fa-solid fa-eye text-[18px] !w-5 !h-5 font-normal"></i>
                                                                      </button>
                                                                
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

              <div class="relative hidden overflow-x-auto lg:block Desktop-Table">
             


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
            <input type="checkbox" class="absolute w-4 h-4 -mt-2 text-green-600 border-gray-300 rounded right-4 top-1/2 focus:ring-green-500 sm:right-6" />
        </td>
    
        <td class="relative px-6 py-2 font-bold text-right text-indigo-500 border-l ltr whitespace-nowrap">
            #{{ row.withdrawId }}
    
    
        </td>
    
    
        <td class="px-6 py-2 text-center">
    
    
    
    
            <div class="text-base font-semibold  whitespace-nowrap  text-center">
                {{ row.withdrawName }}
            </div>
    
        </td>
    
        <td class="px-6 py-2 text-right whitespace-nowrap">
            <div class="flex items-center justify-center text-center">
                <span v-if="row.isPayed == true" class="w-full py-1 badge bg-green-100 text-green-500 rounded-md text-sm">پرداخت شده</span>
                <span v-else class="w-full py-1 badge bg-red-100 text-red-500 rounded-md text-sm">پرداخت نشده</span>
            </div>
        </td>
    
        <td class="px-6 py-2 text-center whitespace-nowrap">
            {{ row.withdrawCreate }}
        </td>
    
        <td class="px-6 py-2 text-right">
            {{ row.withdrawMassage }}
        </td>
    
        <td class="px-6 py-2 text-center whitespace-nowrap">
            {{ row.withdrawTotal }} {{ row.withdrawCurrency }}
        </td>
    
        <td scope="col" class="px-3 py-3 text-center border-l">
            <div class="flex justify-center item-center">
                <div class="w-4 ml-4  cursor-pointer hover:text-gray-500 hover:scale-110">
                    <i class="fa-thin fa-times text-[18px] !w-5 !h-5 text-red-500" :class="row.withdrawDelete"></i>
                </div>
    

    
    
    
                <div v-on:click.prevent="ViewwithdrawModal = !ViewwithdrawModal" class="w-4 ml-4  cursor-pointer hover:text-gray-500 hover:scale-110">
                    <i class="fa-light fa-info-circle text-[18px] !w-5 !h-5" :class="row.withdrawEye"></i>
                </div>
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


  <transition-group name="modal">
        <div v-if="withdrawModal" class="fixed top-0 left-0 z-[1000] flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div v-on:click.prevent="withdrawModal = !withdrawModal" class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div class="relative rounded-lg shadow-lg shadow-gray-300/40    bg-white w-full  m-auto left-0 right-0 max-w-xl">
                <button v-on:click.prevent="withdrawModal = !withdrawModal" type="button" class="z-[1] absolute w-8 h-8 text-gray-400 transform translate-x-5 -translate-y-3 transition-transform hover:translate-x-4 hover:transition-transform hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center">
                        <i class="text-lg fa fa-times"></i>
                      </button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <div class="text-xl font-semibold block text-gray-500">ارسال درخواست برداشت</div>
                        <div class="mt-2 text-gray-400">جهت درخواست برداشت وجه لطفا مبلغ را وارد کنید</div>
                    </div>
                </div>
    
    
                <div class="font-fa w-full p-6">
                    <div class="w-full p-2">
    
    
    
                        <div class="flex items-center py-2">
                            <div class="relative w-full"><label for="send-withdraw-request" class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>مبلغ قابل برداشت</span></label>
                                <div class="mt-1 input">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i class="fa-duotone fa-dollar text-indigo-500 h-5 w-5 flex leading-[1px] pr-1"></i></div><input type="text" class="block w-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            value="178000 تومان"><span class="inline-flex items-center mr-1">
      
                                                           
                                        </span>
                                    </div>

                                  </div>
                            </div>
                        </div>

                        <div class="flex items-center py-2">
                            <div class="relative w-full"><label for="send-withdraw-request" class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>پیام شما</span></label>
                                <div class="mt-1 input">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                     <textarea type="text" class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-28"
                                            placeholder="پیام خود را بنویسید"></textarea><span class="inline-flex items-center mr-1">
      
                                                           
                                        </span>
                                    </div>

                                  </div>
                            </div>
                        </div>
    
    
    
    
                        <div  class="mt-4 box-border relative z-0 flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-indigo-500 rounded-md cursor-pointer group ease focus:outline-none">
                            <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span><span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                            <span
                                class="relative z-20 flex items-center justify-center w-full text-center"><i class="pl-2 text-2xl text-white fa-duotone fa-dollar-circle"></i><span class="w-full"> 
                        ارسال درخواست</span></span>
                        </div>
    
    
    
                    </div>
                </div>
            </div>
        </div>
    </transition-group> 


 


    <transition-group name="modal">
        <div v-if="ViewwithdrawModal" class="fixed top-0 left-0 z-[1000] flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div v-on:click.prevent="ViewwithdrawModal = !ViewwithdrawModal" class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div class="relative rounded-lg shadow-lg shadow-gray-300/40    bg-white w-full  m-auto left-0 right-0 max-w-xl">
                <button v-on:click.prevent="ViewwithdrawModal = !ViewwithdrawModal" type="button" class="z-[1] absolute w-8 h-8 text-gray-400 transform translate-x-5 -translate-y-3 transition-transform hover:translate-x-4 hover:transition-transform hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center">
                        <i class="text-lg fa fa-times"></i>
                      </button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <div class="text-xl font-semibold block text-gray-500">جزپیات درخواست برداشت</div>
                    </div>
                </div>
    
    
                <div class="font-fa w-full">
                    <div class="w-full p-2">
    
                      <div class="w-full mx-auto mt-2">
    <div class="inline-block w-full input">
        <div class="relative rounded-md p-4">
            <table class="border-collapse border border-slate-200 w-full">
                <tbody>
                    <tr>
                        <td class="border border-slate-200 p-3">کد ملی</td>
                        <td class="border-slate-200 p-3 font-semibold flex items-center justify-between">
                            <div class="flex items-center justify-between w-full">
                                <span class="text-gray-500">2790113890 </span>
                                 </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-slate-200 p-3"> پیام شما</td>
                        <td class="border border-slate-200 p-3 font-semibold">
                            <div class="flex items-center justify-between w-full">
                                <span class="text-gray-500">
                                  لطفا مبلغ 35 هزار تومان به حساب من واریز کنید
                                </span>
                               </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-slate-200 p-3">مبلغ</td>
                        <td class="border border-slate-200 p-3 text-gray-500">
                            <div class="flex items-center justify-between w-full">
                                <span class="tracking-widest"> 578000 تومان</span>
                             </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border-l border-slate-200 p-3">وضعیت </td>
                        <td class="border-slate-200 p-3">
                            <div class="flex items-center justify-between w-full">
                                <span class="text-orange-500 cursor-pointer pr-1">در انتظار تایید</span>
                                <!-- <span class="text-green-500 cursor-pointer pr-1">تایید شده</span>
                                <span class="text-cyan-500 cursor-pointer pr-1">در حال پرداخت</span> -->
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

    

    
                    </div>
                </div>
            </div>
        </div>
    </transition-group> 


</template>

<script>
import withdraws from "@/assets/withdraw.json";
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
            withdrawModal: false,
            EditwithdrawModal: false,
            ViewwithdrawModal: false,
            ShowDetailes: false,
            isOpenA: false,
            activeBtn: "",
            Addwithdraw: false,
            Export: false,
            Status: false,
            Count: false,
            Expanded: null,
            Shipping: false,
            Discount: false,
            withdrawsList: [],
            filteredCounts: {
                paiedCount: 0,
                unpaiedCount: 0,
                allCount: 0,
            },
            filteredContainer: [],
            cols: [{
                    name: "شناسه",
                    field: "withdrawId",
                    sort: "",
                    hasIcon: "withdrawId",
                },
                {
                    name: "نام درخواست",
                    field: "withdrawName",
                    sort: "",
                    hasIcon: "withdrawName",
                },
                {
                    name: "وضعیت",
                    field: "withdrawStatus",
                    sort: "",
                    hasIcon: "withdrawStatus",
                },
                {
                    name: "تاریخ درخواست",
                    field: "withdrawCreate",
                    sort: "",
                    hasIcon: "withdrawStatus",
                },
                {
                    name: "پیام",
                    field: "withdrawMassage",
                    sort: "",
                    hasIcon: "withdrawMassage",
                },
                {
                    name: "مبلغ",
                    field: "withdrawTotal",
                    sort: "",
                    hasIcon: "withdrawTotal",
                },
                {
                    name: "عملیات",
                    field: "withdrawAction",
                    sort: "",
                    hasIcon: "withdrawAction",
                },
            ],
        };
    },

    mounted() {
        this.withdrawsList = withdraws;
        this.filteredContainer = withdraws;

        this.filterStart();
    },

    methods: {
        openSubMobileTable(stateId) {
            if (stateId == this.mobileSubmenuIndex)
                this.mobileSubmenuIndex = null
            else
                this.mobileSubmenuIndex = stateId
        },
        doFilter(type) {
            if (type == "paied") {
                this.filteredContainer = withdraws;
                const filterwithdraws = this.filteredContainer.filter((val, index) => {
                    return val.isPayed == true;
                });

                this.withdrawsList = filterwithdraws;
            } else if (type == "unpaied") {
                this.filteredContainer = withdraws;
                const filterwithdraws = this.filteredContainer.filter((val, index) => {
                    return val.isPayed == false;
                });

                this.withdrawsList = filterwithdraws;
            } else {
                this.withdrawsList = withdraws;
            }
        },
        filterStart() {
            const filterwithdraws = withdraws.filter((val, index) => {
                return val.isPayed == true;
            });

            if (filterwithdraws.length)
                this.filteredCounts.paiedCount = filterwithdraws.length;

            const unpaids = this.filteredContainer.filter((val, index) => {
                return val.isPayed == false;
            });

            if (unpaids.length) this.filteredCounts.unpaiedCount = unpaids.length;

            this.filteredCounts.allCount = withdraws.length;
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

.modal-mask {
    transition: opacity 0.3s ease;
}

.modal-container {
    max-height: calc(100% - 48px);
    width: calc(100% - 48px);
    max-width: calc(100% - 48px);
    margin: 24px;
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: #fff;
    transition: all 0.3s ease;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
