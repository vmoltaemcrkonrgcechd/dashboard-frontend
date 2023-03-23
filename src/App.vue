<script lang="ts" setup>
import "./index.css";
import LineChart from "@/components/LineChart.vue";
import BarChart from "@/components/BarChart.vue";
import DoughnutChart from "@/components/DoughnutChart.vue";
import RadarChart from "@/components/RadarChart.vue";
</script>

<template>
  <div
    class="lg:h-screen grid lg:grid-cols-2 grid-rows-2 p-4 gap-2 bg-gray-100"
  >
    <div class="card">
      <LineChart
        :data="[
          [10, 40, 20, 15, 5],
          [40, 90, 15, 30, 65],
          [25, 15, 95, 110, 70],
          [85, 70, 75, 105, 45],
          [55, 5, 15, 125, 20],
        ]"
      />
    </div>
    <div class="card">
      <BarChart :data="[10, 40, 20, 15, 5]" />
    </div>
    <div class="card">
      <DoughnutChart :data="[10, 40, 20, 15, 5]" />
    </div>
    <div class="card">
      <RadarChart
        :data="[
          [10, 40, 20, 15, 5],
          [40, 90, 15, 30, 65],
          [25, 15, 95, 110, 70],
          [85, 70, 75, 105, 45],
          [55, 5, 15, 125, 20],
        ]"
      />
    </div>
  </div>
</template>

<style>
.card {
  @apply rounded-xl
	shadow-md
	p-3
	bg-white
	flex
	items-center
	justify-center;
}
</style>
