export class WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tzId: string;
  localtimeEpoch: number;
  localtime: string;

  constructor({
    name,
    region,
    country,
    lat,
    lon,
    tzId,
    localtimeEpoch,
    localtime,
  }: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tzId: string;
    localtimeEpoch: number;
    localtime: string;
  }) {
    this.name = name;
    this.region = region;
    this.country = country;
    this.lat = lat;
    this.lon = lon;
    this.tzId = tzId;
    this.localtimeEpoch = localtimeEpoch;
    this.localtime = localtime;
  }

	summary(): string{
		return `${this.name}, ${this.region}, ${this.country}, LocalTime: ${this.localtime}`;
	}

  toJson(): any {
    return {
      name: this.name,
      region: this.region,
      country: this.country,
      lat: this.lat,
      lon: this.lon,
      tz_id: this.tzId,
      localtime_epoch: this.localtimeEpoch,
      localtime: this.localtime,
    };
  }
}
