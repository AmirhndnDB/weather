import ImageSelector from "./ImageSelector";
function SunLocation(){
    return (
        <section className="grid-items sun-location">
                    <div class="sun-box">
          <div>sunris</div>
          <div className="axis-sun">
           <ImageSelector CN={"sun"} condition={"sunny"}/>
            <div className="erth-border"></div>
          </div>
          <div>sunset</div>
        </div>
        <div className="sun-tims">
          <span className="sun-tims-items sun-tims-item-left">6:00</span>
          <span className="sun-tims-items sun-tims-item-right" >18:00</span>
        </div>
        </section>
    );
}
export default SunLocation;



      

