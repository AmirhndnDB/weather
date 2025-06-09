import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchTerm,
  fetchSearchData,
  fetchForcastData,
  clierRecivedData,
  selectedHeader,
} from "../store";
import { Skeleton } from "@mui/material";
function SearchLocation() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.search.searchTerm);
  const locationNames = useSelector((state) => state.search.receivedData);
  const isHeaderLoading = useSelector(
    (state) => state.locationHeader.isLoading
  );
  const error = useSelector((state) => state.search.error);

  const userLocationData = useSelector((state) => state.times.presentTime);
  const isLoading = useSelector((state) => state.times.isLoading);
  const errorMessage = useSelector((state) => state.times.error);
  const Country = userLocationData?.location?.country;
  const LocName = userLocationData?.location?.name;
  const TZID = userLocationData?.location?.tz_id;
  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    dispatch(changeSearchTerm(value));

    if (value.length > 2) {
      dispatch(fetchSearchData(value));
    }
    if (value.length < 1) {
      dispatch(clierRecivedData(value));
    }
  };

  const handleselectedHeader = (e) => {
    const itemValue = e.target.innerText;
    dispatch(selectedHeader(itemValue));
    dispatch(fetchForcastData(itemValue));
    dispatch(clierRecivedData(itemValue));
    dispatch(changeSearchTerm(""));
  };

  return (
    <>
      <div className="location-names">
        {isLoading ? (
          <Skeleton
            className="skeleton-header"
            count={1}
            width={200}
            height={20}
          />
        ) : errorMessage ? (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        ) : (
          <h4 className="location-name">
            {Country}-{LocName}-{TZID}
          </h4>
        )}
      </div>
      <div className="loadAndError">
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        {isHeaderLoading && (
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      <div className="search-location-box">
        <div className="search-location">
          <input
            className="search-bar"
            type="search"
            value={searchTerm}
            onChange={handleSearchTermChange}
            disabled={isHeaderLoading}
            placeholder="Search location"
          />
        </div>
        <div className="result-box">
          <ul className="search-result">
            {!isHeaderLoading &&
              locationNames.slice(0, 3).map((locationName) => (
                <li
                  className="search-result-item"
                  key={locationName.id}
                  onClick={handleselectedHeader}
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
