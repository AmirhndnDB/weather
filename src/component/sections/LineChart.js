// LineChart.js

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = ({ chartData }) => {
if(!chartData?.labels?.length || !chartData?.datasets?.length){
  return <p>data is not avalable</p>
}
  return (
    <>
      <div className="w-96">
        <Line data={chartData}
        options={{
          responsive:true,
          plugins:{
            legend:{
              display:true,
              position:"top",
            },
          },
          scales:{
            y:{
              beginAtZero:true,
            },
          },
        }}
         />
      </div>
    </>
  );
};


