<template>
  <div class="flex-all">

    <component-title
      title="Schedule"
      subtitle="Never miss another activity!"
    />

    <div class="select-day">Select the Day</div>
    <div class="day-selector-flex">
      <div
        class="day-button"
        v-for="(day, index) in days"
        v-bind:key="day"
        v-on:click="selectDay(index)"
      >{{ day }}</div>
    </div>

    <div class="select-day">Select the Activity Type</div>
    <div class="day-selector-flex">
      <div
        class="day-button"
        v-for="(type, index) in types"
        v-bind:key="type"
        v-on:click="selectType(index)"
      >{{ type }}</div>
    </div>

    <div class="flex-info">
      <div class="info">
        <schedule-company
          v-for="(activity, index) in activities"
          v-if="(activity.type == types[selected_type] || selected_type == -1) && activity.day == days[selected_day]"
          :type="activity.type"
          :companies="activity.companies.data"
          :speakers="activity.speakers.data"
          :title="activity.name"
          :description="activity.description"
          :hour="activity.time"
          :place="activity.location"
          :key="index"
        ></schedule-company>
      </div>
    </div>
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
      days: [
        "Mar 09, 2020",
        "Mar 10, 2020",
        "Mar 11, 2020",
        "Mar 12, 2020",
        "Mar 13, 2020"
      ],
      types: ["Matchmaking", "15/15", "Workshop", "Discussion Panel"]
    };
  },

  methods: {
    selectDay(index) {
      this.selected_day = index;
      this.selected_type = -1;
    },
    selectType(index) {
      this.selected_type = index;
    }
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
  }
};
</script>


<style scoped>
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
  border-width: 1px;
  border-radius: 5px;
  width: 150px;
  height: 40px;
  font-size: 18px;
  padding-top: 16px;
  font-family: "Lato";
  font-weight: 600;
  margin: 10px;
}

.day-button:hover {
  background-color: rgb(230, 244, 253);
  cursor: pointer;
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
  padding-bottom: 7vw;
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


