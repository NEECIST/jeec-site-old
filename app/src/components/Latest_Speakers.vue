<template>
  <div class="latest-speakers-comp">
    <component-title :title="'Speakers at ' + name" subtitle="Minds that push engineering forward"/>

    <div class="latest-speakers-flex">
        <div class="speaker-card" v-for="speaker in speakers" :key="speaker.name">

            <div><img class="speaker-image" :src="speaker.image"></div>
            
            <div class="speaker-name">{{ speaker.name }}</div>
            
            <div class="speaker-current-function">{{ speaker.position }}</div>

            <a :href="speaker.company_link" target="_blank"><img class="speaker-company-logo" :src="speaker.company_logo"/></a>

            <div>
              <div class="origin-text">{{ speaker.country }}</div>
            </div>

            <div class="speaker-notes" v-html="speaker.bio"></div>

            <div class="speaker-card-bottom">
              <div class="speaker-links">
                <a v-if="speaker.linkedin_url.length" :href="speaker.linkedin_url" target="_blank"><img class="speaker-link-logo" src="../../static/linkedin.svg"/></a>
                <a v-if="speaker.youtube_url.length" :href="speaker.youtube_url" target="_blank"><img class="speaker-link-logo" src="../../static/youtube.svg"/></a>
              </div>

              <!--
              <div class="speaker-schedule">
                <div class="speaker-schedule-day">{{ speaker.schedule.date }}</div>
                <div class="speaker-schedule-hour">{{ speaker.schedule.time }}</div>
              </div>
              -->
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "latest_speakers",
  data() {
      return {
          speakers: [{name:"Telmo Pires",country:"New York City, USA",
          bio:"Young AI and Machine Learning specialist, with previous focus on unsupervised learning methods and NN’s. IST Alumnus from Aerospace Engineering. Formerly an AI Engineer at Unbabel and Google.",
          position:"Senior Machine Learning Engineer",image:"../../static/imagens/speakers/real speakers/telmo_pires.png",company_link:"https://www.apple.com/pt/",
          company_logo:"../../static/imagens/speakers/companies/apple.png",
          linkedin_url:"https://www.linkedin.com/in/tjppires/",youtube_url:""},
          {name:"Morgan Roe",country:"Cornwall, UK",
          bio:"Morgan studied in Plymouth, UK and was involved in a wide range of engineering tasks, such as making parts for animation, maintaining and setting up robotic camera rigs.",
          position:"Director Of Operations",image:"../../static/imagens/speakers/real speakers/morgan_roe.png",company_link:"https://www.engineeredarts.co.uk/",
          company_logo:"../../static/imagens/speakers/companies/engineered_arts.jpg",
          linkedin_url:"https://discordapp.com/channels/@me/758276093458251796/1026971616091046029",youtube_url:""},
          {name:"Scott Mackenzie",country:"France",
          bio:"Scott Mackenzie is the CTO and Co-Founder of Edapt, an education-legal support company for school staff. He is also Head of Product of Truphone, working with the telecommunications market with eSIM.",
          position:"Head of Product",image:"../../static/imagens/speakers/real speakers/scott_mackenzie.png",company_link:"https://www.truphone.com/",
          company_logo:"../../static/imagens/speakers/companies/truphone.png",
          linkedin_url:"https://www.linkedin.com/in/scottmackenzie/",youtube_url:""},
          {name:"Karim Chamaa",country:"Boston, Massachusetts, USA",
          bio:"Masters in Mechatronics Engineering in NYU, developed and taught the Robotics course of Udacity.",
          position:"Head of Product",image:"../../static/imagens/speakers/real speakers/karim_chamaa.png",company_link:"https://www.amazon.jobs/en/teams/amazon-robotics",
          company_logo:"../../static/imagens/speakers/companies/amazon_robotics.png",
          linkedin_url:"https://www.linkedin.com/in/karimchamaa/",youtube_url:""},
          {name:"Luís Andrade",country:"Portugal",
          bio:"IST Alumnus in Electrical and Computer Engineering. Luís works as a Data Scientist at Spotify.",
          position:"Data Scientist",image:"../../static/imagens/speakers/real speakers/luís_andrade.png",company_link:"https://www.spotify.com/",
          company_logo:"../../static/imagens/speakers/companies/spotify.png",
          linkedin_url:"https://www.linkedin.com/in/luis-andrade-58728461/",youtube_url:""},
          {name:"Bruce Howe",country:"Honolulu, Hawaii, USA",
          bio:"Bruce Howe studied in Stanford and works today in the Joint Task Force for SMART Cables Initiative, a project to incorporate sensors into the global network of submarine telecommunication cables.",
          position:"Chair",image:"../../static/imagens/speakers/real speakers/bruce_howe.png",company_link:"https://www.smartcables.org/",
          company_logo:"../../static/imagens/speakers/companies/smart_subsea_cables.png",
          linkedin_url:"https://www.linkedin.com/in/bruce-howe-1a3746b/",youtube_url:""}]
      }
  },
  props: {
    name: String,
  },
};
</script>

<style scoped>
.latest-speakers-comp {
  width: 100%;
  background-color: #dfe6f5;
  padding-top: 90px;
  padding-bottom: 40px;
  text-align: center;
}

.latest-speakers-flex {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 6vw;
  padding-right: 6vw;
  text-align: center;
  margin-top: 20px;
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

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.origin-text {
  font-family: 'Lato';
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
}

.origin-logo, .origin-text {
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
  font-family: 'Lato';
  font-size: 18px;
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

.speaker-notes {
  margin-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  font-family: 'Lato';
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-bottom: 7px;
}

.speaker-card-bottom {
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.speaker-links {
  margin-top: 20px;
  width: 50%;
}

.speaker-link-logo {
  max-width: 30px;
  padding-left: 10px;
  padding-right: 10px;
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
