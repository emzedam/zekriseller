<template>
  <!-- ==================اطلاعات مالک کسب‌وکار==================== -->
  <div class="lg:col-span-9">
    <div class="lg:rounded-md relative mb-4 border">
      <h2
        class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b"
      >
        <span
          class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
          ><i class="fa-duotone fa-arrow-right !leading-3"></i
        ></span>
        <span class="leading-3">اطلاعات مالک کسب‌وکار</span>
      </h2>
      <div class="flex flex-col lg:grid lg:grid-cols-2">
        <div
          v-if="authSeller != null"
          class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b"
        >
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">نام و نام خانوادگی</p>
            </div>
            <p
              class="font-medium text-gray-700"
              v-if="authSeller.infoes.firstname != null"
            >
              {{ `${authSeller.infoes.firstname} ${authSeller.infoes.lastname}` }}
            </p>
            <span class="font-medium text-sm text-gray-700" v-else>نا مشخص</span>
          </div>
          <div class="cursor-pointer">
            <span
              v-if="authSeller.infoes.firstname != null"
              class="hidden lg:inline-block"
              @click="open_modal('nameFamilyModal')"
            >
              <div class="flex">
                <i
                  class="fa-light fa-pen-to-square hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span
              v-else
              class="hidden lg:inline-block"
              @click="open_modal('nameFamilyModal')"
            >
              <div class="flex">
                <i
                  class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span class="inline-block lg:hidden" @click="open_modal('codemelliModal')">
              <div class="flex text-gray-400">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b" v-if="authSeller != null">
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">کد ملی</p>
            </div>
            <p class="font-medium text-gray-700" v-if="authSeller.infoes.codemelli != null">{{ authSeller.infoes.codemelli }}</p>
            <p class="font-medium text-gray-700" v-else>نا مشخص</p>
          </div>
          <div class="cursor-pointer">
            <span  v-if="authSeller.infoes.codemelli != null" class="hidden lg:inline-block" @click="open_modal('codemelliModal')">
              <div class="flex">
                <i
                  class="fa-light fa-pen-to-square hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span  v-else class="hidden lg:inline-block" @click="open_modal('codemelliModal')">
              <div class="flex">
                <i
                  class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span class="inline-block lg:hidden" @click="open_modal('codemelliModal')">
              <div class="flex text-gray-400">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div
          class="flex justify-between items-center py-3 lg:py-4 px-4 border-l border-b"
        >
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">شماره موبایل</p>
              <div
                v-if="authSeller != null && authSeller.mobile != null"
                class="rounded-lg px-2 text-caption-strong text-white bg-green-500"
              >
                تاییدشده
              </div>
            </div>
            <p class="font-medium text-gray-700">
              {{
                authSeller != null && authSeller.mobile != null
                  ? authSeller.mobile
                  : "نا مشخص"
              }}
            </p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block" v-if="authSeller.mobile != null" @click="open_modal('mobileNumberModal')">
              <div class="flex">
                <i
                  class="fa-light fa-pen-to-square hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span class="hidden lg:inline-block" v-else @click="open_modal('mobileNumberModal')">
              <div class="flex">
                <i
                  class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span class="inline-block lg:hidden" @click="open_modal('mobileNumberModal')">
              <div class="flex text-gray-400">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-b" v-if="authSeller != null">
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">ایمیل</p>
            </div>
            <p class="font-medium text-gray-700 font-en" v-if="authSeller.infoes.email != null">{{ authSeller.infoes.email }}</p>
            <p class="font-medium text-gray-700" v-else>نا مشخص</p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block" v-if="authSeller.infoes.email != null" @click="open_modal('emailModal')">
              <div class="flex">
                <i
                  class="fa-light fa-pen-to-square hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span class="hidden lg:inline-block" v-else @click="open_modal('emailModal')">
              <div class="flex">
                <i
                  class="fa-light fa-plus hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span class="inline-block lg:hidden" @click="open_modal('emailModal')">
              <div class="flex text-gray-400">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center py-3 lg:py-4 px-4 border-l">
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">رمز عبور</p>
            </div>
            <p class="font-medium text-gray-700">•••••••</p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block" @click="open_modal('passwordModal')">
              <div class="flex">
                <i
                  class="fa-light fa-pen-to-square hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span class="inline-block lg:hidden">
              <div class="flex text-gray-400">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center py-3 lg:py-4 px-4">
          <div>
            <div class="flex items-center">
              <p class="text-body-1 text-gray-500 ml-1">شماره موبایل اطلاع‌رسانی</p>
              <div class="rounded-lg px-2 text-caption-strong text-white bg-green-500">
                تاییدشده
              </div>
            </div>
            <p class="font-medium text-gray-700">۹۸۹۰۳۰۲۶۴۳۰۰</p>
          </div>
          <div class="cursor-pointer">
            <span class="hidden lg:inline-block" @click="open_modal('notifMobileModal')">
              <div class="flex">
                <i
                  class="fa-light fa-pen-to-square hover:text-cyan-500 transition-all duration-300 text-2xl text-cyan-500"
                ></i>
              </div>
            </span>
            <span class="inline-block lg:hidden">
              <div class="flex text-gray-400">
                <i
                  class="fa-light fa-chevron-left text-lg hover:text-cyan-500 transition-all duration-300"
                ></i>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>

    <NameFamilyModal
      :authSeller="authSeller"
      :activeModal="activeModal"
      @close="activeModal = null"
    />
    <EmailModal :activeModal="activeModal" @close="activeModal = null" />
    <CodeMelliModal :activeModal="activeModal" @close="activeModal = null" />
    <MobileNumberModal :activeModal="activeModal" @close="activeModal = null" />
    <NotifMobileNumber :activeModal="activeModal" @close="activeModal = null" />
    <PasswordModal :activeModal="activeModal" @close="activeModal = null" />
  </div>
  <!-- ============== اطلاعات مالک کسب‌وکار ======================= -->
</template>
<script setup>
import NameFamilyModal from "@/components/Modals/Profile/BusinessOwnerInformation/Name-Family-Modal.vue";
import EmailModal from "@/components/Modals/Profile/BusinessOwnerInformation/Email-Modal.vue";
import CodeMelliModal from "@/components/Modals/Profile/BusinessOwnerInformation/Kode-Melli-Modal.vue";
import MobileNumberModal from "@/components/Modals/Profile/BusinessOwnerInformation/Mobile-Number-Modal.vue";
import NotifMobileNumber from "@/components/Modals/Profile/BusinessOwnerInformation/Notification-Mobile-Number.vue";
import PasswordModal from "@/components/Modals/Profile/BusinessOwnerInformation/PasswordModal.vue";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";

const sellersStore = useSellersStore();
const { authSeller } = storeToRefs(sellersStore);

const activeModal = ref(null);
const open_modal = (modalName) => {
  activeModal.value = modalName;
};
</script>

<style>
.modal-mask {
  transition: opacity 0.3s ease;
}

.modal-container {
  max-height: calc(100% - 48px);
  width: calc(100% - 48px);
  max-width: calc(100% - 48px);
  margin: 24px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #fff;
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
