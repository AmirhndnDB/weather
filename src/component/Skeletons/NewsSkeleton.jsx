import { Skeleton } from "@mui/material";
export default function NewsSkeleton() {
  return (
    <section className="grid-items weather-news">
      <div className="title-box">
        <h3 className="p-t">weather News</h3>
        <div className="view">view All</div>
      </div>
      <div className="news-box">
        <div className="news-panel">
          <Skeleton
            className="main-title"
            width={80}
            height={60}
            sx={{ bgcolor: "#2a2a2a" }}
          />
          <Skeleton
            className="loc-name-news"
            width={40}
            height={20}
            sx={{ bgcolor: "#2a2a2a" }}
          />
          <Skeleton
            className="text"
            width={80}
            height={120}
            sx={{ bgcolor: "#2a2a2a" }}
          />
        </div>
        <div className="news-panel">
          <Skeleton
            className="main-title"
            width={80}
            height={60}
            sx={{ bgcolor: "#2a2a2a" }}
          />
          <Skeleton
            className="loc-name-news"
            width={40}
            height={20}
            sx={{ bgcolor: "#2a2a2a" }}
          />
          <Skeleton
            className="text"
            width={80}
            height={120}
            sx={{ bgcolor: "#2a2a2a" }}
          />
        </div>
        <div className="news-panel">
          <Skeleton
            className="main-title"
            width={80}
            height={60}
            sx={{ bgcolor: "#2a2a2a" }}
          />
          <Skeleton
            className="loc-name-news"
            width={40}
            height={20}
            sx={{ bgcolor: "#2a2a2a" }}
          />
          <Skeleton
            className="text"
            width={80}
            height={120}
            sx={{ bgcolor: "#2a2a2a" }}
          />
        </div>
        <div className="news-panel">
          <Skeleton
            className="main-title"
            width={80}
            height={60}
            sx={{ bgcolor: "#2a2a2a" }}
          />
          <Skeleton
            className="loc-name-news"
            width={40}
            height={20}
            sx={{ bgcolor: "#2a2a2a" }}
          />
          <Skeleton
            className="text"
            width={80}
            height={120}
            sx={{ bgcolor: "#2a2a2a" }}
          />
        </div>
      </div>
    </section>
  );
}

