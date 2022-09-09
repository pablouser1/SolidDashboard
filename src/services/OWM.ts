import { CurrentWeather } from "../interfaces/CurrentWeather"

export default class OWM {
  static WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"
  // static GEO_URL = "http://api.openweathermap.org/geo/1.0/direct"

  static async weather(lat: number, lon: number, units: string): Promise<CurrentWeather> {
    const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_KEY as string

    const params = new URLSearchParams({
      lat: lat.toString(),
      lon: lon.toString(),
      units,
      appid: API_KEY
    }).toString()

    const res = await fetch(OWM.WEATHER_URL + "?" + params)
    return await res.json()
  }
}
