<template>
    <div class ="OurActivities">
        <div class="Title">
            <span class="title-left">OUR </span> ACTIVITIES
        </div>

        <div class="Subtitle">What we have to offer</div>

        <div class="activities">
            <span class="matchmaking">Matchmaking</span>
            <span class="workshops">Workshops</span>

            <span class="tech-talks">Tech Talks</span>
            <span class="job-fair">Job Fair</span>

            <span class="discussion-panels">Discussion Panels</span>
            <span class="startup-corner">Startup Corner</span>
        </div>
    </div>
</template>

<style>
.OurActivities{
    height:800px;
    width: auto;
    background-color: #f1f7ff;
}

.Title {
  height: 94px;
  width: 501px;
  padding-left: 101px;
  padding-top: 25px;
  font-family: 'Raleway', sans-serif;
  font-size: 70px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -4px;
  text-align: left;
  color: #00155b;
}

.title-left {
  font-weight: bold;
  color: #0465d4;
}

.Subtitle{
    padding-left: 101px;
    width: 367px;
  height: 53px;
  font-family: 'Raleway', sans-serif;
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -1.2px;
  text-align: left;
  color: #7a7a7a;
 
}

.activities{
  height: 600px;
  width: 98%;
  display: inline-block;
  text-align: center;
  min-width: 1400px;
  max-width: 1900px;
  text-shadow: 0 6px 12px rgba(0, 0, 0, 0.24);
  font-family: 'Raleway', sans-serif;
  font-size: 80px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.49;
  letter-spacing: -1.4px;
  color: #000000;
}

.matchmaking{
   
  float: left;
  margin-top: 125px;
  margin-left:11.5%;
}

.workshops{
    float: right;
  margin-top: 125px;
  margin-right:12.5%;
}

.tech-talks{
    float: left;
  margin-top: 96px;
  margin-left: 14.3%;
}

.job-fair{
  
    float: right;
  margin-top: 96px;
  margin-right:18%;
  
}
.discussion-panels{
  
    float: left;
    margin-top: 96px;
    margin-left: 6.5%
}

.startup-corner{
    float: right;
    margin-top: 96px;
    margin-right: 10.4%;
}

@media screen and (max-width: 1200px){
    .OurActivities{
        height: auto;
    }

   .activities{
       min-width: 50%;
       width: 50%;
       font-size: 80px;
       height: auto;
       line-height: normal;
   }

   .matchmaking{
  margin-top: 65px;
  float: none;
  display: inline-block;
  text-align: center;
  margin-left: auto;
}
    .workshops{
  margin-top: 65px;
  margin-right: auto;
  text-align: center;
  float: none;
  display: inline-block;
}

.tech-talks{
    margin-top: 65px;
  margin-left: auto;
  text-align: center;
  float: none;
  display: inline-block;
}

.job-fair{
  
    margin-top: 65px;
  margin-right: auto;
  text-align: center;
  float: none;
  display: inline-block;
  
}
.discussion-panels{
  
    margin-top: 65px;
  margin-left: auto;
  text-align: center;
  float: none;
  display: inline-block;
}

.startup-corner{
    margin-top: 65px;
  margin-right: auto;
  text-align: center;
  float: none;
  display: inline-block;
}

}

</style>