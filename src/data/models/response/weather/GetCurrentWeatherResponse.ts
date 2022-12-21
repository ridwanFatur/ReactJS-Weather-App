import { WeatherDetailModel } from "../../WeatherDetailModel";
import { WeatherLocationModel } from "../../WeatherLocationModel";
import { WeatherDetail } from "../../../../domain/entities/WeatherDetail";
import { WeatherLocation } from "../../../../domain/entities/WeatherLocation";

export function GetCurrentWeatherResponse(
  input: any
): [WeatherLocation, WeatherDetail] {
  const result: [WeatherLocation, WeatherDetail] = [
    WeatherLocationModel(input.location),
    WeatherDetailModel(input.current),
  ];

  return result;
}
