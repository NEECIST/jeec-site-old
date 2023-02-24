<template>
  <div class="home-app">
    <home-top
      :date="event ? getDateString(event.start_date, event.end_date) : ''"
      :location="event ? event.location : ''"
      :image="event ? event.logo : ''"
      :facebook_link="event ? event.facebook_link : ''"
      :youtube_link="event ? event.youtube_link : ''"
      :instagram_link="event ? event.instagram_link : ''"
      :linkedin_link="'https://www.linkedin.com/company/jeecist/'"
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

    <who-are-we/>

    <why-attend />

    <!--<ouractivities/>-->

    <contacts :email="event ? event.email : []"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {start_date:"06 Mar 2023, Mon",end_date:"10 Mar 2023, Fri",location:"Instituto Superior Técnico",logo:"../../static/imagens/events/639c1510-6c5f-44a1-a59e-664b002a4ca3.png",facebook_link:"https://www.facebook.com/JEECIST",youtube_link:"https://www.youtube.com/user/JEECvideos",instagram_link:"https://www.instagram.com/jeec.ist/",
    activity_types:[{name:"Job Fair",show_in_home:true},{name:"Matchmaking",show_in_home:true},
    {name:"Workshop",show_in_home:true},{name:"Doc Talks",show_in_home:true},{name:"Discussion Panel",show_in_home:true},
    ,{name:"15/15",show_in_home:true}
  ],email:"coordination@jeec.ist", name:"JEEC|22"},
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
};
</script>
<style>
</style>