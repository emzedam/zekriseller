<template>
    <div class="spin-container" :class="loading == true ? 'show' : 'hide'">
      <img src="@/assets/images/logo.png" width="200" />
    </div>
    <main class="pt-20">
         <div class="mx-auto py-4 px-5">
          <div class="lg:col-span-8">
            <VerifyNotif />
            <YourAddress 
            @add_address_to_list="(data) => add_seller_address_to_list(data)"
            @edit_address_in_list="(data) => edit_seller_address_in_list(data)"
            @do_remove_address="(index) => splice_seller_address(index)"
            :addressList="addressList" />
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

  useHead({
    script: [
      {
        src: "https://zekrimarket.com/js/mapbox-gl.js",
      },
      {
        src: "http://localhost:3000/js/mapboxrtl.js",
      },
    ],
    link: [
      {
        type: "text/css",
        rel: "stylesheet",
        href: "https://zekrimarket.com/css/mapbox-gl.css",
      },
    ],
  });

  const sellerStore = useSellersStore()
  const { loading } = storeToRefs(useSellersStore());
  const addressList = ref([])

  definePageMeta({
    layout: "seller-profile-layout",
    middleware: "auth-dashboard",
  });

  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 500);

    get_seller_addresses()
  });

  const get_seller_addresses = async () => {
    const result = await sellerStore.get_seller_addresses()
    if(result.status == 200) {
      addressList.value = result.result
    } else if(result.status == 401){
      window.location.href = "/account/signin"
    }
  }

  const add_seller_address_to_list = (data) => {
    addressList.value = [data , ...addressList.value]
  }

  const edit_seller_address_in_list = (data) => {
    addressList.value.splice(data.index , 1)
    addressList.value = [data.address , ...addressList.value]
  }

  const splice_seller_address = (index) => {
    addressList.value.splice(index , 1)
  }
  </script>