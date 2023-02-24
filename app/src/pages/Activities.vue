<template>
  <div class="activities-app">
    <div class="registration-comp">
      <component-title title="registrations" subtitle="Enroll in our activities!" />

      <div class="select-day">Select the day</div>
      <div class="day-selector-flex">
        <div
          class="day-button"
          v-for="(day, index) in days"
          v-bind:key="day"
          v-on:click="selectDay(index); selectedDay(index)"
        >{{ day }}</div>
      </div>

      <div class="registration-flex">
        <div
          class="registration-card"
          v-for="activity in activities"
          v-if="activity.day == days[selected_day]"
          v-bind:key="activity.type + activity.time"
        >
          <div class="session-type" v-if="activity.type.length">{{ activity.type }}</div>
          <div class="session-name" v-if="activity.name.length">{{ activity.name }}</div>
          <div class="session-day">{{ days[selected_day] }}</div>
          <div class="session-time" v-if="activity.time">{{ activity.time }}</div>
          <div class="session-partners-flex">
            <div
              class="session-partner"
              v-for="company in activity.companies.data"
              v-bind:key="company.name"
            >
              <a v-bind:href="company.link" target="_blank">
                <img class="session-partner-logo" :src="company.logo" />
              </a>
            </div>
            <div
              class="session-partner"
              v-for="speaker in activity.speakers.data"
              v-bind:key="speaker.name"
            >
              <a v-bind:href="speaker.linkedin_url" target="_blank">
                <img class="session-partner-logo" :src="speaker.image" />
              </a>
            </div>
          </div>
          <center>
            <a :href="activity.registration_link" target="_blank" v-if="activity.registration_open">
              <div class="registration-button">Attend</div>
            </a>
          </center>
        </div>
      </div>
    </div>

    <contacts :email="event ? event.email : []"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "schedule",
  data() {
    return {
      event: null,
      selected_day: 0,
      activities: [],
      days: []
    };
  },

  methods: {
    selectDay(index) {
      this.selected_day = index;
      this.selected_type = -1;
    },

    selectedDay(index) {
      var btnContainer = document.getElementsByClassName("day-selector-flex");
      var btns = btnContainer[0].getElementsByClassName("day-button");

      var current = btnContainer[0].getElementsByClassName("active");
      if (current[0] != null) {
        current[0].className = current[0].className.replace(" active", "");
      }
      btns[index].className += " active";
    }
  },

  mounted() {
    axios
      .get(
        process.env.VUE_APP_JEEC_WEBSITE_API_URL +
          "/activities?registration_open=true",
        {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          }
        }
      )
      .then(response => (this.activities = response.data["data"]));

    axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/event", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY
        }
      })
      .then(response => (this.days = response.data["data"].dates, this.event = response.data["data"]));
  }
};
</script>

<style scoped>
.registration-comp {
  background-color: #ffffff;
  padding-top: 70px;
  width: 100%;
  padding-bottom: 40px;
  text-align: center;
}

.select-day {
  font-size: 19px;
  font-family: "Lato";
  margin-top: 20px;
  font-weight: 600;
}

.day-selector-flex {
  display: -webkit-box; /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex; /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 5vw;
  padding-right: 5vw;
}

.day-button {
  background-color: #ffffff;
  border-color: rgb(34, 130, 214);
  border-style: solid;
  border-width: 0.1vw;
  border-radius: 0.5vw;
  width: 14vw;
  height: 4vw;
  font-size: 1.6vw;
  padding-top: 1.6vw;
  font-family: "Lato";
  font-weight: 600;
  margin: 0.5vw;
}

.day-button:hover {
  background-color: rgb(230, 244, 253);
  cursor: pointer;
}

.day-button.active {
  background-color: #1c9cd8;
  color: white;
}

.registration-flex {
  display: -webkit-box; /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex; /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.registration-card {
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  width: 500px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  margin-left: 20px;
}

.session-name {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  height: 30px;
  font-family: "Lato";
  text-align: center;
  margin-bottom: 20px;
}

.session-type {
  font-size: 22px;
  font-weight: 600;
  color: #1c9cd8;
  height: 30px;
  font-family: "Lato";
  text-align: right;
  margin-right: 2vw;
}

.session-day {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  height: 30px;
  font-family: "Lato";
}

.session-time {
  font-size: 17px;
  font-weight: 600;
  font-family: "Lato";
}

.session-partners-flex {
  display: -webkit-box; /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex; /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 1vw;
  padding-right: 1vw;
}

.session-partner-logo {
  justify-content: center;
  max-height: 70px;
  max-width: 160px;
  margin: 10px 25px;
  opacity: 0.85;
  transition: all 0.2s ease-in-out;
}

.session-partner-logo:hover {
  opacity: 1;
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.15);
}

.registration-button {
  background-color: #396c96;
  padding: 8px;
  width: 15%;
  border-radius: 5px;
  font-family: "Karla";
  font-size: 18px;
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
}

.registration-closed {
  font-size: 16px;
  color: #396c96;
  font-weight: 600;
  margin-bottom: 20px;
}

.registration-button:hover {
  transform: scale(1.1, 1.1);
}

@media screen and (max-width: 1400px) {
  .registration-flex {
    display: -webkit-box; /* iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* IE 10 */
    display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /*Firefox, Chrome, Opera */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 15px;
    padding-left: 3vw;
    padding-right: 3vw;
  }

  .registration-card {
    background-color: #ffffff;
    padding-top: 20px;
    padding-bottom: 5px;
    border-radius: 20px;
    width: 900px;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
    margin-top: 20px;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 1000px) {
  .session-partner-logo {
    justify-content: center;
    max-height: 100px;
    max-width: 180px;
    margin: 20px 25px;
    opacity: 0.85;
    transition: all 0.2s ease-in-out;
  }

  .registration-button {
    background-color: #396c96;
    padding: 8px;
    width: 100px;
    float: center;
    border-radius: 5px;
    font-family: "Karla";
    font-size: 18px;
    color: white;
    text-align: center;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  }
}

@media screen and (max-width: 560px) {
  .session-partners-flex {
    display: -webkit-box; /* iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* IE 10 */
    display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; /*Firefox, Chrome, Opera */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 15px;
    padding-left: 1vw;
    padding-right: 1vw;
  }

  .session-partners-container {
    margin-left: 2vw;
    margin-right: 2vw;
  }

  .session-partner-logo {
    margin: 10px 10px;
  }
}

@media screen and (max-width: 380px) {
  .day-button {
    width: 250px;
    height: 30px;
    font-size: 17px;
    padding-top: 8px;
    margin: 8px;
  }
}
</style>