import SearchEngines from "../constants/SearchEngines";
import BackgorundsConfig from "./BackgroundsConfig";
import { Group } from "./Link";
import WeatherConfig from "./WeatherConfig";

export default interface Config {
  groups: Group[],
  searchEngine: SearchEngines,
  weather: WeatherConfig,
  backgrounds: BackgorundsConfig,
}
