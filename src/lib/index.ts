import { computed } from "vue";

export const getColors = computed((): string[] => {
  return ["#f17173", "#e23f6a", "#c63e81", "#823e88", "#aa66a5"];
});

export const getDays = computed((): string[] => {
  return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
});

export const getColor = (ind: number): string => {
  const colors: string[] = getColors.value;

  return colors[ind];
};
