<template>
    <div class="job-fair-comp">
        <component-title title="Job Fair" subtitle="Find out which companies will be present at JEEC"/>

        <div class="select-day">Select the day</div>
        <div class="day-selector-flex">
            <div class="day-button" v-for="(day, index) in job_fair_data.days" v-bind:key="day.day_name" v-on:click="selectDay(index)">
                {{ day.day_name }}
            </div>
        </div>

        <div class="fair-partners-container" v-bind:style="{ borderColor: job_fair_data.days[selected_day].border_color }">
            <div class="fair-partners-flex">
                <div class="fair-partner" v-for="partner in job_fair_data.days[selected_day].partners" :key="partner.name">
                    <a v-bind:href="partner.link" target="_blank">
                        <img class="fair-partner-logo" :src="partner.logo">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "job_fair",
    props: ['job_fair_data'],
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

<style>
.job-fair-comp {
  width: 100%;
  background-color: #ffffff;
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

.day-button:hover {
    background-color: rgb(230, 244, 253);
    cursor: pointer;
}

.fair-partners-container {
    background-color: white;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 2px;
    border-radius: 20px;
    margin-left: 5vw;
    margin-right: 5vw;
}

.fair-partners-flex {
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

.fair-partner-logo {
    justify-content: center;
    max-height: 80px;
    max-width: 130px;
    margin: 10px 25px;
    opacity: .85;
    transition: all .2s ease-in-out;
}

.fair-partner-logo:hover {
	opacity: 1;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transform: scale(1.15); 
}

@media screen and (max-width: 1400px) {
    .fair-partner-logo {
      max-width: 120px;
      max-height: 70px;
      margin: 20px 25px;
  }
}

@media screen and (max-width: 560px) {
  .fair-partners-container {
    margin-left: 2vw;
    margin-right: 2vw;
  }

  .fair-partner-logo  {
      max-width: 110px;
      max-height: 50px;
      margin: 20px 10px;
  }
}

@media screen and (max-width: 380px) {
.day-button {
    width: 250px;
    height: 40px;
    font-size: 20px;
    padding-top: 16px;
    margin: 10px; 
}
}
</style>
