<template>
  <div class="flex-all">
    <component-title
      title="Schedule"
      subtitle="Never miss another activity!"
    />

    <div class="dropdown-group">
      <!-- WEEK DAY -->
      <div class="dropdown" style="margin: 4vw">
        <div
          class="button button-vertical top-radius active"
          :class="isOpen_weekday ? '' : 'bottom-radius' "
          v-on:click="isOpen_weekday = !isOpen_weekday, isOpen_type = false"
        >{{getWeekDay(selected_day)}}</div>

        <img class="arrow" :class="isOpen_weekday ? 'rotation' : '' " src="../../dist/static/arrow.svg"/>

        <div class="list" v-if="isOpen_weekday">
          <div 
            class="button button-vertical"
            :class="selected_day == day ? 'active' : '' "
            v-for="day in days"
            v-bind:key="day"
            v-on:click="selectDay(day), isOpen_weekday = !isOpen_weekday, isOpen_type = false"
            v-if="(day != selected_day)"
          >{{ getWeekDay(day) }}</div>
        </div>
      </div>

      <!-- TYPE OF ACTIVITY -->
      <div class="dropdown" style="margin: 4vw">
        <div
          class="button button-vertical top-radius active"
          :class="isOpen_type ? '' : 'bottom-radius' "
          v-on:click="isOpen_type = !isOpen_type, isOpen_weekday = false"
        >{{selected_type}}</div>

        <img class="arrow" :class="isOpen_type ? 'rotation' : '' " src="../../dist/static/arrow.svg"/>

        <div class="list" v-if="isOpen_type">
          <div 
            class="button button-vertical"
            :class="selected_type == type.name ? 'active' : '' "
            v-for="type in types"
            v-bind:key="type.name"
            v-on:click="selectType(type.name), isOpen_type = !isOpen_type, isOpen_weekday = false"
            v-if="(type.name != selected_type)"
          >{{type.name}}</div>
        </div>
      </div>
    </div>

    <div class="selector-flex">
      <div
        class="button"
        :class="selected_day == day ? 'active' : '' "
        v-for="day in days"
        v-bind:key="day"
        v-on:click="selectDay(day)"
      >{{ getWeekDay(day) }}</div>
    </div>

    <div class="selector-flex">
      <div
        class="button"
        :class="selected_type == type.name ? 'active' : '' "
        v-for="type in types"
        v-bind:key="type.name"
        v-on:click="selectType(type.name)"
        v-show="type.name !== 'Opening Ceremony & Discussion Panel' && type.name !== 'Closing Ceremony' && type.name !== 'Fast Meeting' && type.name !== 'Clarification Session'"
      >{{ type.name }}</div>
    </div>

    <div class="flex-info">
      <div class="info">
        <schedule-company
          v-for="activity in activities"
          v-if="(activity.type == selected_type) && activity.day == selected_day"
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
        "Sun": "Sunday"
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

.selector-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 6px;
}

.selector-flex div:first-child {
  border-top-left-radius: 1.5vw;
  border-bottom-left-radius: 1.5vw;
  border-left-width: 2px;
}

.selector-flex div:last-child {
  border-top-right-radius: 1.5vw;
  border-bottom-right-radius: 1.5vw;
  border-right-width: 2px;
}

.list {
  position: absolute;
  z-index: 99;
  transition: all 0.1s ease-in-out;
}

.list div:last-child {
  border-bottom-right-radius: 1.5vw;
  border-bottom-left-radius: 1.5vw;
  border-bottom-width: 2px;
}

.top-radius {
  border-top-right-radius: 1.5vw;
  border-top-left-radius: 1.5vw;
}

.bottom-radius {
  border-bottom-right-radius: 1.5vw;
  border-bottom-left-radius: 1.5vw;
}

.button {
  width: 13.8vw;
  height: 1.6vw;
  font-size: 1.4vw;
  color: #27ADE4;
  font-weight: 500;
  border-color: #27ADE4;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 0.5vw;
  transition: 0.2s;
}

.button-vertical {
  width: 40vw;
  height: 5vw;
  font-size: 3.5vw;
  background-color: #FFFFFF;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 2px;
  border-right-width: 2px;
  padding-top: 1.5vw;
}

.button:hover {
  cursor: pointer;
  font-size: 1.5vw;
}

.button-vertical:hover {
  font-size: 3.8vw;
}

.button.active {
  background-color: #27ADE4;
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

}

@media screen and (min-width: 801px) {

.dropdown-group {
  display: none;
}

}
</style>
