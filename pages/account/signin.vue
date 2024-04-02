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
                <form class="mt-4 pt-2" @submit.prevent="doSendOtp()">
                  <div class="text-right mt-6 mb-6">
                    <h4 class="text-gray-700 font-bold text-2xl darker:text-gray-100">
                      سلام!
                    </h4>
                    <div class="mb-4 mt-3 text-md font-medium">
                      <span> برای فروش در ذکری مارکت آماده‌اید؟</span>
                    </div>
                  </div>

                  <div
                    class="mb-3 relative rounded-md border border-gray-300 darker:border-gray-400 px-3 py-3 shadow-sm focus-within:border-cyan-600 focus-within:ring-1 focus-within:ring-cyan-600"
                  >
                    <label
                      for="name"
                      class="absolute -top-2 right-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900 darker:bg-zinc-800 darker:text-gray-400"
                      >شماره موبایل یا ایمیل</label
                    >
                    <input
                      type="number"
                      name="name"
                      id="name"
                      class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm pl-8 text-left darker:bg-zinc-800"
                      placeholder=" شماره موبایل را وارد کنید"
                      v-model="mobile"
                    />

                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <i class="fa-thin fa-mobile text-gray-400"></i>
                    </div>
                  </div>

                  <div class="mb-3">
                    <Button :class="['bg-cyan-500']" @click="" :isShow="loadingFormState"
                      >تایید</Button
                    >
                    <LoadingButton :isShow="loadingFormState" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-7 xl:col-span-9 hidden lg:block">
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
import { useToast } from "vue-toastification";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();
const sellerStore = useSellersStore();
const { loading } = storeToRefs(useSellersStore());
const loadingFormState = ref(false);
const mobile = ref("");
const sellerMobile = useCookie("seller-mobile");

definePageMeta({
  middleware: "seller-guest",
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});

const doSendOtp = async () => {
  if (mobile.value != "") {
    if (mobile.value.toString().length == 10) {
      loadingFormState.value = true;
      const result = await sellerStore.sendSellerLoginOtp({ mobile: mobile.value });
      if (result == false) {
        toast.error("خطایی رخ داده");
        loadingFormState.value = false;
      }

      if (result.status == 200) {
        loadingFormState.value = false;
        sellerMobile.value = mobile.value;
        router.push("/account/otp");
      } else {
        loadingFormState.value = false;
        toast.error(result.message);
      }
    } else {
      toast.error("شماره همراه نامعتبر میباشد");
    }
  } else {
    toast.error("لطفا شماره همراه خود را وارد کنید");
  }
};
</script>

<style></style>
