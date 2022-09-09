import { createStore } from "solid-js/store";
import DashStorage from "./helpers/DashStorage";

if (!DashStorage.exists()) {
  DashStorage.populate()
}

export const [store, setStore] = createStore(DashStorage.getConfig());

export const syncToStorage = () => {
  DashStorage.save(store);
}
