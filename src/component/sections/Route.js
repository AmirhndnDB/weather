import { useSelector } from "react-redux";

function Route({ Type,children}){

    
    
    const forcastPeriodType = useSelector(state => state.times.forcastPeriodType);
    


if (forcastPeriodType === Type){
    return children ;
}
return null
};
export default Route ;