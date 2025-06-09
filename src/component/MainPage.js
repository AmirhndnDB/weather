import Header from "./Header";
import Main from "./Main";
import "../CSS/Header.css";
import "../CSS/MainForcastPanel.css";
import "../CSS/FutearWeather.css";
import "../CSS/Overvew.css";
import "../CSS/SunLocation.css";
import "../CSS/UV.css";
import "../CSS/weatherNews.css";
import "../CSS/Footer.css"
import UseIP from "./hooks/UseIP";
import { useEffect, useMemo } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchForcastData } from "../store";

function MainPage() {

  const ip = UseIP();
  const dispatch = useDispatch()
  const LocationData = useSelector((state) => state.times.presentTime);
      const isDataComplit = useMemo(()=>
      !LocationData.location ||
    !LocationData.current ||
    !LocationData.forecast,[LocationData]
  )
useEffect(()=>{
 if(ip && isDataComplit){
  dispatch(fetchForcastData(ip))
}
  },[ip,dispatch,isDataComplit])

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default MainPage;

