import { WeatherCondition } from "../../domain/entities/WeatherCondition";


export function WeatherConditionModel (input: any): WeatherCondition {
  const weatherCondition: WeatherCondition = new WeatherCondition({
		text: input.text,
		icon: input.icon,
		code: input.code,

  });

  return weatherCondition
}
