<template>
  <div
    class="Step-reg-2 border lg:rounded-lg p-6 w-full h-full absolute transition-all overflow-y-scroll"
    :class="
      registerData.seller_type == 0 && activeComponent == 'SellerInformation'
        ? 'top-0 visible'
        : 'top-[900px] invisible'
    "
  >
    <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold mt-6 h-10">
      <span
        @click="go_to_back()"
        class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
      >
        <i class="fa-duotone fa-arrow-right !leading-3"></i
      ></span>

      <span class="leading-3">لطفا اطلاعات کسب‌و‌کارتان را وارد کنید </span>
    </h2>

    <div class="inline-block w-full input pt-8">
      <div
        class="flex flex-col items-center justify-between px-5 py-3 mx-5 mb-4 text-center border rounded-lg lg:flex-row border-200 lg:mx-0"
      >
        <div class="items-start radius">
          <div class="flex items-center">
            <div class="flex text-cyan-500">
              <i class="fa-light fa-circle-info"></i>
            </div>
            <span class="mr-2 text-lg text-cyan-500"
              >شماره حساب باید متعلق به صاحب کد ملی باشد
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="inline-block w-full input" v-if="registerData.length != 0">
      <div class="relative rounded-md">
        <div class="grid grid-cols-4 gap-6">
          <div class="relative col-span-4 md:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>کد ملی</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-hashtag text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="number"
                  v-model="registerData.seller_info.codemelli"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 p-4 text-md text-right"
                  placeholder="کد ملی را وارد کنید"
                />
              </div>
            </div>
          </div>

          <div class="relative col-span-4 md:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>نام فروشگاه</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-store text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  v-model="registerData.seller_info.store_name"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 p-4 text-md text-right"
                  placeholder="مانند : آذرخش ، پارک و ..."
                />
              </div>
            </div>
          </div>

          <div class="relative col-span-4 md:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>شماره کارت <small class="pr-2">(اختیاری)</small> </span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-credit-card text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  maxlength="19"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  v-model="registerData.seller_info.cardnumber"
                  class="block w-full pl-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 text-md p-4 rtl:text-left"
                  placeholder="0000 - 0000 - 0000 - 0000"
                />
              </div>
            </div>
          </div>

          <div class="relative col-span-4 md:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>شماره شبا <small class="pr-2">(اختیاری)</small> </span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none font-semibold font-en text-xl leading-3"
                >
                  IR
                </div>
                <input
                  v-model="registerData.seller_info.shabanumber"
                  type="text"
                  maxlength="24"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  class="block w-full pl-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 text-md p-4 rtl:text-left"
                  placeholder="000000000000000000000000"
                />
              </div>
            </div>
          </div>

          <div class="relative col-span-4 border rounded-lg p-4">
            <strong>نام‌های غیرمجاز:</strong>
            <ul
              class="list-disc pr-4 pt-3 marker:text-gray-400 font-medium text-gray-600"
            >
              <li>نام مقدس مانند نام ائمه</li>
              <li>نام برند مانند نایک، چرم مشهد و...</li>
            </ul>
          </div>

          <div class="relative md:col-span-1 col-span-4">
            <button
              type="button"
              @click="add_seller_info()"
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
                ><span class="w-full">تایید</span></span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="overflow-y-scroll Step-reg-company border lg:rounded-lg p-6 h-full w-full absolute transition-all"
    :class="
      registerData.seller_type == 1 && activeComponent == 'SellerInformation'
        ? 'top-0 visible'
        : 'top-[900px] invisible'
    "
  >
    <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold mt-6 h-10">
      <span
        @click="go_to_back()"
        class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
      >
        <i class="fa-duotone fa-arrow-right !leading-3"></i
      ></span>

      <span class="leading-3">لطفا اطلاعات کسب‌ و‌ کارتان را وارد کنید </span>
    </h2>

    <div class="inline-block w-full input py-8" v-if="registerData.length != 0">
      <div class="relative rounded-md">
        <div class="grid grid-cols-4 gap-6">
          <div class="relative col-span-4 sm:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>نام ثبت شده شرکت</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-id-card text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="text"
                  v-model="registerData.seller_info.company_name"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-md p-4"
                  placeholder="نام ثبت شده شرکت"
                />
              </div>
            </div>
          </div>
          <div class="relative col-span-4 sm:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>نوع شخصیت </span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative w-full focus-within:z-10">
                <button
                  @click="personTypeListState = !personTypeListState"
                  type="button"
                  class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-sm p-4 text-center inline-flex items-center w-full justify-between"
                >
                  <i
                    class="fa-duotone fa-building-flag text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                  ></i
                  ><span class="w-full pr-2 text-right">{{
                    registerData.seller_info.person_type != ""
                      ? registerData.seller_info.person_type
                      : "نوع شخصیت"
                  }}</span
                  ><i
                    class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                  ></i>
                </button>
                <div
                  :class="personTypeListState == true ? '' : 'hidden'"
                  class="z-10 w-full absolute mt-2 bg-white border rounded-lg"
                >
                  <ul
                    class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                    aria-labelledby="dropdownSearchButton"
                  >
                    <li
                      @click="change_person_type(person.type)"
                      v-for="(person, index) in person_type_list"
                      :key="index"
                    >
                      <div
                        class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                      >
                        <label
                          for="checkbox-item-11"
                          class="flex cursor-pointer items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                          ><span class="flex items-center w-full pr-2 text-right">{{
                            person.type
                          }}</span
                          ><i
                            v-if="person.type == registerData.seller_info.person_type"
                            class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                          ></i>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="relative col-span-4 sm:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>شناسه ملی</span>
            </label>
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-hashtag text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="number"
                  v-model="registerData.seller_info.shenase_melli"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-md p-4"
                  placeholder="شناسه ملی"
                />
              </div>
            </div>
          </div>
          <div class="relative col-span-4 sm:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>کد اقتصادی</span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <i
                    class="fa-duotone fa-hashtag text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                  ></i>
                </div>
                <input
                  type="number"
                  v-model="registerData.seller_info.code_eghtesadi"
                  class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-md p-4"
                  placeholder="کد اقتصادی"
                />
              </div>
            </div>
          </div>

          <div class="relative col-span-4 md:col-span-2">
            <label
              for="last-name"
              class="flex pb-2 pr-1 text-md font-medium text-gray-700"
              ><span>شماره شبا <small class="pr-2">(اختیاری)</small> </span></label
            >
            <div class="flex mt-1 rounded-md">
              <div class="relative flex items-stretch flex-grow focus-within:z-10">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none font-semibold font-en text-xl leading-3"
                >
                  IR
                </div>
                <input
                  v-model="registerData.seller_info.shabanumber"
                  type="text"
                  maxlength="24"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  class="block w-full pl-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 text-md p-4 rtl:text-left"
                  placeholder="000000000000000000000000"
                />
              </div>
            </div>
          </div>

          <div class="col-span-4 md:col-span-2">
            <div class="relative col-span-4 md:col-span-2">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-md font-medium text-gray-700"
                ><span>نام فروشگاه</span></label
              >
              <div class="flex mt-1 rounded-md">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-store text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="text"
                    v-model="registerData.seller_info.store_name"
                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 p-4 text-md text-right"
                    placeholder="مانند : آذرخش ، پارک و ..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="relative md:col-span-1 col-span-4">
            <button
              @click="add_seller_info()"
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
                ><span class="w-full">تایید</span></span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["registerData", "activeComponent"]);
const emit = defineEmits(["go_to_back", "verify_seller_info", "change_person_type"]);
onMounted(() => {
  // console.log(props.sellerType);
});

const personTypeListState = ref(false);

const person_type_list = reactive([
  { type: "شخص حقوقی - تجاری" },
  { type: "شخص حقوقی - غیر تجاری" },
  { type: "دولتی - نهادها و دستگاه های اجرایی" },
]);

const go_to_back = () => {
  emit("go_to_back", "0,0");
};

const add_seller_info = () => {
  emit("verify_seller_info");
};

const change_person_type = (personType) => {
  emit("change_person_type", personType);
  personTypeListState.value = false;
};
</script>
