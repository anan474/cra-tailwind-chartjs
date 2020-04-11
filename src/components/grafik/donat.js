import React, { useState, useEffect, useContext } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["P1", "P2", "P3"],
  datasets: [
    {
      label: "Issues",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
    },
  ],
};
const GrafikDonat = () => {
  return <Doughnut data={data} />;
};

export default GrafikDonat;
