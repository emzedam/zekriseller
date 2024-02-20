<template>
  <button
    v-if="isShow == false"
    @click="doStartClick()"
    class="btn border-transparent bg-cyan-500 darker:bg-gray-700 darker:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-cyan-200 darker:shadow-zinc-600/10 rounded-lg"
    type="submit"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps(["isShow"]);
const emit = defineEmits(["click"]);

const doStartClick = () => {
  emit("click");
};
</script>
