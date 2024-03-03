<template>
  <main class="pt-20">
    <div class="mx-auto py-4 px-5">
      <Dashboard />
    </div>
  </main>
</template>
<script setup>
import { onMounted } from "vue";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";
import Dashboard from "@/components/DashboardWidgets/dashboard.vue";

const { loading } = storeToRefs(useSellersStore());

definePageMeta({
  layout: "seller-layout",
  middleware: "auth-dashboard",
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>
