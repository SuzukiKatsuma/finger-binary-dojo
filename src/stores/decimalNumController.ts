import { writable } from "svelte/store";

function numControl() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => {
      n++;
      if (31 < n) {
        n = 31;
      }
      return n;
    })
    ,
    decrement: () => update((n) => {
      n--;
      if (n < 0) {
        n = 0;
      }
      return n;
    }),
    reset: () => set(0)
  }
}

export const decimalNum = numControl();