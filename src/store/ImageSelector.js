import SunImg from "./png/suny.png";
import SunShower from "./png/sunShower.png";
import Blusteri from "./png/blusteri.png";
import Snowy from "./png/snowy.png";
import Rainy from "./png/rainy.png";
import Tornardo from "./png/tornado.png";
import PartlyCloudy from "./png/partlyCloudy-day.png";
import ThunderDay from "./png/thunder-day.png";
import TunderStorm from "./png/thunderStorm.png";
import FullMoon from "./png/fullMoon.png";
import RainyNight from "./png/rainy-night.png";
import CloudyNight from "./png/cloudy-night.png";
import CloudyRanbow from "./png/cloudy-rainbow.png";
// import PartlyClouduNightF from "./png/partlyclody-night-FullMoon.png";
// import PartlyClouduNightP from "./png/partlyclody-night-partlyMoon.png";
// import ThunderNight from "./png/thunder-nighty.png";
// import PartlyMoon from "./png/partly-moon.png";
// import Coldest from "./png/weryCold.png";
// import Hotest from "./png/weryhot.png";
// import WindyCloudy from "./png/windy-cloudy.png";


const conditionImageMap = {
  "Sunny": SunImg,
  "Sun": SunImg,
  "SunShower": SunShower,
  "Overcast": Blusteri,
  "snowy": Snowy,
  "Light snow": Snowy,
  "Light freezing rain": Snowy,
  "Patchy moderate snow": Snowy,
  "Cloudy": CloudyRanbow,
  "Patchy rain possible": Rainy,
  "Light drizzle": Rainy,
  "Light rain": Rainy,
  "Moderate or heavy rain with thunde": TunderStorm,
  "Moderate rain": Rainy,
  "Partly cloudy": PartlyCloudy,
  "Clear": FullMoon,
  "tunder": ThunderDay,
  "tunderStorm": TunderStorm,
  "tornado": Tornardo,
  "Mist": CloudyNight,
};

function ImageSelector({ CN, condition, X, Y }) {
  const selectedImage = conditionImageMap[condition] || RainyNight;

  const sunStyle =
    condition === "Sun"
      ? {
          left: `${X}%`,
          bottom: `${Y}%`,
        }
      : undefined;

  return (
    <img src={selectedImage} alt="weather" className={CN} style={sunStyle} />
  );
}

export default ImageSelector;

