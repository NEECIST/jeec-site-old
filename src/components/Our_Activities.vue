<template>
    <div class ="activities-comp">
        <div class="div-title">
            <span class="first-word-style">OUR</span> ACTIVITIES
        </div>

        <div class="activities-flex">
            <div class="activity">Matchmaking
            </div>

            <div class="activity">Tech Talks
            </div>

            <div class="activity">Job Fair
                
            </div>

            <div class="activity">Discussion Panels
                
            </div>

            <div class="activity">Startup Corner
                
            </div>
        </div>
    </div>
</template>

<style>
.activities-comp {
    padding-top: 60px;
    padding-bottom: 150px;
    text-align: center;
    background-color: #eeeeee;
}


.activities-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
}

.activity {
  width: 32%;
  height: 100px;
  width: 200px;
  border-radius: 20px;
  border-color: black;
}

.activities{
  width: 98%;
  text-align: center;
  text-shadow: 0 6px 12px rgba(0, 0, 0, 0.24);
  font-family: 'Raleway', sans-serif;
  font-size: 60px;
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

   .activities{
       font-size: 30px;
       height: auto;
       text-align: center;
       line-height: normal;
   }

   .matchmaking{
  margin-top: 65px;
  float: none;
  display: inline-block;
}
    .workshops{
  margin-top: 65px;
  float: none;
  display: inline-block;
}

.tech-talks{
    margin-top: 65px;
  float: none;
  display: inline-block;
}

.job-fair{
  
    margin-top: 65px;
  float: none;
  display: inline-block;
  
}
.discussion-panels{
  
    margin-top: 65px;
  float: none;
  display: inline-block;
}

.startup-corner{
    margin-top: 65px;
  float: none;
  display: inline-block;
}

}

</style>