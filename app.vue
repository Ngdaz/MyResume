<template>
  <body>
    <div class="grid grid-cols-12 gap-1">
      <aside class="col-span-2 h-screen sticky top-0 self-start">
        <div class="flex justify-center w-full">
          <p>logo</p>
        </div>
        <div class="h-full flex item-center justify-center">
          <ul class="header-menu flex flex-col justify-center">
            <li
              v-for="item in config.sectionName"
              :key="item"
              class="mb-3 flex items-center"
            >
              <div class="w-[20px] h-[11px] rounded-[5.5px] bg-[#FF6B00]"></div>
              <a :class="{ item }" class="block text-left ms-2">{{ item }}</a>
            </li>
          </ul>
        </div>
      </aside>
      <main class="bg-[#fff3ea] col-span-10">
        <HomePage />
      </main>
    </div>
  </body>
</template>
<script setup lang="ts">
import { config } from "./config.js";
import HomePage from "~/components/HomePage/HomePage.vue";
</script>
