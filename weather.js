function search(){
    city=cname.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`).then(d=>d.json())
    .then(res=>displaydata(res))

}
function displaydata(citydetails){
        cname=citydetails.name
        ctemp=citydetails.main.temp 
       humidity=citydetails.main.humidity
          speed=citydetails.wind.speed
        rise=citydetails.sys.sunrise
       set=citydetails.sys.sunset
           climate=citydetails.weather[0].main
          method=Math.floor(ctemp- 273)


htmldata = `<section class="vh-100" >
<div class="container  h-100">

  <div class="row justify-content-center align-items-center h-100">
    <div class="col-lg">

      <div class="bg-"">
        <div class="card-body p-4">

          <div class="bg-secondary rounded-pill">
          <h4 class="text-warning">City</h4>
            <h3 class="text-white text-center fw-bold">${cname}</h3>
          </div>

          <div class="bg-secondary rounded-pill">
          <h4 class="text-warning">Temperature</h4>
          <h3 class="text-white text-center fw-bold">${method}&#176;C</h3>
          </div>

          <div class="bg-secondary rounded-pill">
          <h4 class="text-warning">Humidity</h4>
            <h3 class="text-white text-center fw-bold">${humidity} %</h3>
          </div>

          <div class="bg-secondary rounded-pill">
          <h4 class="text-warning">Windspeed</h4>
            <h3 class="text-white text-center fw-bold">${speed} km/h</h3>
          </div>

          <div class="bg-secondary rounded-pill">
          <h4 class="text-warning">Sunrise</h4>
            <h3 class="text-white text-center fw-bold">${rise} mm</h3>
          </div>

          <div class="bg-secondary rounded-pill">
          <h4 class="text-warning">Sunset</h4>
            <h3 class="text-white text-center fw-bold">${set} mm</h3>
          </div>

          <div class="bg-secondary rounded-pill">
          <h4 class="text-warning">Climate</h4>
            <h3 class="text-white text-center fw-bold">${climate}</h3>
          </div>










          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</section>`
    result.innerHTML= htmldata

}