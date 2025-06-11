import { Skeleton } from "@mui/material";

export default function SunLocationSkeleton() {
  return (
    <section className="grid-items sun-location">
      <div className="sun-box">
        <div className="sun-rise">sunris</div>
        <div className="axis-sun skelet-box">
          <div className="erth-border-sun"></div>
        </div>
        <div className="sun-set">sunset</div>
      </div>
      <div className="sun-tims">
        <Skeleton
          className="sun-tims-items sun-tims-item-left"
          width={60}
          height={30}
          sx={{ marginTop: -2 }}
        />
        <Skeleton
          className="sun-tims-items sun-tims-item-right"
          width={60}
          height={30}
          sx={{ marginTop: -2 }}
        />
      </div>
    </section>
  );
}
