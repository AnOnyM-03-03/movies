import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "@/plugins/routers/routers";
import store from "./store";
import "./plugins/bootstrap";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
