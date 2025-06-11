import { Skeleton } from "@mui/material";
 function NewsPageSkeleton(){
    return(
        <main className="news-page">
            <div className="news-page-item-box-Skeleton">
                <Skeleton className="news-title-page"
                width={544} height={250}
                />
                <Skeleton className="news-page-item-text"
                width={512} height={250}
                />
            </div>
            <div className="news-page-item-box-Skeleton">
                <Skeleton className="news-title-page"
                width={544} height={250}
                />
                <Skeleton className="news-page-item-text"
                width={512} height={250}
                />
            </div>
            <div className="news-page-item-box-Skeleton">
                <Skeleton className="news-title-page"
                width={544} height={250}
                />
                <Skeleton className="news-page-item-text"
                width={512} height={250}
                />
            </div>
            <div className="news-page-item-box-Skeleton">
                <Skeleton className="news-title-page"
                width={544} height={250}
                />
                <Skeleton className="news-page-item-text"
                width={512} height={250}
                />
            </div>
        </main>

    )
 }
 export default NewsPageSkeleton;