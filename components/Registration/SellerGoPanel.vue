<template>
  <div
    :class="
      activeComponent == 'SellerGoPanel' ? 'top-0 visible' : 'top-[900px] invisible'
    "
    class="overflow-y-scroll Step-reg-map p-6 h-full absolute transition-all w-full"
  >
    <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold mt-6 h-10">
      <span
        @click="go_to_back()"
        class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
      >
        <i class="fa-duotone fa-arrow-right !leading-3"></i
      ></span>

      <span class="leading-3">ورود به پنل</span>
    </h2>

    <div class="welcome border lg:rounded-lg mt-6 p-6">
      <p class="text-2xl font-semibold py-6 block text-center">
        به خانواده بزرگ فروشندگان ذکری مارکت خوش آمدید!
      </p>
      <div class="flex items-center justify-center py-8">
        <img src="@/assets/images/seller.png" class="w-72" />
      </div>

      <div class="w-full m-auto flex items-center justify-center">
        <button
          @click="do_register_seller()"
          class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none max-w-lg"
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
            <span class="w-full" v-if="registerLoading == false">ورود به پنل</span>
            <div class="loader" v-if="registerLoading == true"></div>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["activeComponent", "registerLoading"]);
const emit = defineEmits(["go_to_back", "register_seller"]);
const go_to_back = () => {
  emit("go_to_back", "3,0");
};

const do_register_seller = () => {
  emit("register_seller");
};
</script>
