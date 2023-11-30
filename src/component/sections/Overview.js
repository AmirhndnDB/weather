
import { LineChart } from "./LineChart";
import { useState } from "react";
import { UserData } from "./ChartData";
import { useDispatch , useSelector} from "react-redux";
import { changeChartDataType } from "../../store";

function Overview(){

  const dispatch = useDispatch();
  const chartDataType = useSelector(state => state.times.chartDataType);

  const handleChangeChartDataType = (chartDataType) =>{
    dispatch(changeChartDataType(chartDataType))
  }

 


  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Overview",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["aliceblue"],
        height:["100%"],
      },
    ],
  });

  return (
<section className="grid-items overview">
  <div className="overvew-title-box">
    <h3 className="overvew-title">Overview</h3>
    <div className="forcast-type">
      <div className={"btn-design-box " + (chartDataType === 'Humdy' ? 'overvew-first-btn-box': 'not-clicked')}
        onClick={() => handleChangeChartDataType('Humdy')}
        >
          <button className={"btn-design " + (chartDataType === 'Humdy' ? 'overvew-first-btn' : 'not-clicked')}>Humidity</button>
      </div>
      <div
      className={"btn-design-box " + (chartDataType === 'rain' ? 'overvew-secend-btn-box' : 'not-clicked')}
      onClick={() => handleChangeChartDataType('rain')}
      >
        <button className={"btn-design " + (chartDataType === 'rain' ? 'overvew-secend-btn' : 'not-clicked')}>Rainfallr</button>
      </div>
      <div
      className={"btn-design-box " + (chartDataType === 'wind' ? 'overvew-third-btn-box' : 'not-clicked')}
      onClick={() => handleChangeChartDataType('wind')}
      >
        <button className={"btn-design " + (chartDataType === 'wind' ? 'overvew-third-btn' : 'not-clicked')}>Windspeed</button>
      </div>
      </div>
  </div>
    <LineChart  chartData={userData} />
</section>
  );
}

export default Overview;
