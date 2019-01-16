<template>
    <div class="navbar">
        <router-link router-link :to="{ name: 'Home' }">
          <img class="navbar-left-logo" :src="navbar_logo_link">
        </router-link>

        <router-link router-link :to="{ name: 'Team' }">
          <div class="navbar-title">{{ fourth_navbar_title }}</div>
        </router-link>
        <router-link router-link :to="{ name: 'Schedule' }">
          <div class="navbar-title">{{ third_navbar_title }}</div>
        </router-link>
        <router-link router-link :to="{ name: 'Partners' }">
          <div class="navbar-title">{{ second_navbar_title }}</div>
        </router-link>
        <router-link router-link :to="{ name: 'Speakers' }">
          <div class="navbar-title">{{ first_navbar_title }}</div>
        </router-link>

        <!-- Mobile menu -->
        <div id="menuToggle">
          <input type="checkbox" />
    
          <span></span>
          <span></span>
          <span></span>
    
          <ul id="menu">
            <router-link router-link :to="{ name: 'Home' }">
             <li>Home</li>
            </router-link>
            <router-link router-link :to="{ name: 'Speakers' }">
             <li>{{ first_navbar_title }}</li>
            </router-link>
            <router-link router-link :to="{ name: 'Partners' }">
              <li>{{ second_navbar_title }}</li>
            </router-link>
            <router-link router-link :to="{ name: 'Schedule' }">
             <li>{{ third_navbar_title }}</li>
            </router-link>
            <router-link router-link :to="{ name: 'Team' }">
              <li>{{ fourth_navbar_title }}</li>
            </router-link>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      first_navbar_title: "Speakers",
      second_navbar_title: "Partners",
      third_navbar_title: "Schedule",
      fourth_navbar_title: "Team",
      navbar_logo_link: "../../static/jeec_logo_small.svg"
    }
  },

  methods: {
    openNav () {
      document.getElementById('mySidenav').style.width = '250px'
    },

    closeNav () {
      document.getElementById('mySidenav').style.width = '0'
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

.navbar-title {
  float: right;
  margin-top: 28px;
  margin-right: 5vw;
  color: black;
  font-size: 20px;
  font-family: 'Lato';

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  }

.navbar-title:hover { color:rgb(55, 121, 184); }

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
  position: relative;
  top: 25px;
  left: 85vw;
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
  width: 100%;
  margin-left: -98vw;
  padding: 50px;
  padding-top: 50px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(0, -550px);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
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

/* On screens that are 600px wide*/
@media only screen and (max-width: 600px) {
  .navbar {
    height: 70px;
  }

  .navbar-left-logo {
    width: 100px;
    margin-left: 15px;
    margin-top: 24px;
  }

  .navbar-title {
    display: none;
  }

  #menuToggle {
    display: block;
  }
}
</style>
