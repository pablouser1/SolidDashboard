import { Component, For, Show } from 'solid-js';
import { A, Outlet, useNavigate } from "@solidjs/router";
import DashStorage from '../helpers/DashStorage';
import { store } from '../store';
import { FaSolidImages, FaSolidCloud } from 'solid-icons/fa';

const Settings: Component = () => {
  const navigate = useNavigate();

  const saveToDisk = () => {
    DashStorage.save(store);
    navigate('/')
  }

  const routes = [
    {
      "name": "General",
      "icon": "",
      "path": "/"
    },
    {
      "name": "Dashboard",
      "icon": "",
      "path": "/dashboard"
    },
    {
      "name": "Backgrounds",
      "icon": FaSolidImages,
      "path": "/backgrounds"
    },
    {
      "name": "Weather",
      "icon": FaSolidCloud,
      "path": "/weather"
    },
  ]

  return (
    <div class="container">
      <div class="box">
        <div class="tabs is-centered is-fullwidth">
          <ul>
            <For each={routes}>{route =>
              <li>
                <A href={"/settings" + route.path}>
                  <Show when={route.icon !== ""}>
                    <span class="icon">
                      <route.icon />
                    </span>
                  </Show>
                  <span>{route.name}</span>
                </A>
              </li>
            }</For>
          </ul>
        </div>
      </div>
      <div class="box">
        <Outlet />
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary" onClick={saveToDisk}>Save to disk</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
