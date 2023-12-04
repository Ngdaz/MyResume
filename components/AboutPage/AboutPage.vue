<template>
  <div class="grid grid-cols-2 pt-[130px] pb-[65px] h-screen">
    <div class="h-full flex flex-col justify-center">
      <div class="flex mb-2">
        <p>About Me</p>
        <IconGanttChartSquare />
      </div>
      <p class="text-[44px]">I'm developing web applications.</p>
      <p>
        Front-end Developer with a proven ability to collaborate effectively
        with senior developers while spending extra time to be mentored. Enjoy
        working closely with the team members to ensure workloads are
        effectively redirected to bottlenecks and personally picking up the
        slack when necessary. With a passion for both personal growth and
        software development, I attended a 1000+ hour coding Bootcamp to learn
        new languages while sharpening existing skills. Ready to apply my
        passion for coding to a talented engineering team to develop quality
        solutions.
      </p>
      <div v-for="item in listSkill" :key="item.skillName" class="mt-3">
        <p>{{ item.skillName }}</p>
        <Progress :model-value="item.value" class="color-primary" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <img src="/Avatar.png" alt="avatar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from "@/components/ui/progress";
const listSkill = [
  {
    skillName: "Javascript",
    value: 90,
  },
  {
    skillName: "TS",
    value: 90,
  },

  {
    skillName: "VueJS",
    value: 80,
  },

  {
    skillName: "ReactJS",
    value: 80,
  },
];
</script>

<style lang="scss" scoped></style>
