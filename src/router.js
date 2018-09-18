import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Activities from "./views/Activities.vue";
import Speakers from "./views/Speakers.vue";
import Team from "./views/Team.vue";
import Contacts from "./views/Contacts.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/activities",
      name: "activities",
      component: Activities
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
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    }
  ]
});
