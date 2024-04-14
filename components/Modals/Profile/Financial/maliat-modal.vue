<template>
    <transition-group name="modal">
    <div v-if="activeModal == 'maliatmodal'" class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
           <div @click="activeModal = null" class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
           <div
               class="relative rounded-lg shadow-lg shadow-gray-300/40  h-auto max-w-2xl bg-white m-auto inset-0 w-full">
               <button @click="activeModal = null" type="button"
                   class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                   data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
               <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                   <div class="info">
                       <h3 class="text-xl font-semibold block text-gray-500">مالیات بر ارزش افزوده</h3>
                   </div>
               </div>
               <div class="modal-body font-fa mx-2 px-6 my-4 ">
                   <div class="gap-6">



                       <div class="relative col-span-4 sm:col-span-2">
                           <div class="flex mt-1 rounded-md">
                               <div class="relative w-full focus-within:z-10">
                                <p class="text-sm py-2">آیا مشمول مالیات بر ارزش افروده هستید؟</p>
                                <button type="button"
                                @click="maliatSelectBox = !maliatSelectBox"
                                       class="text-gray-500 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-cyan-500 font-medium rounded-lg text-sm p-4 text-center inline-flex items-center w-full justify-between"><i
                                           class="fa-duotone fa-image text-cyan-500 h-5 w-5 flex leading-[1px] text-[19px]"></i><span
                                           class="w-full pr-2 text-right">
                                        {{ maliatData.is_maliat == false ? 'خیر' : 'بله' }}
                                        </span><i
                                           class="fa-duotone fa-angle-down text-[14px] ml-1 w-4 h-3 leading-[20px]"></i></button>
                                   <div class="z-10 absolute w-full mt-2 bg-white border rounded-lg" v-if="maliatSelectBox == true">
                                       <ul class="h-40 p-3 overflow-y-auto text-sm text-gray-700"
                                           aria-labelledby="dropdownSearchButton">
                                           <li @click="select_maliat(true)" class="cursor-pointer">
                                               <div class="flex items-center w-full my-1 border rounded hover:bg-gray-100">
                                                    <label
                                                       for="checkbox-item-11"
                                                       class="flex items-center justify-between cursor-pointer w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"><span
                                                           class="flex items-center w-full pr-2 text-right"> بله
                                                       </span><i
                                                           v-if="maliatData.is_maliat == true"
                                                           class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"></i></label>
                                               </div>
                                           </li>
                                           <li @click="select_maliat(false)" class="cursor-pointer">
                                                <div class="flex items-center w-full my-1 border rounded hover:bg-gray-100">
                                                    <label
                                                        for="checkbox-item-11"
                                                        class="flex items-center justify-between cursor-pointer w-full py-2 mr-2 text-sm font-medium text-gray-500 rounded"><span
                                                            class="flex items-center w-full pr-2 text-right"> خیر
                                                        </span><i
                                                            v-if="maliatData.is_maliat == false"
                                                            class="flex items-center pl-2 text-left text-cyan-500 fa-solid fa-check"></i></label>
                                                </div>
                                            </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>


                       <p v-if="maliatData.is_maliat == true" class="mt-4 text-orange-500">در صورت مشمولیت مالیات بر ارزش افزوده، مدارک مربوطه را بارگذاری کنید</p>
                       <div v-if="maliatData.is_maliat == true" class="flex mb-4 items-center mt-3">
                           <div class="flex flex-rows "><label class="flex flex-rows ">
                                   <div class="rounded-lg flex flex-col justify-center items-center h-[120px] w-[120px] border cursor-pointer"><label
                                           class="relative flex items-center"
                                          >
                                           <div class="flex items-center justify-center relative grow-1">
                                               <div class="flex text-cyan-500"><i class="fa fa-plus"></i></div>
                                               <input 
                                               ref="fileInputRefs"
                                               @change="(e) => setMaliatFiles(e)"
                                               type="file" 
                                                   class="hidden" name="image">
                                           </div>
                                       </label>
                                       <p class="font-semibold align-center  text-cyan-900">افزودن</p>
                                   </div>
                               </label></div>
                           <div class="text-gray-500 mr-4">
                               <p>شرایط تصویر:</p>
                               <ul
                                   class="text-caption mt-3 pr-6 list-disc">
                                   <li>
                                       <p class="mr-1 mb-1">صاف و خوانا</p>
                                   </li>
                                   <li>
                                   <p class="mr-1 mb-1">حجم کمتر از ۲ مگابایت</p>
                               </li>
                               <li>
                                   <p class="mr-1 mb-1">عرض کمتر از۲۵۰۰ پیکسل</p>
                               </li>
                               <li>
                                   <p class="mr-1 mb-1">طول کمتر از ۲۵۰۰ پیکسل</p>
                               </li>
                           </ul>
                       </div>
                   </div>


                   <Button
                   :class="['bg-gray-300 mt-2']"
                   :isShow="cardnumber == '' ? false : true"
                   >
                     <i class="fa-solid fa-edit pl-2 text-xl"></i> تایید
                   </Button>
                   <Button
                     @click="maliatFilesStore()"
                     :class="['bg-cyan-500 mt-2 shadow-md shadow-cyan-200']"
                     :isShow="
                       cardnumber != '' &&
                       requestLoading == false
                         ? false
                         : true
                     "
                   >
                     <i class="fa-solid fa-edit pl-2 text-xl"></i> تایید
                   </Button>
                   <LoadingButton :class="['mt-2']" :isShow="requestLoading" />


               </div>
           </div>
       </div>
   </div>
</transition-group>


</template>
<script setup>
import Button from "@/components/Buttons/Button.vue";
import LoadingButton from "@/components/Buttons/LoadingButton.vue";

const activeModal = defineModel()
const maliatSelectBox = ref(false)
const fileInputRefs = ref(null)
const emit = defineEmits(["change_maliat_status" , "doSetFiles" , "doFilesStore"])
const props = defineProps({
    maliatData: {
        type: [Object , Array],
        required: true
    },
    requestLoading: {
        type: Boolean,
        required: true
    }
})

const select_maliat = (state) => {
    emit("change_maliat_status" , state)
    maliatSelectBox.value = false
}

const setMaliatFiles = (e) => {
    emit("doSetFiles" , e.target.files)
}

const maliatFilesStore = () => {
    emit("doFilesStore")
}

defineExpose({
    fileInputRefs
})
</script>