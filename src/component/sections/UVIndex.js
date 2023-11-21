import ImageSelector from "./ImageSelector";
function UVIndex(){
    return (
        <section className="grid-items uv-index">
        <div className="uv-box">
          <div>uv index</div>
          <div className="uv-amont">
            <p className="uv-amont-n n1">1</p>
            <p className="uv-amont-n n2">2</p>
            <p className="uv-amont-n n3">3</p>
            <p className="uv-amont-n n4">4</p>
            <p className="uv-amont-n n5">5</p>
            <p className="uv-amont-n n6">6</p>
            <p className="uv-amont-n n7">7</p>
            <div className="erth-border"></div>
            <ImageSelector condition={"sunny"} CN={"sun-uv"} />
          </div>
        </div>
        <span className="uv-text">eat watermelon 1 or tow</span>
            
        </section>
    );
}
export default UVIndex;


//  <section class="uvIndex grid">
{/* <img src="./Png/suny.png" alt="" class="sun-uv" /> */}


//       </section>