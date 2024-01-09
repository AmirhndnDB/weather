import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, fetchSearchData ,changeHeader,fetchForcastData,clierRecivedData} from "../store";






function SearchLocation() {


  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.header.searchTerm);
  const locationNames = useSelector((state) => state.header.receivedData);
  const userLocationData = useSelector((state)=>state.times.presentTime);
  const Country = userLocationData?.location?.country ; 
  const LocName = userLocationData?.location?.name ; 
  const TZID = userLocationData?.location?.tz_id ; 
  



  
  const handleSearchTermChange = (e) => {
    const value = e.target.value
    dispatch(changeSearchTerm(value));

    if(value.length > 2 ){
      dispatch(fetchSearchData(value));
    }
    if(value.length < 1){
      dispatch(clierRecivedData(value))
    }
    
  };

  const handleChangeHeader = (e)=>{
    const itemValue = e.target.innerText;
    dispatch(changeHeader(itemValue))
    dispatch(fetchForcastData(itemValue))
    dispatch(clierRecivedData(itemValue))
    dispatch(changeSearchTerm(''))
  }

  return (
    <>
      <div className="location-names">
          <h4
           className="location-name">
            {Country}
            -
            {LocName}
            -
            {TZID}
          </h4>
      </div>
      <div>
        <div className="search-location">
          <input
            className="search-bar"
            type="search"
            value={searchTerm}
            onChange={handleSearchTermChange}
            />
        </div>
        <div className="result-box">
          <ul className="search-result">
            {locationNames.slice(0, 3).map((locationName)=>(
              <li
              className="search-result-item"
              key={locationName.id}
              onClick={handleChangeHeader}
              >
                {locationName.name}
              </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchLocation;

