import { useSelector } from "react-redux";
import ImageSelector from "../../store/ImageSelector";

function UVIndex() {
  const LocationData = useSelector((state) => state.times.presentTime);
  const UVIndex = LocationData?.current?.uv;

  function getUVClassName(index) {
    const uv = Math.round(index);
    if (uv >= 1 && uv <= 7) return `UV${uv}`;
    if (uv > 7) return "max-sun-uv";
    return "defult-sun-uv";
  }

  const ClassName = getUVClassName(UVIndex);

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
          <ImageSelector condition={"Sunny"} CN={"sun-uv " + ClassName} />
          <div className="erth-border-uv"></div>
        </div>
      </div>
      <div className="uv-text-box">
        <span className="uv-text">drink 2 litr water in day</span>
      </div>
    </section>
  );
}
export default UVIndex;
