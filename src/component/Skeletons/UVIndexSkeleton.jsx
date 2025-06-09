import { Skeleton } from "@mui/material";

export default function UVIndexSkeleton() {
  return (
    <section className="grid-items uv-index">
      <div className="uv-box">
        <div className="uv-title">uv index</div>
        <div className="uv-amont skelet-box">
          <p className="uv-amont-n n1">1</p>
          <p className="uv-amont-n n2">2</p>
          <p className="uv-amont-n n3">3</p>
          <p className="uv-amont-n n4">4</p>
          <p className="uv-amont-n n5">5</p>
          <p className="uv-amont-n n6">6</p>
          <p className="uv-amont-n n7">7</p>
          <div className="erth-border-uv"></div>
        </div>
      </div>
      <div className="uv-text-box">
        <Skeleton
          className="uv-text "
          width={120}
          height={30}
          sx={{ marginTop: -2 }}
        />
      </div>
    </section>
  );
}
