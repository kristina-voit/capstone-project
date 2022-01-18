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
    "01.02.2022",
    "02.02.2022",
    "03.02.2022",
    "04.02.2022",
    "05.02.2022",
    "06.02.2022", 
  ],
  datasets: [
    {
      label: "Stimmung",
      data: [33, 99, 66, 99, 33, 99],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    
  ],
};

const dataSymptoms = {
    labels: [
      "01.02.2022",
      "02.02.2022",
      "03.02.2022",
      "04.02.2022",
      "05.02.2022",
      "06.02.2022", 
    ],
    datasets: [
      {
        label: "Beschwerden",
        data: [0, 33, 0, 0, 33, 0],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };


export default function Graph() {
  return (
    <div>
      <Line data={dataMood} />
      <Line data={dataSymptoms} />
    </div>
  );
}
