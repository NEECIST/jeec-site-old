<template>
    <div class="partners-app">
        <component-title
            v-if="partners.main_sponsor.length > 0"
            title="Main Sponsor"
            :subtitle="partners.main_sponsor[0].name"
        />
        <div style="display: flex; align-items: center; justify-content: center">
            <a v-if="partners.main_sponsor.length > 0" v-for="main in partners.main_sponsor" v-bind:key="main" v-bind:href="main.link" target="_blank">
                <img class="main-sponsor-logo" :src="jeec_api_url + main.logo"> 
            </a>
        </div>

        <partner-tier tier="Gold Partners" v-bind:partners="partners.gold" tier_color="#cfbf2c"/>
        <partner-tier tier="Silver Partners" v-bind:partners="partners.silver" tier_color="#B7B7B7"/>
        <partner-tier tier="Bronze Partners" v-bind:partners="partners.bronze" tier_color="#CE8F6B"/>
        <partner-tier tier="Our Sponsors" v-bind:partners="partners.sponsor" tier_color="#000000"/>

        <contacts/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'partners',
    data() {
        return {
            jeec_api_url : process.env.VUE_APP_JEEC_BRAIN_URL,
            partners:
            {
                main_sponsor: [],
                gold: [],
                silver: [],
                bronze: [],
                sponsor: []
            }
        }
    },

    mounted () {
        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=main_sponsor', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
            }
        })
        .then(response => (this.partners.main_sponsor = response.data['data']));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=gold', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
            }
        })
        .then(response => (this.partners.gold = response.data['data']));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=silver', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
            }
        })
        .then(response => (this.partners.silver = response.data['data']));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=bronze', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
            }
        })
        .then(response => (this.partners.bronze = response.data['data']));

         axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=sponsor', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
            }
        })
        .then(response => (this.partners.sponsor = response.data['data']));
    }
}   
</script>

<style>
.partners-app {
    padding-top: 90px;
}
.title-team-image{
    background: linear-gradient(122deg, rgba(107,191, 255, 0.7), rgba(63, 0, 70, 0.7)), url("https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
}

.main-sponsor-logo {
    justify-content: center;
    max-height: 150px;
    max-width: 200px;
    margin: 10px 25px;
    opacity: .85;
    transition: all .2s ease-in-out;
    margin-bottom: 30px;
}

.main-sponsor-logo:hover {
	opacity: 1;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transform: scale(1.15); 
}

.image-center-text-comp {
    background: linear-gradient(122deg, rgba(107,191, 255, 0.7), rgba(63, 0, 70, 0.7)), url("https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    margin-bottom: 60px;
}

.center-text {
    text-align: center;
    position: relative;
    top: 45%;
    width: 300px;
    color: #ffffff;
    font-family:'Raleway' sans-serif;
    font-size: 35px;
    letter-spacing: -1px;
    font-weight: bold;
}

@media screen and (max-width: 800px) {
    .main-sponsor {
      max-width: 125px;
      max-height: 88px;
      margin: 5px 8px;
      padding-left: 10px;
  }
}

@media screen and (max-width: 560px) {
  .main-sponsor  {
      max-width: 85px;
      max-height: 60px;
      margin: 3px 5px;
  }
}
</style>
