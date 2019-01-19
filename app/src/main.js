// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Navbar from './components/Navbar'
import Home_Top_Content from './components/Home_Top_Content'
import Why_Attend from './components/Why_Attend'
import Contacts from './components/Contacts'
import Our_Activities from './components/Our_Activities'
import Who_Are_We from './components/Who_Are_We'
import Latest_Speakers from './components/Latest_Speakers'
import Speakers_at_jeec from './components/Speakers_at_jeec'
import Meet_our_speakers from './components/Meet_our_speakers'

import Scroll_Down_Arrow from './components/Scroll_Down_Arrow'
import Component_Title from './components/Component_Title'

import Gold_Partners from './components/Gold_Partners'

Vue.config.productionTip = false

// Home page components
Vue.component('navbar', Navbar)
Vue.component('home-top', Home_Top_Content)
Vue.component('who-are-we', Who_Are_We)
Vue.component('why-attend', Why_Attend)
Vue.component('contacts', Contacts)
Vue.component('ouractivities', Our_Activities)
Vue.component('latest-speakers', Latest_Speakers)
Vue.component('speakers-at-jeec', Speakers_at_jeec)
Vue.component('meet-our-speakers', Meet_our_speakers)
Vue.component('scroll-down-arrow', Scroll_Down_Arrow)

Vue.component('component-title', Component_Title)

Vue.component('gold-partners', Gold_Partners)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
