<template>
  <div class="home-app">
    <home-top :key="loaded"
      :date="event ? getDateString(event.start_date, event.end_date) : ''"
      :location="event ? event.location : ''"
      :image="event_logo"
      :facebook_link="event ? event.facebook_link : ''"
      :youtube_link="event ? event.youtube_link : ''"
      :instagram_link="event ? event.instagram_link : ''"
      :linkedin_link="'https://www.linkedin.com/company/jeecist/'"
    />
    <latest-speakers :name="event ? event.name : ''"/>
    <!--
      :image="event ? jeec_brain_url + event.logo : ''"
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

    <contacts :email="event ? event.email : ''"/>
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
      event_logo:"../../static/jeec-logo.png",
      loaded:false
    };
  },
  methods: {
    getDateString(start_date, end_date) {
      let start_day = start_date.substring(0,2)
      if(start_day[0]=="0"){
        start_day = start_day[1]
        if(start_day=="1"){
          start_day = start_day.concat('st')
        }
        else if(start_day=="2"){
          start_day = start_day.concat('nd')
        }
        else if(start_day=="3"){
          start_day = start_day.concat('rd')
        }
        else{
          start_day = start_day.concat('th')
        }
      }
      else{
        start_day = start_day.concat('th')
      }
      let start_month = start_date.substring(3,5)
      if (start_month=="01"){
        start_month="January"
      }
      else if(start_month=="02"){
        start_month="February"
      }
      else if(start_month=="03"){
        start_month="March"
      }
      else if(start_month=="04"){
        start_month="April"
      }
      else if(start_month=="05"){
        start_month="May"
      }
      else if(start_month=="06"){
        start_month="June"
      }
      else if(start_month=="07"){
        start_month="July"
      }
      else if(start_month=="08"){
        start_month="August"
      }
      else if(start_month=="09"){
        start_month="September"
      }
      else if(start_month=="10"){
        start_month="October"
      }
      else if(start_month=="11"){
        start_month="November"
      }
      else if(start_month=="12"){
        start_month="December"
      }
      let end_day = end_date.substring(0,2)
      if(end_day[0]=="0"){
        end_day = end_day[1]
        if(end_day=="1"){
          end_day = end_day.concat('st')
        }
        else if(end_day=="2"){
          end_day = end_day.concat('nd')
        }
        else if(end_day=="3"){
          end_day = end_day.concat('rd')
        }
        else{
          end_day = end_day.concat('th')
        }
      }
      else{
        end_day = end_day.concat('th')
      }
      let end_month = end_date.substring(3,5)
      if (end_month=="01"){
        end_month="January"
      }
      else if(end_month=="02"){
        end_month="February"
      }
      else if(end_month=="03"){
        end_month="March"
      }
      else if(end_month=="04"){
        end_month="April"
      }
      else if(end_month=="05"){
        end_month="May"
      }
      else if(end_month=="06"){
        end_month="June"
      }
      else if(end_month=="07"){
        end_month="July"
      }
      else if(end_month=="08"){
        end_month="August"
      }
      else if(end_month=="09"){
        end_month="September"
      }
      else if(end_month=="10"){
        end_month="October"
      }
      else if(end_month=="11"){
        end_month="November"
      }
      else if(end_month=="12"){
        end_month="December"
      }
      return start_day + " of " + start_month + " to " +  end_day + " of " + end_month 
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
      .then((response) => {
        (this.event = response.data.data)
        this.loaded=true;
      console.log(this.event)});
  },
};
</script>
<style>
</style>