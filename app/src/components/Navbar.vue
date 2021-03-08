<template>
  <div class="navbar">
    <router-link router-link :to="{ name: 'Home' }">
      <img class="navbar-left-logo" :src="navbar_logo_link" />

      <img class="navbar-left-logo-mobile" :src="navbar_mobile_logo_link" />
    </router-link>

    <a href="https://app.jeec.ist/">
      <div class="platform-button">Web App Login</div>
    </a>

    <!--<div class="brain-msg">Login as a partner and bid for Main Sponsor of JEEC|20!</div>-->

    <router-link router-link :to="{ name: 'Team' }">
      <div class="navbar-title">Team</div>
    </router-link>

    <router-link router-link :to="{ name: 'Prizes' }">
      <div class="navbar-title">Prizes</div>
    </router-link>

    <router-link router-link :to="{ name: 'Web_App' }">
      <div class="navbar-title">Web App</div>
    </router-link>

    <router-link router-link :to="{ name: 'Partners' }">
      <div class="navbar-title">Partners</div>
    </router-link>

    <router-link router-link :to="{ name: 'Speakers' }">
      <div class="navbar-title">Speakers</div>
    </router-link>

    <!-- <router-link router-link :to="{ name: 'newfeed' }">
      <div class="navbar-title">Feed</div>
    </router-link> -->

    <!-- <router-link router-link :to="{ name: 'Activities' }">
      <div class="navbar-title">Registrations</div>
    </router-link> -->

    <router-link router-link :to="{ name: 'Schedule' }">
      <div class="navbar-title">Schedule</div>
    </router-link>

    <div id="menuToggle">
      <input type="checkbox" :checked="show_menu" v-on:click="show_menu = !show_menu" />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <li v-on:click="redirect('Schedule')">Schedule</li>
        <!-- <li v-on:click="redirect('Activities')">Registrations</li> -->
        <li v-on:click="redirect('Speakers')">Speakers</li>
        <li v-on:click="redirect('Partners')">Partners</li>
        <li v-on:click="redirect('Web_App')">Web App</li>
        <li v-on:click="redirect('Prizes')">Prizes</li> 
        <li v-on:click="redirect('Team')">Team</li>
        <!-- <li v-on:click="redirect('newfeed')">Feed</li> -->

        <a href="https://brain.jeec.ist/companies/">
          <div class="platform-button-menu">JEEC|Brain Login</div>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      show_menu: false,
      navbar_logo_link: "../../static/jeec_logo_small.svg",
      navbar_mobile_logo_link: "../../static/jeec_logo_mobile.svg"
    };
  },

  methods: {
    redirect(page) {
      this.show_menu = false;
      this.$router.push({ name: page });
    }
  }
};
</script>

<style>
.navbar {
  width: 100%;
  height: 70px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.16);
  position: fixed;
  z-index: 1000;
  background-color: #ffffff;
}

.navbar-left-logo {
  width: 120px;
  margin-left: 20px;
  margin-top: 17px;
  float: left;
}

.navbar-left-logo-mobile {
  display: none;
}

.platform-button {
  margin-top: 15px;
  height: 30px;
  text-align: center;
  float: left;
  margin-left: 20px;
  width: 170px;
  border-radius: 10px;
  background: #fff;
  color: #27ade4;
  font-weight: bold;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 8px;
  border: 2px solid #27ade4;
  transition: all 0.2s ease-in-out;
  display: inline-block;
}

.platform-button:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  transform: scale(1.03);
  cursor: pointer;
}

.platform-button-menu {
  margin-top: 15px;
  height: 30px;
  text-align: center;
  width: 170px;
  border-radius: 10px;
  background: #fff;
  color: rgb(67, 154, 236);
  font-weight: bold;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 8px;
  border: 2px solid #77a1d1;
  transition: all 0.2s ease-in-out;
  display: none;
}

.brain-msg {
  display: inline-block;
  margin-left: 20px;
  margin-top: 28px;
  font-size: 14px;
  float: left;
}

.join-quote,
.register-button {
  display: inline-block;
}

.navbar a {
  text-decoration: initial;
}

.navbar-title {
  float: right;
  margin-top: 23px;
  margin-right: 5vw;
  color: black;
  font-size: 20px;
  font-family: "Lato";

  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.navbar-title:hover {
  color: rgb(55, 121, 184);
  transform: scale(1.1);
}

a:hover {
  cursor: pointer;
}

body {
  margin: 0;
  padding: 0;

  /* make it look decent enough */
  background: #232323;
  color: #cdcdcd;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

a:hover {
  color: tomato;
}

#menuToggle {
  display: none;
  float: right;
  position: relative;
  top: 25px;
  right: 5vw;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input {
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

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #5ea2e2;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 100vw;
  margin-left: -95vw;
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
  transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 20px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
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
@media only screen and (max-width: 1080px) {
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

  .platform-button {
    margin-top: 15px;
    margin-left: 30px;
  }
}

@media only screen and (max-width: 760px) {
  .brain-msg {
    display: none;
  }
}

@media only screen and (max-width: 400px) {
  .platform-button {
    display: none;
  }

  .platform-button-menu {
    display: inline-block;
  }
}

@media only screen and (max-width: 350px) {
  .register-button {
    margin-top: 30px;
  }
}
</style>
