import { defineStore } from "pinia";

export const useMemberStore = defineStore("member", {
  state: () => ({
    token: "",
  }),
  getters: {},
  actions: {
    getToken(data) {
      this.token = data;
    },
    resetToken() {
      this.token = "";
    },
  },
});
