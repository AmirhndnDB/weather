import {useSelector } from "react-redux";
import ImageSelector from "./ImageSelector";



function UVIndex(){

    const LocationData = useSelector(state => state.times.presentTime);
    const UVIndex = LocationData?.current?.uv;
    // console.log(UVIndex);
    function getUVClassName(UVIndex) {
      if (UVIndex === 1) {
        return 'UV1';
      } else if (UVIndex === 2) {
        return 'UV2';
      } else if (UVIndex === 3) {
        return 'UV3';
      } else if (UVIndex === 4) {
        return 'UV4';
      } else if (UVIndex === 5) {
        return 'UV5';
      } else if (UVIndex === 6) {
        return 'UV6';
      } else if (UVIndex === 7) {
        return 'UV7';
      } else {
        return ''; // default class name or handle other cases
      }
    }
    const ClassName = getUVClassName(UVIndex);
    // console.log(ClassName)



    return (
        <section className="grid-items uv-index">
        <div className="uv-box">
          <div className="uv-title">uv index</div>
          <div className="uv-amont">
            <p className="uv-amont-n n1">1</p>
            <p className="uv-amont-n n2">2</p>
            <p className="uv-amont-n n3">3</p>
            <p className="uv-amont-n n4">4</p>
            <p className="uv-amont-n n5">5</p>
            <p className="uv-amont-n n6">6</p>
            <p className="uv-amont-n n7">7</p>
            <div className="erth-border-uv"></div>
            <ImageSelector condition={"Sunny"} CN={"sun-uv "+ ClassName} />
          </div>
        </div>
        <span className="uv-text">drink 2 litr water in day</span>
            
        </section>
    );
}
export default UVIndex;