<template>
  <transition-group name="modal">
    <!-- ویرایش شماره موبایل اطلاع رسانی -->
    <div
      v-if="activeModal == 'notifMobileModal'"
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
              شماره موبایل اطلاع رسانی
            </h3>
          </div>
        </div>
        <div class="modal-body font-fa mx-2 px-6 my-4">
          <div class="py-2 radius mt-3 pr-0">
            <div class="flex">
              <div class="flex mt-1"><i class="fa fa-info-circle text-gray-500"></i></div>
              <span class="mr-4 text-body-1 text-gray-500"
                >بسیاری از اعلان‌ها، اخبار و گزارش‌های مالی به این شماره ارسال می‌شود
              </span>
            </div>
          </div>

          <div class="mb-2 mt-2">
            <div
              class="flex items-center bg-orange-50 text-orange-500 text-semi-bold border-orange-300"
            >
              <div class="flex">
                <i class="fa fa-info"></i>
              </div>
              <span class="mr-2 text-sm"
                >اگر اینجا را خالی بگذارید، تمام اطلاع‌رسانی‌ها به شماره موبایلی ارسال
                خواهد شد که با آن وارد پنل می‌شوید</span
              >
            </div>
          </div>

          <div class="gap-6">
            <div class="relative col-span-4 sm:col-span-2">
              <label
                for="last-name"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>شماره موبایل</span></label
              >
              <div class="mt-1 input">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-mobile text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="text"
                    class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm py-3"
                    placeholder="شماره موبایل"
                  />
                </div>
              </div>
            </div>

            <button
              class="relative col-span-1 sm:col-span-2 btn hover:text-bg-500/80 transition-colors duration-500 bg-gray-300 px-6 py-3 text-white w-full mt-4 flex items-center border rounded-lg justify-center"
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> دریافت کد تایید و تغییر شماره
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ویرایش شماره موبایل -->
  </transition-group>
</template>

<script setup>
const props = defineProps(["activeModal"]);
const emit = defineEmits(["close"]);

const close_modal = () => {
  emit("close");
};
</script>
