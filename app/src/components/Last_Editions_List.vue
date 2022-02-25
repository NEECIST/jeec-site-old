<template>
<div class="past-entities">
  <div class="past-speakers-comp">
    <div class="speakers-list-comp">
      <component-title
        title="RENOWED SPEAKERS AT PREVIOUS JEEC EDITIONS"
        subtitle="List of guest speakers that stole the show!"
      />
      <div class="past-speakers-flex">
        <div class="speaker-card" v-for="(speaker,speaker_id) in speakers" :key="speaker_id">
          <div>
            <img class="speaker-image" :src="jeec_api_url + speaker.image">
          </div>
          
          <div class="speaker-name">{{ speaker.name }}</div>

          <div class="speaker-current-function">{{ speaker.position }}</div>

          <a :href="speaker.company_link" target="_blank">
            <img class="speaker-company-logo" :src="jeec_api_url + speaker.company_logo">
          </a>

          <div>
            <div class="origin-text" v-html="speaker.country"/>
          </div>

          <!--<div class="speaker-notes" v-html="speaker.bio"></div>-->
          
          <div class="speaker-card-bottom">
            <div class="speaker-links">
                <a v-if="speaker.linkedin_url.length" :href="speaker.linkedin_url" target="_blank"><img class="speaker-link-logo" src="../../static/linkedin.svg"/></a>
                <a v-if="speaker.youtube_url.length" :href="speaker.youtube_url" target="_blank"><img class="speaker-link-logo" src="../../static/youtube.svg"/></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="past-company-comp">
    <div class="speakers-list-comp">
      <component-title
        title="RENOWED COMPANIES AT PREVIOUS JEEC EDITIONS"
        subtitle="List of brands that supported us in the past!"
      />
      <div class="past-company-flex">
        <div class="company-card" v-for="(company,company_id) in companies" :key="company_id">
          <div>
            <a v-bind:href="company.link" target="_blank">
              <img class="speaker-company-logo" :src="jeec_api_url + company.logo">
            </a>
          </div>
          
          <div class="speaker-name">{{ company.name }}</div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "last_editions_list",
  data() {
    return {
      jeec_api_url : process.env.VUE_APP_JEEC_BRAIN_URL,
      speakers: [],
      companies: []
    };
  },

  mounted () {
    axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/speakers', {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY
        }
      })
      .then(response => (this.speakers = response.data['data'].splice(0,4)))

    axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=silver', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
            }
        })
        .then(response => (this.companies = response.data['data']));
  }
};
</script>

<style scoped>
.past-speakers-comp {
  width: 100%;
  background-color: #dfe6f5;
  padding-top: 90px;
  padding-bottom: 15px;
  text-align: center;
}

.past-company-comp {
  width: 100%;
  background-color: #dfe6f5;
  padding-top: 5px;
  padding-bottom: 40px;
  text-align: center;
}

.past-speakers-flex {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 6vw;
  padding-right: 6vw;
  text-align: center;
  margin-bottom: 20px;
}

.past-company-flex {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 1vw;
  padding-right: 1vw;
  text-align: center;
  margin-bottom: 15px;
}

a {
  color: rgb(55, 123, 190);
  text-decoration: underline;
}

.speaker-card {
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 5px;
  border-radius: 20px;
  width: 450px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  margin-bottom: 40px;
}

.company-card {
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 5px;
  border-radius: 20px;
  width: 250px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  margin-bottom: 40px;
}

.origin-text {
  font-family: "Lato";
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
}

.origin-logo,
.origin-text {
  display: inline-block;
}

.speaker-image {
  width: 160px;
  height: 160px;
}

.speaker-name {
  margin-top: 15px;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
}

.speaker-current-function {
  height: 40px;
  margin-top: 10px;
  text-align: center;
  font-family: "Lato";
  font-size: 18px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

.company-container {
  width: 100%;
  background-color: rgb(41, 141, 235);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 15px;
}

.speaker-company-logo {
  max-height: 65px;
  max-width: 230px;
  transition: all 0.2s ease-in-out;
}

.speaker-company-logo:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.1);
}

.speaker-notes {
  margin-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  font-family: "Lato";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-bottom: 7px;
}

.speaker-card-bottom {
  height: 60px;
}

.speaker-links {
  margin-top: 20px;
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

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1600px) {
  .latest-speakers-flex {
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .speaker-card {
    width: 350px;
  }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1200px) {
  .latest-speakers-flex {
    justify-content: space-between;
    display: inline-block;
    padding-left: 7vw;
    padding-right: 7vw;
  }

  .speaker-card {
    margin-top: 40px;
    width: 450px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 850px) {
  .latest-speakers-flex {
    justify-content: space-between;
    display: inline-block;
  }

  .speaker-card {
    margin-top: 40px;
    width: 400px;
  }

  .speaker-image {
    width: 140px;
    height: 140px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 550px) {
  .speaker-card {
    margin-top: 40px;
    border-radius: 20px;
    width: 310px;
  }

  .speaker-company {
    font-size: 17px;
  }

  .speaker-name {
    margin-top: 10px;
  }
}

/* On screens that are 350px wide*/
@media only screen and (max-width: 350px) {
  .speaker-card {
    width: 280px;
  }

  .speaker-image {
    width: 130px;
    height: 130px;
  }
}
</style>