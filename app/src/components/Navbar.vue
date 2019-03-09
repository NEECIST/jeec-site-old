<template>
    <div class="navbar">
        <router-link router-link :to="{ name: 'Home' }">
          <img class="navbar-left-logo" :src="navbar_logo_link">

          <img class="navbar-left-logo-mobile" :src="navbar_mobile_logo_link">
        </router-link>

        <a href="https://cv.jeec.ist">
          <div class="platform-button">CV Platform</div>
        </a>

        <router-link router-link :to="{ name: 'Team' }">
          <div class="navbar-title">Team</div>
        </router-link>

        <router-link router-link :to="{ name: 'Partners' }">
          <div class="navbar-title">Partners</div>
        </router-link>

        <router-link router-link :to="{ name: 'Activities' }">
          <div class="navbar-title">Activities</div>
        </router-link>

        <router-link router-link :to="{ name: 'Speakers' }">
          <div class="navbar-title">Speakers</div>
        </router-link>

        <router-link router-link :to="{ name: 'Schedule' }">
          <div class="navbar-title">Schedule</div>
        </router-link>

        
        <div id="menuToggle">
          <input type="checkbox" :checked="show_menu" v-on:click="show_menu = !show_menu"/>
    
          <span></span>
          <span></span>
          <span></span>
    
          <ul id="menu">
            <li v-on:click="redirect('Schedule')">Schedule</li>
             <li v-on:click="redirect('Speakers')">Speakers</li>
             <li v-on:click="redirect('Activities')">Activities</li>
              <li v-on:click="redirect('Partners')">Partners</li>
              <li v-on:click="redirect('Team')">Team</li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      show_menu: false,
      navbar_logo_link: "../../static/jeec_logo_small.svg",
      navbar_mobile_logo_link: "../../static/jeec_logo_mobile.svg"
    }
  },

  methods: {
    redirect(page) {
      this.show_menu = false;
      this.$router.push({ name: page});
    }
  }
}
</script>

<style>
.navbar {
  width: 100%;
  height: 80px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.16);
  position: fixed;
  z-index: 1000;
  background-color: #ffffff;
}

.navbar-left-logo {
  width: 140px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
}

.navbar-left-logo-mobile {
  display: none;
}

.platform-button {
  margin-top: 20px;
  width: 100px;
  height: 30px;
  text-align: center;
  width: 130px;
  border-radius: 40px;
  background: #fff;
  color: rgb(67, 154, 236);
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 10px;
  border: 2px solid #77a1d1;
  display: inline-block;
}

.join-quote {
    font-family: 'Roboto';
    font-size: 18px;
    margin-top: 30px;
}

.register-button {
    background-color: rgb(66, 161, 199);
    color: white;
    border-radius: 5px;
    padding: 0.5em 0.7em;
    font-weight: 600;
    font-size: 16px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  transition: all .2s ease-in-out;
  letter-spacing: 1.5px;
}


.register-button:hover {
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.3);
  transform: scale(1.03); 
  cursor: pointer;
  color: white;
}

.join-quote, .register-button {
    display: inline-block;
}

.navbar a {
  text-decoration: initial;
}

.navbar-title {
  float: right;
  margin-top: 26px;
  margin-right: 5vw;
  color: black;
  font-size: 24px;
  font-family: 'Lato';

  -o-transition:.2s;
  -ms-transition:.2s;
  -moz-transition:.2s;
  -webkit-transition:.2s;
  transition:.2s;
  }

.navbar-title:hover { color:rgb(55, 121, 184); transform: scale(1.1); }

a:hover {
  cursor: pointer;
}

body
{
  margin: 0;
  padding: 0;
  
  /* make it look decent enough */
  background: #232323;
  color: #cdcdcd;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

a:hover
{
  color: tomato;
}

#menuToggle
{
  display: none;
  float: right;
  position: relative;
  top: 25px;
  right: 5vw;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #5ea2e2;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 100vw;
  margin-left: -96vw;
  padding: 50px;
  padding-top: 50px;
  margin-top: 18px;
  background: #ffffff;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  box-shadow: 0 200px 300px 0 rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  transform-origin: 0% 0%;
  transform: translate(1100px, 0px);
  transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 20px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul
{
  transform: none;
}

@media only screen and (max-width: 1250px) {
  .join-quote {
    display: none;
  }

  .register-button {
    margin-top: 24px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 1050px) {
  .navbar {
    height: 70px;
  }

  .navbar-left-logo {
    display: none;
  }

  .navbar-left-logo-mobile {
    display: block;
    width: 50px;
    margin-left: 20px;
    margin-top: 10px;
    float: left;
  }

  .navbar-title {
    margin-top: 23px;
    display: none;
  }

  #menuToggle {
    display: block;
  }

  .register-button {
    margin-top: 24px;
    font-size: 14px;
    letter-spacing: 0.8px;
  }

  .navbar-title {
    font-size: 19px;
    margin-top: 25px;
  }
}

@media only screen and (max-width: 350px) {
.register-button {
    margin-top: 30px;
  }
}
</style>
