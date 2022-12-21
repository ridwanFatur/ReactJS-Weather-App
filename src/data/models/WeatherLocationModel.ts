import { WeatherLocation } from "../../domain/entities/WeatherLocation";


export function WeatherLocationModel (input: any): WeatherLocation {
  const weatherLocation: WeatherLocation = new WeatherLocation({
		name: input.name,
		region: input.region,
		country: input.country,
		lat: input.lat,
		lon: input.lon,
		tzId: input.tz_id,
		localtimeEpoch: input.localtime_epoch,
		localtime: input.localtime,

  });

  return weatherLocation
}
