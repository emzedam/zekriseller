<template>
    <!-- 
    تمامی این مدال ها مربوط به اطلاعات  فروشگاه می باشد -->

      <!--  درباره فروشگاه  -->
      <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500">درباره فروشگاه</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4 ">

                    <div class="grid grid-cols-4 gap-6">

                        <div class="relative col-span-4">
                            <div class="mt-1 rounded-md">
                                <div class="relative">
                                    <textarea type="text"
                                        class="block w-full  border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-4 h-48"></textarea>
                                </div>

                                <div class="note mt-4">
                                    <span class="block p-3 font-semibold">لطفا این نکات را رعایت کنید:</span>
                                    <ul class="text-gray-500 flex flex-col !list-disc mb-2 mt-1 pr-8">
                                        <li>
                                            <p class="mr-1 color-n-500 text-caption">درباره نوع کسب‌وکار و انواع محصولاتتان
                                                توضیح
                                                دهید</p>
                                        </li>
                                        <li>
                                            <p class="mr-1 color-n-500 text-caption">سال تاسیس کسب‌وکارتان را ذکر کنید</p>
                                        </li>
                                        <li>
                                            <p class="mr-1 color-n-500 text-caption">حداکثر ۱۵۰ کلمه بنویسید</p>
                                        </li>
                                        <li>
                                            <p class="mr-1 color-n-500 text-caption">اطلاعات غیرمجاز: آدرس فروشگاه، وب‌سایت،
                                                شبکه
                                                اجتماعی یا شماره تماس</p>
                                        </li>
                                    </ul>

                                </div>



                            </div>
                        </div>


                    </div>




                    <button
                        class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-cyan-500 px-6 py-3 text-white w-full mt-8 flex items-center rounded-lg justify-center"> تایید </button>

                </div>
            </div>
        </div>
      <!--  درباره فروشگاه -->


        <!--  وب سایت فروشگاه -->
        <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div
                class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                <button type="button"
                    class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                    data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <h3 class="text-xl font-semibold block text-gray-500">وبسایت فروشگاه</h3>
                    </div>
                </div>
                <div class="modal-body font-fa mx-2 px-6 my-4 ">
                    <p class="py-2 font-medium text-gray-700">
                        اگر فروشگاه شما وب‌سایت دارد، آدرس آن را وارد کنید
                    </p>
                    <div class="gap-6">



                        <div class="relative col-span-4 sm:col-span-2">
                            <div class="flex mt-1 rounded-md">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"><i
                                            class="fa-duotone fa-link text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                    </div><input type="text"
                                        class="block w-full pl-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 text-lg py-4 text-left ltr"
                                        placeholder="برای مثال:www.foroshgah.com" value="">
                                </div>
                            </div>
                        </div>





                        <button
                            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-cyan-500 px-6 py-3 text-white w-full mt-4 flex items-center  justify-center border rounded-lg"><i
                                class="fa-solid fa-edit pl-2 text-xl"></i> تایید </button>


                    </div>
                </div>
            </div>
        </div>
        <!--  وبسایت فروشگاه -->



            <!--  شماره تلفن ثابت فروشگاه -->
    <div class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden ">
        <div class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
        <div
            class="relative rounded-lg shadow-lg shadow-gray-300/40 modal-container h-auto max-w-2xl bg-white m-auto inset-0 w-full">
            <button type="button"
                class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
            <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                <div class="info">
                    <h3 class="text-xl font-semibold block text-gray-500">شماره تلفن ثابت فروشگاه</h3>
                </div>
            </div>
            <div class="modal-body font-fa mx-2 px-6 my-4 ">

                <p class="py-2 font-medium text-gray-700">
                       شماره تلفن ثابت فروشگاه را وارد نمایید
                    </p>
                <div class="gap-6">


                    <div class="relative col-span-4 sm:col-span-2">
                        <div class="mt-1 input">
                            <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><i
                                        class="fa-duotone fa-phone text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                </div><input type="text"
                                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 text-lg py-3"
                                    placeholder="شماره تلفن">

                            </div>
                
                        </div>
                    </div>






                    <button
                        class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-cyan-500 px-6 py-3 text-white w-full mt-8 flex items-center rounded-lg justify-center"> تایید </button>
                </div>
            </div>
        </div>
    </div>
    <!--  شماره ثابت فروشگاه -->


</template>