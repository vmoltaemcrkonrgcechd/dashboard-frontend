<script lang="ts" setup>
import { Line } from "vue-chartjs";
import { PropType, computed } from "vue";
import { getColor, getDays, getRGBAColor } from "@/lib";

const props = defineProps({
  data: {
    type: Array as PropType<number[][]>,
    required: true,
  },
});

const lineData = computed(() => {
  const data: {
    labels: string[];
    datasets: { [key: string]: any }[];
  } = {
    labels: getDays.value,
    datasets: [],
  };

  props.data.forEach((el: number[], ind: number) => {
    data.datasets.push({
      data: el,
      backgroundColor: getRGBAColor(ind),
      borderColor: getColor(ind),
      fill: true,
      tension: 0.5,
    });
  });

  return data;
});
</script>

<template>
  <Line :data="lineData" />
</template>
