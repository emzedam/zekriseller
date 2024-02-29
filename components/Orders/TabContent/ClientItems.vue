<template>
  <div class="mt-2 bg-white border border-gray-200 product-info rounded-xl">
    <div
      class="relative px-4 py-6 overflow-hidden text-gray-700 bg-transparent shadow-none bg-clip-border border-b-gray-200"
    >
      <h6
        class="flex items-center gap-1 text-sm antialiased font-semibold leading-normal text-gray-600 font-fa"
      >
        <i
          class="fa-duotone fa-bags-shopping text-[20px] !w-5 !h-5 text-cyan-500 ml-1"
        ></i>
        افزودن محصول و روش حمل و نقل
      </h6>
      <p
        class="flex items-center gap-1 pt-2 text-xs antialiased font-normal leading-normal text-gray-600 font-fa"
      >
        اطلاعات مربوط به محصول و حمل و نقل را در این قسمت اضافه کنید
      </p>
    </div>
    <div class="flex flex-col">

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    expanded: false,
    des: false,
  }),
};
</script>

<style>
.block-enter {
  opacity: 0;
}
.block-enter-active {
  animation: slide-in 0.3s ease-out forwards;
  transition: opacity 0.3s;
}
.block-leave {
  opacity: 1;
}
.block-leave-active {
  animation: slide-out 0.3s ease-out forwards;
  transition: opacity 0.3s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>
