<template>
    <div class="Step-reg-map border lg:rounded-lg p-6 h-full">
            <h2
              class="flex items-center justify-start gap-4 text-2xl font-semibold mt-6 h-10"
            >
              <span
                class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
              >
                <i class="fa-duotone fa-arrow-right !leading-3"></i
              ></span>

              <span class="leading-3">لطفا به این سوالات پاسخ دهید</span>
            </h2>

            <div class="inline-block w-full input py-8">
              <div class="relative rounded-md hidden">
                <h2 class="font-semibold">شغل اصلی شما چیست؟</h2>
                <fieldset class="space-y-5 py-6">
                  <legend class="sr-only">Notifications</legend>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >کارمند</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700"
                        >کسب و کار شخصی با حداقل ۲ نفر کارمند</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"
                        >شغل آزاد</label
                      >
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">
                        بازنشسته</label
                      >
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"> سایر</label>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <p class="text-body-2 color-n-700 ml-2">سوال ۱ از ۶</p>
                    <div
                      class="my-4 flex-1 bg-cyan-500 w-full h-1"
                      style="width: 16.666666666666664"
                    ></div>
                  </div>
                </fieldset>

                <div class="relative flex gap-4">
                  <button
                    href="#_"
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full"> بعدا پاسخ می دهم</span></span
                    >
                  </button>

                  <button
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full">سوال بعدی</span></span
                    >
                  </button>
                </div>
              </div>

              <div class="relative rounded-md hidden">
                <h2 class="font-semibold">آخرین مدرک تحصیلی شما چیست؟</h2>
                <fieldset class="space-y-5 py-6">
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >کمتر از دیپلم</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700"
                        >دیپلم</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"
                        >کاردانی
                      </label>
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">
                        کارشناسی</label
                      >
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">
                        کارشناسی ارشد و بالاتر</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <p class="text-body-2 color-n-700 ml-2">سوال 2 از ۶</p>
                    <div
                      class="my-4 flex-1 bg-cyan-500 w-full h-1"
                      style="width: 16.666666666666664"
                    ></div>
                  </div>
                </fieldset>

                <div class="relative flex gap-4">
                  <button
                    href="#_"
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full"> بعدا پاسخ می دهم</span></span
                    >
                  </button>

                  <button
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full">سوال بعدی</span></span
                    >
                  </button>
                </div>
              </div>

              <div class="relative rounded-md hidden">
                <h2 class="font-semibold">کدام گزینه به فعالیت شما نزدیک تر است؟</h2>
                <small>می‌توانید چند گزینه انتخاب کنید</small>
                <fieldset class="space-y-5 py-6">
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >فروشنده آنلاین | فروش در سایت شخصی یا اینستاگرام</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700"
                        >فروشنده آفلاین | فروش کالا در مغازه/فروشگاه شخصی</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"
                        >عمده فروش | تامین کالا در تعداد بالا برای خرده فروشان
                      </label>
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">
                        تولیدکننده | تولید کالا در کارگاه یا کارخانه و عرضه به
                        بازار</label
                      >
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">
                        واردکننده | تامین از خارج و دارای انبار برای نگهداری کالا</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <p class="text-body-2 color-n-700 ml-2">سوال 3 از ۶</p>
                    <div
                      class="my-4 flex-1 bg-cyan-500 w-full h-1"
                      style="width: 16.666666666666664"
                    ></div>
                  </div>
                </fieldset>

                <div class="relative flex gap-4">
                  <button
                    href="#_"
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full"> بعدا پاسخ می دهم</span></span
                    >
                  </button>

                  <button
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full">سوال بعدی</span></span
                    >
                  </button>
                </div>
              </div>

              <div class="relative rounded-md hidden">
                <h2 class="font-semibold">
                  چند نفر را برای فعالیت در پتومن در نظر گرفته اید؟
                </h2>
                <fieldset class="space-y-5 py-6">
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700">
                        یک نفر</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700"
                        >2 نفر</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">3 نفر </label>
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">
                        4 نفر و بیشتر</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <p class="text-body-2 color-n-700 ml-2">سوال 4 از ۶</p>
                    <div
                      class="my-4 flex-1 bg-cyan-500 w-full h-1"
                      style="width: 16.666666666666664"
                    ></div>
                  </div>
                </fieldset>

                <div class="relative flex gap-4">
                  <button
                    href="#_"
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-orange-100 border-orange-500 border text-orange-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                    >
                      <i class="fa fa-info"></i>
                      <span class="w-full">
                        برای ادامه لطفا به این سوالات پاسخ دهید
                      </span></span
                    >
                  </button>

                  <button
                    href="#_"
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full"> بعدا پاسخ می دهم</span></span
                    >
                  </button>

                  <button
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full">سوال بعدی</span></span
                    >
                  </button>
                </div>
              </div>

              <div class="relative rounded-md hidden">
                <h2 class="font-semibold">آخرین مدرک تحصیلی شما چیست؟</h2>
                <fieldset class="space-y-5 py-6">
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >کمتر از دیپلم</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700"
                        >دیپلم</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"
                        >کاردانی
                      </label>
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">
                        کارشناسی</label
                      >
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">
                        کارشناسی ارشد و بالاتر</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <p class="text-body-2 color-n-700 ml-2">سوال 5 از ۶</p>
                    <div
                      class="my-4 flex-1 bg-cyan-500 w-full h-1"
                      style="width: 16.666666666666664"
                    ></div>
                  </div>
                </fieldset>

                <div class="relative flex gap-4">
                  <button
                    href="#_"
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full"> بعدا پاسخ می دهم</span></span
                    >
                  </button>

                  <button
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full">سوال بعدی</span></span
                    >
                  </button>
                </div>
              </div>

              <div class="relative rounded-md hidden">
                <h2 class="font-semibold">راه ارتباطی ترجیحی شما کدام گزینه است؟</h2>
                <small>می‌توانید چند گزینه انتخاب کنید</small>
                <fieldset class="space-y-5 py-6">
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >پیامک</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700"
                        >ایمیل</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"
                        >پیام رسانی از طریق پنل فروشندگان</label
                      >
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">سایر</label>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <p class="text-body-2 color-n-700 ml-2">سوال 5 از ۶</p>
                    <div
                      class="my-4 flex-1 bg-cyan-500 w-full h-1"
                      style="width: 16.666666666666664"
                    ></div>
                  </div>
                </fieldset>

                <div class="relative flex gap-4">
                  <button
                    href="#_"
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full"> بعدا پاسخ می دهم</span></span
                    >
                  </button>

                  <button
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full">سوال بعدی</span></span
                    >
                  </button>
                </div>
              </div>

              <div class="relative rounded-md">
                <h2 class="font-semibold">تجربه فروش در کدام فضا را دارید؟</h2>
                <small>می‌توانید چند گزینه انتخاب کنید</small>
                <fieldset class="space-y-5 py-6">
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >اینستاگرام | واتس اپ | تلگرام</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700"
                        >وب سایت شخصی</label
                      >
                    </div>
                  </div>
                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"
                        >سایر فروشگاه های آنلاین</label
                      >
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">آفلاین</label>
                    </div>
                  </div>

                  <div class="relative flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                    </div>
                    <div class="mr-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"
                        >هیچکدام</label
                      >
                    </div>
                  </div>

                  <div class="flex items-center">
                    <p class="text-body-2 color-n-700 ml-2">سوال 5 از ۶</p>
                    <div
                      class="my-4 flex-1 bg-cyan-500 w-full h-1"
                      style="width: 16.666666666666664"
                    ></div>
                  </div>
                </fieldset>

                <div class="relative flex gap-4">
                  <button
                    href="#_"
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full"> بعدا پاسخ می دهم</span></span
                    >
                  </button>

                  <button
                    class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
                  >
                    <span
                      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
                    ></span
                    ><span
                      class="relative z-20 flex iteme-center justify-center w-full text-center"
                      ><span class="w-full">سوال بعدی</span></span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
</template>