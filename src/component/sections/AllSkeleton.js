import { Skeleton } from "@mui/material";
function AllSkeleton(){

    return(
  <main className="all-contents">
<section className="grid-items the-header-weather">
  <div className="date-time">
    <Skeleton
    width={100}
    height={20}
    />
  </div>
  <div className="data-from-api">
    <div className="icon-box">
      <Skeleton className="weather-icon-image"
        sx={{ marginTop:-2 }}
        width={100}
        height={100}
      />
      <Skeleton className="kind-of-weather fix-space-skeleton"
        width={100}
        height={6}
        sx={{ marginTop:-2 }}

      />      
    </div>
    <div className="information-box">
      <Skeleton className="value"
        width={80}
        height={100}
      />
      <Skeleton className="title"
        width={100}
        height={20}
        sx={{ marginTop:-2 }}

      />
    </div>
    <div className="information-box">
      <Skeleton className="value"
        width={80}
        height={100}
      />
      <Skeleton className="title"
        width={100}
        height={20}
        sx={{ marginTop:-2 }}

      />
    </div>
    <div className="information-box">
      <Skeleton className="value"
        width={100}
        height={100}
      />
      <Skeleton className="title"
        width={100}
        height={20}
        sx={{ marginTop:-2 }}

      />
    </div>
  </div>
  <div className="pishbini-havaye-aty">
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={15}
      />
      <Skeleton 
        width={15}
        height={15}
        />
      <Skeleton className="span"
        width={47}
        height={15}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={15}
      />
      <Skeleton 
        width={15}
        height={15}
        />
      <Skeleton className="span"
        width={47}
        height={15}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={15}
      />
      <Skeleton 
        width={15}
        height={15}
        />
      <Skeleton className="span"
        width={47}
        height={15}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={15}
      />
      <Skeleton 
        width={15}
        height={15}
        />
      <Skeleton className="span"
        width={47}
        height={15}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={15}
      />
      <Skeleton 
        width={15}
        height={15}
        />
      <Skeleton className="span"
        width={47}
        height={15}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={15}
      />
      <Skeleton 
        width={15}
        height={15}
        />
      <Skeleton className="span"
        width={47}
        height={15}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={15}
      />
      <Skeleton 
        width={15}
        height={15}
        />
      <Skeleton className="span"
        width={47}
        height={15}
      />
    </div>
  </div>
</section>
<section className="grid-items futer-weather">
  <div className="period-forcast-type">
    <div className = "btn-design-box clicked-box">
      <button className="btn-design clicked" >Daily Forecast</button>
    </div>
    <div className="btn-design-box ">
      <button className="btn-design ">Weekly Forecast</button>
    </div>
  </div>
  <div className="days">
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={20}
        />
        <Skeleton className="date"
          width={100}
          height={20}
          sx={{ marginTop:-1.25 }}
        />
      </div>
      <Skeleton className="img"
        width={100}
        height={100}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={70}
          height={70}
        />
        <Skeleton className="title-panel "
          width={80}
          height={10}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={20}
        />
        <Skeleton className="date"
          width={100}
          height={20}
          sx={{ marginTop:-1.25 }}
        />
      </div>
      <Skeleton className="img"
        width={100}
        height={100}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={70}
          height={70}
        />
        <Skeleton className="title-panel"
          width={80}
          height={10}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={20}
        />
        <Skeleton className="date"
          width={100}
          height={20}
          sx={{ marginTop:-1.25 }}
        />
      </div>
      <Skeleton className="img"
        width={100}
        height={100}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={70}
          height={70}
        />
        <Skeleton className="title-panel"
          width={80}
          height={10}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={20}
        />
        <Skeleton className="date"
          width={100}
          height={20}
          sx={{ marginTop:-1.25 }}

        />
      </div>
      <Skeleton className="img"
        width={100}
        height={100}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={70}
          height={70}
        />
        <Skeleton className="title-panel"
          width={80}
          height={10}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={20}
        />
        <Skeleton className="date"
          width={100}
          height={20}
          sx={{ marginTop:-1.25 }}

        />
      </div>
      <Skeleton className="img"
        width={100}
        height={100}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={70}
          height={70}
        />
        <Skeleton className="title-panel"
          width={80}
          height={10}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={20}
        />
        <Skeleton className="date"
          width={100}
          height={20}
          sx={{ marginTop:-1.25 }}

        />
      </div>
      <Skeleton className="img"
        width={100}
        height={100}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={70}
          height={70}
        />
        <Skeleton className="title-panel"
          width={80}
          height={10}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
  </div>
</section>
<section className="grid-items uv-index">
  <div className="uv-box">
    <div className="uv-title">uv index</div>
    <div className="uv-amont skelet-box">
      <div className="erth-border-uv"></div>
    </div>
  </div>
  <div className="uv-text-box">
    <Skeleton className="uv-text "
      width={120}
      height={30}
    />
  </div>    
</section>
<section className="grid-items sun-location">
  <div className="sun-box">
    <div className="sun-rise">sunris</div>
    <div className="axis-sun skelet-box">
      <div className="erth-border-sun"></div>
    </div>
    <div className="sun-set">sunset</div>
  </div>
  <div className="sun-tims">
    <Skeleton className="sun-tims-items sun-tims-item-left"
      width={60}
      height={30}
    />
    <Skeleton className="sun-tims-items sun-tims-item-right" 
      width={60}
      height={30}
    />
  </div>
</section>
<section className="grid-items overview">
  <div className="overvew-title-box">
    <h3 className="overvew-title">Overview</h3>
    <div className="forcast-type">
      <div className="btn-design-box clicked-box">
        <button className="btn-design clicked">
            Humidity
        </button>
      </div>
      <div className="btn-design-box ">
        <button className="btn-design">
          Rainfall
        </button>
      </div>
      <div className="btn-design-box ">
        <button className="btn-design">
            Windspeed
        </button>
      </div>
    </div>
  </div>
  <Skeleton 
    width={500}
    height={350}
  />
</section>



<section className="grid-items weather-news">
  <div className="title-box">
    <h3 className="p-t">weather News</h3>
    <div  className="view">view All</div>
  </div>
  <div className="news-box">
    <div className="news-panel">
      <Skeleton className="main-title"
        width={64}
        height={10}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="loc-name-news"
        width={38}
        height={5}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="text"
        width={80}
        height={15}
        sx={{ bgcolor: '#2a2a2a' }}
      />
    </div>
    <div className="news-panel">
      <Skeleton className="main-title"
        width={64}
        height={10}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="loc-name-news"
        width={38}
        height={5}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="text"
        width={80}
        height={15}
        sx={{ bgcolor: '#2a2a2a' }}
      />
    </div>
    <div className="news-panel">
      <Skeleton className="main-title"
        width={64}
        height={10}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="loc-name-news"
        width={38}
        height={5}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="text"
        width={80}
        height={15}
        sx={{ bgcolor: '#2a2a2a' }}
      />
    </div>
    <div className="news-panel">
      <Skeleton className="main-title"
        width={64}
        height={10}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="loc-name-news"
        width={38}
        height={5}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="text"
        width={80}
        height={15}
        sx={{ bgcolor: '#2a2a2a' }}
      />
    </div>
  </div>
</section>
</main>
    )
}

export default AllSkeleton;




// <Skeleton
// sx={{ bgcolor: '#359bff' }}
// variant="rectangular"
// width={210}
// height={118}
// />




<>
</>


