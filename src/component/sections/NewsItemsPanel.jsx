import { useSelector} from "react-redux";


function NewsItemsPanel({newsNumb}){
  const{NewsDataArays,isloading,error}=useSelector(state => state.News);
if (isloading){
  return<div className="news-panel">isloading</div>
}
if(error){
  return <div className="news-panel">eror loading news</div>
}
  const main = NewsDataArays?.items?.[newsNumb];
  const sub = main?.subnews?.[0]
if(!main || !sub){
  return <div className="news-panel"> we don't have  any news</div>
}

    return(
        <div className="news-panel">
          <h4 className="main-title">
            { main.publisher}
          </h4>
          <h5 className="loc-name-news">
            {sub.publisher }
          </h5>
          <p className="text">
            { sub.title}
          </p>
      </div>
    );   
}



export default NewsItemsPanel;