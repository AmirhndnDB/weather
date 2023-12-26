import useTimeToMinutes from "../hooks/UsePersentHours";
import useTimeConversion from "../hooks/UseTimeConvertion";


const CalculateSunLoc = (sunrise,sunset,LocalTime) => {
    const Z0 =useTimeToMinutes(sunrise) ;
    const ZMax =useTimeToMinutes(sunset) ;
    const Z = useTimeConversion(LocalTime) ;
    const X0 = -8
    const X =  (((Z - Z0)/(ZMax - Z0) )* 100) + X0 ; 
    const b = 49 ; 
    const a =  50 ;
    const alfa = 42 ;
    const beta = 45 ;
    const delta = (a**2) - ((X - alfa)**2)
    const Y = ((b*((delta)**(0.5)))/a) + beta ;

    return{X,Y,delta}
    
};

export default CalculateSunLoc;