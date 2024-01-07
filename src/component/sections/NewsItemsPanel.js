import { useSelector} from "react-redux";


function NewsItemsPanel({newsNumb}){

  // const NewsDatas = useSelector(state => state.News.NewsDataArays);
  // const NewsmainTitle = NewsDatas?.items[newsNumb]?.publisher;
  // const NewsSecTitle = NewsDatas?.items[newsNumb]?.subnews[newsNumb]?.publisher ;
  // const NewsText = NewsDatas?.items[newsNumb]?.subnews[newsNumb]?.title ;

  // console.log(NewsText)

    return(
        <div className="news-panel">
          <h4 className="main-title">
            {/* {NewsmainTitle} */}
            newyourk times
          </h4>
          <h5 className="loc-name-news">
            {/* {NewsSecTitle } */}
            cnn
          </h5>
          <p className="text">
            {/* {NewsText} */}
            idfh vewr hffhh erfhr
            rj ihor jfgpokr gpk rfpg
            rlg pj roi gf jer pooe rkgr
            grg jpo ierig er kgp jg
          </p>
      </div>
    );   
}



export default NewsItemsPanel;