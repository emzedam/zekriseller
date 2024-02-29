<template>
  <div class="col-span-12 mt-6 mb-2 lg:col-span-8">
    <div
    class="relative border border-gray-200 rounded-lg card h-[72vh] overflow-y-auto no-scrollbar scrollbar scrollbar-thumb-custom scrollbar-track-custom-light"
  >
    <div
      class="sticky top-0 z-10 px-6 py-6 m-0 overflow-hidden text-gray-700 bg-transparent bg-white border-b shadow-none bg-clip-border border-b-gray-200"
    >
      <div
        class="grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1"
      >
        <div class="w-full">
     <div class="flex mt-1 rounded-md">
<div class="relative flex justify-end w-full"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><i class="fa-duotone fa-search text-[22px] m w-5 h-5 text-gray-500 leading-[15px]"></i></div><input type="search" class="block w-full p-2 pl-10 text-sm font-normal text-gray-900 border border-gray-200 rounded-lg focus:ring-cyan-500 focus:border-cyan-500" placeholder="جستجو..."></div>

          </div>
        </div>
        <div class="w-full">
    <div class="flex mt-1 rounded-md">
            <div class="relative w-full focus-within:z-10">
              <button
                type="button"
                class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
              >
                <i
                  class="fa-duotone fa-list-check text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                ></i
                ><span class="w-full pr-2 text-right"
                  >همه دسته بندی ها</span
                ><i
                  class="fa-duotone fa-angle-down text-[15px] ml-1 w-3 h-3 leading-[15px]"
                ></i>
              </button>
              <div class="z-10 hidden w-full mt-2 bg-white border rounded-lg">
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
                          >ارسال ایمیل جزئیات فاکتور / سفارش به مشتری</span
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
                        ><span class="flex items-center w-full pr-2 text-right"
                          >ارسال مجدد اطلاع سفارش جدید </span
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
                          ارسال اس ام اس لینک فاکتور</span
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
        <div class="w-full">
 <div class="flex mt-1 rounded-md">
            <div class="relative w-full focus-within:z-10">
              <button
                type="button"
                class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
              >
                <i
                  class="fa-duotone fa-list-check text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                ></i
                ><span class="w-full pr-2 text-right"
                  >همه برندها</span
                ><i
                  class="fa-duotone fa-angle-down text-[15px] ml-1 w-3 h-3 leading-[15px]"
                ></i>
              </button>
              <div class="z-10 hidden w-full mt-2 bg-white border rounded-lg">
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
                          >ارسال ایمیل جزئیات فاکتور / سفارش به مشتری</span
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
                        ><span class="flex items-center w-full pr-2 text-right"
                          >ارسال مجدد اطلاع سفارش جدید </span
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
                          ارسال اس ام اس لینک فاکتور</span
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
      </div>
    </div>

    <div
      class="grid justify-center gap-4 p-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-8 sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 sm:p-5 bg-[#f2f3f8]"
    >
   

      <div
        class="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out  shadow-md bg-white relative"
        role="button"
        title="Armani Veni Vidi Vici"
      >
        <div class="flex mb-3 md:mb-3.5 relative">
          <span
            ><span
              ><img
                alt="Armani Veni Vidi Vici"
                src="https://dkstatics-public.digikala.com/digikala-products/3bd85c3ab181f3b3c7788ab83f291bc7e96045b6_1686398229.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
                class="object-cover w-full transition duration-200 ease-in bg-gray-300 rounded-md rounded-s-md group-hover:rounded-b-none"
            /></span>
            <div class="absolute top-3.5 right-2">
              <span
                class="bg-cyan-500 text-white text-10px md:text-sm leading-5 rounded-md inline-block px-1 sm:px-1.5 xl:px-2 py-0.5 sm:py-1"
                ><p>
                  موجودی :
                  <span class="hidden sm:inline">452</span>
                </p></span
              >
            </div>

            <div class="absolute bottom-3.5 md:bottom-5 3xl:bottom-7 right-2">
              <span
                class="bg-red-500 text-white text-10px md:text-sm leading-5 rounded-md inline-block px-1.5 sm:px-1.5 xl:px-2 py-0.5 sm:py-1"
                ><p>
                  فروش
                  <span class="hidden sm:inline">ویژه</span>
                </p></span
              >
            </div>
          </span>
        </div>
        <div
          class="w-full overflow-hidden p-2 px-2 md:px-2.5 xl:px-4 h-full flex flex-col"
        >
     <div class="px-3 pb-2">
              <h2
            class="text-sm font-semibold truncate sm:text-sm md:text-base text-heading"
          >
            لباس زمستانه بروجن
          </h2>
            <span class="inline-block text-cyan-500 false">200000 تومان</span>      
        </div>


          <div class="flex-wrap justify-center hidden w-full md:flex">
            <div class="flex w-full">
              <button
                class="flex items-center justify-center w-full h-full gap-2 p-2 text-white bg-cyan-500 rounded-lg btn-effect transition-all-300 text-[13px]"
                type="submit"
              >
                <i class="fa-duotone fa-cart-plus"></i>
                <span class="font-bold text-white uppercase"
                  >افزودن به سبد خرید</span
                >
              </button>
            </div>
          </div>
        </div>

        <div class="absolute top-0 z-10 w-full h-full">
          <button
            class="flex items-center justify-center w-full h-full text-lg transition duration-300 ease-in delay-100 rounded-md bg-slate-900/50 sm:opacity-0 group-hover:opacity-100"
          >
            <i class="text-6xl text-white fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

    




    </div>
  </div> 
  </div>
 
</template>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>