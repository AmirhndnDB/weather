import { Skeleton } from "@mui/material";

export default function FutureWeatherSkeleton() {
  return (
    <section className="grid-items futer-weather">
      <div className="period-forcast-type">
        <button className="btn-design-box clicked-box">Daily Forecast</button>
        <button className="btn-design-box not-clicked">Weekly Forecast</button>
      </div>
      <div className="days">
        <div className="day-box">
          <div className="tim-box">
            <Skeleton className="day" width={100} height={30} />
            <Skeleton
              className="date"
              width={100}
              height={26}
              sx={{ marginTop: -0.875 }}
            />
          </div>
          <Skeleton className="img" width={100} height={120} />
          <div className="value-panel Space-fix">
            <Skeleton className="value v-temp" width={100} height={100} />
            <Skeleton
              className="title-panel "
              width={100}
              height={20}
              sx={{ marginTop: -2 }}
            />
          </div>
        </div>
        <div className="day-box">
          <div className="tim-box">
            <Skeleton className="day" width={100} height={30} />
            <Skeleton
              className="date"
              width={100}
              height={26}
              sx={{ marginTop: -0.875 }}
            />
          </div>
          <Skeleton className="img" width={100} height={120} />
          <div className="value-panel Space-fix">
            <Skeleton className="value v-temp" width={100} height={100} />
            <Skeleton
              className="title-panel"
              width={100}
              height={20}
              sx={{ marginTop: -2 }}
            />
          </div>
        </div>
        <div className="day-box">
          <div className="tim-box">
            <Skeleton className="day" width={100} height={30} />
            <Skeleton
              className="date"
              width={100}
              height={26}
              sx={{ marginTop: -0.875 }}
            />
          </div>
          <Skeleton className="img" width={100} height={120} />
          <div className="value-panel Space-fix">
            <Skeleton className="value v-temp" width={100} height={100} />
            <Skeleton
              className="title-panel"
              width={100}
              height={20}
              sx={{ marginTop: -2 }}
            />
          </div>
        </div>
        <div className="day-box">
          <div className="tim-box">
            <Skeleton className="day" width={100} height={30} />
            <Skeleton
              className="date"
              width={100}
              height={26}
              sx={{ marginTop: -0.875 }}
            />
          </div>
          <Skeleton className="img" width={100} height={120} />
          <div className="value-panel Space-fix">
            <Skeleton className="value v-temp" width={100} height={100} />
            <Skeleton
              className="title-panel"
              width={100}
              height={20}
              sx={{ marginTop: -2 }}
            />
          </div>
        </div>
        <div className="day-box">
          <div className="tim-box">
            <Skeleton className="day" width={100} height={30} />
            <Skeleton
              className="date"
              width={100}
              height={26}
              sx={{ marginTop: -0.875 }}
            />
          </div>
          <Skeleton className="img" width={100} height={120} />
          <div className="value-panel Space-fix">
            <Skeleton className="value v-temp" width={100} height={100} />
            <Skeleton
              className="title-panel"
              width={100}
              height={20}
              sx={{ marginTop: -2 }}
            />
          </div>
        </div>
        <div className="day-box">
          <div className="tim-box">
            <Skeleton className="day" width={100} height={30} />
            <Skeleton
              className="date"
              width={100}
              height={26}
              sx={{ marginTop: -0.875 }}
            />
          </div>
          <Skeleton className="img" width={100} height={120} />
          <div className="value-panel Space-fix">
            <Skeleton className="value v-temp" width={100} height={100} />
            <Skeleton
              className="title-panel"
              width={100}
              height={20}
              sx={{ marginTop: -2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

