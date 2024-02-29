<template>

    <aside :class="isOpen == true ? 'translate-x-0' : 'translate-x-96'"  class="fixed inset-0 z-50 h-screen m-0 transition-transform duration-300 border-l border-gray-200 rounded-none font-fa bg-white w-96">
      <div class="flex items-center justify-between p-4 border-b">
        <h3 id="offcanvasAddUserLabel" class="text-gray-600">
          افزودن درگاه
        </h3>
        <button
        @click="closeInvoiceSideBar()"
          type="button"
          class="flex items-center justify-center close"
          ref="close"
        >
          <i class="!text-gray-400 text-2xl fa-duotone fa-rectangle-xmark"></i>
        </button>
      </div>

 

      <form class="px-6 pt-3 pb-6 font-normal add-user">
            <div class="flex justify-between p-3 mt-3 text-gray-700 bg-gray-100 rounded-lg">
            <span> صورتحساب فاکتور</span> <span>500000 تومان</span>
            </div>
        <div class="mt-3">
          <label
            for="last-name"
            class="flex pb-1 pr-1 text-sm font-normal text-gray-700"
            ><span>مبلغ قابل پرداخت</span></label
          >
          <div class="flex rounded-md">
            <div
              class="relative flex items-stretch flex-grow focus-within:z-10"
            >
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              >
                <i
                  class="fa-duotone fa-money-bill text-cyan-500 h-4 w-5 flex leading-[1px] pr-1"
                ></i>
              </div>
              <input
                type="text"
                class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                placeholder="مبلغ قابل پرداخت"
              />
            </div>
          </div>
        </div>

        <div class="relative mt-3">
          <label
            for="last-name"
            class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
          >
            <span>تاریخ پرداخت</span>
          </label>
          <div class="flex mt-1 rounded-md">
            <div
              class="relative flex items-stretch flex-grow focus-within:z-10"
            >
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              >
                <i
                  class="fa-duotone fa-calendar-days text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                ></i>
              </div>
              <input
                type="text"
                class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                placeholder="1401/02/28"
              />

            </div>
          </div>
        </div>

   


        <div class="mt-3">
          <label
            for="last-name"
            class="flex pb-1 pr-1 text-sm font-normal text-gray-700"
            ><span>انتخاب روش پرداخت</span></label
          >
          <div class="flex rounded-md">
            <div class="relative w-full focus-within:z-10">
              <button
                type="button"
                class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-normal rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
              >
                <i
                  class="fa-duotone fa-credit-card text-cyan-500 h-5 w-5 flex leading-[1px]"
                ></i>
                <span class="w-full pr-2 text-right"> انتخاب روش پرداخت</span>
                <i
                  class="fa-duotone fa-angle-down text-[15px] ml-1 w-4 leading-[15px]"
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
                      />
                      <label
                        for="checkbox-item-11"
                        class="flex items-center justify-between w-full py-2 mr-2 text-sm font-normal text-gray-500 rounded"
                      >
                        <span class="flex items-center w-full pr-2 text-right"
                          >نقدی</span
                        >
                        <i
                          class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
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
                        class="flex items-center justify-between w-full py-2 mr-2 text-sm font-normal text-gray-500 rounded"
                      >
                        <span class="flex items-center w-full pr-2 text-right"
                          >واریز از طریق بانک</span
                        >
                        <i
                          class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
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
                        class="flex items-center justify-between w-full py-2 mr-2 text-sm font-normal text-gray-500 rounded"
                      >
                        <span class="flex items-center w-full pr-2 text-right"
                          >کارت به کارت</span
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

     <div class="mt-3">
          <label
            for="last-name"
            class="flex pb-1 pr-1 text-sm font-normal text-gray-700"
            ><span>یادداشت فاکتور</span></label
          >
          <div class="flex rounded-md">
            <div
              class="relative flex items-stretch flex-grow focus-within:z-10"
            >
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              >
                <i
                  class="fa-duotone fa-note text-cyan-500 h-4 w-5 flex leading-[1px] pr-1"
                ></i>
              </div>
              <textarea
                type="text"
                class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                placeholder="یادداشت"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 pt-4 mt-4">
          <button
            class="col-span-1 box-border relative z-0 inline-flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center"
              ><i class="pl-2 text-2xl text-white fa-duotone fa-user-plus"></i
              ><span class="w-full">ارسال فاکتور</span></span
            >
          </button>
          <button
@click="closeInvoiceSideBar()"
          type="button"
            class="col-span-1 box-border relative z-0 inline-flex items-center justify-center w-full p-2.5 overflow-hidden font-medium text-gray-400 transition-all duration-300 bg-gray-200 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex items-center justify-center w-full text-center"
              ><i
                class="pl-2 text-2xl text-gray-500 fa-duotone fa-arrow-right"
              ></i
              ><span class="w-full">انصراف</span></span
            >
          </button>
        </div>
      </form>


    </aside>
       <div class="block overlay backdrop-blur-sm bg-gray-200/20 " ref="overlay" :class="isOpen == true ? 'active' : ''" @click="closeInvoiceSideBar()">
   </div>
</template>

<script>
export default {
  data() {
    return {
      submenuIndex: null,
    }
    },
    mounted() {
        // console.log(this.isOpen);
    },
    emits: ["closeInvoiceSideBar"],
    props: {
        isOpen: {
           required: true,
           type:[Boolean] 
        }
    },

    methods: {
    closeInvoiceSideBar(){
        this.$emit('closeInvoiceSideBar' , false)
    },

    openSubMenu(index) {
      if (this.submenuIndex==index) {
        this.submenuIndex=null
      } else {
        this.submenuIndex=index
      }
        },

   


  },
}


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

.overlay.active{
  z-index: 49;
  opacity: 1;
  transition: opacity 0.3s ease;
}
</style>