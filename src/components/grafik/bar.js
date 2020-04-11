import React, { useState, useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Page Impressions",
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Adsense Clicks",
      data: [5, 15, 10, 30],
      type: "line",
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};
const GrafikBar = () => {
  return <Bar data={data} />;
};

export default GrafikBar;
