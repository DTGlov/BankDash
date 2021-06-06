import React from 'react';
import { Bar } from "react-chartjs-2";
import {data,options} from './ChartData'

function Chart() {
    return (
        <div className="mt-4">
            <Bar data={data } options={options }/>
        </div>
    )
}

export default Chart
