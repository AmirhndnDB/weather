import React from "react";
import { LineChart } from "./LineChart";
import { useDispatch, useSelector } from "react-redux";
import { changeChartDataType } from "../../store";
import { useCalculatedValues } from "../../store/CalculateAvrageData";
function Overview() {
  const dispatch = useDispatch();
  const datas =  useCalculatedValues();
  // console.log(datas)
  const chartDataType = useSelector((state) => state.times.chartDataType);


  const handleChangeChartDataType = (chartDataType) => {
    dispatch(changeChartDataType(chartDataType));
  };

  const userData =({
    labels: datas.map((data) => data.month),
    datasets: [
      {
        label: chartDataType,
        data: datas.map((data) => {
          if (chartDataType === "Humdy") {
            return data.Humdy;
          } else if (chartDataType === "rain") {
            return data.rain;
          } else if(chartDataType === "wind"){
            return data.wind;
          }
        }),
        backgroundColor: "aliceblue",
        height: "100%",
      },
    ],
  });

  return (
    <section className="grid-items overview">
      <div className="overvew-title-box">
        <h3 className="overvew-title">Overview</h3>
        <div className="forcast-type">
          <div
            className={"btn-design-box " + (chartDataType === "Humdy" ? "clicked-box " : "not-clicked")}
            onClick={() => handleChangeChartDataType("Humdy")}
          >
              Humidity
          </div>
          <div
            className={"btn-design-box   " + (chartDataType === "rain" ? "clicked-box " : "not-clicked")}
            onClick={() => handleChangeChartDataType("rain")}
          >
              Rainfall
          </div>
          <div
            className={"btn-design-box " + (chartDataType === "wind" ? "clicked-box " : "not-clicked")}
            onClick={() => handleChangeChartDataType("wind")}
          >
              Windspeed
          </div>
        </div>
      </div>
      <LineChart chartData={userData} />
    </section>
  );
}

export default Overview;