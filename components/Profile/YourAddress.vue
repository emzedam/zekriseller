<template>
<!-- ============== آدرس شما====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <span class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></span>
         <span class="leading-3"> آدرس شما</span>
      </h2>
      <div class="p-4 font-medium text-gray-500 w-full border-b flex items-center justify-between">
         <div class="note">اینجا می‌توانید آدرس‌‌هایتان را ببنید و مدیریت کنید</div>
         <div class="submit-addres">
            <button class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-cyan-500 px-6 py-3 text-white w-full flex items-center rounded-lg justify-center">
               <i class="fa-light fa-plus-circle pl-2 text-xl"></i> افزودن آدرس فروشگاه
            </button>
         </div>
      </div>

      <div class="address-list">
         <ul class="flex flex-col space-y-3">
            <li class="border rounded-lg p-4 m-4 flex justify-between">
               <div class="address flex justify-start">
                  <div class="map-image h-[144px] w-[144px] border rounded-lg relative overflow-hidden"></div>
                  <ul class="flex flex-col space-y-3 pr-2 pt-2">
                     <li class="flex items-center justify-start font-semibold text-lg"><i class="fa-light fa-location-dot px-2"></i><span>تهران</span></li>
                     <li class="flex items-center justify-start font-semibold text-lg"><i class="fa-light fa-location-dot px-2"></i><span>هران، شیخ بهائی، صائب تبریزی شرقی، بین خورشید و شیرازی </span></li>
                     <li class="flex items-center justify-start font-semibold text-lg"><i class="fa-light fa-signs-post px-2"></i><span>58978565454</span></li>
                  </ul>
               </div>
               <div class="button-edit-remove space-y-3 flex flex-col">
                  <button class="relative btn hover:text-bg-500/80 transition-colors duration-500 text-cyan-500 border-cyan-500 border px-6 py-3 hover:bg-cyan-50 w-full flex items-center rounded-lg justify-center">
                     <i class="fa-light fa-edit pl-2 text-xl"></i> ویرایش
                  </button>

                  <button class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-white px-6 py-3 hover:bg-red-50 text-red-500 border border-red-500 hover:border w-full flex items-center rounded-lg justify-center">
                     <i class="fa-light fa-trash pl-2 text-xl"></i> حذف
                  </button>
               </div>
            </li>
         </ul>
      </div>
   </div>
</div>

<!-- ============== آدرس شما======================= -->

</template>