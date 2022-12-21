import { WeatherDetail } from "../../domain/entities/WeatherDetail";
import { WeatherConditionModel } from "./WeatherConditionModel";


export function WeatherDetailModel (input: any): WeatherDetail {
  const weatherDetail: WeatherDetail = new WeatherDetail({
		lastUpdatedEpoch: input.last_updated_epoch,
		lastUpdated: input.last_updated,
		tempC: input.temp_c,
		tempF: input.temp_f,
		isDay: input.is_day,
		condition: WeatherConditionModel(input.condition),
		windMph: input.wind_mph,
		windKph: input.wind_kph,
		windDegree: input.wind_degree,
		windDir: input.wind_dir,
		pressureMb: input.pressure_mb,
		pressureIn: input.pressure_in,
		precipMm: input.precip_mm,
		precipIn: input.precip_in,
		humidity: input.humidity,
		cloud: input.cloud,
		feelslikeC: input.feelslike_c,
		feelslikeF: input.feelslike_f,
		visKm: input.vis_km,
		visMiles: input.vis_miles,
		uv: input.uv,
		gustMph: input.gust_mph,
		gustKph: input.gust_kph,

  });

  return weatherDetail
}
