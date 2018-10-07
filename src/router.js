import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Last_Editions from "./views/Last-Editions.vue";
import Partners from "./views/Partners.vue";
import Program from "./views/Program.vue";
import Speakers from "./views/Speakers.vue";
import Team from "./views/Team.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/editions",
      name: "editions",
      component: Last_Editions
    },
    {
      path: "/partners",
      name: "partners",
      component: Partners
    },
    ,
    {
      path: "/program",
      name: "program",
      component: Program
    },
    {
      path: "/speakers",
      name: "speakers",
      component: Speakers
    },
    {
      path: "/team",
      name: "team",
      component: Team
    }
  ]
});
