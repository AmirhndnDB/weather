import FutearHoursWeather from "./FutearsHoursWeather";
import WeatherInformationData from "./WeatherInformationData";
import { useSelector } from "react-redux";
import ImageSelector from "../../store/ImageSelector";
import useRoundedNumber from "../hooks/useRoundedNumber"

function MainForcastPanel({ hour }) {
  const temperType = useSelector((state) => state.times.temperType);
  const LocationData = useSelector((state) => state.times.presentTime);



  // دسته‌بندی داده‌ها برای وضوح بیشتر
  const current = LocationData?.current || {};
  const forecast = LocationData?.forecast?.forecastday?.[0]?.day || {};
  const location = LocationData?.location || {};

  const conditionText = current.condition?.text || null;
  const localTime = location.localtime || "N/A";
  const temperatureC = useRoundedNumber(current.temp_c )|| 0;
  const temperatureF = useRoundedNumber(current.temp_f) || 0;
  const humidity = useRoundedNumber(current.humidity )|| 0;
  const windSpeed = useRoundedNumber(current.wind_kph )|| 0;
  const maxTempC = useRoundedNumber(forecast.maxtemp_c) || 0;
  const minTempC = useRoundedNumber(forecast.mintemp_c )|| 0;
  const maxTempF = useRoundedNumber(forecast.maxtemp_f) || 0;
  const minTempF = useRoundedNumber(forecast.mintemp_f )|| 0;

  // محاسبه ساعت‌های آینده با map
  const nextHours = Array.from({ length: 7 }, (_, i) => (hour + i + 1) % 24);

  return (
    <section className="grid-items the-header-weather">
      <div className="date-time">{localTime}</div>

      <div className="data-from-api">
        <div className="icon-box">
          <ImageSelector CN="weather-icon-image" condition={conditionText} />
          <p className="kind-of-weather">
            {conditionText} {temperType === "c" ? minTempC : minTempF}°-
            {temperType === "c" ? maxTempC : maxTempF}°
          </p>
        </div>

        <WeatherInformationData
          title="temperetoure"
          value={temperType === "c" ? temperatureC : temperatureF}
          mark={temperType === "c" ? "C°" : "F°"}
        />
        <WeatherInformationData title="humidity" value={humidity} mark="%" />
        <WeatherInformationData
          title="windSpid"
          value={windSpeed}
          mark="km/h"
        />
      </div>

      <div className="pishbini-havaye-aty">
        {nextHours.map((h, idx) => (
          <FutearHoursWeather key={idx} hoursNumb={h} />
        ))}
      </div>
    </section>
  );
}

export default MainForcastPanel;



