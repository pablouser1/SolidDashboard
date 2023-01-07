import { useParams } from "@solidjs/router";
import { FaSolidCircleXmark } from "solid-icons/fa";
import { Component, createSignal, For } from "solid-js";
import { produce } from "solid-js/store";
import { setStore, store } from "../../store";

const GroupConfig: Component = () => {
  const [itemTitle, setItemTitle] = createSignal('');
  const [itemIcon, setItemIcon] = createSignal('');
  const [itemUrl, setItemUrl] = createSignal('');

  const { id } = useParams<{ id: string }>();
  const parsed_id = parseInt(id);
  const group = store.groups[parsed_id];

  const addItem = () => {
    setStore(produce(config => {
      config.groups[parsed_id].items.push({
        title: itemTitle(),
        icon: itemIcon(),
        url: itemUrl()
      })
    }));
  }

  const editItem = (index: number) => {
    setStore(produce(config => {
      config.groups[parsed_id].items[index] = {
        title: itemTitle(),
        icon: itemIcon(),
        url: itemUrl()
      }
    }));
  }

  const deleteItem = (index: number) => {
    setStore(produce(config => {
      config.groups[parsed_id].items.splice(index, 1);
    }));
  }

  return (
    <>
      <p class="title has-text-centered">{group.title}</p>
      <div class="columns is-centered is-vcentered is-multiline">
        <For each={group.items}>{(item, i) =>
          <div class="column is-one-quarter">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  {item.title}
                </p>
                <button class="card-header-icon" onclick={() => deleteItem(i())}>
                  <FaSolidCircleXmark />
                </button>
              </header>
              <div class="card-content">
                <div class="field">
                  <label class="label">Title</label>
                  <div class="control">
                    <input class="input" type="text" value={item.title} onChange={e => setItemTitle((e.target as HTMLTextAreaElement).value)} />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Url</label>
                  <div class="control">
                    <input class="input" type="text" value={item.url} onChange={e => setItemUrl((e.target as HTMLTextAreaElement).value)} />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Icon</label>
                  <div class="control">
                    <input class="input" type="text" value={item.icon ? item.icon : ''} onChange={e => setItemIcon((e.target as HTMLTextAreaElement).value)} />
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item" onClick={() => editItem(i())}>Save</a>
              </footer>
            </div>
          </div>
        }</For>
      </div>
      <p class="title">Add item</p>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" onChange={e => setItemTitle((e.target as HTMLTextAreaElement).value)} />
        </div>
      </div>
      <div class="field">
        <label class="label">Url</label>
        <div class="control">
          <input class="input" type="text" onChange={e => setItemUrl((e.target as HTMLTextAreaElement).value)} />
        </div>
      </div>
      <div class="field">
        <label class="label">Icon</label>
        <div class="control">
          <input class="input" type="text" onChange={e => setItemIcon((e.target as HTMLTextAreaElement).value)} />
        </div>
      </div>
      <div>
        <div class="control">
          <button class="button is-primary" onClick={addItem}>Append</button>
        </div>
      </div>
    </>
  )
}

export default GroupConfig;
