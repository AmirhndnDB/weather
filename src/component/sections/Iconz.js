import { 
    BsFillBrightnessHighFill ,
    BsFillBrightnessAltHighFill,
    BsFillCloudDrizzleFill,
    BsFillCloudHailFill,
    BsFillCloudLightningRainFill,
    BsFillCloudSunFill,
    BsFillCloudSnowFill,
    BsFillCloudFog2Fill,
    BsFillCloudSleetFill,
    BsFillMoonStarsFill,
    BsFillMoonFill,
    
    } from "react-icons/bs";
function Iconz ({condition}){
    switch(condition ){
        case "Sunny" :
            return <BsFillBrightnessHighFill className="weather-icon"/>
            break
        case "Overcast":
            return <BsFillCloudFog2Fill className="weather-icon"/>
            break
            case "clody" :
            return <BsFillBrightnessAltHighFill className="weather-icon"/>
            break
        case "clodSun":
            return <BsFillCloudDrizzleFill className="weather-icon"/>
            break    
        case "moon" :
            return <BsFillCloudHailFill className="weather-icon"/>
            break
        case "moonClod":
            return <BsFillCloudLightningRainFill className="weather-icon"/>
            break
            case "clod-drizwl" :
            return <BsFillCloudSunFill className="weather-icon"/>
            break
        case "snowiy":
            return <BsFillCloudSnowFill className="weather-icon"/>
            break             
    
    }

    

    // if (condition === "Sunny"){
    
    //     return <BsFillBrightnessHighFill className="weather-icon"/>
    // }else if(condition = "Overcast"){
    //     return <BsFillCloudFog2Fill className="weather-icon"/>

    //  }
        

}



    
    




export default Iconz;





