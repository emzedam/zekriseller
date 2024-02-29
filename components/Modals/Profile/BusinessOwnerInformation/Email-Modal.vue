<template>

    <!-- 
    تمامی این مدال ها مربوط به اطلاعات مالک کسب‌وکار می باشد -->
    
        <!-- اطلاعات شناسایی -->
        <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500">ثبت اطلاعات شناسایی</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4 ">
                    <p class="py-2 font-medium text-gray-700">
                        لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما باید با اطلاعاتی که وارد می‌کنید همخوانی
                        داشته باشند.
                    </p>
                    <div class="grid grid-cols-4 gap-6">
    
                        <div class="relative col-span-4 sm:col-span-2"><label for="last-name"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>نام</span></label>
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 curdor-pointer-events-none"><i
                                            class="fa-duotone fa-user text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="text"
                                        class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-4"
                                        placeholder="نام" value="محبوب ">
                                </div>
                            </div>
                        </div>
                        <div class="relative col-span-4 sm:col-span-2"><label for="last-name"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>نام خانوادگی</span></label>
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-family text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="text"
                                        class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-4"
                                        placeholder="نام خانوادگی" value="حسین زاده">
                                </div>
                            </div>
                        </div>
    
                    </div>
    
    
    
    
                    <button
                        class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-white w-full mt-8 flex items-center rounded-lg justify-center"><i
                            class="fa-solid fa-edit pl-2 text-xl"></i> تایید </button>
    
                </div>
            </div>
        </div>
        <!-- اطلاعات شناسایی -->
    
        <!-- کد ملی -->
        <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500">ثبت کد ملی</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4 ">
                    <p class="py-2 font-medium text-gray-700">
                        لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما باید با اطلاعاتی که وارد می‌کنید همخوانی
                        داشته باشند.
                    </p>
                    <div class="gap-6">
    
    
    
                        <div class="relative col-span-4 sm:col-span-2"><label for="last-name"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>کد ملی</span></label>
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-id-card text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="text"
                                        class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-4"
                                        placeholder="کد ملی " value="2790113890">
                                </div>
                            </div>
                        </div>
    
    
    
    
    
                        <button
                            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-white w-full mt-4 flex items-center  justify-center border rounded-lg"><i
                                class="fa-solid fa-edit pl-2 text-xl"></i> تایید </button>
    
    
                    </div>
                </div>
            </div>
        </div>
        <!-- کد ملی -->
    
    
        <!-- ویرایش شماره موبایل -->
        <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500">ویرایش شماره موبایل</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4 ">
    
                    <div class="gap-6">
    
    
                        <div class="relative col-span-4 sm:col-span-2"><label for="last-name"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>شماره موبایل</span></label>
                            <div class="mt-1 input">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-mobile text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="text"
                                        class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-3"
                                        placeholder="شماره موبایل">
    
                                </div>
                                <div class="py-2 radius mt-3 pr-0">
                                    <div class="flex">
                                        <div class="flex mt-1"><i class="fa fa-info-circle text-gray-500"></i></div><span
                                            class="mr-4 text-body-1 text-gray-500">برای ثبت این شماره باید آن را تایید
                                            کنید.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    
    
    
    
    
                        <button
                            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"><i
                                class="fa-solid fa-edit pl-2 text-xl"></i> دریافت کد تایید و تغییر شماره </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ویرایش شماره موبایل -->
    
    
    
    
        <!-- ویرایش شماره موبایل اطلاع رسانی -->
        <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500">شماره موبایل اطلاع رسانی</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4 ">
    
                    <div class="py-2 radius mt-3 pr-0">
                        <div class="flex">
                            <div class="flex mt-1"><i class="fa fa-info-circle text-gray-500"></i></div><span
                                class="mr-4 text-body-1 text-gray-500">بسیاری از اعلان‌ها، اخبار و گزارش‌های مالی به این شماره
                                ارسال می‌شود
                            </span>
                        </div>
                    </div>
    
                    <div
                        class="mb-2 mt-2">
                        <div class="flex items-center bg-orange-50 text-orange-500 text-semi-bold border-orange-300">
                            <div class="flex">
                                <i class="fa fa-info"></i>
                            </div><span class="mr-2 text-sm">اگر
                                اینجا را خالی بگذارید، تمام اطلاع‌رسانی‌ها به شماره موبایلی ارسال خواهد شد که با آن وارد پنل
                                می‌شوید</span>
                        </div>
                    </div>
    
    
                    <div class="gap-6">
    
    
                        <div class="relative col-span-4 sm:col-span-2"><label for="last-name"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>شماره موبایل</span></label>
                            <div class="mt-1 input">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-mobile text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="text"
                                        class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-3"
                                        placeholder="شماره موبایل">
    
                                </div>
    
                            </div>
                        </div>
    
    
    
    
    
    
                        <button
                            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"><i
                                class="fa-solid fa-edit pl-2 text-xl"></i> دریافت کد تایید و تغییر شماره </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- ویرایش شماره موبایل -->
    
    
    
    
    
        <!-- پست الکترونیک -->
        <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500">ویرایش پست الکترونیکی</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4  w-full">
                    <div class="gap-6">
    
    
                        <div class="relative"><label for="last-name"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>ایمیل</span></label>
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-envelope text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="text"
                                        class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-3"
                                        placeholder="ایمیل" value="info@alish.io">
                                </div>
                            </div>
                        </div>
    
    
    
    
    
    
                        <button
                            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"><i
                                class="fa-solid fa-edit pl-2 text-xl"></i> ویرایش </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- پست الکترونیک -->
    
    
    
        <!--  رمز عبور -->
        <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500"> تغییر رمز عبور</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4  w-full">
                    <div class="gap-6">
    
                        <div class="relative col-span-4 sm:col-span-2"><label for="password"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>رمز عبور فعلی*</span></label>
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-user-lock text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="password"
                                        class="items-center block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                        placeholder="رمز عبور">
                                    <div
                                        class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md">
                                        <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش"><i
                                                class="fa-duotone fa-eye text-cyan-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"></i><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                              <i
                                @click="switchVisibility"
                                class="fa-duotone fa-eye-slash text-cyan-500 h-5 w-5 flex leading-[1px] pl-1"
                              ></i> --></div>
                                    </div>
                                </div>
                            </div>
    
                            <nuxtlink to="/forget-password" class="text-cyan-500 font-medium my-2 block text-sm cursor-pointer">
                                بازیابی رمز عبور</nuxtlink>
                            <span class="text-gray-600">رمز عبور شما باید حداقل ۸ حرف باشد.</span>
                        </div>
    
                        <div class="relative col-span-4 sm:col-span-2 mt-4"><label for="new-password"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>رمز عبور جدید*</span></label>
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-user-lock text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="password"
                                        class="items-center block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                        placeholder="رمز عبور">
                                    <div
                                        class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md">
                                        <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش"><i
                                                class="fa-duotone fa-eye text-cyan-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"></i><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                              <i
                                @click="switchVisibility"
                                class="fa-duotone fa-eye-slash text-cyan-500 h-5 w-5 flex leading-[1px] pl-1"
                              ></i> --></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <ul class="p-3 mt-4  flex flex-col bg-gray-50 rounded-md">
                            <li class="color-500 text-caption">شامل عدد</li>
                            <li class="color-500 text-caption">حداقل ۸ حرف</li>
                            <li class="color-500 text-caption">شامل علامت (!@#$%&amp;*^)</li>
                            <li class="color-500 text-caption">شامل یک حرف بزرگ و کوچک</li>
                        </ul>
    
    
                        <div class="relative col-span-4 sm:col-span-2 mt-6"><label for="repeat-password"
                                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"><span>تکرار رمز عبور
                                    جدید*</span></label>
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-user-lock text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="password"
                                        class="items-center block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                        placeholder="رمز عبور">
                                    <div
                                        class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md">
                                        <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش"><i
                                                class="fa-duotone fa-eye text-cyan-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"></i><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                              <i
                                @click="switchVisibility"
                                class="fa-duotone fa-eye-slash text-cyan-500 h-5 w-5 flex leading-[1px] pl-1"
                              ></i> --></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    
    
    
    
    
    
                        <button
                            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"><i
                                class="fa-solid fa-edit pl-2 text-xl"></i> تغییر رمز عبور </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- رمز عبور-->
    
    
     
    
        <!-- هنگام احراز هویت شماره موبایل نمایش داده شود -->
        <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500"> ویرایش شماره موبایل</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4 ">
                    <p class="py-2 font-medium text-gray-700">
                        کد ۵ رقمی به شماره‌ی ۰۹۰۳۰۲۶۴۳۰۰ ارسال گردید
                    </p>
                    <div class="gap-6">
    
    
                        <div class="relative col-span-12 sm:col-span-12 w-full pt-8 pb-6">
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                            class="fa-duotone fa-hashtag text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="text"
                                        class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-3"
                                        placeholder="کد ارسال شده را وارد نمایید" value="">
                                </div>
                            </div>
                        </div>
    
    
                        <NuxtLink to="sendcode">
                            <div class="send-code-again w-full mx-auto text-center pb-4 text-cyan-500 font-semibold">ارسال مجدد
                                کد</div>
                        </NuxtLink>
    
                        <div class="send-code-again w-full mx-auto text-center pb-4 text-gray-500 font-semibold"> ۵۵ :
                            ۰۲مانده تا دریافت مجدد کد</div>
    
    
    
    
                        <button
                            class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"><i
                                class="fa-solid fa-edit pl-2 text-xl"></i> ادامه </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- هنگام احراز هویت شماره موبایل نمایش داده شود -->
    
    
    </template>