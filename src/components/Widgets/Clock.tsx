import { Component, onMount, onCleanup, createSignal } from "solid-js";

const Clock: Component = () => {
  const updateDate = (): string => {
    const now = new Date();
    const date = now.toLocaleString();
    return date;
  };

  let interval: number;

  const [time, setTime] = createSignal<string>(updateDate());

  onMount(() => {
    interval = setInterval(() => {
      setTime(updateDate())
    }, 1000)
  })

  onCleanup(() => {
    clearInterval(interval)
  })

  return <p class="title">{time()}</p>;
};

export default Clock;
