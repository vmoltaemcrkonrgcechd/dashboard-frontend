import { createApp } from "vue";
import App from "@/App.vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  BarElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  LineElement,
  BarElement,
  ArcElement
);

createApp(App).mount("#app");
