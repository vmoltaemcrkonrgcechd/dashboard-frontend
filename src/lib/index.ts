import { computed } from "vue";

export const getColors = computed((): string[] => {
  return ["#70c3e0", "#629fd4", "#547bc9", "#4857be", "#453cb3"];
});

export const getRGBAColors = computed((): string[] => {
  return getColors.value.map((el) => el + "35");
});

export const getDays = computed((): string[] => {
  return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
});

export const getColor = (ind: number): string => {
  const colors: string[] = getColors.value;

  return colors[ind];
};

export const getRGBAColor = (ind: number): string => {
  return getRGBAColors.value[ind];
};
