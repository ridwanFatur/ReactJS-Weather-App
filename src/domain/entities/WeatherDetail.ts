import { WeatherCondition } from "./WeatherCondition";


export class WeatherDetail {
  lastUpdatedEpoch: number;
  lastUpdated: string;
  tempC: number;
  tempF: number;
  isDay: number;
  condition: WeatherCondition;
  windMph: number;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMb: number;
  pressureIn: number;
  precipMm: number;
  precipIn: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  feelslikeF: number;
  visKm: number;
  visMiles: number;
  uv: number;
  gustMph: number;
  gustKph: number;


  constructor({
    lastUpdatedEpoch,
    lastUpdated,
    tempC,
    tempF,
    isDay,
    condition,
    windMph,
    windKph,
    windDegree,
    windDir,
    pressureMb,
    pressureIn,
    precipMm,
    precipIn,
    humidity,
    cloud,
    feelslikeC,
    feelslikeF,
    visKm,
    visMiles,
    uv,
    gustMph,
    gustKph,

  }: {
  lastUpdatedEpoch: number;
  lastUpdated: string;
  tempC: number;
  tempF: number;
  isDay: number;
  condition: WeatherCondition;
  windMph: number;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMb: number;
  pressureIn: number;
  precipMm: number;
  precipIn: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  feelslikeF: number;
  visKm: number;
  visMiles: number;
  uv: number;
  gustMph: number;
  gustKph: number;

  }){
    this.lastUpdatedEpoch = lastUpdatedEpoch;
    this.lastUpdated = lastUpdated;
    this.tempC = tempC;
    this.tempF = tempF;
    this.isDay = isDay;
    this.condition = condition;
    this.windMph = windMph;
    this.windKph = windKph;
    this.windDegree = windDegree;
    this.windDir = windDir;
    this.pressureMb = pressureMb;
    this.pressureIn = pressureIn;
    this.precipMm = precipMm;
    this.precipIn = precipIn;
    this.humidity = humidity;
    this.cloud = cloud;
    this.feelslikeC = feelslikeC;
    this.feelslikeF = feelslikeF;
    this.visKm = visKm;
    this.visMiles = visMiles;
    this.uv = uv;
    this.gustMph = gustMph;
    this.gustKph = gustKph;

  }

	toJson() : any{
		return {
			"last_updated_epoch": this.lastUpdatedEpoch,
			"last_updated": this.lastUpdated,
			"temp_c": this.tempC,
			"temp_f": this.tempF,
			"is_day": this.isDay,
			"condition": this.condition.toJson(),
			"wind_mph": this.windMph,
			"wind_kph": this.windKph,
			"wind_degree": this.windDegree,
			"wind_dir": this.windDir,
			"pressure_mb": this.pressureMb,
			"pressure_in": this.pressureIn,
			"precip_mm": this.precipMm,
			"precip_in": this.precipIn,
			"humidity": this.humidity,
			"cloud": this.cloud,
			"feelslike_c": this.feelslikeC,
			"feelslike_f": this.feelslikeF,
			"vis_km": this.visKm,
			"vis_miles": this.visMiles,
			"uv": this.uv,
			"gust_mph": this.gustMph,
			"gust_kph": this.gustKph,

		}
	}
}
