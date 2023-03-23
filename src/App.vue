<script lang="ts" setup>
import "./index.css";
import LineChart from "@/components/LineChart.vue";
import BarData from "@/components/BarChart.vue";
</script>

<template>
  <div class="h-screen grid grid-cols-2 grid-rows-2 p-4 gap-4 bg-blue-100">
    <div class="rounded-md shadow-md p-3 bg-white">
      <LineChart :data="[[]]" />
    </div>
    <div class="rounded-md shadow-md p-3 bg-white">
      <BarData :data="[]" />
    </div>
  </div>
</template>
