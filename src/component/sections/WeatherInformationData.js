function WeatherInformationData({title,value,mark}){
    return(
    <div className="value-box">
        <h3 className="value">{value + mark}</h3>
        <p className="title">{title}</p>
    </div>
    );
}
 export default WeatherInformationData;