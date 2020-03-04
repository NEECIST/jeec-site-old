<template>
  <div class="module">
    <div class="module-head-flex">
      <div class="module-left-head-flex">
        <div class="type-name">
          {{ type }} |
          <a style="font-size: 2vw; margin-left: 0px" class="type-name">{{ day }}</a>
        </div>
        <div class="module-image-flex" v-if="companies.length">
          <div v-for="(company, index) in companies" :key="index">
            <a :href="company.link" target="_blank">
              <img class="activity-image" :src="jeec_api_url + company.logo" />
            </a>
          </div>
        </div>
        <div class="module-image-flex" v-if="speakers.length">
          <div v-for="speaker in speakers" :key="speaker.name" style="margin-right: 1vw;">
            <a :href="speaker.linkedin_url" target="_blank">
              <img class="speaker-image" :src="jeec_api_url + speaker.image" />
            </a>
            <div class="speaker-name">{{ speaker.name }}</div>
            <a :href="speaker.company_link" target="_blank">
              <img class="activity-image" :src="jeec_api_url + speaker.company_logo" />
            </a>
          </div>
        </div>
        <div class="activity-title" v-if="title !== null || title!== ''">{{ title }}</div>
      </div>
      <div class="timeplace-container">
        <div class="timeplace">{{ place }}</div>
        <div class="timeplace">{{ hour }}</div>
      </div>
    </div>
    <div class="module-bottom-flex">
      <div class="activity-description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule_company",
  props: {
    type: String,
    title: String,
    description: String,
    day: String,
    hour: String,
    place: String,
    companies: Array,
    speakers: Array
  },

  data() {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL
    };
  }
};
</script>

<style scoped>
.module {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-flow: column;
  padding-left: 2vw;
  padding-right: 2vw;
  margin-top: 0.5vw;
  width: 91%;

  /* border: green solid 3px; */
}

.module-head-flex {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-between;
  flex-wrap: wrap;
  flex-flow: row;

  /* border: gray solid 3px; */
}

.module-left-head-flex {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-flow: column;
  width: 62vw;

  /* border: black solid 3px; */
}

.name-flex {
  display: flex;
}

.module-bottom-flex {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-between;
  flex-wrap: wrap;
  flex-flow: row;
  text-align: center;

  /* border: brown solid 3px; */

  border-bottom: #1c9cd8 solid 2px;
}

.module-image-flex {
  display: -webkit-box; /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex; /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  margin-left: 2vw;
  margin-bottom: 1vw;
  /* padding-top: 0.5vw;
  margin-bottom: 2vw; */

  /* border: pink solid 3px; */
}

.timeplace-container {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 1.4vw;

  /* border: red solid 3px; */
}

.timeplace {
  margin-top: 10px;
  margin-left: 30px;
  font-weight: 600;
  font-size: 1.8vw;
  text-align: right;
  font-weight: bold;

  color: #1c9cd8;
}

.activity-image {
  max-height: 4vw;
  margin: 1vw;
  margin-bottom: 0;
  max-width: 10vw;
}

.speaker-image {
  max-height: 7vw;
  margin: 1vw;
  margin-bottom: 0;
  max-width: 10vw;
}

.type-name {
  margin-top: 1.5vw;
  margin-left: 3vw;
  font-weight: 600;
  font-size: 2.5vw;
  text-align: left;
  color: #1c9cd8;
}

.activity-title {
  /* height: 4vw; */
  margin-left: 3vw;
  margin-bottom: 1vw;
  text-align: left;
  font-family: "Lato";
  font-size: 2vw;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

.speaker-name {
  text-align: center;
  font-family: "Lato";
  font-size: 1.5vw;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4b4a4a;
}

.speaker-company-logo {
  max-width: 230px;
  max-height: 65px;
  transition: all 0.2s ease-in-out;
}

.speaker-company-logo:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.1);
}

.activity-description {
  margin-left: 3vw;
  margin-right: 3vw;
  margin-bottom: 1vw;
  text-align: left;
  font-family: "Lato";
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
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
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
  transition: all 0.2s ease-in-out;
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
  font-family: "Lato";
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}

.speaker-schedule-hour {
  font-family: "Lato";
  font-weight: bold;
  font-size: 16px;
  color: #3477f3;
  margin-bottom: 5px;
}

@media screen and (max-width: 800px) {
  .module-left-head-flex {
    display: flex;
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-flow: column;
    width: 50vw;

    /* border: black solid 3px; */
  }

  .timeplace {
    margin-top: 10px;
    margin-left: 30px;
    font-weight: 600;
    font-size: 3vw;
    text-align: right;
    font-weight: bold;

    color: #1c9cd8;
  }

  .activity-image {
    max-height: 6vw;
    max-width: 15vw;
    margin: 1vw;
    margin-bottom: 0;
  }

   .speaker-image {
    max-height: 10vw;
    max-width: 15vw;
    margin: 1vw;
    margin-bottom: 0;
  }

  .type-name {
    margin-top: 1.5vw;
    margin-left: 3vw;
    font-weight: 600;
    font-size: 3vw;
    text-align: left;
    color: #1c9cd8;
  }

  .activity-title {
    /* height: 6vw; */
    margin-left: 3vw;
    margin-bottom: 1vw;
    text-align: left;
    font-family: "Lato";
    font-size: 3vw;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
  }

  .speaker-name {
    text-align: center;
    font-family: "Lato";
    font-size: 2vw;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4b4a4a;
  }

  .activity-description {
    margin-top: 1.5vw;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-bottom: 7px;
    text-align: left;
    font-family: "Lato";
    font-size: 2vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;

    width: 65%;
  }
}
</style>
