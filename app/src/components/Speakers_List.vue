<template>
    <div class="speakers-list-comp">
        <component-title title="Speakers @ JEEC" subtitle="The list of speakers that will attend the event during the week"/>

        <div class="speakers-flex">
            <transition name="fade">
                <div class="speaker-container" v-for="speaker in speakers" :key="speaker.name">
                    <div><img class="speaker-image" :src="speaker.image"/></div>

                    <div class="info">
                        <div class="speaker-description" v-html="speaker.notes"/>
                    </div>
                </div>
             </transition>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "speakers_list",
  data() {
      return {
          speakers: [
              {
                name: 'Jeremy Blum',
                current_function: 'Head of Electrical Engineering',
                company_logo: '../../static/speakers/shaper.png',
                company_link: 'https://www.shapertools.com/',
                notes: 'Jeremy is an ex-Google employee that runs a YouTube channel ranking over 170k subscribers where he tries to show a bit of what the world of engineering and technology is! He currently works at Shaper, in San Francisco, and is also part of Forbes "30 Under 30" list.<p>At JEEC he will explain how Shaper is changing the market and how important it is for new engineers to embrace "design-thinking" principles in order to create better products!</p>',
                image: '../../static/speakers/jeremy_blum.svg',
                origin: 'San Francisco',
                links: [
                  {
                    link: 'https://www.youtube.com/channel/UC4KXPjmKwPutGjwFZsEXB5g',
                    logo: '../../static/speakers/youtube.jpg'
                  },
                  {
                    link: 'https://www.jeremyblum.com/',
                    logo: ''
                  },
                  {
                    link: 'https://www.linkedin.com/in/jeremyeblum/',
                    logo: '../../static/speakers/linkedin.png'
                  }
                ],
                schedule: {
                  date: '12 march',
                  time: '2 pm'
                }
              }
          ]
      }
  }
};
</script>

<style scoped>
.speakers-list-comp {
    background-color: #ffffff;  
    padding-bottom: 30px;
}

.speakers-flex {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: left;
  flex: wrap;
  padding-left: 1vw;
  padding-right: 1vw;
  text-align: center;
  margin-top: 20px;
}

.speaker-container {
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 5px;
    width: 1000px;
    /*box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);*/
}

.speaker-image {
    width: 220px;
    height: 220px;
    float: left;
}

.info {
    float: right;
    text-align: left;
    padding-top: 20px;
    padding-left: 30px;
    width: 70%;
}

.speaker-description {
    font-family: 'Karla';
    font-size: 18px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1400px) {
  .speakers-to-come {
      width: 50%;
      margin-bottom: 30px;
  }
}

/* On screens that are 600px wide*/
@media screen and (max-width: 700px) {
  .speakers-at-jeec-comp {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
  }
}
</style>