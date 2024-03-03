<template>
  <div
    :class="
      activeComponent == 'SellerQuestions' ? 'top-0 visible' : 'top-[900px] invisible'
    "
    class="overflow-y-scroll Step-reg-map border absolute transition-all w-full lg:rounded-lg p-6 h-full"
  >
    <h2 class="flex items-center justify-start gap-4 text-2xl font-semibold mt-6 h-10">
      <span
        @click="go_to_back()"
        class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
      >
        <i class="fa-duotone fa-arrow-right !leading-3"></i
      ></span>

      <span class="leading-3">لطفا به این سوالات پاسخ دهید</span>
    </h2>

    <div
      class="inline-block w-full input py-8"
      v-if="question_list.length != 0 && question_values.length != 0"
    >
      <div
        class="relative rounded-md"
        v-for="(question, index) in question_list"
        :key="index"
        :class="questionStep == index ? '' : 'hidden'"
      >
        <h2 class="font-semibold">{{ question.title }}</h2>
        <small v-if="question.question_type == 'checkbox'"
          >می‌توانید چند گزینه انتخاب کنید</small
        >
        <small v-else>میتوانید یکی از گزینه ها را انتخاب کنید</small>
        <fieldset class="space-y-5 py-6">
          <div
            class="relative flex items-start"
            v-for="(item, itemIndex) in question.items"
            :key="itemIndex"
          >
            <div class="flex h-5 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="question"
                :type="question.question_type"
                :value="item.item"
                v-model="question_values[index].value"
                class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              />
            </div>
            <div class="mr-3 text-sm">
              <label for="comments" class="font-medium text-gray-700">{{
                item.item
              }}</label>
            </div>
          </div>

          <div class="flex items-center">
            <p class="text-body-2 color-n-700 ml-2 w-[86px]">
              سوال {{ index + 1 }} از {{ question_list.length }}
            </p>
            <div
              class="my-4 bg-cyan-500 h-1"
              :style="`width: ${((index + 1) * 100) / question_list.length}%`"
            ></div>
          </div>
        </fieldset>

        <div class="relative flex gap-4">
          <button
            @click="change_question_step(index)"
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
              ><span class="w-full"> بعدا پاسخ می دهم</span></span
            >
          </button>

          <button
            @click="change_question_step(index)"
            class="box-border relative z-0 inline-flex iteme-center justify-center w-full p-3 px-8 py-3 my-2 overflow-hidden font-medium text-white transition-all duration-300 bg-cyan-500 rounded-md cursor-pointer group ease focus:outline-none"
          >
            <span
              class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
            ></span
            ><span
              class="relative z-20 flex iteme-center justify-center w-full text-center"
              ><span class="w-full">
                {{ index + 1 == question_list.length ? "مرحله بعد" : "سوال بعدی" }}
              </span></span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSellersStore } from "~/store/sellersStore.js";
const props = defineProps(["question_list", "question_values", "activeComponent"]);
const emit = defineEmits(["go_to_back", "go_final_level"]);
const sellerStore = useSellersStore();
const questionStep = ref(0);

const go_to_back = () => {
  if (questionStep.value == 0) {
    emit("go_to_back", "2,0");
  } else {
    questionStep.value = questionStep.value - 1;
  }
};

const change_question_step = (index) => {
  if (index + 1 == props.question_list.length) {
    emit("go_final_level");
  } else {
    questionStep.value = index + 1;
  }
};
</script>
