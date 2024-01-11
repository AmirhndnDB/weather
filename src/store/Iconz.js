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
        case "Cloudy" :
            return <BsFillCloudFog2Fill className="weather-icon"/>
            break
        case "Fog" :
                return <BsFillCloudFog2Fill className="weather-icon"/>
                break    
        case "clodSun":
            return <BsFillCloudDrizzleFill className="weather-icon"/>
            break    
        case "Light rain" :
            return <BsFillCloudHailFill className="weather-icon"/>
            break
        case 'Moderate rain' :
            return <BsFillCloudHailFill className="weather-icon"/>
            break
        case "Patchy rain possible" :
            return <BsFillCloudHailFill className="weather-icon"/>
            break
        case "Light drizzle" :
            return <BsFillCloudHailFill className="weather-icon"/>
            break    
        case "Patchy light drizzle" :
            return <BsFillCloudHailFill className="weather-icon"/>
            break  
        case "Light rain shower" :
            return <BsFillCloudSleetFill className="weather-icon"/>
            break 
        case "Mist":
            return <BsFillCloudFog2Fill className="weather-icon"/>
            break
            case "Partly cloudy" :
            return <BsFillCloudSunFill className="weather-icon"/>
            break
        case "snowiy":
            return <BsFillCloudSnowFill className="weather-icon"/>
            break    
        case "Light snow showers":
            return <BsFillCloudLightningRainFill className="weather-icon"/>
            break   
        case "Light snow":
            return <BsFillCloudSnowFill className="weather-icon"/>
            break 
        case "Moderate snow":
            return <BsFillCloudSnowFill className="weather-icon"/>
            break      
        case "Light freezing rain":
            return <BsFillCloudDrizzleFill className="weather-icon"/>
            break
            
        case "Clear" : 
            return <BsFillMoonFill className="weather-icon"/>
            break

            
            
    }

    

    // if (condition === "Sunny"){
    
    //     return <BsFillBrightnessHighFill className="weather-icon"/>
    // }else if(condition = "Overcast"){
    //     return <BsFillCloudFog2Fill className="weather-icon"/>

    //  }
        

}



    
    




export default Iconz;





