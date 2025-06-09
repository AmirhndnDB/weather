import { LineChart } from "./LineChart";
import { useDispatch, useSelector } from "react-redux";
import { changeChartDataType } from "../../store";
import { useCalculatedValues } from "../../store/CalculateAvrageData";
function Overview() {
  const dispatch = useDispatch();
  const datas =  useCalculatedValues();
  const chartDataType = useSelector((state) => state.times.chartDataType);


  const handleChangeChartDataType = (chartDataType) => {
    dispatch(changeChartDataType(chartDataType));
  };



  const userData ={
    labels: datas.map((data) => data.month),
    datasets: [
      {
        label: chartDataType,
        data: datas.map((data) => {
          switch(chartDataType){
            case  "Humdy":
              return data.Humdy;
            case "rain" :
              return data.rain;
            case "wind":
              return data.wind;
            default:
              return 0     
          }
        }),
       backgroundColor: "aliceblue",
        height: "100%",
      },
    ],
  };

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