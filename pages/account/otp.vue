<template>
  <div class="container-fluid">
    <div class="h-screen md:overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3 relative z-50">
          <div class="w-full bg-white xl:p-12 p-10 darker:bg-zinc-800 h-full">
            <div class="flex h-[90vh] flex-col">
              <div class="mx-auto">
                <a href="/" class="">
                  <img src="@/assets/images/logo.png" alt="" class="h-8 inline" />
                </a>
              </div>

              <div class="lg:my-auto my-8">
                <form class="mt-4 pt-2" @submit.prevent="doSubmitOtp()">
                  <div>
                    <div
                      class="bg-gray-500/10 h-16 w-16 text-primary text-center mx-auto rounded-full flex items-center justify-center"
                    >
                      <i class="fa fa-envelope text-3xl leading-[2.2] text-cyan-500"></i>
                    </div>
                  </div>

                  <div class="text-center mt-6">
                    <h4 class="text-gray-700 font-bold text-2xl darker:text-gray-100">
                      تایید شماره موبایل
                    </h4>
                    <div class="mb-4 mt-3 text-xs font-medium">
                      <span>کد ارسال شده به شماره</span>
                      <span
                        @click="back_to_mobie_page()"
                        class="text-cyan text-cyan-500 mx-2 items-center cursor-pointer"
                        >{{ sellerMobile != undefined ? "0" + sellerMobile : "" }}
                        <i class="fa fa-edit"></i></span
                      ><span> را وارد نمایید</span>
                    </div>
                  </div>

                  <div
                    style="display: flex; flex-direction: row; direction: ltr"
                    class="my-4"
                  >
                    <v-otp-input
                      ref="otpInput"
                      v-model:value="bindModal"
                      input-classes="w-full mx-1 text-center border-gray-200 rounded-md py-3 focus:ring-cyan-500/50 darker:bg-zinc-700 darker:border-zinc-600 darker:text-gray-200"
                      separator=" "
                      :num-inputs="4"
                      :should-auto-focus="true"
                      input-type="letter-numeric"
                      :conditionalClass="['one', 'two', 'three', 'four']"
                      @on-complete="handleOnComplete"
                    />
                  </div>

                  <div class="mb-3">
                    <Button :class="['bg-cyan-500']" @click="" :isShow="loadingFormState"
                      >احراز هویت</Button
                    >
                    <LoadingButton :isShow="loadingFormState" />
                  </div>

                  <div
                    class="text-sm justify-center"
                    :class="codeTimer != 0 ? 'flex' : 'hidden'"
                  >
                    <div class="timer">
                      <div class="text-gray-700">
                        {{ codeTimer }}
                      </div>
                    </div>
                    <span class="pr-2">ثانیه مانده تا دریافت مجدد</span>
                  </div>

                  <div
                    class="mt-5 justify-center"
                    v-if="resendLoading == false"
                    :class="codeTimer == 0 ? 'flex' : 'hidden'"
                  >
                    <button class="relative flex items-center" @click="ReSendOtp()">
                      <div
                        class="flex items-center justify-center relative grow-1 text-cyan-500 font-semibold"
                      >
                        دریافت مجدد رمز یک‌بار مصرف
                      </div>
                    </button>
                  </div>
                  <div
                    v-if="resendLoading == true"
                    class="mt-5 justify-center"
                    :class="codeTimer == 0 ? 'flex' : 'hidden'"
                  >
                    <button class="relative flex items-center">
                      <div
                        class="flex items-center justify-center relative grow-1 text-cyan-500 font-semibold"
                      >
                        <div class="loader"></div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 hidden lg:block"
        >
          <div
            class="h-screen bg-cover relative p-5 bg-[url('@/assets/images/signin.jpg')]"
          >
            <div class="absolute inset-0 bg-cyan-500/90"></div>

            <ul
              class="bg-bubbles absolute top-0 left-0 w-full h-full overflow-hidden animate-square"
            >
              <li class="h-10 w-10 rounded-3xl bg-white/10 absolute left-[10%]"></li>
              <li class="h-28 w-28 rounded-3xl bg-white/10 absolute left-[20%]"></li>
              <li class="h-10 w-10 rounded-3xl bg-white/10 absolute left-[25%]"></li>
              <li class="h-20 w-20 rounded-3xl bg-white/10 absolute left-[40%]"></li>
              <li class="h-24 w-24 rounded-3xl bg-white/10 absolute left-[70%]"></li>
              <li class="h-32 w-32 rounded-3xl bg-white/10 absolute left-[70%]"></li>
              <li class="h-36 w-36 rounded-3xl bg-white/10 absolute left-[32%]"></li>
              <li class="h-20 w-20 rounded-3xl bg-white/10 absolute left-[55%]"></li>
              <li class="h-12 w-12 rounded-3xl bg-white/10 absolute left-[25%]"></li>
              <li class="h-36 w-36 rounded-3xl bg-white/10 absolute left-[90%]"></li>
            </ul>

            <div class="grid grid-cols-12 content-center h-screen">
              <div class="col-span-8 col-start-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingButton from "~/components/Buttons/LoadingButton.vue";
import Button from "~/components/Buttons/Button.vue";
import { onMounted } from "vue";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";
import VOtpInput from "vue3-otp-input";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();
const otpInput = ref(null);
const bindModal = ref("");
const loadingFormState = ref(false);
const codeTimer = ref(120);
let timerInterval;
const sellerMobile = useCookie("seller-mobile");
const { loading } = storeToRefs(useSellersStore());
const sellerStore = useSellersStore();
const resendLoading = ref(false);
const SellerToken = useCookie("seller-token", { maxAge: 60 * 60 * 24, path: "/" });

definePageMeta({
  middleware: "seller-guest",
});

onMounted(() => {
  setGlobalInterVal();
  if (sellerMobile.value == undefined) {
    router.push("/account/signin");
  }

  setTimeout(() => {
    loading.value = false;
  }, 500);
});

const intervalFunction = () => {
  if (codeTimer.value <= 0) {
    codeTimer.value = 0;
    clearInterval(timerInterval);
    return false;
  } else {
    codeTimer.value--;
  }
};

const setGlobalInterVal = () => {
  timerInterval = setInterval(intervalFunction, 1000);
};

const handleOnComplete = async (value) => {
  await doSubmitOtp(value);
};

// const fillInput = (value) => {
//   console.log(value);
//   otpInput.value.fillInput(value);
// };

const back_to_mobie_page = () => {
  sellerMobile.value = undefined;
  router.push("/account/signin");
};

const ReSendOtp = async () => {
  if (sellerMobile.value != undefined) {
    resendLoading.value = true;
    const result = await sellerStore.sendSellerLoginOtp({ mobile: sellerMobile.value });
    if (result == false) {
      toast.error("خطایی رخ داده");
      resendLoading.value = false;
    }

    if (result.status == 200) {
      resendLoading.value = false;
      setGlobalInterVal();
      codeTimer.value = 120;
    } else {
      resendLoading.value = false;
      toast.error(result.message);
    }
  } else {
    toast.error("لطفا شماره همراه خود را وارد کنید");
  }
};

const doSubmitOtp = async (otp) => {
  if (sellerMobile.value != undefined) {
    loadingFormState.value = true;
    const result = await sellerStore.doSellerSignIn({
      mobile: sellerMobile.value,
      otp: otp,
    });
    if (result.status == 200) {
      loadingFormState.value = false;

      SellerToken.value = result.access_token;
      sellerMobile.value = undefined;

      if (result.level == 0) {
        router.push("/account/set-password");
      } else if (result.level == 2) {
        router.push("/account/registration");
      } else {
        router.push("/");
      }
    } else {
      loadingFormState.value = false;
    }
  } else {
    router.push("/account/signin");
  }
};
</script>

<style scoped>
.loader::before {
  border: 3px solid #06b6d4 !important;
}
</style>
