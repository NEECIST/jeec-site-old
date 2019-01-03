<template>
  <div class="latest-speakers-comp">
    <div class="div-title">
      <span v-html="title"></span>
    </div>

    <div class="latest-speakers-flex">
        <div class="speaker-card" v-for="speaker in speakers" :key="speaker.name">
            <div><img class="speaker-image" :src="speaker.image"></div>
            
            <div class="speaker-name">{{ speaker.name }}</div>

            <div class="speaker-current-function">{{ speaker.current_function }}</div>
            
            <div class="company-container">
              <div class="speaker-company">{{ speaker.company }}</div>
            </div>

            <div class="speaker-notes">{{ speaker.notes }}</div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "latest_speakers",
  data() {
      return {
          title: '<span class="first-word-style">LATEST</span> SPEAKERS',
          speakers: [
              {
                name: 'Jeremy Blum',
                current_function: 'Head of Electrical Engineering',
                company: 'Shaper, San Francisco',
                notes: 'YouTuber and former Google worker.',
                image: '../../static/jeremy_blum.svg'
              },
              {
                name: 'Aida Fernandez Peña',
                current_function: 'Product Manager',
                company: 'InterCloud, Paris',
                notes: 'Creating products users will find useful, usable and adapted to their real needs.',
                image: '../../static/aida_peña.svg'
              }
          ]
      }
  }
};
</script>

<style>
.latest-speakers-comp {
  width: 100%;
  background-color: #f3f3f3;
  padding-top: 47px;
  padding-bottom: 47px;
  text-align: center;
}

.latest-speakers-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 23vw;
  padding-right: 23vw;
}

.speaker-card {
    background-color: #e9e9e9;
    font-family: 'Roboto';
    padding-top: 10px;
    padding-bottom: 20px;
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
  height: 50px;
  margin-top: 10px;
  text-align: center;
}

.company-container {
  width: 100%;
  background-color: rgb(41, 141, 235);
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
      width: 100px;
      height: 100px;
  }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1100px) {
  .latest-speakers-flex {
    padding-left: 7vw;
    padding-right: 7vw;
  }
  
  .speaker-card {
      width: 300px;
  }
}



/* On screens that are 600px wide*/
@media only screen and (max-width: 750px) {
  .latest-speakers-flex {
    justify-content: space-between;
    display: inline-block;
  }

  .speaker-card {
    margin-top: 40px;
    border-radius: 20px;
    width: 350px;
  }

  .speaker-image {
    width: 100px;
    height: 100px;
  }
}
</style>
