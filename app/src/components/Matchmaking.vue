<template>
    <div class="matchmaking-comp">
        <component-title title="Matchmaking" subtitle="Looking for a more serious talk with a recruiter?"/>

        <div class="day-selector-flex">
            <div class="day-button" v-for="(day, index) in matchmaking_data.days" v-bind:key="day.day_name" v-on:click="selectDay(index)">
                {{ day.day_name }}
            </div>
        </div>

        <div class="matchmaking-flex">
            <div class="matchmaking-card" v-for="session in matchmaking_data.days[selected_day].sessions" v-bind:key="session.time">
                <div class="session-day">{{ matchmaking_data.days[selected_day].day_name }}</div>
                <div class="session-time">{{session.time}}</div>
                <div class="session-partners-flex">
                    <div class="session-partner" v-for="partner in session.partners" v-bind:key="partner.name">
                        <a v-bind:href="partner.link" target="_blank">
                            <img class="session-partner-logo" :src="partner.logo">
                        </a>
                    </div>
                </div>

                <a :href="session.eventbride_link" target="_blank" v-if="session.registration_open">
                    <div class="registration-button">Attend</div>
                </a>

                <div class="registration-closed" v-else>
                    Registrations will open soon
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "matchmaking",
    props: ['matchmaking_data'],
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
.matchmaking-comp {
  background-color: #dfe6f5;
  padding-top: 10px;
  width: 100%;
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

.day-button:hover {
    background-color: rgb(230, 244, 253);
    cursor: pointer;
}

.matchmaking-flex {
  display: -webkit-box;  /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.matchmaking-card {
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  width: 900px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
}

.session-day {
    font-size: 18px;
    font-weight: 600;
    height: 30px;
    font-family: 'Lato';
}

.session-time {
    font-size: 17px;
    font-weight: 600;
    font-family: 'Lato';
}

.session-partners-flex {
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
  padding-left: 1vw;
  padding-right: 1vw;
}

.session-partner-logo {
    justify-content: center;
    max-height: 80px;
    max-width: 130px;
    margin: 10px 25px;
    opacity: .85;
    transition: all .2s ease-in-out;
}


.session-partner-logo:hover {
	opacity: 1;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transform: scale(1.15); 
}

.registration-button {
    background-color: #396c96;
    padding: 8px;
    width: 100px;
    border-radius: 5px;
    font-family: 'Karla';
    font-size: 18px;
    color: white;
    text-align: center;
    transition: all .2s ease-in-out;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    margin-left: 44%;
}

.registration-closed {
    font-size: 16px;
    color:#396c96;
    font-weight: 600;
}

.registration-button:hover {
    transform: scale(1.1,1.1);
}

@media screen and (max-width: 1400px) {
  .matchmaking-flex {
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
    padding-left: 3vw;
    padding-right: 3vw;
 }

    .matchmaking-card {
        background-color: #ffffff;
        padding-top: 20px;
        padding-bottom: 5px;
        border-radius: 20px;
        width: 900px;
        box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
        margin-top: 20px;
        margin-bottom: 40px;
    }
}

@media screen and (max-width: 1000px) {
    .session-partners-flex {
        display: -webkit-box;  /* iOS 6-, Safari 3.1-6, BB7 */
        display: -ms-flexbox;  /* IE 10 */
        display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
        display: flex;         /*Firefox, Chrome, Opera */
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 15px;
        padding-left: 1vw;
        padding-right: 1vw;
    }
    
    
    .session-partner-logo {
        justify-content: center;
        max-height: 100px;
        max-width: 180px;
        margin: 20px 25px;
        opacity: .85;
        transition: all .2s ease-in-out;
    }

    .registration-button {
        background-color: #396c96;
        padding: 8px;
        width: 100px;
        position: absolute;
        float: right;
        border-radius: 5px;
        font-family: 'Karla';
        font-size: 18px;
        color: white;
        text-align: center;
        transition: all .2s ease-in-out;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    }
}

@media screen and (max-width: 560px) {
  .session-partners-container {
    margin-left: 2vw;
    margin-right: 2vw;
  }

  .session-partner-logo  {
      max-width: 110px;
      max-height: 50px;
      margin: 20px 10px;
  }

  .day-button {
    width: 100px;
    height: 30px;
    font-size: 14px;
    padding-top: 15px;
    margin: 10px; 
  }
}
</style>
