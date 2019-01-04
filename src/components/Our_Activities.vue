<template>
    <div class ="activities-comp">
        <div class="div-title">
            <span v-html="title"></span>
        </div>

        <div class="activities-flex">
            <div v-for="activity in activities" :key="activity.name">
              <div class="activity" v-bind:style="{ backgroundImage: 'url(' + activity.image + ')' }">
                <p class="activity-name">{{activity.name}}</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "our_activities",
  data() {
      return {
          title: '<span class="first-word-style">OUR</span> ACTIVITIES',
          activities: [
              {
                name: 'MATCHMAKING',
                image: 'https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17311105_10154490838085765_7317731105368184101_o.jpg?_nc_cat=108&_nc_ht=scontent.flis7-1.fna&oh=181c54e16981374115fa16c7f53438cd&oe=5C9ABBE4'
              },
              {
                name: 'WORKSHOPS',
                image: 'https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/28616406_10155431666205765_6879092902674912024_o.jpg?_nc_cat=108&_nc_ht=scontent.flis7-1.fna&oh=770e6344e4169c2b77da198882a22308&oe=5CA7866F'
              },
              {
                name: 'TECH TALKS',
                image: 'https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17359094_10154490841835765_9222700794809466547_o.jpg?_nc_cat=110&_nc_ht=scontent.flis7-1.fna&oh=aca07bce38d87422f7a7b5e33994b9f4&oe=5C65B2D7'
              },
              {
                name: 'JOB FAIR',
                image: 'https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17359094_10154490841835765_9222700794809466547_o.jpg?_nc_cat=110&_nc_ht=scontent.flis7-1.fna&oh=aca07bce38d87422f7a7b5e33994b9f4&oe=5C65B2D7'
              },
              {
                name: 'DISCUSSION PANELS',
                image: 'https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17311105_10154490838085765_7317731105368184101_o.jpg?_nc_cat=108&_nc_ht=scontent.flis7-1.fna&oh=181c54e16981374115fa16c7f53438cd&oe=5C9ABBE4'
              },
              {
                name: 'STARTUP CORNER',
                image: 'https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17311105_10154490838085765_7317731105368184101_o.jpg?_nc_cat=108&_nc_ht=scontent.flis7-1.fna&oh=181c54e16981374115fa16c7f53438cd&oe=5C9ABBE4'
              },   
          ]
      }
  }
};
</script>


<style>
.activities-comp {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
    background-color: #eeeeee;
}

.activities-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 30px;
  padding-left: 120px;
  padding-right: 120px;
}

.activity-name{
  font-family: 'Raleway', sans-serif;
  font-size: 45px;
  font-weight:1000;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.68;
  letter-spacing: -1px;
  text-align: center;
  color: #ffffff;
  display: block;
  position: relative;
  top: 0.05%;
}

.activity{
  height: 200px;
  width: 400px;
  opacity:0.7;
  border-radius: 44px;
}

@media screen and (max-width: 900px){
  .activities-flex{
    padding-top: 15px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
  }

  .activity-name{
    font-size: 30px;
    top: 25%;
  }

   .activity{
    height: 130px;
    width: 100%;
    border-radius: 0%;
    filter: hue-rotate(30deg);
  }
}

</style>