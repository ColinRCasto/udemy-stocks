// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import App from "./App";
import { store } from "./components/store/store";
import { routes } from "./routes";

Vue.use(VueRouter);

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

axios.defaults.baseURL = "https://udemy-stocks.firebaseio.com";

const router = new VueRouter({
  mode: "history",
  routes
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router: router,
  store: store
});
