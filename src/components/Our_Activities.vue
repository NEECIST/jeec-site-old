<template>
    <div class ="activities-comp">
        <div class="div-title">
            <span class="first-word-style">OUR</span> ACTIVITIES
        </div>

        <div class="activities-flex">
            <div class="matchmaking"><p class="activity-name">MATCHMAKING</p>
            </div>

            <div class="workshops"><p class="activity-name">WORKSHOPS</p>
            </div>

            <div class="tech-talks"><p class="activity-name">TECH TALKS</p>
            </div>

            <div class="job-fair"><p class="activity-name">JOB FAIR</p>
                
            </div>

            <div class="discussion-panels"><p class="activity-name">DISCUSSION PANELS</p>
                
            </div>

            <div class="startup-corner"><p class="activity-name">STARTUP CORNER</p>
                
            </div>
        </div>
    </div>
</template>

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
  font-size: 50px;
  font-weight:1000;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.68;
  letter-spacing: -1px;
  text-align: center;
  color: #ffffff;
  display: block;
  position: relative;
  top: 75%;
}

.matchmaking{
  height: 350px;
  width: 350px;
  background-image: url("https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17311105_10154490838085765_7317731105368184101_o.jpg?_nc_cat=108&_nc_ht=scontent.flis7-1.fna&oh=181c54e16981374115fa16c7f53438cd&oe=5C9ABBE4");
  opacity:0.7;
  border-radius: 44px;
}

.workshops{
  background-image: url("https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/28616406_10155431666205765_6879092902674912024_o.jpg?_nc_cat=108&_nc_ht=scontent.flis7-1.fna&oh=770e6344e4169c2b77da198882a22308&oe=5CA7866F");
  height: 350px;
  width: 350px;
  opacity:0.7;
  border-radius: 44px;
}

.tech-talks{
  background-image: url("https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17359094_10154490841835765_9222700794809466547_o.jpg?_nc_cat=110&_nc_ht=scontent.flis7-1.fna&oh=aca07bce38d87422f7a7b5e33994b9f4&oe=5C65B2D7");
  height: 350px;
  width: 350px;
  opacity:0.7;
  border-radius: 44px;
}

.job-fair{
  background-image: url("https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17359094_10154490841835765_9222700794809466547_o.jpg?_nc_cat=110&_nc_ht=scontent.flis7-1.fna&oh=aca07bce38d87422f7a7b5e33994b9f4&oe=5C65B2D7");
  height: 350px;
  width: 350px;
  opacity:0.7;
  border-radius: 44px;
  display: none;
  
}
.discussion-panels{
  background-image: url("https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17359094_10154490841835765_9222700794809466547_o.jpg?_nc_cat=110&_nc_ht=scontent.flis7-1.fna&oh=aca07bce38d87422f7a7b5e33994b9f4&oe=5C65B2D7");
  height: 400px;
  width: 400px;
  opacity:0.7;
  border-radius: 44px;
  display: none;
}

.startup-corner{
  background-image: url("https://scontent.flis7-1.fna.fbcdn.net/v/t31.0-8/17359094_10154490841835765_9222700794809466547_o.jpg?_nc_cat=110&_nc_ht=scontent.flis7-1.fna&oh=aca07bce38d87422f7a7b5e33994b9f4&oe=5C65B2D7");
  height: 400px;
  width: 400px;
  opacity:0.7;
  border-radius: 44px;
  display: none;
}

@media screen and (max-width: 600px){
  .activities-flex{
    display: inline-flex;
    text-align: center;
    flex-direction: column;
  }

  .activity-name{
    font-size: 25px;
    top: 65%;
  }

   .matchmaking{
 height: 200px;
 width: 200px;
}
    .workshops{
  height: 200px;
 width: 200px;
 margin-top: 10px;
}

.tech-talks{
  height: 200px;
 width: 200px;
 margin-top: 10px;
}

.job-fair{
  height: 200px;
 width: 200px;
 display:initial;
 margin-top: 10px;
}
.discussion-panels{
  height: 200px;
 width: 200px;
 display: initial;
 margin-top: 10px;
}

.startup-corner{
 height: 200px;
 width: 200px;
 display: initial;
 margin-top: 10px;
}

}

</style>