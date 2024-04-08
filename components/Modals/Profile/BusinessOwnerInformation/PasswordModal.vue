<template>
  <transition-group name="modal">
    <!--  رمز عبور -->
    <div
      v-if="activeModal == 'passwordModal'"
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
            <h3 class="text-xl font-semibold block text-gray-500">تغییر رمز عبور</h3>
          </div>
        </div>
        <div class="modal-body font-fa mx-2 px-6 my-4 w-full">
          <div class="gap-6">
            <div class="relative col-span-4 sm:col-span-2">
              <label
                for="password"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>رمز عبور فعلی*</span></label
              >
              <div class="flex mt-1 rounded-md">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-user-lock text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="password"
                    v-model="passwordData.password"
                    class="items-center block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                    placeholder="رمز عبور"
                  />
                  <div
                    class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                  >
                    <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش">
                      <i
                        class="fa-duotone fa-eye text-cyan-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"
                      ></i
                      ><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                              <i
                                @click="switchVisibility"
                                class="fa-duotone fa-eye-slash text-cyan-500 h-5 w-5 flex leading-[1px] pl-1"
                              ></i> -->
                    </div>
                  </div>
                </div>
              </div>

              <nuxt-link
                to="/forget-password"
                class="text-cyan-500 font-medium my-2 block text-sm cursor-pointer"
              >
                بازیابی رمز عبور</nuxt-link
              >
              <span class="text-gray-600">رمز عبور شما باید حداقل ۸ حرف باشد.</span>
            </div>

            <div class="relative col-span-4 sm:col-span-2 mt-4">
              <label
                for="new-password"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>رمز عبور جدید*</span></label
              >
              <div class="flex mt-1 rounded-md">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-user-lock text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="password"
                    :value="passwordData.newPassword"
                    @input="(e) => set_new_password_value(e)"
                    class="items-center block w-full focus:border-cyan-500 focus:ring-cyan-500 pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                    placeholder="رمز عبور"
                  />
                  <div
                    class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                  >
                    <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش">
                      <i
                        class="fa-duotone fa-eye text-cyan-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"
                      ></i
                      ><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                              <i
                                @click="switchVisibility"
                                class="fa-duotone fa-eye-slash text-cyan-500 h-5 w-5 flex leading-[1px] pl-1"
                              ></i> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul
            v-if="password_validator_results.length != 0"
            class="p-3 mt-4 list-decimal flex flex-col bg-gray-50 rounded-md pr-6"
          >
            <li
              v-for="(result, index) in password_validator_results"
              :key="index"
              class="color-500 text-caption"
            >
              {{ result.message }}
            </li>
          </ul>

            <div class="relative col-span-4 sm:col-span-2 mt-6">
              <label
                for="repeat-password"
                class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                ><span>تکرار رمز عبور جدید*</span></label
              >
              <div class="flex mt-1 rounded-md">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                  >
                    <i
                      class="fa-duotone fa-user-lock text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                    ></i>
                  </div>
                  <input
                    type="password"
                    :class="{
                      'focus:border-cyan-500 focus:ring-cyan-500':
                        passwordData.repeatPassword == passwordData.newPassword &&
                        passwordData.repeatPassword != '',
                      'focus:border-red-500 focus:ring-red-500':
                        passwordData.repeatPassword != passwordData.newPassword ||
                        passwordData.repeatPassword == '',
                      'bg-gray-100':
                        password_validator_results.length != 0 ||
                        passwordData.newPassword == '',
                    }"
                    v-model="passwordData.repeatPassword"
                    :disabled="
                      password_validator_results.length != 0 &&
                      passwordData.newPassword == ''
                        ? true
                        : false
                    "
                    class="items-center block w-full pr-10 border-gray-300 rounded-md  sm:text-sm"
                    placeholder="رمز عبور"
                  />
                  <div
                    class="absolute inset-y-0 left-0 flex items-center justify-center pl-2 pr-2 cursor-pointer pointer-events-auto rounded-l-md"
                  >
                    <div position="top" tooltip="نمایش" paid="نمایش" balance="نمایش">
                      <i
                        class="fa-duotone fa-eye text-cyan-500 h-1 pt-1 w-5 flex leading-[1px] pl-1"
                      ></i
                      ><!-- هنگام مخفی کردن پسورد ایکون زیر نمایش داده شود به صورت Toggle
                              <i
                                @click="switchVisibility"
                                class="fa-duotone fa-eye-slash text-cyan-500 h-5 w-5 flex leading-[1px] pl-1"
                              ></i> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              :class="['bg-gray-300 mt-8']"
              :isShow="password_validator_results.length != 0 ||
              passwordData.repeatPassword != passwordData.newPassword ? false : true"
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> تغییر رمز عبور
            </Button>
            <Button
              @click="change_seller_mobile()"
              :class="['bg-cyan-500 mt-8 shadow-md shadow-cyan-200']"
              :isShow="password_validator_results.length == 0 &&
              passwordData.repeatPassword == passwordData.newPassword && sendRequestLoading == false ? false : true"
            >
              <i class="fa-solid fa-edit pl-2 text-xl"></i> تغییر رمز عبور
            </Button>
          </div>
        </div>
      </div>
    </div>
    <!-- رمز عبور-->
  </transition-group>
</template>

<script setup>
import Button from "@/components/Buttons/Button.vue";
import LoadingButton from "@/components/Buttons/LoadingButton.vue";
import passwordValidator from "password-validator";
import { useSellersStore } from "~/store/sellersStore";
import { useToast } from "vue-toastification";

const toast = useToast();
const sellerStore = useSellersStore();
const props = defineProps(["activeModal"]);
const emit = defineEmits(["close"]);
const sendRequestLoading = ref(false);
const passwordValidatorSchema = new passwordValidator();
const password_validator_results = ref([]);
const passwordData = reactive({
  password: "",
  newPassword: "",
  repeatPassword: "",
});
passwordValidatorSchema
  .is()
  .min(8, "رمز عبور شما باید حداقل ۸ حرف باشد.") // Minimum length 8
  .is()
  .max(100, "حداکثر تعداد کاراکتر مجاز 30 کاراکتر میباشد") // Maximum length 100
  .has()
  .uppercase(1, "حداقل باید از 1 حرف از حروف بزرگ لاتین استفاده کنید") // Must have uppercase letters
  .has()
  .lowercase(1, "حداقل باید از 1 حرف از حروف کوچک لاتین استفاده کنید") // Must have lowercase letters
  .has()
  .digits(2, "حداقل باید 2 کاراکتر از نوع عدد استفاده کنید") // Must have at least 2 digits
  .has()
  .not()
  .spaces(0, "نباید فاصله خالی بین کاراکتر ها وجود اشته باشد") // Should not have spaces
  .is()
  .not()
  .oneOf(
    ["Passw0rd", "Password123"],
    "گذرواژه وارد کرده باید گذرواژه ای به غیر از این ها باشد (Passw0rd , Password123)"
  );
const set_new_password_value = (e) => {
  passwordData.newPassword = e ? e.target.value : "";

  const validator_result = passwordValidatorSchema.validate(passwordData.newPassword, {
    details: true,
  });
  password_validator_results.value = validator_result;
};

set_new_password_value();

const change_password = async () => {
  if (is_validate_password()) {
    sendRequestLoading.value = true;
    const result = await sellerStore.do_change_user_password(passwordData);
    if (result.statusCode == 200) {
      sendRequestLoading.value = false;
      toast.success(result.message);

      passwordData.password = "";
      passwordData.newPassword = "";
      passwordData.repeatPassword = "";

      reset_modals();
    } else {
      sendRequestLoading.value = false;
      toast.error(result.message);
    }
  }
};

const is_validate_password = () => {
  if (passwordData.password == "") {
    toast.error("رمز عبور فعلی خود را خالی نگدارید");
    return false;
  } else if (passwordData.newPassword == "") {
    toast.error("رمز عبور جدید خود را وارد کنید");
    return false;
  } else if (passwordData.repeatPassword == "") {
    toast.error("تکرار رمز عبور جدید الزامی است");
    return false;
  } else if (password_validator_results.value.length != 0) {
    toast.error("لطفا تمامی معیار های تعیین شده برای گذرواژه را رعایت کنید");
    return false;
  } else if (passwordData.newPassword != passwordData.repeatPassword) {
    toast.error("گذرواژه جدید با تکرار گذرواژه یکسان نیست");
    return false;
  } else {
    return true;
  }
};



const close_modal = () => {
  emit("close");
};
</script>
