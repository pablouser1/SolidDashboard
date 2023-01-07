import { Component, createSignal, For } from "solid-js";
import { produce } from "solid-js/store";
import Units from "../../constants/Units";
import { setStore, store } from "../../store";

const WeatherConfig: Component = () => {
  const weather = store.weather;

  const setLat = (val: string) => changeCoords(parseFloat(val), weather.lon)
  const setLon = (val: string) => changeCoords(weather.lat, parseFloat(val))

  const changeCoords = (lat: number, lon: number) => {
    setStore(produce(config => {
      config.weather.lat = lat;
      config.weather.lon = lon;
    }));
  }

  const changeUnits = (units: string) => {
    setStore(produce(config => {
      config.weather.units = units;
    }));
  }

  return (
    <>
      <p class="title">Weather</p>
      <label class="label">Coordinates</label>
      <div class="field is-grouped">
        <div class="control">
          <input class="input" type="text" value={weather.lat} onchange={e => setLat((e.target as HTMLInputElement).value)} />
        </div>
        <div class="control">
          <input class="input" type="text" value={weather.lon} onchange={e => setLon((e.target as HTMLInputElement).value)} />
        </div>
      </div>
      <div class="field">
        <label class="label">Units</label>
        <div class="control">
          <div class="select">
            <select onchange={e => changeUnits((e.target as HTMLSelectElement).value)}>
              <For each={Object.entries(Units)}>{choise =>
                <option selected={weather.units === choise[1]} value={choise[1]}>{choise[0]}</option>
              }</For>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherConfig;
