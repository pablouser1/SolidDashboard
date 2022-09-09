import { Component, createSignal, For } from "solid-js";
import { produce } from 'solid-js/store';
import { store, setStore } from '../../store';

const BackgroundConfig: Component = () => {
  const [backgroundUrl, setBackgroundUrl] = createSignal('');

  const backgrounds = store.backgrounds;

  const addBackground = () => {
    setStore(produce(config => {
      config.backgrounds.items.push(backgroundUrl())
    }))
  }

  const deleteBackground = (index: number) => {
    setStore(produce(config => {
      config.backgrounds.items.splice(index, 1)
    }));
  }

  return (
    <>
      <p class="title">Settings</p>
      <p class="subtitle">Backgrounds</p>
      <div class="columns is-centered is-vcentered">
        <For each={backgrounds.items}>{(background, i) =>
          <div class="column is-one-quarter">
            <button class="delete" onclick={() => deleteBackground(i())}></button>
            <figure class="image is-16by9">
              <img src={background} alt={"background" + i()} />
            </figure>
          </div>
        }</For>
      </div>
      <div class="field has-addons">
        <div class="control">
          <input class="input" onChange={e => setBackgroundUrl((e.target as HTMLTextAreaElement).value)} />
        </div>
        <div class="control">
          <button class="button is-primary" onClick={addBackground}>Add</button>
        </div>
      </div>
    </>
  )
}

export default BackgroundConfig;
