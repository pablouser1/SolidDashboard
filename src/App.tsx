import { Component, createSignal, lazy, onCleanup } from 'solid-js';
import { Route, Routes } from "@solidjs/router";
import Home from './views/Home';
import Navbar from './components/Navbar';
import { store } from './store';

const Settings = lazy(() => import("./views/Settings"));
const BackgroundConfig = lazy(() => import('./views/Settings/BackgroundConfig'));
const About = lazy(() => import("./views/About"));

const App: Component = () => {
  const backgrounds = store.backgrounds
  const getRandBackground = (): string => {
    const randBackground = backgrounds.items[Math.floor(Math.random()*backgrounds.items.length)];
    return randBackground
  }

  const [ activeBackground, setActiveBackground ] = createSignal<string>(getRandBackground());

  const interval = setInterval(() => {
    setActiveBackground(getRandBackground())
  }, backgrounds.interval)

  onCleanup(() => {
    clearInterval(interval)
  })

  return (
    <section id="hero-main" class="hero is-fullheight has-background">
      <img src={activeBackground()} class="hero-background" />
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/settings" component={Settings}>
            <Route path="/" />
            <Route path="/backgrounds" component={BackgroundConfig} />
          </Route>
          <Route path="/about" component={About} />
        </Routes>
      </div>
  </section>
  );
};

export default App;
