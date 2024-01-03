import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchNewsData } from "../store";
import NewsPageSkeleton from "./sections/NewsPageSkeleton";

function NewsPage (){
    const dispatch = useDispatch();
    const NewsDatas = useSelector(state => state.News.NewsDataArays);
    const NewsText1 = NewsDatas?.items[0]?.subnews[0]?.snippet ;
    const NewsText2 = NewsDatas?.items[0]?.subnews[1]?.snippet ;
    const NewsText3 = NewsDatas?.items[0]?.subnews[2]?.snippet ;
    const NewsText4 = NewsDatas?.items[0]?.subnews[3]?.snippet ;
    const NewsTitle1 = NewsDatas?.items[0]?.subnews[0]?.title ;
    const NewsTitle2 = NewsDatas?.items[0]?.subnews[1]?.title ;
    const NewsTitle3 = NewsDatas?.items[0]?.subnews[2]?.title ;
    const NewsTitle4 = NewsDatas?.items[0]?.subnews[3]?.title ;
    const NewsLink1 = NewsDatas?.items[0]?.subnews[0]?.newsUrl ;
    const NewsLink2 = NewsDatas?.items[0]?.subnews[1]?.newsUrl ;
    const NewsLink3 = NewsDatas?.items[0]?.subnews[2]?.newsUrl ;
    const NewsLink4 = NewsDatas?.items[0]?.subnews[3]?.newsUrl ;


    
    
    useEffect(()=> {
        dispatch(fetchNewsData());
    },[dispatch]);
    const {isLoading,error} = useSelector((state)=> state.News)
    
    if (isLoading){
        return <NewsPageSkeleton/>
    }
    
    if(error){
        return <div> Error  fetching data . . . . .</div>
    }
    
    console.log(NewsText1)
    
    return (
        <main className="news-page">

        <div className="news-page-item-box">
            <h3>{NewsTitle1}</h3>
            <p className="news-page-item-text">
            {NewsText1}
            </p>
            <a href={NewsLink1}>more....</a>

        </div>
        <div className="news-page-item-box">
            <h3>{NewsTitle2}</h3>
            <p className="news-page-item-text">
            {NewsText2}
            </p>
            <a href={NewsLink2}>more....</a>
        </div>
        <div className="news-page-item-box">
            <h3>{NewsTitle3}</h3>
            <p className="news-page-item-text">
            {NewsText3}
            </p>
            <a href={NewsLink3}>more....</a>
        </div>
        <div className="news-page-item-box">
            <h3>{NewsTitle4}</h3>
            <p className="news-page-item-text">
            {NewsText4}
            </p>
            <a href={NewsLink4}>more....</a>
        </div>
        </main>
        )

}

export default NewsPage;