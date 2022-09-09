import { FaSolidMagnifyingGlass } from "solid-icons/fa";
import { Component, createSignal } from "solid-js";
import SearchEngines from "../constants/SearchEngines";
import { store } from "../store";

const Search: Component = () => {
  const [term, setTerm] = createSignal('');

  const pickEngine = (): string => {
    let url: string = "";
    switch (store.searchEngine) {
      case SearchEngines.GOOGLE:
        url = "https://google.com/search?q="
        break
      case SearchEngines.DUCKDUCKGO:
        url = "https://duckduckgo.com/search?q="
        break
    }
    return url
  }

  let url = pickEngine()

  const makeSearch = () => {
    window.open(url + term())
  }

  const isValidKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      makeSearch()
    }
  }

  return (
    <div class="field has-addons">
      <div class="control has-icons-left is-expanded">
        <input type="text" class="input" onChange={(e) => setTerm((e.target as HTMLInputElement).value)} onKeyUp={isValidKey} />
        <span class="icon is-small is-left">
          <FaSolidMagnifyingGlass />
        </span>
      </div>
      <div class="control">
        <button class="button is-info" onClick={makeSearch}>Search</button>
      </div>
    </div>
  )
};

export default Search;
