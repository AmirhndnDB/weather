import NewsItemsPanel from "./NewsItemsPanel";
function News(){
    return (
        <section className="grid-items weather-news">
        <div className="title-box">
          <h3 className="p-t">weather News</h3>
          <a className="view" href="google.com">View All</a>
        </div>
        <div className="news-box">
        <NewsItemsPanel/>
        <NewsItemsPanel/>
        <NewsItemsPanel/>
        <NewsItemsPanel/>
        </div>
        </section>
    );
}
export default News;