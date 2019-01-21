<template>
  <div class="latest-speakers-comp">
    <component-title title="Latest Speakers" subtitle="Minds that push engineering forward"/>

    <div class="latest-speakers-flex">
        <div class="speaker-card" v-for="speaker in speakers" :key="speaker.name">
            <div><img class="speaker-image" :src="speaker.image"></div>
            
            <div class="speaker-name">{{ speaker.name }}</div>

            <div class="speaker-current-function">{{ speaker.current_function }}</div>
            
            <div class="company-container">
              <div class="speaker-company">{{ speaker.company }}</div>
            </div>

            <div class="speaker-notes" v-html="speaker.notes"></div>
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
                name: 'Jeremy Blum',
                current_function: 'Head of Electrical Engineering',
                company: 'Shaper, San Francisco',
                related_companies: [
                  {
                    name: 'Google',
                    logo: ''
                  },
                  {
                    
                  }
                ],
                notes: 'YouTuber and former Google worker. <div style="margin-bottom: 20px;"><a href="https://www.youtube.com/channel/UC4KXPjmKwPutGjwFZsEXB5g" style="float:left;margin-left:20%;">Youtube Channel</a><a href="https://www.jeremyblum.com/" style="float:right; margin-right:20%;">Website</a></div>',
                image: '../../static/jeremy_blum.svg'
              }
          ]
      }
  }
};
</script>

<style>
.latest-speakers-comp {
  width: 100%;
  background-color: #dfe6f5;
  padding-top: 10px;
  padding-bottom: 40px;
  text-align: center;
}

.latest-speakers-flex {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 23vw;
  padding-right: 23vw;
  text-align: center;
  margin-top: 20px;
}

a {
  color: rgb(55, 123, 190);
  text-decoration: underline;
}

.speaker-card {
    background-color: #fafafa;
    font-family: 'Roboto';
    padding-top: 20px;
    padding-bottom: 15px;
    border-radius: 20px;
    width: 400px;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
}

.speaker-image {
    width: 160px;
    height: 160px;
}

.speaker-name {
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}

.speaker-current-function {
  height: 40px;
  margin-top: 10px;
  text-align: center;
}

.company-container {
  width: 100%;
  background-color: rgb(41, 141, 235);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding-top: 5px;
  padding-bottom: 5px;
}

.speaker-company {
  font-size: 20px;
  color: white;
  text-align: center;
}

.speaker-notes {
  margin-top: 20px;
  text-align: center;
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1600px) {
  .latest-speakers-flex {
    justify-content: space-between;
    padding-left: 15vw;
    padding-right: 15vw;
  }

  .speaker-card {
      width: 350px;
  }

  .speaker-image {
      width: 130px;
      height: 130px;
  }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1100px) {
  .latest-speakers-flex {
    padding-left: 7vw;
    padding-right: 7vw;
  }
  
  .speaker-card {
      width: 350px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 850px) {
  .latest-speakers-flex {
    justify-content: space-between;
    display: inline-block;
  }

  .speaker-card {
    margin-top: 10px;
    border-radius: 20px;
    width: 300px;
  }

  .speaker-image {
    width: 120px;
    height: 120px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 400px) {
  .speaker-card {
    margin-top: 10px;
    border-radius: 20px;
    width: 80vw;
  }

  .speaker-company {
    font-size: 17px;
  }

  .speaker-image {
    width: 100px;
    height: 100px;
  }
}
</style>