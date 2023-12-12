// LineChart.js

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = ({ chartData }) => {

  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.month),
  //   datasets: [
  //     {
  //       label: chartDataType,
  //       data: UserData.map((data) =>{
  //         if (chartDataType === "Humdy") {
  //           return data.Humdy;
  //         } else if (chartDataType === "rain") {
  //           return data.rain;
  //         } else {
  //           return data.wind;
  //         }
  //       }),
  //       backgroundColor: ["aliceblue"],
  //       height:["100%"],
  //     },
  //   ],
  // });
  return (
    <>
      <div className="w-96">
        <Line data={chartData} />
      </div>
    </>
  );
};


