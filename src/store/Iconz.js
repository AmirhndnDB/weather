import {
  BsFillBrightnessHighFill,
  BsFillCloudDrizzleFill,
  BsFillCloudHailFill,
  BsFillCloudLightningRainFill,
  BsFillCloudSunFill,
  BsFillCloudSnowFill,
  BsFillCloudFog2Fill,
  BsFillCloudSleetFill,
  BsFillMoonFill,
  BsCloudUploadFill,
} from "react-icons/bs";

function Iconz({ condition }) {
  switch (condition) {
    case "Sunny":
      return <BsFillBrightnessHighFill className="weather-icon" />;

    case "Overcast":
    case "Cloudy":
    case "Fog":
    case "Mist":
      return <BsFillCloudFog2Fill className="weather-icon" />;

    case "clodSun":
    case "Light freezing rain":
      return <BsFillCloudDrizzleFill className="weather-icon" />;

    case "Light rain":
    case "Moderate rain":
    case "Patchy rain possible":
    case "Light drizzle":
    case "Patchy light drizzle":
      return <BsFillCloudHailFill className="weather-icon" />;

    case "Light rain shower":
      return <BsFillCloudSleetFill className="weather-icon" />;

    case "Partly cloudy":
      return <BsFillCloudSunFill className="weather-icon" />;

    case "snowiy":
    case "Light snow":
    case "Moderate snow":
      return <BsFillCloudSnowFill className="weather-icon" />;

    case "Light snow showers":
      return <BsFillCloudLightningRainFill className="weather-icon" />;

    case "Clear":
      return <BsFillMoonFill className="weather-icon" />;

    default:
      return <BsCloudUploadFill className="weather-icon" />;
  }
}

export default Iconz;