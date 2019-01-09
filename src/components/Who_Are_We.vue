<template>
  <div class="who-are-we-comp">
    <div class="div-title">
      <span v-html="title"></span>
    </div>

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
      title: '<span class="first-word-style">WHO</span> ARE WE?',
      text: 'The <b>Electrical and Computer Engineering Career Week</b> is an event organized by <b>IST students</b>, whose main purpose is to promote the approximation and integration of the students in the business world.<p>The activities provided by JEEC such as the job fair, the panel discussions, workshops and matchmaking sessions are open, free of charge, to a student community of over 11.400 students.</p>',
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
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
}

.who-are-we-text {
  width: 80%;
  font-family: 'Raleway';
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
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
  }

  .div-title {
    font-size: 30px;
  }
}
</style>
