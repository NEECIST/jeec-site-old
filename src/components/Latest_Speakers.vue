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
            <div class="speaker-company">{{ speaker.company }}</div>
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
  padding-top: 30px;
  padding-left: 120px;
  padding-right: 120px;
}

.speaker-card {
    background-color: #e9e9e9;
    padding: 20px;
    border-radius: 20px;
    width: 500px;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
}

.speaker-image {
    float: left;
    width: 180px;
    height: 180px;
}

.speaker-name {

}

.speaker-current-function {

}

.speaker-company {

}

.speaker-notes {

}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 992px) {
  
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 600px) {
  
}
</style>
