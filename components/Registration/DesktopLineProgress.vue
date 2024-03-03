<template>
  <aside
    class="lg:py-6 lg:px-2 col-span-12 lg:col-span-3 lg:border-l border-b lg:h-screen hidden lg:block lg:overflow-y-auto overflow-x-auto"
  >
    <div class="lg:hidden"></div>

    <div class="flow-root py-8 px-6">
      <ul role="list" v-if="registerInformation != undefined">
        <li v-for="(progress, index) in registerInformation" :key="index">
          <div class="relative pb-8" v-if="progress.parent == true">
            <span
              class="absolute top-5 right-5 -mr-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <div class="relative flex items-center space-x-0">
              <!-- bg-cyan-500 -->
              <div
                :class="progress.checked == false ? 'bg-gray-400' : 'bg-cyan-500'"
                class="relative flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-white text-white shadow-sm"
              >
                <i
                  class="fa-light text-white"
                  v-if="progress.checked == false"
                  :class="progress.checked == false ? `fa-${progress.icon}` : 'fa-check'"
                ></i>
                <i
                  class="fa-light text-white fa-check bg-cyan-500"
                  v-if="progress.checked == true"
                ></i>
              </div>
              <div class="min-w-0 flex-1 mr-3">
                <div>
                  <div class="text-md mr-3">
                    <a href="#" class="font-semibold text-gray-900">{{
                      progress.title
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="relative pb-8"
            v-if="progress.childs.length != 0"
            v-for="(child, key) in progress.childs"
            :key="key"
          >
            <span
              class="absolute top-5 right-5 -mr-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <div class="relative flex items-center space-x-0">
              <div>
                <div class="relative px-1">
                  <div
                    :class="child.checked == false ? 'bg-gray-100' : 'bg-cyan-100'"
                    class="flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white"
                  >
                    <i
                      class="fa-light"
                      :class="
                        child.checked == false
                          ? `text-gray-700 fa-${child.icon}`
                          : `text-cyan-500 fa-check`
                      "
                    ></i>
                  </div>
                </div>
              </div>
              <div class="min-w-0 flex-1 py-1.5 mr-3">
                <div class="text-sm text-gray-500 mr-3 font-medium">
                  {{ child.title }}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps(["registerInformation"]);
</script>
