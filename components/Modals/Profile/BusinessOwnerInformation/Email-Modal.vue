<template>
  <transition-group name="modal">
    <!-- پست الکترونیک -->
    <div
      v-if="activeModal == 'emailModal'"
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
            <h3 class="text-xl font-semibold block text-gray-500">
              ویرایش پست الکترونیکی
            </h3>
          </div>
        </div>
        <div class="modal-body font-fa mx-2 px-6 my-4 w-full">
          <div class="gap-6">
            <div class="relative">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>ایمیل</span></label
              >
              <div class="flex mt-1 rounded-md">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-envelope text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="text"
                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-3"
                    placeholder="ایمیل"
                    v-model="emailData.email"
                    @keyup.enter="edit_seller_email()"
                  />
                </div>
              </div>
            </div>

            <Button
            :class="['bg-gray-300 mt-2']"
            :isShow="emailData.email == '' ? false : true"
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> تایید
            </Button>
            <Button
              @click="edit_seller_email()"
              :class="['bg-cyan-500 mt-2 shadow-md shadow-cyan-200']"
              :isShow="
                emailData.email != '' &&
                sendRequestLoading == false
                  ? false
                  : true
              "
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> تایید
            </Button>
            <LoadingButton :class="['mt-2']" :isShow="sendRequestLoading" />
          </div>
        </div>
      </div>
    </div>
    <!-- پست الکترونیک -->
  </transition-group>
</template>

<script setup>
import { useToast } from "vue-toastification";
import Button from "@/components/Buttons/Button.vue";
import LoadingButton from "@/components/Buttons/LoadingButton.vue";
import { storeToRefs } from "pinia";
import { useSellersStore } from "~/store/sellersStore";

const sellerStore = useSellersStore();
const { authSeller } = storeToRefs(sellerStore);
const toast = useToast();
const sendRequestLoading = ref(false);
const props = defineProps(["activeModal"]);

const emit = defineEmits(["close"]);

const emailData = reactive({
  email: authSeller.value != null && authSeller.value.infoes.email != null ? authSeller.value.infoes.email : "",
});

const edit_seller_email = async () => {
  if (emailData.email != "") {
    if (emailData.email.toString().length <= 8) {
      toast.error("تعداد حروف ایمیل باید از 8 حرف بالاتر باشد");
      return false;
    }
    sendRequestLoading.value = true;
    const result = await sellerStore.change_seller_email(emailData);
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      toast.success(result.message);
      authSeller.value.infoes.email = result.result;

      emit("close");
    } else {
      sendRequestLoading.value = false;
      toast.error(result.message);
    }
  } else {
    sendRequestLoading.value = false;
    toast.error("لطفا ایمیل  خود را وارد کنید");
  }
};

const close_modal = () => {
  emit("close");
};
</script>
