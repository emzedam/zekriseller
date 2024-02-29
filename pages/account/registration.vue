<template>
  <div class="container-fluid">
    <div class="lg:grid lg:grid-cols-12">
      <DesktopLineProgress :registerInformation="registerInformation" />

      <div class="lg:p-6 lg:col-span-9 col-span-12">
        <MobileLineProgress />

        <div class="overflow-hidden relative w-full h-full">
          <SellerState
            :activeComponent="activeComponent.name"
            @change_seller_type="(type) => change_seller_type(type)"
          />

          <SellerInformation
            :activeComponent="activeComponent.name"
            :registerData="seller_register_data != undefined ? seller_register_data : []"
            @go_to_back="(to) => do_go_to_back(to)"
            @verify_seller_info="add_seller_info()"
            @change_person_type="(personType) => do_change_person_type(personType)"
          />

          <SellerLocation
            @go_to_back="(to) => do_go_to_back(to)"
            :activeComponent="activeComponent.name"
            :registerData="seller_register_data != undefined ? seller_register_data : []"
            @change_to_next_level="go_to_next_level()"
          />

          <SellerLearnVideo
            @go_to_back="(to) => do_go_to_back(to)"
            :activeComponent="activeComponent.name"
            @change_to_next_level="(status) => go_from_learn_video_to_next(status)"
          />

          <SellerQuestions
            @go_to_back="(to) => do_go_to_back(to)"
            :question_list="questionList.length != 0 ? questionList : []"
            :question_values="
              seller_register_data != undefined &&
              seller_register_data.questions.length != 0
                ? seller_register_data.questions
                : []
            "
            @go_final_level="change_level_to_final()"
            :activeComponent="activeComponent.name"
          />

          <SellerGoPanel
            @go_to_back="(to) => do_go_to_back(to)"
            :registerLoading="registerLoading"
            @register_seller="do_register_seller()"
            :activeComponent="activeComponent.name"
          />

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
import { useRouter } from "vue-router";
import DesktopLineProgress from "@/components/Registration/DesktopLineProgress.vue";
import MobileLineProgress from "@/components/Registration/MobileLineProgress.vue";
import SellerState from "@/components/Registration/SellerState.vue";
import SellerLearnVideo from "@/components/Registration/SellerLearnVideo.vue";
import SellerInformation from "@/components/Registration/SellerInformation.vue";
import SellerLocation from "@/components/Registration/SellerLocation.vue";
import SellerQuestions from "@/components/Registration/SellerQuestions.vue";
import SellerGoPanel from "@/components/Registration/SellerGoPanel.vue";

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
    childs: [],
  },
]);
const questionList = ref([]);
const registerLoading = ref(false);
const activeComponent = ref({ name: "SellerState" });
const router = useRouter();

let register_data = reactive({
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
    company_name: "",
    code_eghtesadi: "",
  },
  address: {
    fullAddress: "",
    state: "",
    city: "",
    pelak: "",
    codePosti: "",
    lat: "",
    lng: "",
  },
  watched_learn_videos: false,
  questions: [],
});

definePageMeta({
  middleware: "seller-auth",
});

watch(
  () =>
    seller_register_data.value != undefined
      ? seller_register_data.value.seller_info.cardnumber
      : null,
  (newVal, oldVal) => {
    if (newVal != "") {
      let realNumber = seller_register_data.value.seller_info.cardnumber.replace(
        /-/gi,
        ""
      );
      let dashedNumber = realNumber.match(/.{1,4}/g);
      seller_register_data.value.seller_info.cardnumber = dashedNumber.join("-");
    }
  }
);

onMounted(async () => {
  if (registerInformation.value == undefined) {
    registerInformation.value = registerOptions;
  }

  if (currentLevel.value == undefined) {
    currentLevel.value = "0,0";
  }

  if (seller_register_data.value == undefined) {
    seller_register_data.value = register_data;
  }

  specific_current_level();
  recheck_road_state();

  await get_question_items_list();

  setTimeout(() => {
    loading.value = false;
  }, 500);
});

const recheck_road_state = () => {
  registerInformation.value.forEach((option) => {
    if (option.childs.length != 0) {
      if (option.childs.every((item) => item.checked)) {
        option.checked = true;
      } else {
        option.checked = false;
      }
    }
  });
};

const specific_current_level = () => {
  let levelArr = currentLevel.value.split(",");
  let level;
  if (registerInformation.value[levelArr[0]].childs.length != 0) {
    level = registerInformation.value[levelArr[0]].childs[levelArr[1]];
  } else {
    level = {
      title: "ورود به پنل",
      icon: "user",
      parent: true,
      checked: false,
      name: "SellerGoPanel",
      back: "SellerQuestions",
    };
  }
  activeComponent.value = level;
};

const change_seller_type = (type) => {
  seller_register_data.value.seller_type = type;

  let levelArr = currentLevel.value.split(",");
  registerInformation.value[levelArr[0]].childs[levelArr[1]].checked = true;

  currentLevel.value = "0,1";
  specific_current_level();
  recheck_road_state();
};

const do_go_to_back = (to) => {
  currentLevel.value = to;

  let levelArr = currentLevel.value.split(",");
  registerInformation.value[levelArr[0]].childs[levelArr[1]].checked = false;
  specific_current_level();
  recheck_road_state();
};

const add_seller_info = () => {
  if (seller_register_data.value.seller_type == 0) {
    //check codemelli validate
    if (seller_register_data.value.seller_info.codemelli == "") {
      toast.error("لطفا کد ملی خود را وارد کنید");
      return false;
    }
    if (!/^[0-9]{10}$/.test(seller_register_data.value.seller_info.codemelli)) {
      toast.error("کد ملی وارد شده معتبر نمیباشد");
      return false;
    }
    // check cardnumber validate
    if (seller_register_data.value.seller_info.cardnumber != "") {
      if (
        !/^[0-9]{16}$/.test(
          parseInt(seller_register_data.value.seller_info.cardnumber.split("-").join(""))
        )
      ) {
        toast.error("شماره کارت معتبر نمیباشد");
        return false;
      }
    }
    // check shabanumber validate
    if (seller_register_data.value.seller_info.shabanumber != "") {
      if (!/^[0-9]{24}$/.test(seller_register_data.value.seller_info.shabanumber)) {
        toast.error("شماره شبا معتبر نمیباشد");
        return false;
      }
    }
    // check store name validate
    if (seller_register_data.value.seller_info.store_name == "") {
      toast.error("نام فروشگاه الزامی میباشد");
      return false;
    }
  }
  if (seller_register_data.value.seller_type == 1) {
    // check store name validate
    if (seller_register_data.value.seller_info.company_name == "") {
      toast.error("نام ثبت شده شرکت الزامی میباشد");
      return false;
    }
    //check person type validate
    if (seller_register_data.value.seller_info.person_type == "") {
      toast.error("لطفا نوع شخصیت خود را انتخاب کنید");
      return false;
    }
    //check codemelli validate
    if (seller_register_data.value.seller_info.shenase_melli == "") {
      toast.error("لطفا شناسه ملی خود را وارد کنید");
      return false;
    }
    if (!/^[0-9]{10}$/.test(seller_register_data.value.seller_info.shenase_melli)) {
      toast.error("شناسه ملی وارد شده معتبر نمیباشد");
      return false;
    }
    // check validate code eghtesadi
    if (seller_register_data.value.seller_info.code_eghtesadi != "") {
      if (!/^[0-9]$/.test(seller_register_data.value.seller_info.code_eghtesadi)) {
        toast.error("کد اقتصادی وارد شده معتبر نمیباشد");
        return false;
      }
    }
    // check shabanumber validate
    if (seller_register_data.value.seller_info.shabanumber != "") {
      if (!/^[0-9]{24}$/.test(seller_register_data.value.seller_info.shabanumber)) {
        toast.error("شماره شبا معتبر نمیباشد");
        return false;
      }
    }
    // check store name validate
    if (seller_register_data.value.seller_info.store_name == "") {
      toast.error("نام فروشگاه الزامی میباشد");
      return false;
    }
  }
  let levelArr = currentLevel.value.split(",");
  registerInformation.value[levelArr[0]].childs[levelArr[1]].checked = true;
  currentLevel.value = "1,0";
  specific_current_level();
  recheck_road_state();
};

const do_change_person_type = (personType) => {
  seller_register_data.value.seller_info.person_type = personType;
};

const go_to_next_level = () => {
  let levelArr = currentLevel.value.split(",");
  registerInformation.value[levelArr[0]].childs[levelArr[1]].checked = true;

  currentLevel.value = "2,0";
  specific_current_level();
  recheck_road_state();
};

const go_from_learn_video_to_next = (status) => {
  let levelArr = currentLevel.value.split(",");
  registerInformation.value[levelArr[0]].childs[levelArr[1]].checked = true;

  seller_register_data.value.watched_learn_videos = status;

  currentLevel.value = "3,0";
  specific_current_level();
  recheck_road_state();
};

const get_question_items_list = async () => {
  const result = await sellerStore.get_seller_questions_list();
  if (result.status == 200) {
    questionList.value = result.result;
    let value_array = [];
    questionList.value.forEach((question, index) => {
      value_array = [
        ...value_array,
        {
          question_id: question._id,
          value: question.question_type == "checkbox" ? [] : "",
        },
      ];
    });
    seller_register_data.value.questions = value_array;
  } else if (result.status == 401) {
    window.location.href = "/account/signin";
  }
};

const change_level_to_final = () => {
  let levelArr = currentLevel.value.split(",");
  registerInformation.value[levelArr[0]].childs[levelArr[1]].checked = true;
  currentLevel.value = "4,0";
  specific_current_level();
  recheck_road_state();
};

const do_register_seller = async () => {
  //   console.log(seller_register_data.value);
  registerLoading.value = true;
  const result = await sellerStore.register_seller(seller_register_data.value);
  if (result.status == 200) {
    seller_register_data.value = undefined;
    currentLevel.value = undefined;
    registerInformation.value = undefined;
    registerLoading.value = false;

    toast.success("به پنل مدیریت فروشندگی خود خوش آمدید");

    router.push("/");
  } else if (result.status == 401) {
    toast.error(result.message);
    window.location.href = "/account/signin";
  } else {
    toast.error(result.message);
  }
};
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
