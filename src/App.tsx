import { Component, createSignal, lazy, onCleanup } from 'solid-js';
import { Route, Routes } from "@solidjs/router";
import Home from './views/Home';
import Navbar from './components/Navbar';
import { store } from './store';

const Settings = lazy(() => import("./views/Settings"));
const GeneralConfig = lazy(() => import('./views/Settings/GeneralConfig'));
const DashboardConfig = lazy(() => import('./views/Settings/DashboardConfig'));
const GroupConfig = lazy(() => import('./views/Settings/GroupConfig'));
const BackgroundConfig = lazy(() => import('./views/Settings/BackgroundConfig'));
const WeatherConfig = lazy(() => import('./views/Settings/WeatherConfig'));
const About = lazy(() => import("./views/About"));

const App: Component = () => {
  const backgrounds = store.backgrounds
  const getRandBackground = (): string => {
    const randBackground = backgrounds.items[Math.floor(Math.random()*backgrounds.items.length)];
    return randBackground
  }

  const [ activeBackground, setActiveBackground ] = createSignal(getRandBackground());

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
            <Route path="/" component={GeneralConfig} />
            <Route path="/dashboard">
              <Route path="/" component={DashboardConfig} />
              <Route path="/:id" component={GroupConfig} />
            </Route>
            <Route path="/backgrounds" component={BackgroundConfig} />
            <Route path="/weather" component={WeatherConfig} />
          </Route>
          <Route path="/about" component={About} />
        </Routes>
      </div>
  </section>
  );
};

export default App;
