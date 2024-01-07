import NewsItemsPanel from "./NewsItemsPanel";
import Link from "../Link";
function News(){
    return (
        <section className="grid-items weather-news">
          <div className="title-box">
            <h3 className="p-t">weather News</h3>
            <Link to={"/news"} className="view">view All</Link>
          </div>
          <div className="news-box">
            <NewsItemsPanel newsNumb={0}/>
            <NewsItemsPanel newsNumb={1}/>
            <NewsItemsPanel newsNumb={2}/>
            <NewsItemsPanel newsNumb={3}/>
          </div>
        </section>
    );
}
export default News;

