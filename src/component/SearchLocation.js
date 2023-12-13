import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, fetchSearchData ,changeHeader,fetchForcastData} from "../store";
import { useState } from "react";
import UseIP from "./hooks/UseIP";






function SearchLocation() {

const [userInput,setUserInput]= useState('');

  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.header.searchTerm);
  const locationNames = useSelector((state) => state.header.receivedData);
  const userLocationName = useSelector((state)=>state.times.presentTime);
  const Country = userLocationName && userLocationName.location && userLocationName.location.country ; 
  const LocName = userLocationName && userLocationName.location && userLocationName.location.name ; 
  const TZID = userLocationName && userLocationName.location && userLocationName.location.tz_id ; 
  



  
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
      <div className="search">
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