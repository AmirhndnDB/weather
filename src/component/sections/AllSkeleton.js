import MainForcastSkeleton from "../Skeletons/MainForcastSkeleton";
import FutureWeatherSkeleton from "../Skeletons/FutturWeatherSkeleton";
import UVIndexSkeleton from "../Skeletons/UVIndexSkeleton";
import SunLocationSkeleton from "../Skeletons/SunLocationSkeleton";
import OverviewSkeleton from "../Skeletons/OverviewSkeleton";
import NewsSkeleton from "../Skeletons/NewsSkeleton";
import ClockAppSkeleton from "../Skeletons/DigiClockSkeleton";
import FooterSkeleton from "../Skeletons/FooterSkeleton";
function AllSkeleton() {
  return (
    <main className="all-contents">
      <MainForcastSkeleton />
      <FutureWeatherSkeleton />
      <UVIndexSkeleton />
      <SunLocationSkeleton />
      <OverviewSkeleton />
      <NewsSkeleton />
      <ClockAppSkeleton/>
      <FooterSkeleton/>

    </main>
  );
}

export default AllSkeleton;
