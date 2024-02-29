<template>
 <!-- ==============  مدارک====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <span class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></span>
         <span class="leading-3"> مدارک</span>
      </h2>

      <div class="p-4 font-medium text-gray-500 w-full border-b flex items-center justify-between">
         <div class="note">هنوز مدارک خود را اضافه نکرده‌اید. مدارک شما توسط کارشناسان پتومن بررسی می‌شود</div>
         <div class="submit-addres">
            <button class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-cyan-500 px-6 py-3 text-white w-full flex items-center rounded-lg justify-center">
               <i class="fa-light fa-upload pl-2 text-xl"></i>بارگذاری مدارک
            </button>
         </div>
      </div>

      <div class="flex items-center justify-center my-4 hidden">
         <!-- بعد اپلود این قسمت هیدن بشه -->
         <img src="https://seller.digikala.com/pwa/b1faa63bae167419de07.png" class="w-44" />
      </div>

      <div class="uploads-list grid grid-cols-4">
         <div class="item w-full col-span-4 sm:col-span-2 p-4">
            <div class="flex gap-4 items-center justify-start w-full">
               <img src="/_nuxt/assets/images/seller.png" class="h-24 w-24 rounded-lg border" />

               <div class="space-y-2">
                  <span class="font-semibold">کارت ملی</span>
                  <div class="rounded-lg px-2 text-caption-strong text-blue-500 bg-blue-50">در حال بررسی</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<!-- ============== مدارک======================= -->
   
</template>