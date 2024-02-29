<template>
    <div class="border rounded border-lg lg:col-span-1">
        <div class="flex justify-between relative px-6 py-4  m-0 overflow-hidden text-gray-700 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200">
            <div class="title flex-col items-center">
                <h6 class="flex items-center gap-1 text-md antialiased font-semibold leading-normal text-gray-900 font-fa">
                    کیف پول </h6>
                <p class="flex items-center gap-1 pt-2 text-sm antialiased font-normal leading-normal text-gray-500 font-fa">
                    مدیریت موجودی کیف پول
                </p>
            </div>
            <div class="icon flex items-center justify-center">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    
        <div class="p-4">
            <div class="bg-green-50/50 flex flex-col flex-middle border rounded-md p-4 text-center border-green-200">
                <span class="text-gray-500 font-medium">
                      موجودی کیف پول شما
                    </span>
                <div class="font-semibold flex  text-center justify-center items-center">
                    <span class="text-center text-3xl ml-2">
                        ۰
                      </span> ریال
                </div>
            </div>
            <div class="flex justify-between mt-6">
                <div class="flex">
                    <span class="icon text-green-500 border border-green-500 w-10 h-10 rounded-lg ml-2 flex items-center justify-center shadow-lg shadow-green-500/10"><i
                          class="fa-light fa-chart-line-up"></i></span>
                    <div>
                        <div class="o-font-size-14 o-text-color-n-500">
                            میزان واریزی
                        </div>
                        <div class="text-sm text-gray-500">
                            در ۳۰ روز گذشته
                        </div>
                    </div>
                </div>
                <div class="text-green-500 font-semibold text-xl">
                    ۰ ریال
                </div>
            </div>
            <div class="flex justify-between mt-6">
                <div class="flex">
                    <span class="icon text-red-500 border border-red-500 w-10 h-10 rounded-lg ml-2 flex items-center justify-center shadow-lg shadow-red-500/10"><i
                          class="fa-light fa-chart-line-down"></i></span>
                    <div>
                        <div class="o-font-size-14 o-text-color-n-500">
                            میزان هزینه کرد
                        </div>
                        <div class="text-sm text-gray-500">
                            در ۳۰ روز گذشته
                        </div>
                    </div>
                </div>
                <div class="font-semibold text-red-500 text-xl">
                    ۰ ریال
                </div>
            </div>
            <div class="flex justify-center items-center w-full mt-6 border-dashed border-t">
                <a href="/wallet/increase-refund/" class="bg-cyan-500 px-8 py-2 text-white rounded-lg shadow-lg shadow-cyan-500/10 mt-4">
                      جزییات کیف پول
                    </a>
            </div>
        </div>
    </div>
</template>