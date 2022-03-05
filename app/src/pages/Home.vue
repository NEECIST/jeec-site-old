<template>
  <div class="home-app">
    <home-top
      :date="event ? getDateString(event.start_date, event.end_date) : ''"
      :location="event ? event.location : ''"
      :image="event ? jeec_brain_url + event.logo : ''"
      :facebook_link="event ? event.facebook_link : ''"
      :youtube_link="event ? event.youtube_link : ''"
      :instagram_link="event ? event.instagram_link : ''"
    />

    <latest-speakers :name="event ? event.name : ''"/>
    <!--
        <div>
            <div style="float: left; width: 40%">
                <iframe width="100%" height="600px" src="https://www.youtube.com/embed/F-Vawhs9-4U" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>-->

    <who-are-we :activities="event ? event.activity_types.data : []" />

    <why-attend />

    <!--<ouractivities/>-->

    <contacts/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      event: null,
      jeec_api_url: process.env.VUE_APP_JEEC_WEBSITE_API_URL,
      jeec_brain_url: process.env.VUE_APP_JEEC_BRAIN_URL,
    };
  },
  methods: {
    getDateString(start_date, end_date) {
      var startDate = new Date(start_date.substring(0, 11));
      var endDate = new Date(end_date.substring(0, 11));
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      if (startDate.getMonth() === endDate.getMonth()) {
        return (
          this.getNumberOrdinal(startDate.getDate()) +
          " to " +
          this.getNumberOrdinal(endDate.getDate()) +
          " of " +
          monthNames[startDate.getMonth()] +
          " " +
          startDate.getFullYear()
        );
      } else if (
        startDate.getMonth() !== endDate.getMonth() &&
        startDate.getFullYear() === endDate.getFullYear()
      ) {
        return (
          this.getNumberOrdinal(startDate.getDate()) +
          " of " +
          monthNames[startDate.getMonth()] +
          " to " +
          this.getNumberOrdinal(endDate.getDate()) +
          " of " +
          monthNames[endDate.getMonth()] +
          " " +
          startDate.getFullYear()
        );
      } else {
        return (
          this.getNumberOrdinal(startDate.getDate()) +
          " of " +
          monthNames[startDate.getMonth()] +
          " " +
          startDate.getFullYear() +
          " to " +
          this.getNumberOrdinal(endDate.getDate()) +
          " of " +
          monthNames[endDate.getMonth()] +
          " " +
          endDate.getFullYear()
        );
      }
      return " aa ";
    },
    getNumberOrdinal(n) {
      return (n += [, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th");
    },
  },
  mounted() {
    axios
      .get(this.jeec_api_url + "/event", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
      })
      .then((response) => (this.event = response.data["data"]));
  },
};
</script>
<style>
</style>