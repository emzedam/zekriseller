<template>
  <button
    v-if="isShow == true"
    :class="class"
    class="btn flex items-center justify-center border-transparent bg-cyan-500 darker:bg-gray-700 darker:text-gray-400 w-full py-2.5 text-white w-100 waves-effect waves-light shadow-md shadow-cyan-200 darker:shadow-zinc-600/10 rounded-lg"
    type="button"
  >
    <div class="loader"></div>
  </button>
</template>

<script setup>
const props = defineProps(["isShow", "class"]);
</script>

<style>
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
