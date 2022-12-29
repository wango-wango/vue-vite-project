import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    name: "Jerry",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
});

// setup 寫法
export const useCounterStore2 = defineStore("counter2", () => {
  const counter = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => counter.value * 2);
  function increment() {
    counter.value++;
  }
  function decrease() {
    counter.value--;
  }

  return { counter, name, doubleCount, increment, decrease };
});
