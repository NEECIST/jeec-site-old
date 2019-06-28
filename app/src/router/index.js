import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Speakers from '@/pages/Speakers'
import Team from '@/pages/Team'
import Partners from '@/pages/Partners'
import Error_Handling from '@/pages/Error_Handling'
import Activities from '@/pages/Activities'
import Schedule from '@/pages/Schedule'

Vue.use(Router)

console.log('process.env.VUE_APP_HISTORY_MODE', process.env.VUE_APP_HISTORY_MODE)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: process.env.VUE_APP_HISTORY_MODE || 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/speakers',
      name: 'Speakers',
      component: Speakers
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    { 
      path: '/404', 
      component: Error_Handling 
    },  
    { path: '*', 
      redirect: '/404' 
    }
  ],
})
