<template>
    <div class="workshops-comp">
        <component-title title="TechTalks" subtitle="Interesting topics that our partners will be teaching!"/>

        <div class="select-day">Select the day</div>
        <div class="day-selector-flex">
            <div class="day-button" v-for="(day, index) in workshop_data.days" v-bind:key="day.day_name" v-on:click="selectDay(index)">
                {{ day.day_name }}
            </div>
        </div>

        <div class="workshops-flex">
            <div class="workshop-card" v-for="session in workshop_data.days[selected_day].sessions" v-bind:key="session.time">
                <div class="workshop-card-top">
                    <div class="workshop-left">
                        <a class="helper" :href="session.company_link" target="_blank"><img class="workshop-logo" :src="session.logo"/></a>
                    </div>

                    <div class="workshop-right">
                        <div class="workshop-date-time">{{ workshop_data.days[selected_day].day_name }} @ {{ session.time }}</div>

                        <div class="workshop-title">{{ session.title }}</div>
                    </div>
                </div>

                <div class="workshop-description" v-if="session.description != ''"><b>Description:</b><p>{{ session.description }}</p></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "techtalks",
    props: ['workshop_data'],
    data() {
        return {
            selected_day: 0,
        }
    },

    methods: {
        selectDay(index) {
            this.selected_day = index;
        }
    },
}
</script>

<style scoped>
.workshops-comp {
  width: 100%;
  background-color: #ffffff;
  padding-top: 100px;
  padding-bottom: 40px;
  text-align: center;
}

.select-day {
    font-size: 19px;
    font-family: 'Lato';
    margin-top: 20px;
    font-weight: 600;
}

.day-selector-flex {
  display: -webkit-box;  /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 5vw;
  padding-right: 5vw;
}

.day-button {
    border-color: rgb(34, 130, 214);
    border-style: solid;
    background-color: #ffffff;
    border-width: 1px;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    font-size: 18px;
    padding-top: 16px;
    font-family: 'Lato';
    font-weight: 600;
    margin: 10px; 
}

.workshops-flex {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 10vw;
  padding-right: 10vw;
  text-align: center;
  margin-top: 20px;
}

.workshop-card {
    background-color: #ffffff;
    padding-top: 20px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 20px;
    width: 550px;
    margin-bottom: 20px;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
}

.workshop-card-top {
    height: 90px;
}

.workshop-left {
    float: left;
    width: 40%;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center; margin: 1em 0;
}

.workshop-right {
    float: right;
    width: 60%;
    text-align: left;
}

.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

.workshop-logo {
    justify-content: center;
    max-height: 80px;
    max-width: 160px;
    vertical-align: middle;
    opacity: .85;
    transition: all .1s ease-in-out;
}

.workshop-logo:hover {
    transform: scale(1.1,1.1)
}

.workshop-title {
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
}

.registration {
    height: 60px;
}

.registration-button {
    background-color: #396c96;
    padding: 8px;
    width: 100px;
    border-radius: 5px;
    margin-top: 10px;
    font-family: 'Karla';
    font-size: 18px;
    color: white;
    float: right;
    text-align: center;
    transition: all .2s ease-in-out;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
}

.registration-closed {
    font-size: 16px;
    color:#396c96;
    font-weight: 600;
    margin-top: 20px;
}

.registration-button:hover {
    transform: scale(1.1,1.1);
}

.workshop-description {
    font-size: 17px;
    line-height: 23px;
    font-family: 'Lato';
    text-align: left;
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1550px) {
    .workshops-flex {
        padding-left: 2vw;
        padding-right: 2vw;
    }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1300px) {
  .workshops-flex {
  justify-content: center;
  flex-direction: column;
  padding-left: 5vw;
  padding-right: 5vw;
}


.workshop-card {
    width: 95%;
}

}

/* On screens that are 600px wide*/
@media only screen and (max-width: 950px) {
  
.workshop-card {
    width: 92%;
}

}

/* On screens that are 600px wide*/
@media only screen and (max-width: 700px) {
  .workshop-card {
    width: 88%;
}
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 650px) {
  .workshop-left {
    float: initial;
    width: 100%;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center; margin: 1.5em 0;
}

.workshop-right {
    float: initial;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
}

.workshop-card-top {
    height: 150px;
}
}

@media only screen and (max-width: 460px) {
.workshop-card {
    width: 85%;
}

.registration-button {
    margin-top: 20px;
    width: 150px;
    padding: 10px;
    font-size: 21px;
}

.workshop-card-top {
    height: 150px;
}

.registration {
    height: 80px;
}
}

@media only screen and (max-width: 380px) {
.workshop-card {
    width: 80%;
}

.workshop-card-top {
    height: 180px;
}

.day-button {
    width: 250px;
    height: 30px;
    font-size: 17px;
    padding-top: 8px;
    margin: 8px; 
}
}

@media only screen and (max-width: 300px) {
.workshop-card {
    width: 74%;
}

.workshop-card-top {
    height: 200px;
}
}


</style>

