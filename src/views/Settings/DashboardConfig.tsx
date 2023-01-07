import { A, Outlet } from "@solidjs/router";
import { Component, createSignal, For } from "solid-js";
import { produce } from "solid-js/store";
import { setStore, store } from "../../store";

const DashboardConfig: Component = () => {
  const [groupTitle, setGroupTitle] = createSignal('');

  const groups = store.groups;

  const addGroup = () => {
    setStore(produce(config => {
      config.groups.push({
        title: groupTitle(),
        items: []
      })
    }));
  }

  return (
    <>
      <p class="title">Dashboard</p>
      <div class="tabs is-centered">
        <ul>
          <For each={groups}>{(group, i) =>
            <li>
              <A href={"/settings/dashboard/" + i()}>
                <span>{group.title}</span>
              </A>
            </li>
          }</For>
        </ul>
      </div>
      <Outlet />
      <label class="label">New group</label>
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="input" onChange={e => setGroupTitle((e.target as HTMLTextAreaElement).value)} />
        </div>
        <div class="control">
          <button class="button is-primary" onClick={addGroup}>Add</button>
        </div>
      </div>
    </>
  )
}

export default DashboardConfig;
