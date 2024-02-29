<template>
  <div class="wrapper overflow-x-hidden bg-white">
    <MenuRight />
    <div
      :class="NavMenu == true ? 'lg:mr-0 mr-0' : 'lg:mr-72 mr-0'"
      class="flex flex-col min-h-screen transition-all duration-500 ease-in-out"
    >
      <Header />
      <main class="pt-20">
        <div class="mx-auto py-4 px-5">
          <Dashboard />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";
import MenuRight from "@/components/MenuRight/menu.vue";
import Dashboard from "@/components/DashboardWidgets/dashboard.vue";
import CollapseTransition from "@/plugins/CollapseTransition.vue";
import Header from "@/components/Header/header.vue";
import Footer from "@/components/Footer/footer.vue";

const NavMenu = ref(false);
const profile = ref(false);
const Notification = ref(false);
const submenuIndex = ref(false);
const peyamha = ref(false);
const { loading } = storeToRefs(useSellersStore());

definePageMeta({
  middleware: "auth-dashboard",
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});

const openSubMenu = () => {
  if (submenuIndex.value == index) {
    submenuIndex.value = null;
  } else {
    submenuIndex.value = index;
  }
};
</script>
