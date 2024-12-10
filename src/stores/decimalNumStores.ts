import { writable } from "svelte/store";

const numController = () => {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () =>
      update((n) => {
        const updateNumber = Math.min(n + 1, 31);
        return updateNumber;
      }),
    decrement: () =>
      update((n) => {
        const updateNumber = Math.max(n - 1, 0);
        return updateNumber;
      }),
    reset: () => set(0),
  };
};

export const decimalNum = numController();
