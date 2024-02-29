<template>
    <div class="border rounded border-lg">
        <div class="flex justify-between relative px-6 py-4  m-0 overflow-hidden text-gray-900 bg-transparent border-b shadow-none bg-clip-border border-b-gray-200">
            <div class="title flex-col items-center">
                <h6 class="flex items-center gap-1 text-md antialiased font-semibold leading-normal text-gray-900 font-fa">
                    سفارشات </h6>
                <p class="flex items-center gap-1 pt-2 text-sm antialiased font-normal leading-normal text-gray-500 font-fa">
                    این ماه</p>
            </div>
            <div class="icon flex items-center justify-center">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
    
        </div>
    
    
        <div class="space-y-2 p-6">
            <div class="row items-center mb-4 flex py-1">
                <div class="text-right ml-4 text-4xl">
                    <i class="fa-thin fa-bag-shopping-plus"></i>
                </div>
                <div class="col">
                    <p class="small text-muted mb-0">
                        <span class="fe fe-arrow-down fe-12"></span>
                        <span class=" text-gray-900 font-semibold">سفارش جدید</span>
                    </p>
                    <h3 class="mb-0 text-2xl text-gray-500">
                        4
                    </h3>
                </div>
            </div>
    
            <div class="row items-center mb-4 flex py-1">
                <div class="text-right ml-4 text-4xl">
                    <i class="fa-thin fa-bag-shopping-minus"></i>
                </div>
                <div class="col">
                    <p class="small text-muted mb-0">
                        <span class="fe fe-arrow-down fe-12"></span>
                        <span class=" text-gray-900 font-semibold">لغو شده</span>
                    </p>
                    <h3 class="mb-0 text-2xl text-gray-500">
                        40
                    </h3>
                </div>
            </div>
    
    
            <div class="row items-center mb-4 flex py-1">
                <div class="text-right ml-4 text-4xl">
                    <i class="fa-thin fa-person-carry-box"></i>
                </div>
                <div class="col">
                    <p class="small text-muted mb-0">
                        <span class="fe fe-arrow-down fe-12"></span>
                        <span class=" text-gray-900 font-semibold">در حال تحویل</span>
                    </p>
                    <h3 class="mb-0 text-2xl text-gray-500">
                        4
                    </h3>
                </div>
            </div>
    
    
            <div class="row items-center mb-4 flex py-1">
                <div class="text-right ml-4 text-4xl">
                    <i class="fa-thin fa-box-check"></i>
                </div>
                <div class="col">
                    <p class="small text-muted mb-0">
                        <span class="fe fe-arrow-down fe-12"></span>
                        <span class=" text-gray-900 font-semibold">تحویل داده شده</span>
                    </p>
                    <h3 class="mb-0 text-2xl text-gray-500">
                        4
                    </h3>
                </div>
            </div>
    
        </div>
    
    
    </div>
</template>