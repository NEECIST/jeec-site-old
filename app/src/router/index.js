import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Speakers from '@/pages/Speakers'
import Team from '@/pages/Team'
import Partners from '@/pages/Partners'
import Error_Handling from '@/pages/Error_Handling'
import Activities from '@/pages/Activities'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },/*
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },*/
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    { 
      path: '/404', 
      component: Error_Handling 
    },  
    { path: '*', 
      redirect: '/404' 
    },
    /*{
      path: '/partners',
      name: 'Partners',
      component: Partners
    },*/  
  ],
})
