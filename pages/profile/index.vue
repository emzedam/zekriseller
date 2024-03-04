<template>
  <main class="pt-20">
    <div class="mx-auto py-4 px-5">
      <div class="lg:col-span-8">
        <VerifyNotif />
        <BusinessOwnerInformation />
      </div>
    </div>
  </main>
</template>
<script setup>
import BusinessOwnerInformation from "@/components/Profile/BusinessOwnerInformation.vue";
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
