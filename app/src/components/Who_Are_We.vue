<template>
  <div class="who-are-we-comp">
  
      <component-title title="Who are we?" subtitle="JEECIST"/>

      <div class="who-are-we-text">
        <span v-html="text"></span>
      </div>

  </div>
</template>

<script>
export default {
  name: 'who-are-we',
  data() {
    return {
      text: 'An event organized by <b>IST</b> students, whose main purpose is to promote the approximation and integration of the students in the business world.<p>Activities provided by JEEC such as:<div style="line-height: 20px;"><p><b>Job Fair</b></p><p><b>Panel Discussions</b></p><p><b>Workshops</b></p><p><b>Matchmaking sessions</b></p></div> are open, <b>free of charge</b>, to a student community of over <b>11.400</b> students.</p>',
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
.who-are-we-comp {
  width: 100%;
  background-color: #ffffff;
  padding-top: 10px;
  padding-bottom: 15px;
  text-align: center;
}

.who-are-we-text {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 75%;
  font-family: 'Lato';
  margin-top: 20px;
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 35px;
  letter-spacing: normal;
  color: #505050;
  display: inline-block;
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 992px) {
  .who-are-we-text {
    width: 90%;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 600px) {
  .who-are-we-text {
    width: 95%;
    font-size: 16px;
    line-height: 25px;
  }

  .div-title {
    font-size: 30px;
  }
}
</style>
