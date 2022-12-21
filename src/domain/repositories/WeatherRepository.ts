import { Failure } from "../../core/Failure";
import { Either} from "../../core/type"
import { WeatherLocation } from "../entities/WeatherLocation";
import { WeatherDetail } from "../entities/WeatherDetail";
import { GetCurrentWeatherParams } from "../usecases/weather/GetCurrentWeather";


export interface WeatherRepository{
  getCurrentWeather(params: GetCurrentWeatherParams) : Promise<[WeatherLocation, WeatherDetail]>;

}

