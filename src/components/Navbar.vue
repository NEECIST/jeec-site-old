<template>
    <div class="navbar">
        <router-link router-link :to="{ name: 'Home' }">
        <img class="navbar-left-logo" src="../../static/logo_navbar.png">
        </router-link>

        <!--<router-link router-link :to="{ name: 'Workshops' }">
        <div class="navbar-title">Workshops</div>
        </router-link>
        <router-link router-link :to="{ name: 'Internships' }">
        <div class="navbar-title">Summer Internships</div>
        </router-link>
        <router-link router-link :to="{ name: 'Events' }">
        <div class="navbar-title">partners</div>
        </router-link>
        <router-link router-link :to="{ name: 'About' }">
        <div class="navbar-title">speakers</div>
        </router-link>-->

    </div>
</template>

<script>

export default {
  name: 'navbar',

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
  margin-top: 25px;
  float: left;
}

.navbar-title {
  float: right;
  margin-top: 16pt;
  margin-right: 5vw;
  font-family: 'Montserrat';
  font-weight: bold;
}

.navbar-title:hover {
  font-weight: bold;
}

.navbar-title:active {
  color: #4c6c8b;
}

a:hover {
  cursor: pointer;
}

</style>
