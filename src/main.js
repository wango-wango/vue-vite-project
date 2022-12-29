import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import 'material-icons/iconfont/material-icons.css';

import App from "./App.vue";
import router from "./router";

import "./assets/scss/main.scss";

const app = createApp(App);
// 通过遍历的方式注册所有 svg组件，会牺牲一点点性能

app.use(createPinia());
app.use(ElementPlus);
app.use(router);

app.mount("#app");
