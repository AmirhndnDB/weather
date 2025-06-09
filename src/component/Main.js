import MainForcastPanel from "./sections/MainForcastPanel";
import FutearWeather from "./sections/FutearWeather";
import UVIndex from "./sections/UVIndex";
import SunLocation from "./sections/SunLocation";
import Overview from "./sections/Overview";
import News from "./sections/News";
import useHourFromTimeString from "./hooks/useStringToHoursNumber";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNewsData } from "../store";
import Footer from "./Footer";
import AllSkeleton from "./sections/AllSkeleton";
import { fetchForcastData } from "../store";
import ClockApp from "../DigiClock";

function Main() {
  const dispatch = useDispatch();
  const LocationData = useSelector((state) => state.times.presentTime);
  const isLoading = useSelector((state) => state.times.isLoading);
  const error = useSelector((state) => state.times.error);
  const LocalTime = LocationData?.location?.localtime;
  const hour = useHourFromTimeString(LocalTime);

  useEffect(() => {
    dispatch(fetchNewsData());
    // dispatch(fetchForcastData())
  }, [dispatch]);

  console.log(isLoading)
  console.log(error)
  console.log(LocationData)



const handleRetry = () => {
    dispatch(fetchForcastData()); 
    dispatch(fetchNewsData());
  };

  // نمایش اسکلتون وقتی هنوز اطلاعات کامل نیستند
    // // بررسی وجود داده‌ها قبل از استفاده

  if (
    (isLoading ||
      !LocationData.location ||
      !LocationData.current ||
      !LocationData.forecast) &&
    !error
  ) {
    return <AllSkeleton />;
  }

  // نمایش پیام خطا همراه دکمه تلاش مجدد
  if (error) {
    return (
      <div className="error-container">
        <h2>❌ خطا در دریافت اطلاعات</h2>
        <p>{error}</p>
        <button onClick={handleRetry}>تلاش مجدد</button>
      </div>
    );
  }
  return (
    <main className="all-contents">
      <MainForcastPanel hour={hour} />
      <FutearWeather />
      <UVIndex />
      <SunLocation />
      <Overview />
      <News />
      <ClockApp/>
      <Footer  />
    </main>
  );
}
export default Main;