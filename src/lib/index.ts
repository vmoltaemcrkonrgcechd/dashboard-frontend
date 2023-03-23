import { computed } from "vue";

export const getColors = computed((): string[] => {
  return ["#8b1e3f", "#3c153b", "#89bd9e", "#f0c987", "#db4c40"];
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
