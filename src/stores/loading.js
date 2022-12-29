import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    loading: false
  }),
  actions: {
    showLoading() {
      this.loading = true;
    },
    hideLoading() {
      this.loading = false;
    },
  },
});

