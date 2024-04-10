<template>
  <!-- هنگام احراز هویت شماره موبایل نمایش داده شود -->
  <transition-group name="modal">
    <div
      v-if="openVerifyModal == true"
      class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
    >
      <div
        @click="close_modal()"
        class="absolute inset-0 transition-opacity duration-300 bg-black/20"
      ></div>
      <div
        class="relative rounded-lg shadow-lg shadow-gray-300/40 h-auto max-w-xl bg-white m-auto inset-0 w-full"
      >
        <button
          @click="close_modal()"
          type="button"
          class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i class="text-lg fa fa-times"></i>
        </button>
        <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
          <div class="info">
            <h3 class="text-xl font-semibold block text-gray-500">
              شماره موبایل اطلاع رسانی
            </h3>
          </div>
        </div>
        <div class="modal-body font-fa mx-2 px-6 my-4">
          <p class="py-2 font-medium text-gray-700">
            کد 4 رقمی به شماره‌ی {{ mobileData.mobile }} ارسال گردید
          </p>
          <div class="gap-6">
            <div class="relative col-span-12 sm:col-span-12 w-full pt-8 pb-6">
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
                    type="text"
                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-3"
                    placeholder="کد ارسال شده را وارد نمایید"
                    v-model="mobileData.otp"
                    @keyup.enter="do_verify_mobile()"
                  />
                </div>
              </div>
            </div>

            <button v-if="otpTimer != 0">
              <div
                class="send-code-again w-full mx-auto text-center pb-4 text-cyan-500 font-semibold"
              >
                ارسال مجدد کد تایید تا {{ otpTimer }} ثانیه دیگر
              </div>
            </button>
            <button v-else @click="resend_otp_code()">
              <div
                class="send-code-again w-full mx-auto text-center pb-4 text-cyan-500 font-semibold"
              >
                ارسال مجدد کد
              </div>
            </button>

            <Button
              :class="['bg-gray-300 mt-2']"
              :isShow="mobileData.mobile == '' || mobileData.otp == '' ? false : true"
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> ادامه
            </Button>
            <Button
              @click="do_verify_mobile()"
              :class="['bg-cyan-500 mt-2 shadow-md shadow-cyan-200']"
              :isShow="
                mobileData.mobile != '' && mobileData.otp != '' && requestLoading == false
                  ? false
                  : true
              "
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> ادامه
            </Button>
            <LoadingButton :class="['mt-2']" :isShow="requestLoading" />
          </div>
        </div>
      </div>
    </div>
  </transition-group>
  <!-- هنگام احراز هویت شماره موبایل نمایش داده شود -->

  <transition-group name="modal">
    <div
      v-if="activeModal == 'notifMobileModal'"
      class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
    >
      <div
        @click="close_modal()"
        class="absolute inset-0 transition-opacity duration-300 bg-black/20"
      ></div>
      <div
        class="relative rounded-lg shadow-lg shadow-gray-300/40 h-auto max-w-xl bg-white m-auto inset-0 w-full"
      >
        <button
          @click="close_modal()"
          type="button"
          class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
          aria-label="Close"
        >
          <i class="text-lg fa fa-times"></i>
        </button>
        <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
          <div class="info">
            <h3 class="text-xl font-semibold block text-gray-500">
              شماره موبایل اطلاع رسانی
            </h3>
          </div>
        </div>
        <div class="modal-body font-fa mx-2 px-6 my-4">
          <div class="py-2 radius mt-3 pr-0">
            <div class="flex">
              <div class="flex mt-1"><i class="fa fa-info-circle text-gray-500"></i></div>
              <span class="mr-4 text-body-1 text-gray-500"
                >بسیاری از اعلان‌ها، اخبار و گزارش‌های مالی به این شماره ارسال می‌شود
              </span>
            </div>
          </div>

          <div class="mb-2 mt-2">
            <div
              class="flex items-center bg-orange-50 text-orange-500 text-semi-bold border-orange-300"
            >
              <div class="flex">
                <i class="fa fa-info"></i>
              </div>
              <span class="mr-2 text-sm"
                >اگر اینجا را خالی بگذارید، تمام اطلاع‌رسانی‌ها به شماره موبایلی ارسال
                خواهد شد که با آن وارد پنل می‌شوید</span
              >
            </div>
          </div>

          <div class="gap-6">
            <div class="relative col-span-4 sm:col-span-2">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>شماره موبایل</span></label
              >
              <div class="mt-1 input">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-mobile text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-3"
                    placeholder="شماره موبایل"
                    type="number"
                    v-model="mobileData.mobile"
                    @keyup.enter="change_seller_mobile()"
                  />
                </div>
                <div class="py-2 radius mt-3 pr-0">
                  <div class="flex">
                    <div class="flex mt-1">
                      <i class="fa fa-info-circle text-gray-500"></i>
                    </div>
                    <span class="mr-4 text-body-1 text-gray-500"
                      >برای ثبت این شماره باید آن را تایید کنید.</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <Button
              :class="['bg-gray-300 mt-2']"
              :isShow="mobileData.mobile == '' ? false : true"
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> دریافت کد تایید و تغییر شماره
            </Button>
            <Button
              @click="change_seller_mobile()"
              :class="['bg-cyan-500 mt-2 shadow-md shadow-cyan-200']"
              :isShow="mobileData.mobile != '' && requestLoading == false ? false : true"
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> دریافت کد تایید و تغییر شماره
            </Button>
            <LoadingButton :class="['mt-2']" :isShow="requestLoading" />
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";
import Button from "@/components/Buttons/Button.vue";
import LoadingButton from "@/components/Buttons/LoadingButton.vue";

const sellerStore = useSellersStore();
const { authSeller } = storeToRefs(sellerStore);
const toast = useToast();
const props = defineProps(["activeModal"]);
const emit = defineEmits(["close"]);
const requestLoading = ref(false);
const otpTimer = ref(120);
const openVerifyModal = ref(false);

const mobileData = reactive({
  mobile:
    authSeller.value != null && authSeller.value.declare_mobile != null
      ? authSeller.value.declare_mobile
      : "",
  otp: "",
});

const close_modal = () => {
  emit("close");
};

const change_seller_mobile = async (state = null) => {
  if (mobileData.mobile != "") {
    if (state == null) requestLoading.value = true;
    const result = await sellerStore.do_change_seller_mobile({
      mobile:
        startsWithZero(mobileData.mobile) == true
          ? mobileData.mobile
          : "0" + mobileData.mobile,
    });
    if (result.status == 200) {
      requestLoading.value = false;
      toast.success(result.message);

      // open verify code modal
      openVerifyModal.value = true;

      if (state == null) emit("close");
      startTimer();
    } else {
      requestLoading.value = false;
      toast.error(result.message);
    }
  } else {
    toast.error("لطفا شماره همراه را وارد کنید");
  }
};

const do_verify_mobile = async () => {
  if (mobileData.mobile != "" && mobileData.otp != "") {
    requestLoading.value = true;
    const result = await sellerStore.do_seller_verify_mobile({
      mobile:
        startsWithZero(mobileData.mobile) == true
          ? mobileData.mobile
          : "0" + mobileData.mobile,
      otp: mobileData.otp,
      state: "declare_mobile"
    });
    if (result.status == 200) {
      requestLoading.value = false;
      toast.success(result.message);

      // close verify mobile modal
      openVerifyModal.value = false;

      authSeller.value.infoes.declaration_mobile = mobileData.mobile;
    } else {
      requestLoading.value = false;
      toast.error(result.message);
    }
  } else {
    toast.error("شماره همراه و یا کد ارسال شده تکمیل نیست");
  }
};

const startsWithZero = (num) => {
  let str = num.toString();
  return str[0] === "0";
};

const resend_otp_code = () => {
  otpTimer.value = 120;
  change_seller_mobile("resend");
};

const startTimer = () => {
  otpTimer.value = 120;
  let timer = setInterval(() => {
    otpTimer.value = otpTimer.value - 1;
    if (otpTimer.value == 0) {
      clearInterval(timer);
    }
  }, 1000);
};
</script>
