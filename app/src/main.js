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
import Speakers_List from './components/Speakers_List'
import Meet_our_speakers from './components/Meet_our_speakers'

import Scroll_Down_Arrow from './components/Scroll_Down_Arrow'
import Component_Title from './components/Component_Title'

import Partner_Tier from './components/Partner_Tier'

import Workshops from './components/Workshops'
import Matchmaking from './components/Matchmaking'
import Job_Fair from './components/Job_Fair'
import TechTalks from './components/TechTalks'

import Posts from './components/Posts'

import Image_Center_Text from './components/Image_Center_Text'

import Schedule_Company from './components/Schedule_Company'

Vue.config.productionTip = false

// Home page components
Vue.component('navbar', Navbar)
Vue.component('home-top', Home_Top_Content)
Vue.component('who-are-we', Who_Are_We)
Vue.component('why-attend', Why_Attend)
Vue.component('contacts', Contacts)
Vue.component('ouractivities', Our_Activities)
Vue.component('latest-speakers', Latest_Speakers)
Vue.component('speakers-list', Speakers_List)
Vue.component('meet-our-speakers', Meet_our_speakers)
Vue.component('scroll-down-arrow', Scroll_Down_Arrow)

Vue.component('component-title', Component_Title)

Vue.component('partner-tier', Partner_Tier)

Vue.component('posts', Posts)

Vue.component('workshops', Workshops)
Vue.component('matchmaking', Matchmaking)
Vue.component('job-fair', Job_Fair)
Vue.component('techtalks', TechTalks)

Vue.component('image-center-text', Image_Center_Text)

Vue.component('schedule-company', Schedule_Company)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
