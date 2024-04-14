<template>
    <transition-group name="modal">
        <div v-if="activeModal == 'shabamodal'" class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div @click="activeModal = null" class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
                <div
                    class="relative rounded-lg shadow-lg shadow-gray-300/40 h-auto max-w-2xl bg-white m-auto inset-0 w-full">
                    <button type="button"
                        @click="activeModal = null"
                        class="z-[1] absolute w-8 h-8 text-gray-400 -top-4 -right-4 transform translate-x-3 -translate-y-1 transition-transform hover:bg-gray-100 hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center"
                        data-bs-dismiss="modal" aria-label="Close"><i class="text-lg fa fa-times"></i></button>
                    <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                        <div class="info">
                            <h3 class="text-xl font-semibold block text-gray-500">شماره شبا را وارد کنید</h3>
                        </div>
                    </div>
                    <div class="modal-body font-fa mx-2 px-6 my-4 ">
                        <p class="py-2 font-medium text-gray-700">
                            شماره شبا باید متعلق به صاحب کُد ملی باشد
                        </p>
                        <div class="gap-6">
                            <div class="relative col-span-4 md:col-span-2"><label for="last-name"
                                    class="flex pb-2 pr-1 text-md font-medium text-gray-700"><span>شماره شبا</span></label>
                                <div class="flex mt-1 rounded-md">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                        <div
                                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none font-semibold font-en text-xl leading-3"
                                      >
                                        IR
                                      </div>
                                      <input
                                        type="text"
                                        maxlength="24"
                                        @input="(e) => set_shabanumber(e)"
                                        :value="shabanumber"
                                        inputmode="numeric"
                                        pattern="[0-9]*"
                                        class="block w-full pl-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 text-md p-4 rtl:text-left"
                                        placeholder="000000000000000000000000"
                                      />
                                    </div>
                                </div>
                            </div>

                            <!-- در صورت زدن دکمه استفاه از شماره کارت این فیلد نمایش داده شود -->

                            <div class="relative col-span-4 md:col-span-2 hidden"><label for="last-name"
                                    class="flex pb-2 pr-1 text-md font-medium text-gray-700"><span>شماره کارت </span></label>
                                <div class="flex mt-1 rounded-md">
                                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><i
                                                class="fa-duotone fa-credit-card text-cyan-500 h-5 w-5 flex leading-[1px] pr-1"></i>
                                        </div><input type="text"
                                            class="block w-full pl-10 border-gray-300 rounded-md focus:border-cyan-500 focus:ring-cyan-500 text-md p-4 rtl:text-left"
                                            placeholder="0000 - 0000 - 0000 - 0000">
                                    </div>
                                </div>

                                <span class="p-2 text-cyan-500 font-semibold cursor-pointer my-2 block">استفاده از شماره شبا به جای شماره کارت</span>
                            </div>


                        <button
                            class="relative btn hover:text-bg-500/80 transition-colors duration-500 bg-cyan-500 px-6 py-3 text-white w-full mt-4 flex items-center  justify-center border rounded-lg"> تایید </button>


                    </div>
                </div>
            </div>
        </div>
    </transition-group>
</template>
<script setup>
const activeModal = defineModel()
const emit = defineEmits(["inputShabaNumber"])
const props = defineProps({
    shabanumber: {
        type: String,
        required: true
    }
})

const set_shabanumber = (e) => {
    emit("inputShabaNumber" , e.target.value)
}
</script>