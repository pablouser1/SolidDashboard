import { Component, createSignal, Show } from 'solid-js';
import Units from '../../constants/Units';
import { CurrentWeather } from '../../interfaces/CurrentWeather';
import OWM from '../../services/OWM';
import { store } from '../../store';
import Loading from '../Loading';

const fetchWeather = async (lat: number, lon: number, units: Units): Promise<CurrentWeather> => {
  const info = await OWM.weather(lat, lon, units);
  return info
}

const Weather: Component = () => {
  const {lat, lon, units} = store.weather
  const [weather, setWeather] = createSignal<CurrentWeather>();

  fetchWeather(lat, lon, units).then((current) => {
    setWeather(current)
  })
  return (
    <Show when={weather()} fallback={<Loading />}>
      <div class="container">
        <figure class="image is-16x16">
          <img src={`https://openweathermap.org/img/wn/${weather()?.weather[0].icon}.png`} class="is-rounded" />
        </figure>
        <p>{weather()?.main.temp}</p>
        <p>{weather()?.weather[0].main}</p>
      </div>
    </Show>
  )
}

export default Weather
