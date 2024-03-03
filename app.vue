<template>
  <div class="w-full h-full">
    <div class="spin-container" :class="loading == true ? 'show' : 'hide'">
      <img src="@/assets/images/logo.png" width="200" />
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";

const { loading } = storeToRefs(useSellersStore());
</script>

<style>
.Vue-Toastification__toast {
  max-width: 399px !important;
  direction: rtl !important;
  font-family: "yekan-bakh-new" !important;
}
.Vue-Toastification__icon {
  margin-right: 0 !important;
  margin-left: 18px !important;
}
.spin-container {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.spin-container.show {
  visibility: visible;
  opacity: 1;
}

.spin-container.hide {
  transition: 0.3s all ease;
  visibility: hidden;
  opacity: 0;
}
</style>
