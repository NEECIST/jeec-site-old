// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Navbar from './components/Navbar'
import Home_Top_Content from './components/Home_Top_Content'
import Who_Are_We from './components/Who_Are_We'
import Contacts from './components/Contacts'

Vue.config.productionTip = false

// Home page components
Vue.component('navbar', Navbar)
Vue.component('home-top', Home_Top_Content)
Vue.component('who-are-we', Who_Are_We)
Vue.component('contacts', Contacts)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
