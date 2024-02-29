<template>
     <div class="grid gap-4 font-medium lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 font-fa">
      <div class="p-6  rounded border-lg bg-gradient-to-l from-indigo-500 to-blue-500 shadow-md shadow-indigo-500/10">
        <div class="flex items-start content-between justify-between">
          <div class="content-left">
            <span class="text-sm text-white">محصولات</span>
            <div class="flex items-center my-1">
              <h4 class="mb-0 ml-2 font-bold text-xl bg-indigo-900/20 px-4 py-1 rounded-md text-white">15</h4>
              <span class="font-bold text-white ltr">(+29%)</span>
            </div>
            <span class="text-xs text-white">مجموع محصولات منتشر شده</span>
          </div>
          <span class="flex items-center justify-center w-8 h-8 p-2 text-white bg-indigo-900/50 rounded  badge">
            <i class="fa-light fa-box-taped"></i>
          </span>
        </div>
      </div>
      <div class="p-6 border rounded border-lg">
        <div class="flex items-start content-between justify-between">
          <div class="content-left">
            <span class="text-sm text-gray-500">سفارشات موفق</span>
            <div class="flex items-center my-1">
              <h4 class="mb-0 ml-2 font-bold">12</h4>
              <span class="font-bold text-green-500 ltr">(+29%)</span>
            </div>
            <span class="text-xs text-gray-500">
              مجموع سفارشات ثبت شده</span>
          </div>
          <span class="flex items-center justify-center w-8 h-8 p-2 text-orange-500 bg-orange-100 rounded border badge">
            <i class="fa-light fa-user-gear"></i>
          </span>
        </div>
      </div>

      <div class="p-6 border rounded border-lg">
        <div class="flex items-start content-between justify-between">
          <div class="content-left">
            <span class="text-sm text-gray-500">جمع فروش</span>
            <div class="flex items-center my-1">
              <h4 class="mb-0 ml-2 font-bold">250,000,000 تومان</h4>
              <span class="font-bold text-green-500 ltr">(+29%)</span>
            </div>
            <span class="text-xs text-gray-500"> جمع درآمد از فروش ناخالص</span>
          </div>
          <span
            class="flex items-center justify-center w-8 h-8 p-2 text-indigo-500 bg-indigo-100 rounded border badge text-2xl">
            <i class="fa-light fa-dollar-sign"></i>
          </span>
        </div>
      </div>

      <div class="p-6 border rounded border-lg">
        <div class="flex items-start content-between justify-between">
          <div class="content-left">
            <span class="text-sm text-gray-500">نظرات مشتریان</span>
            <div class="flex items-center my-1">
              <h4 class="mb-0 ml-2 font-bold">5</h4>
              <span class="font-bold text-green-500 ltr">(+29%)</span>
            </div>
            <span class="text-xs text-gray-500">مجموع نظرات کاربران</span>
          </div>
          <span class="flex items-center justify-center w-8 h-8 p-2 text-red-500 bg-red-100 rounded border badge">
            <i class="fa-light fa-messages"></i>
          </span>
        </div>
      </div>
    </div>
</template>