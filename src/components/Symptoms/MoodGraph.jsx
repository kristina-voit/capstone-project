import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dataMood = {
  labels: [
    "01.01.2022",
    "02.01.2022",
    "03.01.2022",
    "04.01.2022",
    "05.01.2022",
    "06.01.2022",
    "07.01.2022",
    "08.01.2022",
  ],
  datasets: [
    {
      label: "Stimmung",
      data: [50, 0, 99, 99, 25, 50, 75, 99],
      borderColor: "#742774",
    },
  ],
};

export default function Graph() {
  return (
    <div>
      <Line data={dataMood} />
    </div>
  );
}
