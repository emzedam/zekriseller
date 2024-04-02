<template>
  <div class="wrapper overflow-x-hidden bg-white">
    <ProfileSidebar
      :authSeller="authSeller != null ? authSeller : null"
      @close_navmenu_action="NavMenu = false"
      :NavMenu="NavMenu"
    />
    <div
      :class="NavMenu == false ? 'lg:mr-0 mr-0' : 'lg:mr-72 mr-0'"
      class="flex flex-col min-h-screen transition-all duration-500 ease-in-out"
    >
      <Header
        :authSeller="authSeller"
        :NavMenu="NavMenu"
        @open_navmenu_action="open_nav_menu()"
      />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import ProfileSidebar from "@/components/ProfileSidebar/ProfileSidebar.vue";
import Header from "@/components/Header/header.vue";
import Footer from "@/components/Footer/footer.vue";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";

const sellersStore = useSellersStore();
const { authSeller } = storeToRefs(sellersStore);

const NavMenu = ref(false);

onMounted(() => {
  if (window.innerWidth >= 1280) {
    NavMenu.value = true;
  }
});

const open_nav_menu = () => {
  NavMenu.value = !NavMenu.value;
};
</script>
