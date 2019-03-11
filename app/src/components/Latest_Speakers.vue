<template>
  <div class="latest-speakers-comp">
    <component-title title="Latest Speakers" subtitle="Minds that push engineering forward"/>

    <div class="latest-speakers-flex">
        <div class="speaker-card" v-for="speaker in speakers" :key="speaker.name">

            <div><img class="speaker-image" :src="speaker.image"></div>
            
            <div class="speaker-name">{{ speaker.name }}</div>
            
            <div class="speaker-current-function">{{ speaker.current_function }}</div>

            <a :href="speaker.company_link" target="_blank"><img class="speaker-company-logo" :src="speaker.company_logo"/></a>

            <div>
              <div class="origin-text">{{ speaker.origin }}</div>
            </div>

            <div class="speaker-notes" v-html="speaker.notes"></div>

            <div class="speaker-card-bottom">
              <div class="speaker-links">
                <a v-for="link in speaker.links" :key="link.link" :href="link.link" target="_blank"><img class="speaker-link-logo" :src="link.logo"/></a>
              </div>

              <div class="speaker-schedule">
                <div class="speaker-schedule-day">{{ speaker.schedule.date }}</div>
                <div class="speaker-schedule-hour">{{ speaker.schedule.time }}</div>
              </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "latest_speakers",
  data() {
      return {
          speakers: [
              {
                name: 'Konstantinos Laskaris',
                current_function: 'Principal Motor Designer',
                company_logo: '../../static/speakers/tesla.png',
                company_link: 'https://www.tesla.com/',
                notes: 'An expert in high performance powertrain systems. He was also a central piece in the development of the linear motor for the Hyperloop.',
                image: '../../static/speakers/konstantinos_laskaris.png',
                origin: 'San Francisco, California',
                links: [
                  {
                    link: 'https://www.linkedin.com/in/konstantinos-laskaris-95b40a',
                    logo: '../../static/speakers/linkedin.png'
                  }
                ],
                schedule: {
                  date: '15 march',
                  time: '2 pm'
                }
              },
              {
                name: 'Miguel Gonçalves',
                current_function: 'Comandante Executivo',
                company_logo: '../../static/speakers/spark.png',
                company_link: 'http://sparkagency.pt/',
                notes: "An entrepreneur, travel consultant and co-founder of Spark, a Portuguese agency specializing in talent management and employer branding. Face of Pitch Bootcamp.",
                image: '../../static/speakers/miguel_gonçalves.png',
                origin: 'Portugal',
                links: [
                  {
                    link: 'https://www.linkedin.com/in/miguel-gon%C3%A7alves-2490228b/?originalSubdomain=pt',
                    logo: '../../static/speakers/linkedin.png'
                  }
                ],
                schedule: {
                  date: '13 march',
                  time: '2 pm'
                }
              },
              {
                name: 'António Alegria',
                current_function: 'Head of Artificial Intelligence',
                company_logo: '../../static/speakers/outsystems.png',
                company_link: 'https://www.outsystems.com/',
                notes: 'An experienced engineer specialized in AI, Machine Learning, Fraud Prevention and Large Scala Data Engineering. <b>Técnico alumni</b> - Computer Engineering.',
                image: '../../static/speakers/antonio_alegria.png',
                origin: 'Portugal',
                links: [
                  {
                    link: 'https://www.linkedin.com/in/antonioalegria/',
                    logo: '../../static/speakers/linkedin.png'
                  }
                ],
                schedule: {
                  date: '11 march',
                  time: '3:30 pm'
                }
              }
          ]
      }
  }
};
</script>

<style scoped>
.latest-speakers-comp {
  width: 100%;
  background-color: #dfe6f5;
  padding-top: 10px;
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
  flex: wrap;
  padding-left: 5vw;
  padding-right: 5vw;
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
    width: 400px;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
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
  height: 35px;
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
  max-width: 195px;
  max-height: 55px;
  transition: all .2s ease-in-out;
}

.speaker-company-logo:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transform: scale(1.1); 
}

.speaker-notes {
  margin-top: 15px;
  padding-left: 13px;
  padding-right: 13px;
  font-family: 'Lato';
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
