<template>
  <div class="container-fluid">
    <div class="lg:grid lg:grid-cols-12">
      <DesktopLineProgress :registerInformation="registerInformation" />

      <div class="lg:p-6 lg:col-span-9 col-span-12">
        <MobileLineProgress />

        <div>
          <SellerState
            v-if="activeComponent.name == 'SellerState'"
            @change_seller_type="(type) => change_seller_type(type)"
          />

          <SellerInformation
            v-if="activeComponent.name == 'SellerInformation'"
            :registerData="register_data"
            @go_to_back="(to) => go_to_back(to)"
            @verify_seller_info="add_seller_info()"
          />

          <SellerLocation v-if="activeComponent.name == 'SellerLocation'" />

          <SellerQuestions v-if="activeComponent.name == 'SellerQuestions'" />

          <SellerGoPanel v-if="activeComponent.name == 'SellerGoPanel'" />

          <!-- <component :is="" :sellerType="0" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useSellersStore } from "~/store/sellersStore";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toastification";

import DesktopLineProgress from "@/components/Registration/DesktopLineProgress.vue";
import MobileLineProgress from "@/components/Registration/MobileLineProgress.vue";
import SellerState from "@/components/Registration/SellerState.vue";
import SellerLearnVideo from "@/components/Registration/SellerLearnVideo.vue";
import SellerInformation from "@/components/Registration/SellerInformation.vue";
import SellerLocation from "@/components/Registration/SellerLocation.vue";
import SellerQuestions from "@/components/Registration/SellerQuestions.vue";
import SellerGoPanel from "@/components/Registration/SellerGoPanel.vue";

const toast = useToast();
const { loading } = storeToRefs(useSellersStore());
const sellerStore = useSellersStore();
const showMapForm = ref(false);
const registerInformation = useCookie("register-info");
const seller_register_data = useCookie("register-data");
const currentLevel = useCookie("current-level");
const registerOptions = reactive([
  {
    title: "اطلاعات",
    icon: "info",
    checked: false,
    parent: true,
    childs: [
      {
        title: "وضعیت فروشنده",
        icon: "store",
        checked: false,
        parent: false,
        name: "SellerState",
        back: "",
      },
      {
        title: "اطلاعات تکمیلی",
        icon: "file",
        checked: false,
        parent: false,
        name: "SellerInformation",
        back: "SellerState",
      },
    ],
  },
  {
    title: "آدرس",
    icon: "location-dot",
    checked: false,
    parent: true,
    childs: [
      {
        title: "موقعیت مکانی",
        icon: "location-dot",
        checked: false,
        parent: false,
        name: "SellerLocation",
        back: "SellerInformation",
      },
    ],
  },
  {
    title: "آموزش",
    icon: "book",
    parent: true,
    checked: false,
    childs: [
      {
        title: "مشاهده آموزش",
        icon: "eye",
        checked: false,
        parent: false,
        name: "SellerLearnVideo",
        back: "SellerLocation",
      },
    ],
  },
  {
    title: "سوالات",
    icon: "question",
    checked: false,
    parent: true,
    childs: [
      {
        title: "آشنایی",
        icon: "question",
        checked: false,
        parent: false,
        name: "SellerQuestions",
        back: "SellerLearnVideo",
      },
    ],
  },
  {
    title: "ورود به پنل",
    icon: "user",
    parent: true,
    checked: false,
    name: "SellerGoPanel",
    back: "SellerQuestions",
  },
]);
const activeComponent = ref({ name: "SellerState" });

const register_data = reactive({
  seller_type: 0,
  seller_info: {
    firstname: "",
    lastname: "",
    codemelli: "",
    store_name: "",
    cardnumber: "",
    shabanumber: "",
    person_type: "",
    shenase_melli: "",
    code_eghtesadi: "",
  },
});

definePageMeta({
  middleware: "seller-auth",
});

watch(
  () => register_data.seller_info.cardnumber,
  (newVal, oldVal) => {
    if (newVal != "") {
      let realNumber = register_data.seller_info.cardnumber.replace(/-/gi, "");
      let dashedNumber = realNumber.match(/.{1,4}/g);
      register_data.seller_info.cardnumber = dashedNumber.join("-");
    }
  }
);

onMounted(() => {
  if (registerInformation.value == undefined) {
    registerInformation.value = registerOptions;
  }

  if (currentLevel.value == undefined) {
    currentLevel.value = "0,0";
  }

  if (seller_register_data.value != undefined) {
    register_data.value = seller_register_data.value;
  }

  specific_current_level();

  setTimeout(() => {
    loading.value = false;
  }, 500);
});

const specific_current_level = () => {
  let levelArr = currentLevel.value.split(",");
  let level = registerInformation.value[levelArr[0]].childs[levelArr[1]];
  activeComponent.value = level;
};

const change_seller_type = (type) => {
  register_data.seller_type = type;
  seller_register_data.value = register_data;

  let levelArr = currentLevel.value.split(",");
  registerInformation.value[levelArr[0]].childs[levelArr[1]].checked = true;

  currentLevel.value = "0,1";
  specific_current_level();
};

const go_to_back = (to) => {
  currentLevel.value = to;

  let levelArr = currentLevel.value.split(",");
  registerInformation.value[levelArr[0]].childs[levelArr[1]].checked = false;
  specific_current_level();
};

const add_seller_info = () => {
  if (registerData.seller_type == 0) {
    //check codemelli validate
    if (!/^[0-9]{10}$/.test(register_data.seller_info.codemelli)) {
      toast.error("کد ملی وارد شده معتبر نمیباشد");
      return false;
    }

    // check cardnumber validate
    if (register_data.seller_info.cardnumber != "") {
      if (
        !/^[0-9]{16}$/.test(
          parseInt(register_data.seller_info.cardnumber.split("-").join(""))
        )
      ) {
        toast.error("شماره کارت معتبر نمیباشد");
        return false;
      }
    }

    // check shabanumber validate
    if (register_data.seller_info.shabanumber != "") {
      if (!/^[0-9]{24}$/.test(parseInt(register_data.seller_info.shabanumber))) {
        toast.error("شماره شبا معتبر نمیباشد");
        return false;
      }
    }

    if (register_data.seller_info.store_name == "") {
      toast.error("نام فروشگاه الزامی میباشد");
      return false;
    }
  }

  if (registerData.seller_type == 1) {
    //check codemelli validate
    if (!/^[0-9]{10}$/.test(register_data.seller_info.codemelli)) {
      toast.error("کد ملی وارد شده معتبر نمیباشد");
      return false;
    }

    // check cardnumber validate
    if (register_data.seller_info.cardnumber != "") {
      if (
        !/^[0-9]{16}$/.test(
          parseInt(register_data.seller_info.cardnumber.split("-").join(""))
        )
      ) {
        toast.error("شماره کارت معتبر نمیباشد");
        return false;
      }
    }

    // check shabanumber validate
    if (register_data.seller_info.shabanumber != "") {
      if (!/^[0-9]{24}$/.test(parseInt(register_data.seller_info.shabanumber))) {
        toast.error("شماره شبا معتبر نمیباشد");
        return false;
      }
    }
  }

  console.log(register_data.seller_info);
};
</script>
