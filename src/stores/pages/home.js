import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    tabName: "",
  }),
  getters: {},
  actions: {
    setTabName(data) {
      this.tabName = data;
    },
    resetToken() {
      this.tabName = "";
    },
  },
});
