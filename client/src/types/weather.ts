import { Nullable } from "./index";

export interface WeatherMinutelyValues {
  cloudBase: Nullable<number>;
  cloudCover: Nullable<number>;
  dewPoint: Nullable<number>;
  freezingRainIntensity: Nullable<number>;
  humidity: Nullable<number>;
  precipitationProbability: Nullable<number>;
  pressureSurfaceLevel: Nullable<number>;
  rainIntensity: Nullable<number>;
  sleetIntensity: Nullable<number>;
  snowIntensity: Nullable<number>;
  temperature: Nullable<number>;
  temperatureApparent: Nullable<number>;
  uvHealthConcern: Nullable<number>;
  uvIndex: Nullable<number>;
  visibility: Nullable<number>;
  weatherCode: number;
  windDirection: Nullable<number>;
  windGust: Nullable<number>;
  windSpeed: Nullable<number>;
}

export interface WeatherDailyValues {
  temperatureAvg: number;
  weatherCodeMax: number;
  weatherCodeMin: number;
}

export interface WeatherMinutely {
  time: Date;
  values: WeatherMinutelyValues;
}

export interface WeatherDaily {
  time: Date;
  values: WeatherDailyValues;
}

export interface Location {
  lat: number;
  lon: number;
  name: string;
  type: string;
}

export interface WeatherResponse {
  location: Location;
  timelines: {
    minutely: WeatherMinutely[];
    daily: WeatherDaily[];
    location: Location;
  };
}
