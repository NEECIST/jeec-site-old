<template>
  <div id="app">
    <div class="maintenance">
      <div id="maintenance-msg">
        Our website is currently under maintenance!
      </div>
    </div>
    <router-view/>

    <div class="bottom-bar">
      <div id="copyright">
        Copyright © 2018 - Jornadas de Engenharia Eletrotécnica e de Computadores do Instituto Superior Técnico
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

.maintenance {
  margin-top: 40px;
  width: 650px;
  height: 40px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  letter-spacing: 1.5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  background-color: rgb(196, 231, 255);
  border-radius: 10px;
  display: inline-block;
}

#maintenance-msg {
  margin-top: 8px;
}

.bottom-bar {
  width: 100%;
  height: 40px;
  background-color: rgb(91, 170, 223);
  color: white;
  position: absolute;
  text-align: left;
  bottom: 0;
}

#copyright {
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  margin-top: 13px;
  margin-left: 20px;
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 600px) {
    .maintenance {
      width: 300px;
      height: 60px;
      font-size: 15px;
      letter-spacing: 1px;
    }

    #maintenance-msg {
      margin-top: 12px;
    }

    #copyright {
      font-size: 10px;
      text-align: center;
      margin-top: 8px;
    }
}
</style>
