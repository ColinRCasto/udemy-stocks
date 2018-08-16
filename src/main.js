// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import { store } from "./components/store";
import { routes } from "./routes";

Vue.use(VueRouter);

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
