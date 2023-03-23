<script lang="ts" setup>
import { Bar } from "vue-chartjs";
import { computed, PropType } from "vue";
import { getColor, getColors, getDays, getRGBAColor } from "@/lib";

const props = defineProps({
  data: {
    type: Array as PropType<number[][]>,
    required: true,
  },
});

const barData = computed(() => {
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
      borderRadius: 5,
    });
  });

  return data;
});
</script>

<template>
  <Bar :data="barData" />
</template>
