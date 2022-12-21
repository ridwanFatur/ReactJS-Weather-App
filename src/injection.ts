import { AxiosInterceptor } from "./core/axiosInterceptor";
import { WeatherRemoteDataSource, WeatherRemoteDataSourceImpl } from "./data/data_sources/WeatherRemoteDataSource";
import { WeatherRepositoryImpl } from "./data/repositories/WeatherRepositoryImpl";
import { WeatherRepository } from "./domain/repositories/WeatherRepository";
import { GetCurrentWeather } from "./domain/usecases/weather/GetCurrentWeather";

// external
const axiosInterceptor = new AxiosInterceptor();

// data source
const weatherRemoteDataSource = new WeatherRemoteDataSourceImpl(axiosInterceptor);

// repository
const weatherRepository = new WeatherRepositoryImpl(weatherRemoteDataSource);

// usecase
const useCaseGetCurrentWeather = new GetCurrentWeather(weatherRepository);

export { useCaseGetCurrentWeather };
