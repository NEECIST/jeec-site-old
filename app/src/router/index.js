import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Speakers from '@/pages/Speakers'
import Team from '@/pages/Team'
import Partners from '@/pages/Partners'
import Schedule from '@/pages/Schedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
  ]
})
