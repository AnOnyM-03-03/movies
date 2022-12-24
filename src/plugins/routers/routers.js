import VueRouter from "vue-router";
import App from "@/App.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "root",
      component: App,
    },
  ],
});
export default router;
