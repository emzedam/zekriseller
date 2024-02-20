<template>
  <nav aria-label="Progress" class="block lg:hidden">
    <ol role="list" class="border-b border-gray-300 flex">
      <li class="relative flex">
        <!-- Completed Step -->
        <a href="#" class="group flex w-full items-center">
          <span class="flex items-center px-1 py-2 text-sm font-medium">
            <span
              class="flex h-8 w-8 flex-shrink-0 text-xs items-center justify-center rounded-full bg-cyan-600 group-hover:bg-cyan-800"
            >
              <i class="fa-duotone fa-info text-white"></i>
            </span>
            <span class="mr-2 text-xs font-medium text-gray-500">اطلاعات</span>
          </span>
        </a>
      </li>

      <li class="relative flex">
        <!-- Current Step -->
        <a
          href="#"
          class="flex items-center px-1 py-2 text-sm font-medium"
          aria-current="step"
        >
          <span
            class="flex h-8 w-8 flex-shrink-0 text-xs items-center justify-center rounded-full border-2 border-gray-300"
          >
            <span class="text-gray-500 flex items-center justify-center">
              <i class="fa-duotone fa-location-dot"></i
            ></span>
          </span>
          <span class="mr-2 text-sm font-medium text-gray-500">آدرس</span>
        </a>
      </li>

      <li class="relative flex">
        <!-- Upcoming Step -->
        <a href="#" class="group flex items-center">
          <span class="flex items-center px-1 py-2 text-sm font-medium">
            <span
              class="flex h-8 w-8 flex-shrink-0 text-xs items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400"
            >
              <span
                class="text-gray-500 group-hover:text-gray-900 flex items-center justify-center"
                ><i class="fa-duotone fa-chalkboard-user"></i
              ></span>
            </span>
            <span class="mr-2 text-sm font-medium text-gray-500 group-hover:text-gray-900"
              >آموزش</span
            >
          </span>
        </a>
      </li>

      <li class="relative flex">
        <!-- Upcoming Step -->
        <a href="#" class="group flex items-center">
          <span class="flex items-center px-1 py-2 text-sm font-medium">
            <span
              class="flex h-8 w-8 flex-shrink-0 text-xs items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400"
            >
              <span
                class="text-gray-500 group-hover:text-gray-900 flex items-center justify-center"
                ><i class="fa-duotone fa-user"></i
              ></span>
            </span>
            <span class="mr-2 text-sm font-medium text-gray-500 group-hover:text-gray-900"
              >ورود</span
            >
          </span>
        </a>
      </li>
    </ol>
  </nav>
</template>
