// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchNewsData } from "../store";
// import NewsPageSkeleton from "./sections/NewsPageSkeleton";

// function NewsPage() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchNewsData());
//   }, [dispatch]);
//   const NewsDatas = useSelector((state) => state.News.NewsDataArays) || [];

//   const { isLoading, error } = useSelector((state) => state.News);

//   if (isLoading) {
//     return <NewsPageSkeleton />;
//   }

//   if (error) {
//     return <div> Error fetching data . . . . .</div>;
//   }
//   return (
//     <main className="news-page">
//       {NewsDatas.map((item, index) =>
//         item.subnews.slice(0, 4).map((news, subIndex) => (
//           <div key={`${index}-${subIndex}`} className="news-page-item-box">
//             <h3 className="news-title-page">{news.title}</h3>
//             <p className="news-page-item-text">
//               {news.snippet}
//               <a
//                 className="News-link"
//                 href={news.newsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 more
//               </a>
//             </p>
//           </div>
//         ))
//       )}
//     </main>
//   );
// }

// export default NewsPage;
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewsData } from "../store";
import NewsPageSkeleton from "./sections/NewsPageSkeleton";

function NewsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  const NewsDatas = useSelector((state) => state.News.NewsDataArays) || { items: [] };

  const { isLoading, error } = useSelector((state) => state.News);

  if (isLoading) {
    return <NewsPageSkeleton />;
  }

  if (error) {
    return <div> Error fetching data . . . . .</div>;
  }

  // اینجا items داریم که هر کدوم subnews داره
  return (
    <main className="news-page">
      {NewsDatas.items.map((item, index) =>
        item.subnews.slice(0, 4).map((news, subIndex) => (
          <div key={`${index}-${subIndex}`} className="news-page-item-box">
            <h3 className="news-title-page">{news.title}</h3>
            <h5 className="news-publisher">{news.publisher}</h5>
            <p className="news-page-item-text">
              {news.snippet}
              <a
                className="News-link"
                href={news.newsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                more
              </a>
            </p>
          </div>
        ))
      )}
    </main>
  );
}

export default NewsPage;
