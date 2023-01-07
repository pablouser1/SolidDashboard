import { Component, createSignal, For } from "solid-js";
import { produce } from 'solid-js/store';
import Time from "../../constants/Time";
import { store, setStore } from '../../store';

const BackgroundConfig: Component = () => {
  const [backgroundUrl, setBackgroundUrl] = createSignal('');

  const backgrounds = store.backgrounds;

  const addBackground = () => {
    setStore(produce(config => {
      config.backgrounds.items.push(backgroundUrl());
    }));
  }

  const deleteBackground = (index: number) => {
    setStore(produce(config => {
      config.backgrounds.items.splice(index, 1);
    }));
  }

  const changeInterval = (val: string) => {
    setStore(produce(config => {
      config.backgrounds.interval = parseInt(val);
    }));
  }

  return (
    <>
      <p class="title has-text-centered">Backgrounds</p>
      <div class="columns is-centered is-vcentered is-multiline">
        <For each={backgrounds.items}>{(background, i) =>
          <div class="column is-one-quarter">
            <button class="delete" onclick={() => deleteBackground(i())}></button>
            <figure class="image is-16by9">
              <img src={background} alt={"background" + i()} />
            </figure>
            <p>{background}</p>
          </div>
        }</For>
      </div>
      <label class="label">Add background</label>
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" onChange={e => setBackgroundUrl((e.target as HTMLTextAreaElement).value)} />
        </div>
        <div class="control">
          <button class="button is-primary" onClick={addBackground}>Add</button>
        </div>
      </div>
      <div class="field">
        <label class="label">Interval</label>
        <div class="control">
          <div class="select">
            <select onchange={e => changeInterval((e.target as HTMLSelectElement).value)}>
              <For each={Object.values(Time)}>{choise =>
                <option selected={choise === backgrounds.interval} value={choise}>{Math.round(choise * 1.66667e-5)} min</option>
              }</For>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default BackgroundConfig;
