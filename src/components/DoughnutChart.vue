<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
import { computed, PropType } from "vue";
import { getColors, getDays } from "@/lib";

const props = defineProps({
  data: {
    type: Array as PropType<number[]>,
    required: true,
  },
});

const doughnutData = computed(() => {
  return {
    labels: getDays.value,
    datasets: [
      {
        data: props.data,
        backgroundColor: getColors.value,
      },
    ],
  };
});
</script>

<template>
  <Doughnut
    :data="doughnutData"
    :options="{
      responsive: false,
    }"
  />
</template>
