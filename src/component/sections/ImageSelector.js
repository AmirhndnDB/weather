import SunImg from "../png/suny.png";
import SunShower from "../png/sunShower.png";
import Blusteri from "../png/blusteri.png";
import Snowy from "../png/snowy.png";
import Rainy from "../png/rainy.png";
import Tornardo from "../png/tornado.png";
import PartlyCloudy from "../png/partlyCloudy-day.png"
import ThunderDay from "../png/thunder-day.png";
import TunderStorm from "../png/thunderStorm.png";
import FullMoon from "../png/fullMoon.png";
import RainyNight from "../png/rainy-night.png";
import CloudyNight from "../png/cloudy-night.png";
import  PartlyClouduNightF from "../png/partlyclody-night-FullMoon.png";
import PartlyClouduNightP from "../png/partlyclody-night-partlyMoon.png";
import CloudyRanbow from "../png/cloudy-rainbow.png";
import  ThunderNight  from  "../png/thunder-nighty.png";
import PartlyMoon  from "../png/partly-moon.png";
import Coldest from "../png/weryCold.png";
import Hotest from "../png/weryhot.png";
import WindyCloudy from "../png/windy-cloudy.png";

function ImageSelector({CN,condition}){


    switch(condition){
        case "Sunny"  :
            return <img src={SunImg} alt="ax" className={CN}/>
            break
        case "SunShower":
            return <img src={SunShower} alt="ax" className={CN}/>
            break
        case "Overcast":
            return <img src={Blusteri} alt="ax" className={CN}/>
            break
        case "snowy":
            return <img src={Snowy} alt="ax" className={CN}/>
            break
        case "Patchy rain possible":
            return <img src={Rainy} alt="ax" className={CN}/>
            break
        case "Light drizzle":
            return <img src={Rainy} alt="ax" className={CN}/>
            break    
        case "Light rain":
            return <img src={Rainy} alt="ax" className={CN}/>
            break        
        case 'Partly cloudy':
            return <img src={PartlyCloudy} alt="ax" className={CN}/>
            break
        case "Clear":
            return <img src={FullMoon} alt="ax" className={CN}/>
            break
        case "tunder":
            return <img src={ThunderDay} alt="ax" className={CN}/>
            break
        case "tunderStorm":
            return <img src={TunderStorm} alt="ax" className={CN}/>
            break
        case "tornado":
            return <img src={Tornardo} alt="ax" className={CN}/>
            break
        case 'Mist'    :
            return <img src={CloudyNight} alt="ax" className={CN}/>
            break
        case 'Moderate rain' :
            return <img src={Rainy} alt="ax" className={CN}/>
            break



    }

    

}


export default ImageSelector;