import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchNewsData } from "../store";
import NewsPageSkeleton from "./sections/NewsPageSkeleton";

function NewsPage (){
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchNewsData());
    },[dispatch]);
    // const NewsDatas = useSelector(state => state.News.NewsDataArays)||0;
    // const NewsText1 = NewsDatas?.items[0]?.subnews[0]?.snippet||0;
    // const NewsText2 = NewsDatas?.items[0]?.subnews[1]?.snippet||0;
    // const NewsText3 = NewsDatas?.items[2]?.subnews[2]?.snippet||0;
    // const NewsText4 = NewsDatas?.items[1]?.subnews[1]?.snippet||0;
    // const NewsTitle1 = NewsDatas?.items[0]?.subnews[0]?.title||0;
    // const NewsTitle2 = NewsDatas?.items[0]?.subnews[1]?.title||0;
    // const NewsTitle3 = NewsDatas?.items[2]?.subnews[2]?.title||0;
    // const NewsTitle4 = NewsDatas?.items[1]?.subnews[1]?.title ||0 ;
    // const NewsLink1 = NewsDatas?.items[0]?.subnews[0]?.newsUrl||0;
    // const NewsLink2 = NewsDatas?.items[0]?.subnews[1]?.newsUrl||0;
    // const NewsLink3 = NewsDatas?.items[2]?.subnews[2]?.newsUrl||0;
    // const NewsLink4 = NewsDatas?.items[1]?.subnews[1]?.newsUrl||0;



    
    
   
    const {isLoading,error} = useSelector((state)=> state.News)
    
    if (isLoading){
        return <NewsPageSkeleton/>
    }
    
    // if(error){
    //     return <div> Error  fetching data . . . . .</div>
    // }

    
    return ( 
    // <NewsPageSkeleton/>)
        <main className="news-page">

        <div className="news-page-item-box" >
            <h3 className="news-title-page">
                {/* {NewsTitle1} */}
                pfiwerptoeiro iejgoehg jegpoheper jgoieho ihergherhger hgerhghreg
            </h3>
            <p className="news-page-item-text">
            {/* {NewsText1} */}
            pofg jo ihgi egiu ghf ihfgh ifwf
            eio rhe rhgfoe hrgoheog hoie rhgoegh
            joer igho iehg oierhgo iehrgoi heroigh
            horgh  oie  rhgoiw  rhgoi hrog hoghgh
            rhgerwh  go irhgohrg  fiohjergh
            <a className="News-link" 
            // href={NewsLink1}
            > more</a>
            </p>
        </div>
        <div className="news-page-item-box">
            <h3 className="news-title-page">
                {/* {NewsTitle2} */}
                pfiwerptoeiro iejgoehg jegpoheper jgoieho ihergherhger hgerhghreg
            </h3>
            <p className="news-page-item-text">
            {/* {NewsText2} */}
            pofg joihg iegi ughfi hfg hifwf
            eior herh gfo ehrgoheo ghoie rhgoegh
            joe rig  hoiehg oier hgoiehr goihe roigh
            horg hoie rhgo iwrhg oihr ogho ghgh
            rhge rwhgo irhgohr gfio hjergh
            <a className="News-link" 
            // href={NewsLink2}
            >  more</a>
            </p>
        </div>
        <div className="news-page-item-box">
            <h3 className="news-title-page">
                {/* {NewsTitle3} */}
                pfiwerptoeiro iejgoehg jegpoheper jgoieho ihergherhger hgerhghreg
            </h3>
            <p className="news-page-item-text">
            {/* {NewsText3} */}
            pof  gj  oihgieg iughf ihfgh ifwf
            eiorh erhgf  oehrgoheo gho ierh goegh
            joeri ghoieh  goie rhgoiehr goiher oigh
            hor gho ierhgoi wrhgoi hrogho ghgh
            r hgerw hgo irhgoh rgfiohj ergh
            <a className="News-link" 
            // href={NewsLink3}
            >  more</a>
            </p>
        </div>
        <div className="news-page-item-box">
            <h3 className="news-title-page">
                {/* {NewsTitle4} */}
                pfiwerptoeiro iejgoehg jegpoheper jgoieho ihergherhger hgerhghreg
            </h3>
            <p className="news-page-item-text">
            {/* {NewsText4} */}
            pofgj oihgiegiu ghfihfgh ifwf
            eiorherh gfoehr goheog hoierhgoegh
            joerigh oiehgoie rhgoiehrg oiheroigh
            horg hoi erhgo iwrhgoihr oghoghgh
            rhger whgoi rhgohrgfi ohjergh
            <a className="News-link" 
            // href={NewsLink4}
            >  more</a>
            </p>
        </div>
        </main>
        )

}

export default NewsPage;

