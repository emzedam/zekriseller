<template>
  <TransitionGroup name="modal">
    <div
      v-if="activeModal == 'ShopSiteModal'"
      class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
    >
      <div
        @click="close_modal()"
        class="absolute inset-0 transition-opacity duration-300 bg-black/20"
      ></div>
      <div
        class="relative rounded-lg shadow-lg shadow-gray-300/40 h-auto max-w-xl bg-white m-auto inset-0 w-full"
      >
        <button
          @click="close_modal()"
          type="button"
          class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i class="text-lg fa fa-times"></i>
        </button>
        <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
          <div class="info">
            <h3 class="text-xl font-semibold block text-gray-500">ثبت وب سایت فروشگاه</h3>
          </div>
        </div>
        <div class="modal-body font-fa mx-2 px-6 my-4">
          <div class="grid grid-cols-4">
            <div class="relative col-span-4">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>آدرس فروشگاه</span></label
              >
              <div class="flex mt-1 rounded-md">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-family text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="text"
                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-4"
                    placeholder="آدرس فروشگاه"
                    v-model="store_url"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            :class="['bg-gray-300 mt-2']"
            :isShow="store_url == null ? false : true"
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> تایید
          </Button>
          <Button
            @click="change_store_url()"
            :class="['bg-cyan-500 mt-2 shadow-md shadow-cyan-200']"
            :isShow="
              store_url != null &&
              loadingButton == false
                ? false
                : true
            "
          >
            <i class="fa-solid fa-edit pl-2 text-xl"></i> تایید
          </Button>
          <LoadingButton :class="['mt-2']" :isShow="loadingButton" />
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup>
import { useToast } from "vue-toastification";
import Button from "@/components/Buttons/Button.vue";
import LoadingButton from "@/components/Buttons/LoadingButton.vue";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";

const sellerStore = useSellersStore();
const { authSeller } = storeToRefs(sellerStore);
const toast = useToast();
const props = defineProps(["activeModal" , "storeUrl"]);
const emit = defineEmits(["close"]);
const store_url = ref(null)
const loadingButton = ref(false);

const close_modal = () => {
  emit("close");
};

onMounted(() => {
  if(props.storeUrl != null && props.storeUrl != ""){
     store_url.value = props.storeUrl
  }
})

const change_store_url = async () => {
  if (store_url != null) {
    loadingButton.value = true;
    const result = await sellerStore.chnage_siteurl_store(store_url.value);
    if (result.status == 200) {
      loadingButton.value = false;
      emit("updateStoreInfo" , result.result)
      toast.success(result.message);
      emit("close");
    } else {
      loadingButton.value = false;
      toast.error(result.message);
    }
  } else {
    toast.error("لطفا آدرس فروشگاه را وارد کنید");
  }
};
</script>
