import { AxiosError } from "axios";
import { AxiosInterceptor } from "../../core/axiosInterceptor";
import { Urls } from "../../core/constants/Urls";
import { WarningMessage } from "../../core/constants/WarningMessage";
import { GetCurrentWeatherParams } from "../../domain/usecases/weather/GetCurrentWeather";

export interface WeatherRemoteDataSource {
  getCurrentWeather(params: GetCurrentWeatherParams): Promise<any>;
}

export class WeatherRemoteDataSourceImpl implements WeatherRemoteDataSource {
  private client: AxiosInterceptor;
  constructor(client: AxiosInterceptor) {
    this.client = client;
  }

  async getCurrentWeather(params: GetCurrentWeatherParams): Promise<any> {
    try {
      const response = await this.client.instance.get(Urls.CURRENT_WEATHER, {
        params: {
          q: `${params.latitude},${params.longitude}`,
        },
      });

      if (response.status == 200) {
        return response.data;
      } else {
        throw new Error(`Server Error : ${response.status}`);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(`Server Error: ${e.response?.status}`);
      } else {
        throw new Error(WarningMessage.SOMETHING_WENT_WRONG);
      }
    }
  }
}
