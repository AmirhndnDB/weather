import { Skeleton } from "@mui/material";

export default function OverviewSkeleton() {
  return (
    <section className="grid-items overview">
      <div className="overvew-title-box">
        <h3 className="overvew-title">Overview</h3>
        <div className="forcast-type">
          <div className="btn-design-box clicked-box">Humidity</div>
          <div className="btn-design-box not-clicked">Rainfall</div>
          <div className="btn-design-box not-clicked">Windspeed</div>
        </div>
      </div>
      <Skeleton width={500} height={220} />
    </section>
  );
}
