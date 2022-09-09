import { Component, For, Show } from 'solid-js';
import { Outlet } from "@solidjs/router";
import DashStorage from '../helpers/DashStorage';
import { store } from '../store';
import { FaSolidImages } from 'solid-icons/fa';

const Settings: Component = () => {
  const saveToDisk = () => {
    DashStorage.save(store);
    window.location.href = '/';
  }

  const routes = [
    {
      "name": "General",
      "icon": "",
      "path": "/"
    },
    {
      "name": "Backgrounds",
      "icon": FaSolidImages,
      "path": "/backgrounds"
    },
  ]

  return (
    <div class="container">
      <div class="box">
        <div class="tabs is-centered is-fullwidth">
          <ul>
            <For each={routes}>{route =>
              <li>
                <a href={"/settings" + route.path}>
                  <Show when={route.icon !== ""}>
                    <span class="icon">
                      <route.icon />
                    </span>
                  </Show>
                  <span>{route.name}</span>
                </a>
              </li>
            }</For>
          </ul>
        </div>
      </div>
      <div class="box">
        <Outlet />
        <div class="field">
          <div class="control">
            <button class="button is-primary" onClick={saveToDisk}>Save to disk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
