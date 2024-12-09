import { useState } from 'react';
import './App.css';

function App() {
  const [city,setCity] = useState("");
  const [name,setName] = useState("");
  const [region,setRegion] = useState("");
  const [country,setCountry] = useState("");
  const [lat,setLat] = useState();
  const [lon,setLon] = useState();
  const [temp,setTemp] = useState();
  const [wind,setWind] = useState();
  const [humidity,setHumidity] = useState();
  const [maxTemp,setMaxTemp] = useState();
  const [minTemp,setMinTemp] = useState();
  const [sunrise,setSunrise] = useState("");
  const [sunset,setSunset] = useState("");
  const [moonrise,setMoonrise] = useState("");
  const [moonset,setMoonset] = useState("");
  const [loading,setLoading] = useState(false);
  const [currentPos,setCurrentPos] = useState(false);
  const [latitude,setLatitude] = useState();
  const [longitude,setLongitude] = useState();


  async function getWeather(){
    setLoading(true)
    try{
      const key=process.env.REACT_APP_API_KEY;
      const url=(currentPos)?`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`:`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=1&aqi=no&alerts=no`;
      const data=await fetch(url);
     
      if(!data.ok){
        throw new Error("Failed to Fetch the Data")
      }
     
      const forecasting = await data.json();
      console.log(forecasting);
      
      setCity(forecasting.location.name);
      setName(forecasting.location.name);
      setRegion(forecasting.location.region);
      setCountry(forecasting.location.country);
      setLat(forecasting.location.lat)
      setLon(forecasting.location.lon)
      setTemp(forecasting.current.temp_c);
      setWind(forecasting.current.wind_mph);
      setHumidity(forecasting.current.humidity);
      setMaxTemp(forecasting.forecast.forecastday[0].day.maxtemp_c);
      setMinTemp(forecasting.forecast.forecastday[0].day.mintemp_c);
      setSunrise(forecasting.forecast.forecastday[0].astro.sunrise);
      setSunset(forecasting.forecast.forecastday[0].astro.sunset);
      setMoonrise(forecasting.forecast.forecastday[0].astro.moonrise);
      setMoonset(forecasting.forecast.forecastday[0].astro.moonset);
      setLoading(false)
      setCurrentPos(false)

    }catch(err){
      console.log("No data found for this ",err);
    }
    
  }

   function getLocation(){
    setCurrentPos(true);
    setCity("")
    navigator.geolocation.getCurrentPosition(async (position) => {
      let latitude =await position.coords.latitude;
      let longitude =await position.coords.longitude;

      setLatitude(latitude);
      setLongitude(longitude);
      getWeather();
    });
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className='wrapper'>
        <input type="text" value={city} onInput={e => setCity(e.target.value)}/>
        <button onClick={getWeather}>Search</button>
        <button onClick={getLocation}>Get Current Location</button>
      </div>
      
      {!loading && <div className='weatherInfo'>
        <p className='container'><h2>City</h2>{name}</p>
        <p className='container'><h2>Region</h2>{region}</p>
        <p className='container'><h2>Country</h2>{country}</p>
        <p className='container'><h2>Latitude</h2>{lat}</p>
        <p className='container'><h2>Longitude</h2>{lon}</p>
        <p className='container'><h2>Temperature</h2>{temp}' C</p>
        <p className='container'><h2>Wind Speed</h2>{wind} MPH</p>
        <p className='container'><h2>Humidity</h2>{humidity}</p>
        <p className='container'><h2>Max Temp</h2>{maxTemp}' C</p>
        <p className='container'><h2>Min Temp</h2>{minTemp}' C</p>
        <p className='container'><h2>Sun Rise</h2>{sunrise}</p>
        <p className='container'><h2>Sun Set</h2>{sunset}</p>
        <p className='container'><h2>Moon Rise</h2>{moonrise}</p>
        <p className='container'><h2>Moon Set</h2>{moonset}</p>
      </div>}
      {loading && <h1>Loading ...</h1>}

    </div>
  );
}

export default App;
