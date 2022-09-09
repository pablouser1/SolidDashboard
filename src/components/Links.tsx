import { Component, For, Show } from "solid-js";
import { store } from "../store";

const Links: Component = () => {
  const groups = store.groups;
  return (
    <div class="columns is-centered is-vcentered is-multiline">
      <For each={groups}>{(group) =>
        <div class="column is-narrow">
          <nav class="panel">
            <p class="panel-heading">{group.title}</p>
            <For each={group.items}>{(link) =>
              <a class="panel-block" href={link.url} target="_blank">
                <Show when={link.icon}>
                  <span class="panel-icon">
                    <p>Placeholder</p>
                  </span>
                </Show>
                <span>{link.title}</span>
            </a>
            }
            </For>
          </nav>
        </div>
      }</For>
    </div>
  )
};

export default Links;
