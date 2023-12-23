import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, fetchSearchData ,changeHeader,fetchForcastData} from "../store";
import { useState } from "react";






function SearchLocation() {

const [userInput,setUserInput]= useState('');

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
    
  };

  const handleChangeHeader = (e)=>{
    const itemValue = e.target.innerText;
    dispatch(changeHeader(itemValue))
    dispatch(fetchForcastData(itemValue))
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
      <div className="search-location">
        <input
          className="search-bar"
          type="search"
          value={searchTerm}
          onChange={handleSearchTermChange}
          />
        <ul className="search-result">
          {locationNames.slice(0, 3).map((locationName)=>(
            <li className="search-result-item"
            key={locationName.id}
            onClick={handleChangeHeader}
            >
              {locationName.name}
            </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default SearchLocation;