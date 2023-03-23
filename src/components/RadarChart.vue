<script lang="ts" setup>
import { Radar } from "vue-chartjs";
import { computed, PropType } from "vue";
import { getDays, getColor } from "@/lib";

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
      backgroundColor: getColor(ind),
      pointBackgroundColor: getColor(ind),
      fill: true,
    });
  });

  return data;
});
</script>

<template>
  <Radar
    :data="radarData"
    :options="{
      responsive: false,
    }"
  />
</template>
