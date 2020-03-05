<template>
  <div class="flex-all">

    <component-title
      title="Schedule"
      subtitle="Never miss another activity!"
    />

    <div class="select-day">Select Day</div>
    <div class="day-selector-flex">
      <div
        class="day-button"
        v-for="(day, index) in days"
        v-bind:key="day"
        v-on:click="selectDay(index); selectedDay(index); selectedType(-1)"
      >{{ day }}</div>
    </div>

    <div class="select-type">Select Activity Type</div>
    <div class="type-selector-flex">
      <div
        class="type-button"
        v-for="(type, index) in types"
        v-bind:key="type.name"
        v-on:click="selectedType(index); selectType(index)"
        v-show="type.name !== 'Opening Ceremony & Discussion Panel' && type.name !== 'Closing Ceremony' && type.name !== 'Fast Meeting' && type.name !== 'Clarification Session'"
      >{{ type.name }}</div>
    </div>

    <div class="flex-info">
      <div class="info">
        <schedule-company
          v-for="(activity, index) in activities"
          v-if="(selected_type == -1 || activity.type == types[selected_type].name) && activity.day == days[selected_day]"
          :type="activity.type"
          :companies="activity.companies.data"
          :speakers="activity.speakers.data"
          :title="activity.name"
          :description="activity.description"
          :day="activity.day"
          :hour="activity.time"
          :place="activity.location"
          :key="activity.type + activity.day + activity.time"
        ></schedule-company>
      </div>
    </div>

    <contacts/>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "schedule",
  data() {
    return {
      selected_day: 0,
      selected_type: -1,
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      activities: [],
      days: [],
      types: []
    };
  },

  methods: {
    selectDay(index) {
      this.selected_day = index;
      this.selected_type = -1;
    },
    selectType(index) {
      if (index == this.selected_type) {
        this.selected_type = -1;
      }
      else {
        this.selected_type = index;
      }
    },
    selectedDay(index) {
      var btnContainer = document.getElementsByClassName("day-selector-flex");
      var btns = btnContainer[0].getElementsByClassName("day-button");

      var current = btnContainer[0].getElementsByClassName("active");
      if (current[0] != null) {
        current[0].className = current[0].className.replace(" active", "");
      }
      btns[index].className += " active";
    },
    selectedType(index) {
      var btnContainer = document.getElementsByClassName("type-selector-flex");
      var btns = btnContainer[0].getElementsByClassName("type-button");

      var current = btnContainer[0].getElementsByClassName("active");
      if (current[0] != null) {
        current[0].className = current[0].className.replace(" active", "");
      }

      if (index != this.selected_type) {
        btns[index].className += " active";
      }
    },
  },
  mounted() {
    axios
      .get(
        process.env.VUE_APP_JEEC_WEBSITE_API_URL +
          "/activities",
        {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          }
        }
      )
      .then(response => (this.activities = response.data["data"]));

    axios
      .get(
        process.env.VUE_APP_JEEC_WEBSITE_API_URL +
          "/event",
        {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          }
        }
      )
      .then(response => (this.types = response.data["data"][0].activity_types["data"], 
                         this.days = response.data["data"][0].dates));
  }
};
</script>


<style scoped>
.select-day, .select-type {
  font-size: 2.5vw;
  font-family: "Lato";
  margin-top: 1vw;
  font-weight: 600;
}

.day-selector-flex, .type-selector-flex {
  display: -webkit-box; /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex; /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding-top: 0.1vw;
  padding-bottom: 0.5vw;
  padding-left: 4vw;
  padding-right: 4vw;
}

.day-button, .type-button {
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

.day-button:hover, .type-button:hover {
  background-color: rgb(230, 244, 253);
  cursor: pointer;
}

.day-button.active, .type-button.active {
  background-color: #1C9CD8;
  color: white;
}

.flex-all {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 70px;
}

.header {
  padding-top: 90px;
  padding-bottom: 15px;
  font-size: 8vw;
  text-align: center;
  -webkit-text-fill-color: #1c9cd8;
}

.line {
  width: 100%;
  height: 0px;
  border: solid #1c9cd8 1.5px;
}

.flex-download-button {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}

.download-button {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 3vw;
  letter-spacing: 0.4vw;
  font-weight: bolder;
  text-align: center;
  -webkit-text-fill-color: #1c9cd8;

  transition: all 0.3s ease-in-out;
}

.download-button:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.04);
  letter-spacing: 0.8vw;
  cursor: pointer;
}

.google-calendar {
  width: 3vw;
  height: 3vw;
}

.flex-choose-day {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.choose-day {
  font-size: 3vw;
  font-weight: bold;
  color: #1c9cd8;
  text-align: center;
  padding-top: 2.7vw;
  padding-bottom: 2vw;
  width: 18vw;
  height: 5vw;
  background-color: white;
  border: solid #1c9cd8 2px;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;
}

.choose-day:hover {
  cursor: pointer;
  background-color: #ececec;
}

.choose-day.active {
  background-color: #1c9cd8;
  color: white;
}

.flex-info {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.info {
  font-size: 3vw;
  font-weight: bold;
  color: #1c9cd8;
  text-align: center;
  padding-top: 2.7vw;
  padding-bottom: 2vw;
  /* width: 18vw;
  height: 5vw; */
  background-color: white;
}

.hide {
  display: none;
}

/*OLD CSS*/
/*
@media only screen and (max-width: 750px) {
  .schedule_pc {
    display: none;
  }
  
  .schedule_phone {
      display: block;
  }
}
*/
</style>


