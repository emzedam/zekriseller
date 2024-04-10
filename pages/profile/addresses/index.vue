<template>
    <div class="spin-container" :class="loading == true ? 'show' : 'hide'">
      <img src="@/assets/images/logo.png" width="200" />
    </div>
    <main class="pt-20">
         <div class="mx-auto py-4 px-5">
          <div class="lg:col-span-8">
            <VerifyNotif />
            <YourAddress/>
          </div>
        </div>
    </main>
  </template>
  <script setup>
  import YourAddress from "@/components/Profile/YourAddress.vue";
  import VerifyNotif from "@/components/Profile/VerifyNotif.vue";
  import { onMounted } from "vue";
  import { useSellersStore } from "~/store/sellersStore";
  import { storeToRefs } from "pinia";
  const { loading } = storeToRefs(useSellersStore());

  definePageMeta({
    layout: "seller-profile-layout",
    middleware: "auth-dashboard",
  });

  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 500);
  });
  </script>