<template>
  <div class="module">
    <div class="module-head-flex">
      <div class="name-flex">
        <div class="company-name" v-for="(company, index) in companies" :key="index">{{ company.name }}</div>
        <div class="company-name" v-for="(speaker, index) in speakers" :key="index">{{ speaker.name }}</div>
      </div>
      <div class="activity-title">{{ title }}</div>
    </div>
    <div class="module-middle-flex">
      <div class="activity-description">{{ description }}</div>
      <div class="timeplace-container">
        <div class="timeplace">{{ hour }}</div>
        <div class="timeplace">{{ place }}</div>
      </div>
    </div>
    <div class="module-bottom-flex">
      <div v-for="(company, index) in companies" :key="index">
        <a :href="company.link" target="_blank"><img class="activity-image" :src="jeec_api_url + company.logo"/></a>
      </div>
      <div v-for="(speaker, index) in speakers" :key="index">
        <a :href="speaker.linkedin_url" target="_blank"><img class="activity-image" :src="jeec_api_url + speaker.image"/></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule_company",
  props: {
    title: String,
    description: String,
    hour: String,
    place: String,
    companies: [],
    speakers: []
  },

  data() {
    return {
      jeec_api_url : process.env.VUE_APP_JEEC_BRAIN_URL,
    };
  }
}
</script>

<style scoped>

.module {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-flow: column;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-top: 20px;
  width: 91%;
}

.module-head-flex {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-flow: column;
  margin-top: 20px;

  border-top: #1C9CD8 solid 2px;
}

.name-flex {
  display: flex;
}

.module-head-text {
  background-color: #ffffff;
  height: 20.2vw;
  width: 100%;
}

.module-middle-flex {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: space-between;
  flex-wrap: wrap;
  flex-flow: row;
  text-align: center;
}

.module-bottom-flex {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-flow: row;
  margin-left: 2vw;
  padding-top: 0.5vw;
  padding-bottom: 2vw;

  border-bottom: #1C9CD8 solid 2px;
}

.timeplace-container {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-direction: column;
}

.timeplace {
  margin-top: 10px;
  margin-left: 30px;
  font-weight: 600;
  font-size: 1.8vw;
  text-align: right;
  font-weight: bold;

  color:#1C9CD8;
}

.activity-image {
    height: 6vw;
    margin: 1vw;
    margin-bottom: 0
}

.company-name {
  margin-top: 1.5vw;
  margin-left: 3vw;
  font-weight: 600;
  font-size: 3vw;
  text-align: left;
  color:#1C9CD8;
}

.activity-title {
  height: 4vw;
  margin-top: 1vw;
  margin-left: 3vw;
  text-align: left;
  font-family: 'Lato';
  font-size: 2vw;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

.speaker-company-logo {
  max-width: 230px;
  max-height: 65px;
  transition: all .2s ease-in-out;
}

.speaker-company-logo:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transform: scale(1.1); 
}

.activity-description {
  margin-top: 1.5vw;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-bottom: 7px;
  text-align: left;
  font-family: 'Lato';
  font-size: 1.5vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;

  width: 65%;
}

.speaker-card-bottom {
  height: 60px;
}

.speaker-links {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.speaker-links-el {
  width: 50%;
  float: left;
}

.speaker-link-logo {
  max-width: 30px;
  margin-right: 15px;
  transition: all .2s ease-in-out;
}

.speaker-link-logo:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.2);
}

.speaker-schedule {
  margin-top: 12px;
  width: 50%;
  float: right;
}

.speaker-schedule-day {
  font-family: 'Lato';
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}

.speaker-schedule-hour {
  font-family: 'Lato';
  font-weight: bold;
  font-size: 16px;
  color: #3477f3;
  margin-bottom: 5px;
}
</style>
