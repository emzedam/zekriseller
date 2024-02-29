<template>
    <!-- ============== اطلاعات فروشگاه====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <span class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></span>
         <span class="leading-3">اطلاعات فروشگاه</span>
      </h2>
      <p class="p-4 font-medium text-gray-500 w-full border-b">برای اینکه فروشگاه شما وجهه بهتری داشته باشد، اطلاعات زیر را تکمیل کنید</p>
      <div class="flex flex-col lg:grid lg:grid-cols-2">
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">وضعیت فروشنده</p>
               </div>
               <p class="font-medium text-gray-700">حقیقی</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block"> </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">کد فروشنده</p>
               </div>
               <p class="font-medium text-gray-700">27895</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block"> </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">نام فروشگاه</p>
                  <div class="rounded-lg px-2 text-caption-strong text-green-500 bg-green-50">تاییدشده</div>
               </div>
               <p class="font-medium text-gray-700">پتو من</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block"> </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">درباره فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700">وارد کنید</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span class="hidden"><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b border-l">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">شماره تلفن ثابت فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700 font-fa">وارد کنید</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span class="hidden"><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">وب‌سایت فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700">وارد کنید</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span class="hidden"><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b border-l">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">روزهای کاری فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700">۱۷، ۲۴ آذر</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex"><i class="fa-light fa-pen-to-square hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">روزهای تعطیل فروشگاه</p>
               </div>
               <p class="font-medium text-gray-700">وارد کنید</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex"><i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 lg:border-l">
            <div class="flex items-center">
               <div class="relative border border-dashed rounded-lg h-16 w-16 flex items-center justify-center text-4xl overflow-hidden ml-4">
                  <i class="fa-solid fa-image p-4 text-cyan-500 opacity-30"></i><i class="fa fa-plus absolute text-xl text-black/50"></i>
               </div>
               <div>
                  <div class="flex items-center">
                     <p class="text-body-1 text-gray-900 ml-1 font-semibold">نماد فروشگاه (لوگو)</p>
                     <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50">در حال بررسی</div>
                  </div>
                  <p class="font-medium text-gray-700 text-sm">اگر لوگو دارید بارگذاری کنید</p>
                  <small class="text-gray-500">250px*250px</small>
               </div>
            </div>

            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex"><i class="fa-light fa-upload hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4">
            <div class="flex items-center">
               <div class="relative border border-dashed rounded-lg h-16 w-28 flex items-center justify-center text-4xl overflow-hidden ml-4">
                  <i class="fa-solid fa-image p-4 text-cyan-500 opacity-30"></i><i class="fa fa-plus absolute text-xl text-black/50"></i>
               </div>
               <div>
                  <div class="flex items-center">
                     <p class="text-body-1 text-gray-900 ml-1 font-semibold">بنر بالای فروشگاه (بنر)</p>
                     <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50">در حال بررسی</div>
                  </div>
                  <p class="font-medium text-gray-700 text-sm">اگر بنر دارید بارگذاری کنید</p>
                  <small class="text-gray-500">1400px*350px</small>
               </div>
            </div>

            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex"><i class="fa-light fa-upload hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
      </div>
   </div>
</div>

<!-- ============== اطلاعات فروشگاه======================= -->
</template>