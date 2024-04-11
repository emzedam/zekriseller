<template>
  <div
    :class="
      activeComponent == 'SellerLocation' ? 'top-0 visible' : 'top-[900px] invisible'
    "
    class="overflow-y-scroll Step-reg-map border lg:rounded-lg p-6 h-full w-full absolute transition-all"
  >
    <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold mt-6 h-10">
      <span
        @click="go_to_back()"
        class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
      >
        <i class="fa-duotone fa-arrow-right !leading-3"></i
      ></span>

      <span class="leading-3">انتخاب موقعیت مکانی روی نقشه</span>
    </h2>

    <div class="inline-block w-full input py-8" v-if="registerData.length != 0">
      <div class="relative rounded-md">
        <div
          class="modal-body font-fa relative overflow-hidden h-full bg-white rounded-b-lg"
        >
          <div
            id="map"
            class="h-[550px] lg:h-96 w-full bg-cyan-100 relative rounded-lg overflow-hidden"
          >
            <form class="relative z-10 px-6 py-4" style="font-family: 'yekan-bakh-new'">
              <div class="relative lg:w-2/4">
                <div
                  class="absolute inset-y-0 left-4 flex items-center pr-3 pointer-events-none z-10"
                >
                  <i class="fa fa-search text-md text-gray-400"></i>
                </div>

                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 pr-5 text-md font-semibold text-gray-600 border-0 shadow-md border-gray-300 rounded-lg bg-white focus:ring-transparent focus:border-transparent placeholder:text-gray-400/60 relative overflow-hidden"
                  placeholder="جستجوی آدرس"
                  @keyup="(e) => keyUpSearchText(e)"
                  required
                />
                <div
                  v-if="searchResult.length != 0"
                  style="height: 250px; overflow-y: scroll"
                  class="absolute top-15 right-0 w-full bg-white shadow-lg p-4 rounded"
                >
                  <ul class="w-full">
                    <li
                      class="border-b cursor-pointer py-2"
                      v-for="(item, index) in searchResult"
                      :key="index"
                      @click="clickedOnAddress(item)"
                    >
                      <div>
                        <span class="ml-1">
                          <i class="fa-light fa-location-dot text-xs"></i>
                        </span>
                        <b>{{ item.title }}</b>
                      </div>
                      <small>{{ item.address }}</small>
                    </li>
                  </ul>
                </div>
              </div>
            </form>

            <transition-group name="slide">
              <div style="font-family: 'yekan-bakh-new'" key="123">
                <div
                  :class="showMapForm == false ? 'right-[-1900px] ' : 'right-0'"
                  class="bg-white w-full lg:w-2/4 h-screen absolute transition-all top-0 z-10 rounded-r-lg p-6"
                >
                  <div class="relative w-100 p-3">
                    <i
                      @click="showMapForm = false"
                      class="fa fa-close text-red-500 absolute top-0 left-[50px] lg:left-0 text-xl cursor-pointer"
                    ></i>
                  </div>
                  <div class="grid grid-cols-4 gap-4">
                    <div class="relative col-span-4 sm:col-span-2">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span>استان</span>
                      </label>
                      <div class="flex mt-1 rounded-md">
                        <div class="relative w-full focus-within:z-10">
                          <button
                            @click="statesStatus = !statesStatus"
                            type="button"
                            class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                          >
                            <i
                              class="fa-duotone fa-building-flag text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                            ></i>
                            <span class="w-full pr-2 text-right">{{
                              registerData.address.state == ""
                                ? "انتخاب استان"
                                : registerData.address.state
                            }}</span
                            ><i
                              class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                            ></i>
                          </button>
                          <div
                            :class="statesStatus == false ? 'hidden' : ''"
                            class="z-10 w-full mt-2 absolute bg-white border rounded-lg"
                          >
                            <ul
                              class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                              aria-labelledby="dropdownSearchButton"
                              v-if="statesList.length != 0"
                            >
                              <li
                                @click="
                                  () => {
                                    registerData.address.state = state.name;
                                    statesStatus = false;
                                  }
                                "
                                v-for="(state, index) in statesList"
                              >
                                <div
                                  class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                                >
                                  <label
                                    for="checkbox-item-11"
                                    class="flex cursor-pointer items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                                    ><span
                                      class="flex items-center w-full pr-2 text-right"
                                      >{{ state.name }}</span
                                    ><i
                                      v-if="registerData.address.state == state.name"
                                      class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                                    ></i
                                  ></label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="relative col-span-4 sm:col-span-2">
                      <label class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span> شهر</span></label
                      >
                      <div class="flex mt-1 rounded-md">
                        <div class="relative w-full focus-within:z-10">
                          <button
                            @click="cityStatus = !cityStatus"
                            type="button"
                            class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
                          >
                            <i
                              class="fa-duotone fa-building-flag text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"
                            ></i>
                            <span class="w-full pr-2 text-right">{{
                              registerData.address.city == ""
                                ? "انتخاب شهر"
                                : registerData.address.city
                            }}</span>
                            <i
                              class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"
                            ></i>
                          </button>
                          <div
                            :class="cityStatus == false ? 'hidden' : ''"
                            class="z-10 w-full mt-2 absolute bg-white border rounded-lg"
                          >
                            <ul
                              class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                              aria-labelledby="dropdownSearchButton"
                              v-if="citiesList.length != 0"
                            >
                              <li
                                @click="
                                  () => {
                                    registerData.address.city = city.name;
                                    cityStatus = false;
                                  }
                                "
                                v-for="(city, index) in citiesList"
                              >
                                <div
                                  class="flex items-center w-full my-1 border rounded hover:bg-gray-100"
                                >
                                  <label
                                    for="checkbox-item-11"
                                    class="flex cursor-pointer items-center justify-between w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"
                                    ><span
                                      class="flex items-center w-full pr-2 text-right"
                                      >{{ city.name }}</span
                                    ><i
                                      v-if="registerData.address.city == city.name"
                                      class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"
                                    ></i
                                  ></label>
                                </div>
                              </li>
                            </ul>
                            <p v-else class="p-3 text-center">خالی میباشد !</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="relative col-span-4">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span>آدرس آدرس پستی *</span></label
                      >
                      <div class="flex mt-1 rounded-md">
                        <div
                          class="relative flex items-stretch flex-grow focus-within:z-10"
                        >
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <i
                              class="fa-duotone fa-map text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                            ></i>
                          </div>
                          <input
                            type="text"
                            class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                            placeholder="آدرس پستی"
                            v-model="registerData.address.fullAddress"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="relative col-span-4 sm:col-span-2">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span>کد پستی</span></label
                      >
                      <div class="flex mt-1 rounded-md">
                        <div
                          class="relative flex items-stretch flex-grow focus-within:z-10"
                        >
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <i
                              class="fa-duotone fa-signs-post text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                            ></i>
                          </div>
                          <input
                            v-model="registerData.address.codePosti"
                            type="text"
                            class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                            placeholder="کد پستی"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="relative col-span-4 sm:col-span-2">
                      <label
                        for="last-name"
                        class="flex pb-2 pr-1 text-sm font-medium text-gray-700"
                        ><span> پلاک *</span></label
                      >
                      <div class="flex mt-1 rounded-md">
                        <div
                          class="relative flex items-stretch flex-grow focus-within:z-10"
                        >
                          <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                          >
                            <i
                              class="fa-regular fa-input-numeric text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"
                            ></i>
                          </div>
                          <input
                            type="number"
                            v-model="registerData.address.pelak"
                            class="block w-full pr-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <div class="relative flex gap-4">
          <button
            type="button"
            @click="skip_this_level()"
            class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium transition-all duration-300 bg-white border-cyan-500 border text-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex iteme-center justify-center w-full text-center"
              ><span class="w-full"> بعدا انتخاب می کنم</span></span
            >
          </button>

          <button
            @click="show_map_form_and_submit()"
            :class="
              buttonStatus == false
                ? 'bg-cyan-300 cursor-not-allowed'
                : 'bg-cyan-500 cursor-pointer'
            "
            class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span>
            <span
              class="relative z-20 flex iteme-center justify-center w-full text-center"
            >
              <span class="w-full" v-if="reverseLoading == false">تایید و ادامه</span>
              <div class="loader" v-if="reverseLoading == true"></div>
            </span>
          </button>
          <!-- وقتی از روی نقشه مکان رو انتخاب کرد هنگامی که روی دکمه تایید کلیک کرد از طرف راست مثل دی جی کالا قسمت فروشندگان فرم ادرس باز میشه میتونه همون لحظه روی نقشه ادرس رو اصلاح کنه -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "~/axios";
import { useToast } from "vue-toastification";
import { useSellersStore } from "~/store/sellersStore.js";

const props = defineProps(["registerData", "activeComponent"]);
const toast = useToast();
const emit = defineEmits(["go_to_back", "change_to_next_level"]);
const mapCenter = ref([51.38866839337672, 35.69080481760244]);
const searchResult = ref([]);
const showMapForm = ref(false);
const sellerToken = useCookie("seller-token");
const buttonStatus = ref(false);
const statesList = ref([]);
const statesStatus = ref(false);
const cityStatus = ref(false);
const citiesList = ref([]);
const sellerStore = useSellersStore();
const reverseLoading = ref(false);

onMounted(() => {
  map_init();
  get_states_list();
});

const go_to_back = () => {
  emit("go_to_back", "0,1");
};

const map_init = () => {
  setTimeout(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaHNuZW16ZWQiLCJhIjoiY2xvcGdxOTI4MGEweTJpazRmM2JsYjA5YSJ9.8eqD-GBF4CO9Ma8aSYlM8A";

    const map = new mapboxgl.Map({
      container: "map",
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/hsnemzed/clotwhfvh00s801pm2u1sce3v",
      center: mapCenter.value,
      zoom: 16,
    });

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });

    map.addControl(nav, "top-left");

    const marker = new mapboxgl.Marker({ color: "black", rotation: 45 })
      .setLngLat(mapCenter.value)
      .addTo(map);

    map.on("move", function (e) {
      buttonStatus.value = true;
      mapCenter.value = [map.getCenter().lng, map.getCenter().lat];
      marker.setLngLat(map.getCenter());
    });

    marker.setDraggable(false);
  }, 1000);
};

const keyUpSearchText = async (e) => {
  if (e.target.value != "") {
    if (sellerToken.value != undefined) {
      let requestUrl = `https://api.zekrimarket.com/api/sellers/registration/geocoding/suggests`;
      const result = await api.post(
        requestUrl,
        {
          term: e.target.value,
          lat: mapCenter.value[1],
          lng: mapCenter.value[0],
        },
        {
          headers: {
            Authorization: "Bearer " + sellerToken.value,
          },
        }
      );
      if (result) {
        if (result.status == 200) {
          if (result.data.statusCode == 200) {
            searchResult.value = result.data.result.items;
          }
        }
      }
    } else {
      toast.error("شما احراز هویت نشده اید ! ، لطفا مجددا لاگین شوید");
      return false;
    }
  } else {
    searchResult.value = [];
  }
};

const clickedOnAddress = async (address) => {
  buttonStatus.value = true;
  mapCenter.value = [address.location.x, address.location.y];
  map_init();
  searchResult.value = [];
};

const show_map_form_and_submit = async() => {
  if (buttonStatus.value == true) {
    if (showMapForm.value == false) {
      reverseLoading.value = true;
      await reverse_geocode();
      showMapForm.value = true;
    } else {
      if (props.registerData.address.codePosti == "") {
        toast.error("لطفا کد پستی را وارد کنید");
        return false;
      }

      if (!/^[0-9]{10}$/.test(props.registerData.address.codePosti)) {
        toast.error("کد پستی معتبر نمیباشد");
        return false;
      }

      if (props.registerData.address.pelak == "") {
        toast.error("لطفا پلاک را وارد کنید");
        return false;
      }

      emit("change_to_next_level");
    }
  }
};

const reverse_geocode = async () => {
  let requestUrl = `https://api.zekrimarket.com/api/sellers/registration/geocoding/reverse-geocode`;
  const result = await api.post(
    requestUrl,
    {
      lat: mapCenter.value[1],
      lng: mapCenter.value[0],
    },
    {
      headers: {
        Authorization: "Bearer " + sellerToken.value,
      },
    }
  );
  if (result) {
    if (result.status == 200) {
      if (result.data.statusCode == 200) {
        const addressObj = result.data.result;
        reverseLoading.value = false;
        props.registerData.address.fullAddress = addressObj.formatted_address;
        props.registerData.address.state = addressObj.state;
        props.registerData.address.city = addressObj.city;
        props.registerData.address.lat = mapCenter.value[1];
        props.registerData.address.lng = mapCenter.value[0];
      } else if (result.data.statusCode == 401) {
        window.location.reload();
      }
    }
  }
};

watch(
  () => (props.registerData.length != 0 ? props.registerData.address.state : null),
  async (newVal, oldVal) => {
    const loadCitiesList = await sellerStore.load_cities_list({
      state_name: newVal,
    });

    if (loadCitiesList.message == "success") {
      citiesList.value = loadCitiesList.result;
    }
  }
);

const get_states_list = async () => {
  const loadStatesList = await sellerStore.load_states_list();
  if (loadStatesList.message == "success") {
    statesList.value = loadStatesList.result;
  }
};

const skip_this_level = () => {
  emit("change_to_next_level");
};
</script>

<style>
.mapboxgl-ctrl-bottom-left,
.mapboxgl-ctrl-bottom-right,
.mapboxgl-ctrl-top-left,
.mapboxgl-ctrl-top-right {
  z-index: 10000000 !important;
}

.loader {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;
}
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 3px solid #fff;
  animation: prixClipFix 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
