<script lang="ts" setup>
import "./index.css";
import LineChart from "@/components/LineChart.vue";
import BarChart from "@/components/BarChart.vue";
import DoughnutChart from "@/components/DoughnutChart.vue";
import RadarChart from "@/components/RadarChart.vue";
import { ref, onMounted } from "vue";
import { iResponse } from "@/types";

const lineChartData = ref<number[][]>([]);
const barChartData = ref<number[][]>([]);
const doughnutChartData = ref<number[]>([]);
const radarChartData = ref<number[][]>([]);

onMounted(() => {
  const conn = new WebSocket("ws://localhost:80");

  conn.onmessage = ({ data }) => {
    const response: iResponse = JSON.parse(data);
    lineChartData.value = response.lineChartData;
    doughnutChartData.value = response.doughnutChartData;
    barChartData.value = response.barChartData;
    radarChartData.value = response.radarChartData;
  };
});
</script>

<template>
  <div
    class="lg:h-screen grid lg:grid-cols-2 grid-rows-2 p-4 gap-2 bg-gray-100"
  >
    <div class="card">
      <LineChart :data="lineChartData" />
    </div>
    <div class="card">
      <BarChart :data="barChartData" />
    </div>
    <div class="card">
      <DoughnutChart :data="doughnutChartData" />
    </div>
    <div class="card">
      <RadarChart :data="radarChartData" />
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
