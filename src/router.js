import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Last_Editions from "./views/Last-Editions.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
