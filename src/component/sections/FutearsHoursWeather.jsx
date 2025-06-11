import Iconz from "../../store/Iconz";
import { useSelector } from "react-redux";
function FutearHoursWeather({ hoursNumb }) {
  const LocationData = useSelector((state) => state.times.presentTime);
  const temperType = useSelector((state) => state.times.temperType);

  const hourData = LocationData?.forecast?.forecastday[0]?.hour?.[hoursNumb];

  if (!hourData) {
    return (
      <div className="pishbini-har-saat">
        <span className="span">--:--</span>
        <Iconz condition={null} />
        <span className="span">--</span>
      </div>
    );
  }

  const { condition, temp_c, temp_f } = hourData;


  return (
    <div className="pishbini-har-saat">
      <span className="span">{hoursNumb}:00</span>
      <Iconz condition={condition?.text} />
      <span className="span">
        {temperType === "c" ? temp_c : temp_f}
        {temperType === "c" ? "C°" : "F°"}
      </span>
    </div>
  );
}

export default FutearHoursWeather;
