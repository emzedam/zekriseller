<template>
  <div class="container-fluid">
    <div class="h-screen md:overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="col-span-12 md:col-span-12 xl:col-span-5 relative z-50">
          <div class="w-full bg-white xl:p-12 p-10 darker:bg-zinc-800 h-full">
            <div class="flex h-[90vh] flex-col">
              <div class="mx-auto">
                <a href="/" class="">
                  <img src="@/assets/images/logo.png" alt="" class="h-8 inline" />
                </a>
              </div>

              <div class="lg:my-auto my-8">
                <form class="mt-4 pt-2" @submit.prevent="change_password()">
                  <div>
                    <div
                      class="bg-gray-500/10 h-16 w-16 text-primary text-center mx-auto rounded-full flex items-center justify-center"
                    >
                      <i
                        class="fa-light fa-lock text-3xl leading-[2.2] text-cyan-500"
                      ></i>
                    </div>
                  </div>

                  <div class="text-right mt-6 mb-6">
                    <h4 class="text-gray-700 font-bold text-2xl darker:text-gray-100">
                      رمز شما
                    </h4>
                    <div class="mb-4 mt-3 text-md font-medium">
                      <span> برای پنل رمز تعیین کنید تا امنیت آن حفظ شود: </span>
                    </div>
                  </div>

                  <div
                    class="mb-3 relative rounded-md border border-gray-300 darker:border-gray-400 px-3 py-3 shadow-sm focus-within:border-cyan-600 focus-within:ring-1 focus-within:ring-cyan-600"
                  >
                    <label
                      for="name"
                      class="absolute -top-2 right-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900 darker:bg-zinc-800 darker:text-gray-400"
                    >
                      تعیین رمز</label
                    >
                    <input
                      type="passeord"
                      name="name"
                      id="name"
                      class="w-full border-0 p-0 text-gray-900 outline-none placeholder-gray-500 focus:ring-0 sm:text-sm pl-8 text-left flex items-center leading-3 pt-2"
                      placeholder="******"
                      @keyup="(e) => passwordKeyUp(e)"
                    />

                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <i class="fa-thin fa-lock text-gray-400"></i>
                    </div>
                  </div>
                  <div class="mb-3">
                    <Button @click="" :isShow="loadingFormState">تایید رمز</Button>
                    <LoadingButton :isShow="loadingFormState" />
                  </div>

                  <div class="grid grid-cols-2 pt-2 text-xs gap-4">
                    <div
                      class="flex items-center flex-col-xs-6"
                      v-for="(password, index) in password_conds"
                      :key="index"
                    >
                      <div class="flex ml-2" data-testid="icon-wrapper">
                        <i
                          class="fa"
                          :class="
                            password.isOk == true
                              ? 'text-green-500 fa-check'
                              : 'text-red-500 fa-close'
                          "
                        ></i>
                      </div>
                      <span class="text-caption color-n-700">{{ password.text }}</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-7 xl:col-span-7 hidden lg:block">
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
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const { loading } = storeToRefs(useSellersStore());
const router = useRouter();
const sellerStore = useSellersStore();
const SellerToken = useCookie("seller-token", { maxAge: 60 * 60 * 24, path: "/" });
const loadingFormState = ref(false);
const toast = useToast();
const password_input = ref("");

const password_conds = reactive([
  {
    text: "حداقل ۸ تایی",
    isOk: false,
  },
  {
    text: "حرف انگلیسی بزرگ و کوچک",
    isOk: false,
  },
  {
    text: "عدد",
    isOk: false,
  },
  {
    text: "نشانه %!@#$*",
    isOk: false,
  },
]);

onMounted(() => {
  if (SellerToken.value == undefined) {
    router.push("/account/signin");
  }

  setTimeout(() => {
    loading.value = false;
  }, 500);
});

definePageMeta({
  middleware: "seller-auth",
});

const passwordKeyUp = (e) => {
  let password = e.target.value;
  password_input.value = password;

  if (password.length > 7) {
    password_conds[0].isOk = true;
  } else {
    password_conds[0].isOk = false;
  }

  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    password_conds[1].isOk = true;
  } else {
    password_conds[1].isOk = false;
  }

  if (password.match(/([0-9])/)) {
    password_conds[2].isOk = true;
  } else {
    password_conds[2].isOk = false;
  }

  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    password_conds[3].isOk = true;
  } else {
    password_conds[3].isOk = false;
  }
};

const change_password = async () => {
  if (!checkPassword()) {
    toast.error("لطفا گذراژه خود را طبق شرایط تعیین شده وارد کنید");
    return false;
  }

  loadingFormState.value = true;

  const result = await sellerStore.change_seller_password({
    password: password_input.value,
  });
  if (result != false) {
    if (result.status == 200) {
      toast.success(result.message);
      loadingFormState.value = false;
      router.push("/account/registration");
    } else {
      loadingFormState.value = false;
      toast.error(result.message);
    }
  } else {
    loadingFormState.value = false;
    toast.error("خطایی رخ داده !");
  }
};

const checkPassword = () => {
  return password_conds.every((item) => item.isOk);
};
</script>
