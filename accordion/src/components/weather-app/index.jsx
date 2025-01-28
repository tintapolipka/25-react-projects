import { useEffect, useRef, useState } from "react";
import "./weatherapp.css";

export default function WeatherApp() {
  const latitudeRef = useRef();
  const longitudeRef = useRef();

  const [latitude, setLatitude] = useState(10);
  const [longitude, setLongitude] = useState(20);
  const [loading, setLoading] = useState(false);
  const [loadedData, setLoadedData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
      );
      const result = await response.json();

      setLoadedData(result);
      console.log(loadedData);
    } catch (e) {
      setError(e);
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  function handleSearch() {
    if (latitudeRef.current.value && longitudeRef.current.value) {
      setLatitude(latitudeRef.current.value);

      setLongitude(longitudeRef.current.value);
    } else {
      console.log("No data");
    }
  }

  return (
    <div className="card">
      <div className="space-between">
        <input
          type="text"
          name="search"
          className="weather-input"
          placeholder="latitude"
          ref={latitudeRef}
        />
        <input
          type="text"
          name="search"
          className="weather-input"
          placeholder="longitude"
          ref={longitudeRef}
        />
        <button className="weather-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading ? <h1>Loading data...</h1> : null}

      {error ? <h3>An error occured!</h3> : null}

      {loadedData && loadedData.current && loadedData.current.temperature_2m ? (
        <div>
          <h3>
            Lat: {latitude}, Long: {longitude}{" "}
          </h3>
          <p>
            {new Date(loadedData.current.time).toLocaleString("HU-hu", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
          <p style={{ fontSize: "50px", fontWeight: "700", margin: "10px 0" }}>
            {loadedData.current.temperature_2m}{" "}
            {loadedData.current_units.temperature_2m}
          </p>
          <div className="space-between">
            <div style={{ width: "max-content" }}>
              <h4>{loadedData.current.wind_speed_10m} {loadedData.current_units.wind_speed_10m}</h4>
              <p>Wind speed</p>
            </div>
            <div style={{ width: "max-content" }}>
              <h4>{Math.floor(Math.random()*100)} %</h4>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
