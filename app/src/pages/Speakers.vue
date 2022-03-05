<template>
    <div class="speakers-app">
        <speakers-list :event_name="event ? event.name : ''"/>
        <contacts />
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
