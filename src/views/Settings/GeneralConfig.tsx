import { Component, For } from "solid-js";
import { produce } from "solid-js/store";
import SearchEngines from "../../constants/SearchEngines";
import { setStore, store } from "../../store";

const GeneralConfig: Component = () => {
  const changeSearch = (val: string) => {
    setStore(produce(config => {
      config.searchEngine = val;
    }));
  }

  const engine = store.searchEngine;

  return (
    <>
      <p class="title">General</p>
      <div class="field">
        <label class="label">Search engine</label>
        <div class="control">
          <div class="select">
            <select onchange={e => changeSearch((e.target as HTMLSelectElement).value)}>
              <For each={Object.entries(SearchEngines)}>{choise =>
                <option selected={engine === choise[1]} value={choise[1]}>{choise[0]}</option>
              }</For>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default GeneralConfig;
