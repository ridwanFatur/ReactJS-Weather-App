import "./HomeScreen.css";
import { useState } from "react";
import { useCaseGetCurrentWeather } from "../../injection";
import { GetCurrentWeatherParams } from "../../domain/usecases/weather/GetCurrentWeather";
import { WeatherDetail } from "../../domain/entities/WeatherDetail";
import { WeatherLocation } from "../../domain/entities/WeatherLocation";
import {
  NetworkResult,
  ResultEmpty,
  ResultError,
  ResultHasData,
  ResultLoading,
} from "../../core/NetworkResult";

function HomeScreen() {
  const weatherNetworkResult: NetworkResult<[WeatherLocation, WeatherDetail]> =
    new ResultEmpty();

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [networkResult, setNetworkResult] = useState(weatherNetworkResult);

	function weatherDetail(data: [WeatherLocation, WeatherDetail]) : string{
		return `${data[1].condition.text} in ${data[0].summary()}`
	}

  async function getCurrentWeather() {
    setNetworkResult(new ResultLoading());

    const result = await useCaseGetCurrentWeather.call(
      new GetCurrentWeatherParams({
        latitude: latitude,
        longitude: longitude,
      })
    );

    if (result.left != undefined) {
      setNetworkResult(new ResultError(result.left.message));
    } else if (result.right != undefined) {
      setNetworkResult(new ResultHasData(result.right));
    }
  }

  return (
    <div className="home-main">
      <div className="input-content">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        ></input>
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            getCurrentWeather();
          }}
        ></input>
        {networkResult instanceof ResultHasData ? (
          <h3>{weatherDetail(networkResult.data)}</h3>
        ) : networkResult instanceof ResultLoading ? (
          <div className="loader"></div>
        ) : networkResult instanceof ResultError ? (
          <p>{networkResult.message}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
