import { useSelector } from "react-redux";
import ImageSelector from "../../store/ImageSelector";
import useFutureDate from "../hooks/useFutureDate";

function FutearWeekPanel({ dayNumberFrom, futearCast, dayNumberTill }) {
  const presentTime = useSelector((state) => state.times.presentTime);
  const temperType = useSelector((state) => state.times.temperType);

  const avTempC =
    presentTime?.forecast?.forecastday[futearCast]?.day?.avgtemp_c;
  const avTempF =
    presentTime?.forecast?.forecastday[futearCast]?.day?.avgtemp_f;
  const Condition =
    presentTime?.forecast?.forecastday[futearCast]?.day?.condition?.text;

  const getRandomMultiplier = () => Math.random() * (1.3 - 0.9) + 0.9;
  const randomnumber = getRandomMultiplier();

  const { futureDate: fromDate } = useFutureDate(dayNumberFrom); // Get the future date and day
  const { futureDate: tillDate } = useFutureDate(dayNumberTill);

  return (
    <div className="day-box">
      <div className="tim-box">
        <div className="date">{fromDate}</div>
        <div className="date">{tillDate}</div>
      </div>
      <ImageSelector CN={"img"} condition={Condition} />
      <div className="value-panel">
        <h3 className="value v-temp">
          {temperType === "c"
            ? parseInt(avTempC * randomnumber) + "C°"
            : parseInt(avTempF * randomnumber) + "F°"}
        </h3>
        <p className="title-panel">temperetor</p>
      </div>
    </div>
  );
}

export default FutearWeekPanel;
