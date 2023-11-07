import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, fetchSearchData ,fetchForcastData } from "../store";



function SearchLocation() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.header.searchTerm);
  const locationNames = useSelector((state) => state.header.receivedData);
  const userLocationName = useSelector((state)=>state.times.presentTime);


  
  const handleSearchTermChange = (e) => {
    const value = e.target.value
    dispatch(changeSearchTerm(value));

    if(value.length > 2 ){
      dispatch(fetchSearchData(value));
    }
    
  };

  return (
    <>
      <div className="location-names">
          <h4
           className="location-name">
            {userLocationName && userLocationName.location && userLocationName.location.country}
            -
            {userLocationName && userLocationName.location && userLocationName.location.name}
            -
            {userLocationName && userLocationName.location && userLocationName.location.tz_id}
          </h4>
      </div>

      <div className="search">
        <input
          className="search-bar"
          type="search"
          value={searchTerm}
          onChange={handleSearchTermChange}
          />
        <ul>
          {locationNames.slice(0, 4).map((locationName)=>(
            <li 
            key={locationName.id}
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