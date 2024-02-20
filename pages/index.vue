<template>
  <h1>Zekri Sellers Dashboard</h1>
</template>

<script setup>
import { onMounted } from "vue";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";

const { loading } = storeToRefs(useSellersStore());

definePageMeta({
  middleware: "seller-auth",
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>
