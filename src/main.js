import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

import myApp from './App.vue'
import router from "./router";
import "./permission"; // permission control

import { Notify } from 'vant';
// import { Dialog } from "vant";

const app = createApp(myApp)
app.use(Vant);
// 全局注册 Notify
app.use(Notify);
// app.use(Dialog);
app.use(router)
app.mount('#app')