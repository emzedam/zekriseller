<template>
<!-- ============== آدرس شما====================== -->
<div class="lg:col-span-9">
   <div class="lg:rounded-md relative mb-4 border h-full">
      <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold p-4 border-b">
         <span class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"><i class="fa-duotone fa-arrow-right !leading-3"></i></span>
         <span class="leading-3"> آدرس شما</span>
      </h2>
      <div class="p-4 font-medium text-gray-500 w-full border-b flex items-center justify-between">
         <div class="note">اینجا می‌توانید آدرس‌‌هایتان را ببنید و مدیریت کنید</div>
         <div class="submit-addres">
            <button @click="openMapModal()" class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-cyan-500 px-6 py-3 text-white w-full flex items-center rounded-lg justify-center">
               <i class="fa-light fa-plus-circle pl-2 text-xl"></i> افزودن آدرس فروشگاه
            </button>
         </div>
      </div>

      <div class="address-list">
         <ul class="flex flex-col py-3" v-if="addressList.length != 0">
            <li class="border rounded-lg p-2 m-3 my-1 flex justify-between" v-for="(address , index) in addressList" :key="index">
               <div class="address flex justify-start">
                  <div class="map-image h-[144px] w-[144px] border rounded-lg relative overflow-hidden">
                     <img alt="map" :src="`https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l-embassy+f74e4e(${address.lng},${address.lat})/${address.lng},${address.lat},14/400x400?access_token=pk.eyJ1IjoiaHNuZW16ZWQiLCJhIjoiY2xvcGdxOTI4MGEweTJpazRmM2JsYjA5YSJ9.8eqD-GBF4CO9Ma8aSYlM8A`" />
                  </div>
                  <ul class="flex flex-col space-y-3 pr-2">
                     <li class="flex items-center justify-start font-semibold text-lg"><i class="fa-light fa-location-dot px-2"></i><span>{{ address.city }}</span></li>
                     <li class="flex items-center justify-start font-semibold text-lg"><i class="fa-light fa-location-dot px-2"></i><span> {{ address.fullAddress }}</span></li>
                     <li class="flex items-center justify-start font-semibold text-lg"><i class="fa-light fa-signs-post px-2"></i><span>{{ address.codePosti }}</span></li>
                  </ul>
               </div>
               <div class="button-edit-remove space-y-3 flex flex-col">
                  <button 
                  @click="open_edit_map_modal(address , index)"
                  class="relative btn hover:text-bg-500/80 transition-colors duration-500 text-cyan-500 border-cyan-500 border px-6 py-3 hover:bg-cyan-50 w-full flex items-center rounded-lg justify-center">
                     <i class="fa-light fa-edit pl-2 text-xl"></i> ویرایش
                  </button>

                  <button class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-white px-6 py-3 hover:bg-red-50 text-red-500 border border-red-500 hover:border w-full flex items-center rounded-lg justify-center">
                     <i class="fa-light fa-trash pl-2 text-xl"></i> حذف
                  </button>
               </div>
            </li>
         </ul>
         <div v-else>
            <h4>ادرسی اضافه نشده !</h4>
         </div>
      </div>
   </div>







   <!-- mapbox modal -->
   <transition-group name="modal">
      <div
         v-if="mapModal == true"
         class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden"
      >
         <div
            @click="mapModal = false"
            class="absolute inset-0 transition-opacity duration-300 bg-black/20"
         ></div>
         <div
            class="relative rounded-lg shadow-lg shadow-gray-300/40 h-auto max-w-7xl bg-white m-auto inset-0 w-full"
         >
            <button
               @click="mapModal = false"
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
                  افزودن آدرس فروشگاه
                  </h3>
               </div>
            </div>
            <div class="modal-body font-fa mx-2 px-6 my-4 w-full">
               <div class="inline-block w-full input pt-7">
                  <div class="relative rounded-md">
                    <div
                      id="map"
                      class="modal-body font-fa relative overflow-hidden h-full bg-white rounded-b-lg"
                    >
                      <div
                        
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
                              style="height: 300px; overflow-y: scroll"
                              class="absolute top-15 right-0 w-full bg-white shadow-lg p-4 rounded"
                            >
                              <ul class="w-full">
                                <li
                                  class="border-b cursor-pointer py-2"
                                  v-for="(item, index) in searchResult"
                                  :key="index"
                                  @click="clickedOnAddress(item)"
                                >
                                  <div style="font-size:13px">
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
                                          addressData.state == ""
                                            ? "انتخاب استان"
                                            : addressData.state
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
                                                addressData.state = state.name;
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
                                                  v-if="addressData.state == state.name"
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
                                          addressData.city == ""
                                            ? "انتخاب شهر"
                                            : addressData.city
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
                                                addressData.city = city.name;
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
                                                  v-if="addressData.city == city.name"
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
                                        v-model="addressData.fullAddress"
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
                                        v-model="addressData.codePosti"
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
                                        v-model="addressData.pelak"
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
            
                    <div class="relative flex gap-4 mt-5">
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
                          <span class="w-full" v-if="reverseLoading == false">
                            
                            {{ mapModalstate == 'create' ? 'تایید و ادامه' : 'بروزرسانی آدرس' }}
                          
                          </span>
                          <div class="loader" v-if="reverseLoading == true"></div>
                        </span>
                      </button>
                      <!-- وقتی از روی نقشه مکان رو انتخاب کرد هنگامی که روی دکمه تایید کلیک کرد از طرف راست مثل دی جی کالا قسمت فروشندگان فرم ادرس باز میشه میتونه همون لحظه روی نقشه ادرس رو اصلاح کنه -->
                    </div>
                  </div>
                </div>
            </div>
         </div>
      </div>
    </transition-group>
    <!-- mapbox modal -->
</div>

<!-- ============== آدرس شما======================= -->

</template>


<script setup>
import api from "~/axios";
import { useToast } from "vue-toastification";
import { useSellersStore } from "~/store/sellersStore.js";

const props = defineProps({
   addressList: {
      type: [Array , Object],
      required: true
   }
})
const toast = useToast();
const mapCenter = ref([51.38866839337672, 35.69080481760244]);
const emit = defineEmits(["add_address_to_list" , "edit_address_in_list"]);
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
const mapModalstate = ref("create")
const mapModal = ref(false)
const editableAddressData = reactive({
  address: null,
  index: null
})

onMounted(() => {
   get_states_list();
})

const openMapModal = () => {
   clearData()
   mapModalstate.value = "create"
   showMapForm.value = false
   mapModal.value = true
   map_init()
}

const addressData = reactive({
   fullAddress: "",
   state: "",
   city: "",
   lat: "",
   lng: "",
   pelak: "",
   codePosti: ""
})

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
  }, 500);
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

const show_map_form_and_submit = async () => {
  if (buttonStatus.value == true) {
    if (showMapForm.value == false) {
      reverseLoading.value = true;
      await reverse_geocode();
      showMapForm.value = true;
    } else {
      if (addressData.codePosti == "") {
        toast.error("لطفا کد پستی را وارد کنید");
        return false;
      }

      if (!/^[0-9]{10}$/.test(addressData.codePosti)) {
        toast.error("کد پستی معتبر نمیباشد");
        return false;
      }

      if (addressData.pelak == "") {
        toast.error("لطفا پلاک را وارد کنید");
        return false;
      }

      send_for_save_address()
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
        addressData.fullAddress = addressObj.formatted_address;
        addressData.state = addressObj.state;
        addressData.city = addressObj.city;
        addressData.lat = mapCenter.value[1];
        addressData.lng = mapCenter.value[0];

      } else if (result.data.statusCode == 401) {
        window.location.reload();
      }
    }
  }
};

watch(
  () => (addressData.length != 0 ? addressData.state : null),
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

const send_for_save_address = async () => {
   reverseLoading.value = true
   if(mapModalstate.value == 'create'){
      const result = await sellerStore.store_seller_address(addressData)
      if(result.status == 200) {
        showMapForm.value = false
        reverseLoading.value = false
        mapModal.value = false
        emit("add_address_to_list" , result.result)
        toast.success(result.message)
        clearData()
      }else{
        reverseLoading.value = false
        toast.error(result.message)
      }
   }else{

    let sended_data = {
      ...addressData , 
      _id: editableAddressData.address._id,
      seller_id: editableAddressData.address.seller_id
    }

    const result = await sellerStore.edit_seller_address(sended_data)
      if(result.status == 200) {
        reverseLoading.value = false
        mapModal.value = false
        emit("edit_address_in_list" , {address: result.result , index: editableAddressData.index})
        toast.success(result.message)
      }else{
        reverseLoading.value = false
        toast.error(result.message)
      }
   }
};

const clearData = () => {
   addressData.city = ""
   addressData.fullAddress = ""
   addressData.state = ""
   addressData.lat = ""
   addressData.lng = ""
   addressData.pelak = ""
   addressData.codePosti = ""
}

const open_edit_map_modal = (address , index) => {
  mapModalstate.value = "update"
  mapModal.value = true
  showMapForm.value = true

  

  editableAddressData.index = index

  mapCenter.value = [address.lng , address.lat]

  addressData.fullAddress = address.fullAddress
  addressData.state     = address.state
  addressData.city      = address.city
  addressData.lat       = address.lat
  addressData.lng       = address.lng
  addressData.pelak     = address.pelak
  addressData.codePosti = address.codePosti

  editableAddressData.address = address

  map_init()
}
</script> 

<style>
.modal-mask {
  transition: opacity 0.3s ease;
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