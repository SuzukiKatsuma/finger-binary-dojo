import { writable } from "svelte/store";

const modeController = () => {
  const { subscribe, set } = writable("manual");

  return {
    subscribe,
    setManual: () => set("manual"),
    setAutomatic: () => set("automatic"),
  };
};

export const currentMode = modeController();
