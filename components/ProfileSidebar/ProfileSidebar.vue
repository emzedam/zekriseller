<template>
    <div class="relative w-full h-full inset-0 z-[100]">
        <!-- bg open -->
        <!-- <span class="fixed bg-gray-900 backdrop-blur-[2px] bg-opacity-30 w-full h-full inset-x-0 top-0 block lg:hidden" @click="NavMenu = !false" :class="NavMenu == false ? 'w-full translate-x-0 transition-opacity' : 'hidden'"></span> -->
        <!-- :class="NavMenu == false ? 'translate-x-0' : 'translate-x-80'"  -->
        <nav class="fixed  w-72 transition-all duration-500 ease-in-out h-screen bg-white/90 dark:bg-gray-800/90 border-l z-[1000] right-0 top-0">
            <div class="h-full overflow-y-auto scrollbars">
                <!--logo-->
                <div class="mh-18 text-center py-5 flex items-center p-3 border-b mb-3">
                    <button class="border-2 border-dashed rounded-lg p-4 items-center justify-center text-cyan-500 w-16 h-16" type="button">
                        <i class="fa fa-plus text-2xl"></i>
                     </button>
                    <div class="py-5 px-2 flex-shrink max-w-full w-full flex justify-start text-right">
                        <div class="font-semibold flex flex-col"><a href="#" class="text-gray-800 dark:text-gray-300 hover:text-cyan-500 flex items-center"><span>محبوب حسین زاده</span><i class="fa-solid fa-badge-check text-cyan-500 pr-1"></i></a><span class="text-sm font-light text-gray-600">فروشنده</span></div>
                    </div>
                </div>
    
    
                <!-- ===============منو سمت راست داشبورد کاربر======================== -->
                <ul class="flex-col flex space-y-4">
                    <NuxtLink to="/profile/business-owner-nformation" class="text-cyan-500">
                        <li class=" p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-between flex">
                            <div class=" flex items-center">
                                <span><i class="fa-light fa-user pl-2 text-xl"></i></span><span>اطلاعات مالک کسب‌وکار</span>
                            </div>
                            <i class="fa-solid fa-chevron-left  pl-2 text-sm text-left block lg:hidden"></i>
                        </li>
                    </NuxtLink>
    
                    <NuxtLink to="/profile/store-information/">
                        <li class=" p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-between flex text-right">
                            <div class="title">
                                <span><i class="fa-light fa-store  pl-2 text-xl"></i></span><span>
                                    اطلاعات فروشگاه</span>
                            </div>
    
    
                            <i class="fa-solid fa-chevron-left  pl-2 text-sm text-left block lg:hidden"></i>
                        </li>
                    </NuxtLink>
    
    
    
    
    
                    <NuxtLink to="/profile/addresses/">
                        <li class=" p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-between flex">
                            <div class="title  flex items-center">
                                <span><i class="fa-light fa-map-location-dot  pl-2 text-xl"></i></span><span>آدرس ها</span>
                            </div>
    
                            <i class="fa-solid fa-chevron-left  pl-2 text-sm text-left block lg:hidden"></i>
                        </li>
                    </NuxtLink>
    
    
                    <NuxtLink to="/profile/financial/">
                        <li class=" p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-between flex relative overflow-hidden">
                            <div class=" flex items-center">
                                <span><i class="fa-light fa-credit-card  pl-2 text-xl"></i></span><span> مالی</span>
                                <div class="before:absolute before:bottom-0  before:bg-cyan-500 before:rounded-t-sm before:h-full
                                             before:right-0 before:w-1 ">
                                </div>
                            </div>
                            <i class="fa-solid fa-chevron-left  pl-2 text-sm text-left block lg:hidden"></i>
                        </li>
                    </NuxtLink>
    
                    <NuxtLink to="/profile/documents/">
                        <li class=" p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-between flex relative overflow-hidden">
                            <div class=" flex items-center">
                                <span><i class="fa-light fa-upload  pl-2 text-xl"></i></span><span> مدارک</span>
                            </div>
                            <i class="fa-solid fa-chevron-left  pl-2 text-sm text-left block lg:hidden"></i>
                        </li>
                    </NuxtLink>
    
                    <NuxtLink to="/profile/contract-status/">
                        <li class=" p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-between flex">
                            <div class=" flex items-center">
                                <span><i class="fa-light fa-file  pl-2 text-xl"></i></span><span>قرارداد</span>
                            </div>
                            <i class="fa-solid fa-chevron-left  pl-2 text-sm text-left block lg:hidden"></i>
                        </li>
                    </NuxtLink>
    
                    <NuxtLink to="/profile/tutorials/">
                        <li class=" p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-between flex">
                            <div class=" flex items-center">
                                <span><i class="fa-light fa-video  pl-2 text-xl"></i></span><span>آموزش</span>
                            </div>
    
                            <i class="fa-solid fa-chevron-left  pl-2 text-sm text-left block lg:hidden"></i>
                        </li>
                    </NuxtLink>
    
    
                    <li class="p-3  hover:bg-gray-50 transition-all duration-300 cursor-pointer  font-medium items-center justify-between flex">
                        <div class=" flex items-center">
                            <span><i class="fa-light fa-right-from-bracket  pl-2 text-xl"></i></span><span> خروج</span>
                        </div>
                        <i class="fa-solid fa-chevron-left  pl-2 text-sm text-left block lg:hidden"></i>
                    </li>
    
                </ul>
                <!-- ===============منو سمت راست داشبورد کاربر======================== -->
    
    
            </div>
        </nav>
    </div>
</template>