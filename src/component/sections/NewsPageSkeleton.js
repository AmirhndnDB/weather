import { Skeleton } from "@mui/material";
 function NewsPageSkeleton(){
    return(
        <main className="news-page">
            <div className="news-page-item-box">
                <Skeleton className="news-page-item-text"
                width={300} height={300}
                />
            </div>
            <div className="news-page-item-box">
                <Skeleton className="news-page-item-text"
                width={300} height={300}
                />
            </div>
            <div className="news-page-item-box">
                <Skeleton className="news-page-item-text"
                width={300} height={300}
                />
            </div>
            <div className="news-page-item-box">
                <Skeleton className="news-page-item-text"
                width={300} height={300}
                />
            </div>
        </main>

    )
 }
 export default NewsPageSkeleton;