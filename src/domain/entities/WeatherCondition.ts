

export class WeatherCondition {
  text: string;
  icon: string;
  code: number;


  constructor({
    text,
    icon,
    code,

  }: {
  text: string;
  icon: string;
  code: number;

  }){
    this.text = text;
    this.icon = icon;
    this.code = code;

  }

	toJson() : any{
		return {
			"text": this.text,
			"icon": this.icon,
			"code": this.code,

		}
	}
}
