import BackgorundsConfig from "./BackgroundsConfig";
import { Group } from "./Link";
import WeatherConfig from "./WeatherConfig";

export default interface Config {
  groups: Group[],
  searchEngine: string,
  weather: WeatherConfig,
  backgrounds: BackgorundsConfig,
}
