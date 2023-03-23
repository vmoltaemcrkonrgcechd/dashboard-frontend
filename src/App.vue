<script lang="ts" setup>
import "./index.css";
import LineChart from "@/components/LineChart.vue";
import BarChart from "@/components/BarChart.vue";
import DoughnutChart from "@/components/DoughnutChart.vue";
</script>

<template>
  <div class="h-screen grid grid-cols-2 grid-rows-2 p-4 gap-4 bg-gray-100">
    <div class="rounded-md shadow-md p-3 bg-white">
      <LineChart :data="[[10, 40, 20, 15, 5], [10, 40, 20, 15, 5].reverse()]" />
    </div>
    <div class="rounded-md shadow-md p-3 bg-white">
      <BarChart :data="[10, 40, 20, 15, 5]" />
    </div>
    <div
      class="rounded-md shadow-md p-3 bg-white flex items-center justify-center"
    >
      <DoughnutChart :data="[10, 40, 20, 15, 5]" />
    </div>
  </div>
</template>
