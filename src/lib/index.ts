import { computed } from "vue";

export const getColor = (ind: number): string => {
  const colors: string[] = ["#2e9993", "#1b6f85", "#0c4272"];

  return colors[ind];
};

export const getMonths = computed((): string[] => {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
});
