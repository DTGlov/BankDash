import React from "react";
import { Doughnut } from "react-chartjs-2";
import { data, options } from "./CircleChartDataTwo";

function CircleChartTwo() {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CircleChartTwo;
