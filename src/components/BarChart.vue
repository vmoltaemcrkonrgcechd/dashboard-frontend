<script lang="ts" setup>
import { Bar } from "vue-chartjs";
import { computed, PropType } from "vue";
import { getColor, getDays } from "@/lib";

const props = defineProps({
  data: {
    type: Array as PropType<number[]>,
    required: true,
  },
});

const barData = computed(() => {
  return {
    labels: getDays.value,
    datasets: [
      {
        data: props.data,
        backgroundColor: getColor(0),
        borderRadius: 5,
      },
    ],
  };
});
</script>

<template>
  <Bar :data="barData" />
</template>
