<template>
 <!-- ==============  مالی====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <span class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></span>
         <span class="leading-3">اطلاعات مالی</span>
      </h2>
      <p class="p-4 font-medium text-gray-500 w-full border-b">حساب بانکی باید به نام مالک پنل باشد</p>
      <div class="flex flex-col lg:grid lg:grid-cols-2">
         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">شماره کارت</p>
                  <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50">در حال بررسی</div>
               </div>
               <p class="font-semibold text-gray-900 mt-2 ltr text-right text-lg">5047 0610 7471 2999</p>
            </div>
            <div class="cursor-pointer">
               <div class="flex">
                  <span class="!hidden"> <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                  <span class=""><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
               </div>

               <span class="hidden lg:inline-block"> </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">صاحب یا صاحبان حساب</p>
               </div>
               <p class="font-medium text-gray-700 mt-2 text-sm">نام صاحب حساب پس از تایید شماره کارت/شماره شبا به صورت خودکار پر می‌شود</p>
            </div>
         </div>

         <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l">
            <div>
               <div class="flex items-center">
                  <p class="text-body-1 text-gray-500 ml-1">مشمول مالیات بر ارزش افزوده</p>
               </div>
               <p class="font-medium text-gray-700 font-fa text-sm"><strong class="font-semibold text-xl pl-2">خیر</strong>(در صورت مشمولیت مالیات بر ارزش افزوده، مدارک مربوطه را بارگذاری کنید)</p>
            </div>
            <div class="cursor-pointer">
               <span class="hidden lg:inline-block">
                  <div class="flex">
                     <i class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i>
                     <!-- موقع ویرایش این ایکون نمایش داده شود برای مثال فرض کنید شماره هنوز وارد نشده به جای ایکون ویرایش ایکون پلاس نمایش داده می شود -->
                     <span class="!hidden"><i class="fa-light fa-edit hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"></i></span>
                  </div>
               </span>
               <span class="inline-block lg:hidden">
                  <div class="flex text-gray-400"><i class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"></i></div>
               </span>
            </div>
         </div>
      </div>
   </div>
</div>

<!-- ============== مالی======================= -->
   
</template>