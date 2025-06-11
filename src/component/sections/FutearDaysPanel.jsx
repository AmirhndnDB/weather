import { useSelector } from "react-redux";
import ImageSelector from "../../store/ImageSelector";
import useFutureDate from "../hooks/useFutureDate";

function FutearDaysPanel({ dayNumber, futearCast }) {
  const { forecast } = useSelector((state) => state.times.presentTime || {});
  const temperType = useSelector((state) => state.times.temperType);

  const dayForecast = forecast?.forecastday?.[futearCast]?.day;
  const averageTemp =
    temperType === "c" ? dayForecast?.avgtemp_c : dayForecast?.avgtemp_f;
  const conditionText = dayForecast?.condition?.text || "";

  const { futureDate, futureDay } = useFutureDate(dayNumber, true);

  return (
    <div className="day-box">
      <div className="tim-box">
        <div className="day">{futureDay}</div>
        <span className="date">{futureDate}</span>
      </div>

      <ImageSelector CN="img" condition={conditionText} />

      <div className="value-panel">
        <h3 className="value v-temp">
          {averageTemp}
          {temperType === "c" ? "C°" : "F°"}
        </h3>
        <p className="title-panel">temperature</p>
      </div>
    </div>
  );
}

export default FutearDaysPanel;
