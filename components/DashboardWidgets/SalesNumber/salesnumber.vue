<template>
    <div class="border rounded border-lg">
        <div class="flex justify-between relative px-6 py-4  m-0 overflow-hidden text-gray-900 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200">
            <div class="title flex-col items-center">
                <h6 class="flex items-center gap-1 text-md antialiased font-semibold leading-normal text-gray-900 font-fa">
                    تعداد فروش (ناخالص)</h6>   
            </div>   
        </div>   
        <div class="stock">
            <ul class="divide-y">
                <li class="items-center justify-between p-6">
                    <div class="stocks font-semibold text-gray-500"> تعداد کالای فروش رفته هفته جاری</div>
                    <div class="text-2xl font-bold  text-green-500">5 عدد</div>
                </li>
    
                <li class="items-center justify-between p-6">
                    <div class="stocks font-semibold text-gray-500">تعداد کالای فروش رفته هفته گذشته </div>
                    <div class="text-2xl font-bold">6 عدد</div>
                </li>
    
                <li class="items-center justify-between p-6">
                    <div class="stocks font-semibold text-gray-500">تعداد کالای فروش رفته ماه گذشته</div>
                    <div class="text-2xl font-bold">7 عدد</div>
                </li>
            </ul>   
        </div>   
    </div>
</template>