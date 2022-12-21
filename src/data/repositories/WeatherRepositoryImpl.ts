import { WeatherDetail } from "../../domain/entities/WeatherDetail";
import { WeatherRepository } from "../../domain/repositories/WeatherRepository";
import { GetCurrentWeatherParams } from "../../domain/usecases/weather/GetCurrentWeather";
import { WeatherRemoteDataSource } from "../data_sources/WeatherRemoteDataSource";
import { GetCurrentWeatherResponse } from "../models/response/weather/GetCurrentWeatherResponse";
import { WeatherLocation } from "../../domain/entities/WeatherLocation";

export class WeatherRepositoryImpl implements WeatherRepository {
  private remoteDataSource: WeatherRemoteDataSource;
  constructor(remoteDataSource: WeatherRemoteDataSource) {
    this.remoteDataSource = remoteDataSource;
  }

  async getCurrentWeather(
    params: GetCurrentWeatherParams
  ): Promise<[WeatherLocation, WeatherDetail]> {
    const result = await this.remoteDataSource.getCurrentWeather(params);
    const data: [WeatherLocation, WeatherDetail] = GetCurrentWeatherResponse(result);
    return data;
  }
}
