import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import grafikdata from "../Data/grafikdata.json";

export default function BarChart() {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "start";
  defaults.plugins.title.font.size = 20;
  defaults.plugins.title.color = "black";

  const data = {
    labels: grafikdata.map((data) => data.label),
    datasets: [
      {
        label: "Rata-Rata nilai",
        data: grafikdata.map((data) => data.value),
        backgroundColor: ["rgba(43, 63, 229, 0.8)", "rgba(250, 192, 19, 0.8)", "rgba(253, 135, 135, 0.8)"],
        borderRadius: 5,
      },
    ],
  };

  return <Bar data={data} />;
}
