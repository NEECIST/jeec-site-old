<template>
    <div class="workshops-comp">
        <component-title title="Workshops" subtitle="Interesting topics that our partners will be teaching!"/>

        <div class="day-selector-flex">
            <div class="day-button" v-for="(day, index) in workshop_data.days" v-bind:key="day.day_name" v-on:click="selectDay(index)">
                {{ day.day_name }}
            </div>
        </div>

        <div class="workshops-flex">
            <div class="workshop-card" v-for="session in workshop_data.days[selected_day].sessions" v-bind:key="session.time">
                <div class="workshop-left">
                    <a class="helper" :href="session.company_link" target="_blank"><img class="workshop-logo" :src="session.logo"/></a>
                </div>

                <div class="workshop-right">
                    <div class="workshop-date-time">{{ session.day}} at {{ session.time }}</div>

                    <div class="workshop-title">{{ session.title }}</div>

                    
                    <a :href="session.eventbride_link" target="_blank" v-if="session.registration_open">
                        <div class="registration-button">Attend</div>
                    </a>

                    <div class="registration-closed" v-else>
                    Registrations will open soon
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "workshops",
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
  background-color: #dfe6f5;
  padding-top: 100px;
  padding-bottom: 40px;
  text-align: center;
}


.day-selector-flex {
  display: -webkit-box;  /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: left;
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
    background-color: #fafafa;
    padding-top: 20px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 20px;
    width: 550px;
    margin-bottom: 20px;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
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
  height: 60px;
}

.registration-button {
    background-color: #396c96;
    padding: 8px;
    width: 100px;
    border-radius: 5px;
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
}

.registration-button:hover {
    transform: scale(1.1,1.1);
}


/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1600px) {
  .latest-speakers-flex {
    justify-content: space-between;
    padding-left: 13vw;
    padding-right: 13vw;
  }

  .speaker-card {
      width: 450px;
  }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1200px) {
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
    margin-top: 40px;
    width: 400px;
  }

  .speaker-image {
    width: 120px;
    height: 120px;
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

  .speaker-image {
    width: 100px;
    height: 100px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 350px) {
  .speaker-card {
    width: 280px;
  }
}
</style>

