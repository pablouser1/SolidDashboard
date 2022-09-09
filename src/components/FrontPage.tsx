import { Component, lazy } from 'solid-js';
import Links from '../components/Links';
import Clock from '../components/Widgets/Clock';

const Search = lazy(() => import("./Search"));
const Weather = lazy(() => import("./Widgets/Weather"));

const FrontPage: Component = () => {
  return (
    <>
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="box">
            <div class="columns is-mobile is-centered is-vcentered">
              <div class="column is-narrow">
                <p class="title">Welcome</p>
                <Clock />
              </div>
              <div class="column is-narrow">
                <Weather />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Search  />
      <Links />
    </>
  );
};

export default FrontPage;
