<template>
  <nav
    aria-label="Progress"
    class="block lg:hidden"
    v-if="registerInformation != undefined"
  >
    <ol role="list" class="border-b border-gray-300 flex justify-around">
      <li
        class="relative flex"
        v-for="(progress, index) in registerInformation"
        :key="index"
      >
        <!-- Current Step -->
        <a
          href="#"
          class="flex items-center px-1 py-2 text-sm font-medium flex-col"
          aria-current="step"
        >
          <span
            :class="
              progress.checked == true
                ? 'bg-cyan-600'
                : 'bg-white border-2 border-gray-300'
            "
            class="flex h-8 w-8 flex-shrink-0 text-xs items-center justify-center rounded-full"
          >
            <span class="text-gray-500 flex items-center justify-center">
              <i
                v-if="progress.checked == false"
                :class="progress.checked == false ? `fa-${progress.icon}` : 'fa-check'"
                class="fa-duotone"
              ></i>
              <i class="fa-light text-white fa-check" v-if="progress.checked == true"></i>
            </span>
          </span>
          <span class="mt-1 text-sm font-medium text-gray-500">{{ progress.title }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>
<script setup>
const props = defineProps(["registerInformation"]);
</script>
