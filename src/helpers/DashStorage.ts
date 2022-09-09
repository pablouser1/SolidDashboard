import SearchEngines from "../constants/SearchEngines";
import Time from "../constants/Time";
import Units from "../constants/Units";
import Config from "../interfaces/Config";

export default class DashStorage {
  static KEY = "solidash"

  static exists(): boolean {
    return localStorage.getItem(DashStorage.KEY) !== null ? true : false
  }

  static populate(): void {
    const default_data = {
      groups: [],
      searchEngine: SearchEngines.GOOGLE,
      weather: {
        lon: 0,
        lat: 0,
        units: Units.CELCIUS
      },
      backgrounds: {
        interval: Time.HALFHOUR,
        items: []
      },
      widgets: []
    } as Config

    DashStorage.save(default_data)
  }

  static getConfig(): Config {
    const data = localStorage.getItem(DashStorage.KEY) as string
    return JSON.parse(data)
  }

  static save(config: Config): void {
    localStorage.setItem(DashStorage.KEY, JSON.stringify(config))
  }
}
