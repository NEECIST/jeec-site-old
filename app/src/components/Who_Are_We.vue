<template>
  <div class="who-are-we-comp">
    <component-title title="Who are we?" subtitle="JEECIST" />

    <div class="who-are-we-text">
      <span v-html="text"></span>
    </div>

    <div class="activities-container">
      <div class="activity-flex">
        <div class="activity-bold" v-for="activity in activities" v-html="activity.name" :key="activity.name"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "who-are-we",
  data() {
    return {
      text: "",
    };
  },
  props: {
    activities: Array,
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    get_text() {
      this.text = 'A group of <b>IST</b> students, whose main purpose is to organize an event with the intention of closing the gap between the business world and university life.<p>Participation is free of charge and open to a strong student community with over 11000 aspiring engineers.</p><p>Activities available at JEEC:<div style="line-height: 20px;">';

      // for (activity of this.activities) {
      //   console.log(activity.name);
      //   this.text += `<p><b>${activity.name}</b></p>`;
      // }

      this.text += "</div></p>";

      return this.text;
    },
  },
  mounted() {
    this.text = this.get_text();
  }
};
</script>

<style>
.activity-flex {
  display: flex;
  flex-direction: column;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 15px;
}

.activity-bold {
  font-size: 25px;
  font-family: Lato;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  color: #505050;
  letter-spacing: normal;
  padding-top: 5px;
  padding-bottom: 5px;
}

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
