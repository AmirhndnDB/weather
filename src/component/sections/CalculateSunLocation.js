import useTimeToMinutes from "../hooks/UsePersentHours";
function Cal(){

    
    const nowTime = '2:29 PM' ;
    const sunRTMin =useTimeToMinutes('07:03 AM') ;
    const sunRTMax =useTimeToMinutes('04:51 PM') ;
    const NOWTime =useTimeToMinutes(nowTime) ;
    
    
    const localTime = new Date().toLocaleTimeString()
    
    const TEyShodeSun = (NOWTime - sunRTMin)
    const dayTimeMinets = (sunRTMax - sunRTMin )
    const PersentTeyShode = (((TEyShodeSun/dayTimeMinets)*212)-15);
    console.log(localTime)
}

export default Cal ;