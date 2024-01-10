import { Skeleton } from "@mui/material";
function AllSkeleton(){

    return(
  <main className="all-contents">
<section className="grid-items the-header-weather the-header-weather-skelet">
  <div className="date-time">
    <Skeleton
    width={130}
    height={30}
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
        height={20}
        sx={{ marginTop:-2 }}

      />      
    </div>
    <div className="information-box value-box" >
      <Skeleton className="value"
        width={110}
        height={100}
      />
      <Skeleton className="title"
        width={100}
        height={20}
        sx={{ marginTop:-2 }}

      />
    </div>
    <div className="information-box value-box">
      <Skeleton className="value"
        width={110}
        height={100}
      />
      <Skeleton className="title"
        width={110}
        height={20}
        sx={{ marginTop:-2 }}

      />
    </div>
    <div className="information-box value-box">
      <Skeleton className="value"
        width={130}
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
        height={26}
      />
      <Skeleton 
        width={25}
        height={26}
        />
      <Skeleton className="span"
        width={47}
        height={26}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={26}
      />
      <Skeleton 
        width={25}
        height={26}
        />
      <Skeleton className="span"
        width={47}
        height={26}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={26}
      />
      <Skeleton 
        width={25}
        height={26}
        />
      <Skeleton className="span"
        width={47}
        height={26}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={26}
      />
      <Skeleton 
        width={25}
        height={26}
        />
      <Skeleton className="span"
        width={47}
        height={26}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={26}
      />
      <Skeleton 
        width={25}
        height={26}
        />
      <Skeleton className="span"
        width={47}
        height={26}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={26}
      />
      <Skeleton 
        width={25}
        height={26}
        />
      <Skeleton className="span"
        width={47}
        height={26}
      />
    </div>
    <div className="pishbini-har-saat">
      <Skeleton className="span"
        width={47}
        height={26}
      />
      <Skeleton 
        width={25}
        height={26}
        />
      <Skeleton className="span"
        width={47}
        height={26}
      />
    </div>
  </div>
</section>
<section className="grid-items futer-weather">
  <div className="period-forcast-type">
    < button className = "btn-design-box clicked-box">
      Daily Forecast
    </ button>
    < button className="btn-design-box not-clicked">
      Weekly Forecast
    </ button>
  </div>
  <div className="days">
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={30}
        />
        <Skeleton className="date"
          width={100}
          height={26}
          sx={{ marginTop:-0.875 }}
        />
      </div>
      <Skeleton className="img"
        width={100}
        height={120}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={100}
          height={100}
        />
        <Skeleton className="title-panel "
          width={100}
          height={20}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={30}
        />
        <Skeleton className="date"
          width={100}
          height={26}
          sx={{ marginTop:-0.875 }}
        />
      </div>
      <Skeleton className="img"
        width={100}
        height={120}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={100}
          height={100}
        />
        <Skeleton className="title-panel"
          width={100}
          height={20}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={30}
        />
        <Skeleton className="date"
          width={100}
          height={26}
          sx={{ marginTop:-0.875 }}
        />
      </div>
      <Skeleton className="img"
        width={100}
        height={120}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={100}
          height={100}
        />
        <Skeleton className="title-panel"
          width={100}
          height={20}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={30}
        />
        <Skeleton className="date"
          width={100}
          height={26}
          sx={{ marginTop:-0.875 }}

        />
      </div>
      <Skeleton className="img"
        width={100}
        height={120}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={100}
          height={100}
        />
        <Skeleton className="title-panel"
          width={100}
          height={20}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={30}
        />
        <Skeleton className="date"
          width={100}
          height={26}
          sx={{ marginTop:-0.875 }}

        />
      </div>
      <Skeleton className="img"
        width={100}
        height={120}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={100}
          height={100}
        />
        <Skeleton className="title-panel"
          width={100}
          height={20}
          sx={{ marginTop:-2 }}

        />
      </div>
    </div>
    <div className="day-box">
      <div className="tim-box">
        <Skeleton className="day"
          width={100}
          height={30}
        />
        <Skeleton className="date"
          width={100}
          height={26}
          sx={{ marginTop:-0.875 }}

        />
      </div>
      <Skeleton className="img"
        width={100}
        height={120}
       />
      <div className="value-panel Space-fix">
        <Skeleton className="value v-temp"
          width={100}
          height={100}
        />
        <Skeleton className="title-panel"
          width={100}
          height={20}
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
    <p className="uv-amont-n n1">1</p>
              <p className="uv-amont-n n2">2</p>
              <p className="uv-amont-n n3">3</p>
              <p className="uv-amont-n n4">4</p>
              <p className="uv-amont-n n5">5</p>
              <p className="uv-amont-n n6">6</p>
              <p className="uv-amont-n n7">7</p>
      <div className="erth-border-uv"></div>
    </div>
  </div>
  <div className="uv-text-box">
    <Skeleton className="uv-text "
      width={120}
      height={30}
      sx={{ marginTop:-2 }}
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
      sx={{ marginTop:-2 }}

    />
    <Skeleton className="sun-tims-items sun-tims-item-right" 
      width={60}
      height={30}
      sx={{ marginTop:-2 }}

    />
  </div>
</section>
<section className="grid-items overview">
  <div className="overvew-title-box">
    <h3 className="overvew-title">Overview</h3>
    <div className="forcast-type">
      <div className="btn-design-box clicked-box">
        Humidity
      </div>
      <div className="btn-design-box not-clicked">
        Rainfall
      </div>
      <div className="btn-design-box not-clicked">
        Windspeed
      </div>
    </div>
  </div>
  <Skeleton 
    width={500}
    height={220}
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
        width={80}
        height={60}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="loc-name-news"
        width={40}
        height={20}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="text"
        width={80}
        height={120}
        sx={{ bgcolor: '#2a2a2a' }}
      />
    </div>
    <div className="news-panel">
      <Skeleton className="main-title"
        width={80}
        height={60}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="loc-name-news"
        width={40}
        height={20}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="text"
        width={80}
        height={120}
        sx={{ bgcolor: '#2a2a2a' }}
      />
    </div>
    <div className="news-panel">
      <Skeleton className="main-title"
        width={80}
        height={60}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="loc-name-news"
        width={40}
        height={20}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="text"
        width={80}
        height={120}
        sx={{ bgcolor: '#2a2a2a' }}
      />
    </div>
    <div className="news-panel">
      <Skeleton className="main-title"
        width={80}
        height={60}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="loc-name-news"
        width={40}
        height={20}
        sx={{ bgcolor: '#2a2a2a' }}
      />
      <Skeleton className="text"
        width={80}
        height={120}
        sx={{ bgcolor: '#2a2a2a' }}
      />
    </div>
  </div>
</section>
</main>
    )
}

export default AllSkeleton;







