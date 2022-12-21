import {
  Failure,
  ServerFailure,
  UnexpectedFailure,
} from "../../../core/Failure";
import { Either } from "../../../core/type";
import { WeatherRepository } from "../../repositories/WeatherRepository";
import { WarningMessage } from "../../../core/constants/WarningMessage";
import { WeatherLocation } from "../../entities/WeatherLocation";
import { WeatherDetail } from "../../../domain/entities/WeatherDetail";

export class GetCurrentWeather {
  private repository: WeatherRepository;
  constructor(repository: WeatherRepository) {
    this.repository = repository;
  }

  async call(
    params: GetCurrentWeatherParams
  ): Promise<Either<Failure, [WeatherLocation, WeatherDetail]>> {
    try {
      const data = await this.repository.getCurrentWeather(params);
      return { right: data };
    } catch (e) {
      if (e instanceof Error) {
        return { left: new ServerFailure(e.message) };
      } else {
        return {
          left: new UnexpectedFailure(WarningMessage.THERE_IS_UNEXPECTED_ERROR),
        };
      }
    }
  }
}

export class GetCurrentWeatherParams {
  latitude: string;
  longitude: string;

  constructor({
    latitude,
    longitude,
  }: {
    latitude: string;
    longitude: string;
  }) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
