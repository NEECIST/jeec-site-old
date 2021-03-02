<template>
  <div class="flex-all">
    <component-title
      title="Schedule"
      subtitle="Never miss another activity!"
    />

    <!-- MOBILE DROPLISTS -->
    <div class="dropdown-group">
      <!-- WEEK DAY -->
      <div class="dropdown" style="margin: 4vw">
        <div
          class="button-vertical active"
          :class="isOpen_weekday ? '' : 'bottom-radius' "
          v-on:click="isOpen_weekday = !isOpen_weekday, isOpen_type = false"
        >{{getWeekDay(selected_day) + ", " + getDay(selected_day)}}</div>

        <img class="arrow" :class="isOpen_weekday ? 'rotation' : '' " src="../../static/arrow.svg"/>

        <div class="list" v-if="isOpen_weekday">
          <div 
            class="button-vertical"
            :class="selected_day == day ? 'active' : '' "
            v-for="day in days"
            v-bind:key="day"
            v-on:click="selectDay(day), isOpen_weekday = !isOpen_weekday, isOpen_type = false"
            v-if="(day != selected_day)"
          >{{ getWeekDay(day) + ", " + getDay(day) }}</div>
        </div>
      </div>

      <!-- TYPE OF ACTIVITY -->
      <div class="dropdown" style="margin: 4vw">
        <div
          class="button-vertical active"
          :class="isOpen_type ? '' : 'bottom-radius' "
          v-on:click="isOpen_type = !isOpen_type, isOpen_weekday = false"
        >{{selected_type}}</div>

        <img class="arrow" :class="isOpen_type ? 'rotation' : '' " src="../../static/arrow.svg"/>

        <div class="list" v-if="isOpen_type">
          <div 
            class="button-vertical"
            :class="selected_type == type.name ? 'active' : '' "
            v-for="type in types"
            v-bind:key="type.name"
            v-on:click="selectType(type.name), isOpen_type = !isOpen_type, isOpen_weekday = false"
            v-if="(type.name != selected_type)"
          >{{type.name}}</div>
        </div>
      </div>
    </div>

    <div class="selector-all">
      <div class="selector-group">
        <div class="selector">
          <div
            class="button"
            :class="selected_day == day ? 'active' : '' "
            v-for="day in days"
            v-bind:key="day"
            v-on:click="selectDay(day)"
          >
            <div>{{ getWeekDay(day) }}</div>
            <div class="day">{{ getDay(day) }}</div>
            <svg class="triangle" :class="selected_day == day ? '' : 'hide' " xmlns="http://www.w3.org/2000/svg" width="508.1" height="108.9" viewBox="0 0 508.1 108.9">
              <path id="triangle-blue" d="M0,0,254.1,108.9,508.1,0Z" fill="#27ade4"/>
            </svg>
          </div>
        </div>
        <div class="selector">
          <div
            class="button-activities"
            :class="selected_type == type.name ? 'active' : '' "
            v-for="type in types"
            v-bind:key="type.name"
            v-on:click="selectType(type.name)"
            v-show="type.name !== 'Opening Ceremony & Discussion Panel' && type.name !== 'Closing Ceremony' && type.name !== 'Fast Meeting' && type.name !== 'Clarification Session'"
          >{{ type.name }}</div>
        </div>
      </div>
      <div class="schedule-cards-flex" style="margin-top: 2vw">
        <schedule-company
          v-for="activity in activities"
          v-if="activity.type == selected_type && activity.day == selected_day && activity.type !== 'Aux'"
          :type="activity.type"
          :companies="activity.companies.data"
          :speakers="activity.speakers.data"
          :name="activity.name"
          :description="activity.description"
          :day="activity.day"
          :start_time="activity.time"
          :end_time="activity.end_time"
          :location="activity.location"
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
      selected_day: '',
      selected_type: 'Job Fair',
      isOpen_weekday: false,
      isOpen_type: false,
      dict: {
        "Mon": "Monday",
        "Tue": "Tuesday",
        "Wed": "Wednesday",
        "Thu": "Thursday",
        "Fri": "Friday",
        "Sat": "Saturday",
        "Sun": "Sunday",
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "December": "12"
      },
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      activities: [],
      days: [],
      types: []
    };
  },

  methods: {
    getWeekDay(day) {
      var week_day = day.substr(day.length - 3);
      return this.dict[week_day];
    },
    getDay(day) {
      var nr_day = day.substr(0, 2);
      var month = day.substr(3, 3);
      return nr_day + "/" + this.dict[month];
    },
    selectDay(day) {
      this.selected_day = day;
    },
    selectType(type) {
      this.selected_type = type;
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
      .then(response => (this.types = response.data["data"].activity_types["data"], 
                         this.days = response.data["data"].dates, this.selectDay(this.days[0])));
  },
};
</script>


<style scoped>

.dropdown-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.dropdown {
  position: relative;
}

.arrow {
  width: 2.4vw;
  position: absolute;
  top: 1.7vw;
  left: 3vw;
  transition: all 0.3s ease-in-out;
}

.rotation {
  transform: rotate(90deg);
}

.selector-all {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.selector-group {
  width: 90vw;
  align-self: center;
}

.selector {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
}

.selector div:first-child {
  border-left-width: 2px;
}

.selector div:last-child {
  border-right-width: 2px;
}

.schedule-cards-flex {
  display: flex;
  flex-direction: column;
  width: 90vw;
  align-self: center;
}

.selector-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 6px;
}

.list {
  position: absolute;
  z-index: 99;
  transition: all 0.1s ease-in-out;
}

.list div:last-child {
  border-bottom-width: 2px;
}

.button {
  /* width: 13.8vw; */
  /* height: 1.6vw; */
  font-size: 1.4vw;
  color: #27ADE4;
  font-weight: 500;
  border-color: #F6F6F6;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 0.5vw;
  transition: 0.2s;
  flex-grow: 1;
  position: relative;
}

.button.active {
  background-color: #27ADE4;
  color: white;
  border-color: #27ADE4;
}

.button:hover {
  cursor: pointer;
}

.day {
  font-size: 1.1vw;
}

.triangle {
  position: absolute;
  top: 108%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
  height: 15%;
  transition: 0.2s;
  z-index: 10;
}

.button-activities {
  font-size: 1.4vw;
  color: #51545B;
  font-weight: 500;
  background-color: #F6F6F6;
  border-color: #F6F6F6;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 3px;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 1vw;
  transition: 0.2s;
  flex-grow: 1;
}

.button-activities.active {
  border-bottom-color: #27ADE4;
}

.button-activities:hover {
  cursor: pointer;
}

.button-vertical {
  width: 40vw;
  height: 5vw;
  color: #27ADE4;
  font-weight: 500;
  border-color: #F6F6F6;
  border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 2px;
  border-right-width: 2px;
  padding: 0.5vw;
  padding-top: 1.5vw;
  transition: 0.2s;
  flex-grow: 1;
  position: relative;
  font-size: 3.3vw;
  background-color: #FFFFFF;
}

.button-vertical:hover {
  font-size: 3.5vw;
}

.button-vertical.active {
  background-color: #27ADE4;
  color: white;
  border-color: #27ADE4;
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

.flex-info {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  /* padding-top: 2vw; */
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.info {
  font-size: 3vw;
  font-weight: bold;
  color: #1c9cd8;
  text-align: center;
  padding-top: 1vw;
  padding-bottom: 2vw;
  /* width: 18vw;
  height: 5vw; */
  background-color: white;
}

.hide {
  display: none;
}

@media screen and (max-width: 800px) {

.selector-flex {
  display: none;
}

.selector-group {
  display: none;
}

}

@media screen and (min-width: 801px) {

.dropdown-group {
  display: none;
}

}
</style>
