import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => ({
    normalLogin: {
      account: "",
      password: "",
      sid: "",
      IdCode: "",
    },
    IdentifyLogin: {
      id: "",
      birth: "",
      sid: "",
      IdCode: "",
    },
  }),
  getters: {
    createIdentifyCode () {
      return (type,length) => {
        const randomIdCodes =
          "1234567890abcdefghizklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
        // 隨機回傳一個數字
        const randomNum = (min, max) => {
          return Math.floor(Math.random() * (max - min) + min);
        };
  
        // 隨機生成 idCode
        let IdValue = "";
  
        for (let i = 0; i < length; i++) {
          IdValue += randomIdCodes[randomNum(0, randomIdCodes.length)];
        }
        // 生成時存進去store 裡
        type === 'N' ? this.normalLogin.IdCode = IdValue : this.IdentifyLogin.IdCode = IdValue;
        // this.randomIdCode = IdValue;
        return IdValue;
      }
    },
  },
  actions: {
    updateData(id, value) {
      if (id === "N") {
        this.normalLogin = { ...this.normalLogin, ...value };
      } else {
        this.IdentifyLogin = { ...this.IdentifyLogin, ...value };
      }
    },
    resetLogin(state) {
      state = {
        normalLogin: {
          account: "",
          password: "",
          sid: "",
          IdCode: "",
        },
        IdentifyLogin: {
          id: "",
          birth: "",
          sid: "",
          IdCode: "",
        },
      }
      return state;
    }
    // validIsEmpty(id) {
    //   // 驗證是否為空
    //   if (id === "N") {
    //     this.normalLogin.valid.account = !!this.normalLogin.account;
    //     this.normalLogin.valid.password = !!this.normalLogin.password;
    //   } else {
    //     this.IdentifyLogin.valid.account = !!this.IdentifyLogin.account;
    //     this.IdentifyLogin.valid.birth = !!this.IdentifyLogin.birth;
    //   }
    // },
    // validIsMatch(id) {
    //   // 驗證是否 match
    //   if (id === "N") {
    //     this.normalLogin.valid.sid =
    //       this.normalLogin.sid === this.normalLogin.IdCode;
    //   } else {
    //     this.IdentifyLogin.valid.sid =
    //       this.IdentifyLogin.sid === this.IdentifyLogin.IdCode;
    //   }
    // },
  },
});
