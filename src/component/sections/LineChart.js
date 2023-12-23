// LineChart.js

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = ({ chartData }) => {

  return (
    <>
      <div className="w-96">
        <Line data={chartData} />
      </div>
    </>
  );
};


