import { FaSolidArrowLeft, FaSolidArrowRight } from 'solid-icons/fa';
import { Component, createSignal, lazy, Show } from 'solid-js';

const FrontPage = lazy(() => import('../components/FrontPage'))
const MiscPage = lazy(() => import('../components/MiscPage'))

const Home: Component = () => {
  const [page, setPage] = createSignal(1);

  const move = (page: number) => {
    setPage(page);
  }

  return (
    <>
      <button class="button is-rounded is-success is-pulled-left" onClick={() => move(1)} disabled={page() === 1}>
        <span class="icon is-small">
          <FaSolidArrowLeft />
        </span>
      </button>
      <div class="container has-text-centered">
        <Show when={page() === 2} fallback={<FrontPage />}>
          <MiscPage />
        </Show>
      </div>
      <button class="button is-rounded is-success is-pulled-right" onClick={() => move(2)} disabled={page() === 2}>
        <span class="icon is-small">
          <FaSolidArrowRight />
        </span>
      </button>
    </>
  );
};

export default Home;
