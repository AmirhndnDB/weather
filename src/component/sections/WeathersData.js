function WeathersData({title,value,mark}){
    return(
    <div>
        <h3 className="value">{value + mark}</h3>
        <p className="title">{title}</p>
    </div>
    );
}
 export default WeathersData;