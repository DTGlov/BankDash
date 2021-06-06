import React from "react";
import { Doughnut } from "react-chartjs-2";
import { data, options } from "./ChartOneData";

function ChartOne() {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ChartOne;
