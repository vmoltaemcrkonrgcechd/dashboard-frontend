<script lang="ts" setup>
import { Radar } from "vue-chartjs";
import { computed, PropType } from "vue";
import { getDays, getColor, getRGBAColor } from "@/lib";

const props = defineProps({
  data: {
    type: Array as PropType<number[][]>,
    required: true,
  },
});

const radarData = computed(() => {
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

const radarOptions = {
  aspectRatio: 2,
};
</script>

<template>
  <Radar :data="radarData" :options="radarOptions" />
</template>
