<template>
    <div class="team-app">

       <div class="description-team">
           <div class="team-text">
                <div class="description-title">
                    Our Team
                </div>

                <div class="description-text">Connecting the best students and engineers for over 20 years!
                </div>
            </div>
            <img src="https://us.123rf.com/450wm/tupungato/tupungato1611/tupungato161100074/66488989-science-doodle-background-seamless-vector-texture-with-physics-concepts-.jpg?ver=6">
        </div>

        <div class="team" v-for="team in teams" v-if="team.members['data'].length" :key="team.name">
            <component-title 
                :title="team.name"
                :subtitle="team.description"
            />

            <div class="team-flex">
                <div v-for="member in team.members['data']" :key="member.name">
                    <div class="teams_container">
                        <div class="team-member">
                            <img v-if="member.image!=null" :src="jeec_api_url + member.image">
                            <img v-else id="jeec-logo" src="../../static/jeec_logo_mobile.svg">
                        </div> 
                        <div class="linkedin-icons">
                            <a :href="member.linkedin_url" target="_blank">
                                <img class="icon-team-member" :src="linkedin_icon_link"/>
                            </a>
                        </div>                              
                    </div>
                    <div class="team-member-name">
                        <p class="member-name">{{ member.name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <contacts :email="event ? event.email : ''"/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "team",
  data() {
      return {
        event: null,
        jeec_api_url : process.env.VUE_APP_JEEC_BRAIN_URL,
        teams: [],
        linkedin_icon_link: "../../static/linkedin.svg"
      }
  },

  mounted () {
    axios
    .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/teams', {
    auth: {
        username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
        password: process.env.VUE_APP_JEEC_WEBSITE_KEY
    }
    })
    .then(response => (this.teams = response.data['data']));

    axios
    .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/event", {
        auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
    })
    .then((response) => (this.event = response.data["data"]));
  }
};
</script>



<style>
.description-team{
    padding-top: 100px;
    height: 300px;
    background-color:white;
    position: relative;
}

.description-team img{
    width: 700px;
    transform: rotate(30deg);
    clip-path: polygon(0 0, 0 57.7%, 100% 0);
    position: absolute;
    top:179px;
    left: -200px;
    z-index: 0;
}

.team-text{
    float: right;
    padding-right: 40px;
    position: relative;
    z-index: 1;
}


.description-title{
    font-family: 'Raleway', sans-serif;
    font-size: 50px;
    font-weight: bolder;
    color: #505050;
    text-align: right;
    padding-top: 30px;
}

#jeec-logo{
        object-fit: scale-down;
    }

.description-text{
    margin-top: 10px;
    background-color: rgb(95, 140, 179);
    border-radius: 5px;
    font-size: 30px;
    font-family: 'Karla';
    width: 750px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-right: -40px;
    text-align: right;
    color: #ffffff;
    line-height: 50px;
}

.team{
    padding-top: 40px;
    background-color: #ecf7ff;
}

.team-flex{
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: 8vw;
    margin-left: 8vw;
    margin-top: 30px;
}

.teams_container {
    position: relative;
    height: auto;
    width: auto;
}

.linkedin-icons {
    opacity: 0;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin: auto;
    border-radius: 0px;
    width:60px;
    height:60px;
    transition: .5s ease;
}

.teams_container:hover .linkedin-icons {
  opacity: 1;
}

.team-member-name {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.team-member {
    transition: .5s ease;
}

.team-member img{ 
    width:200px;
    height:200px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
}

.teams_container:hover .team-member {
  opacity: 0.5;
}

.member-name{
    width: 100px;
    font-size: 22px;
    text-align: center;
    font-family:'Lato', sans-serif;
    color: #262626;
}

.icon-team-member {
    height: 60px;
}


@media screen and (max-width: 1200px) {
    .team-flex {
        padding-left: 12px;
        margin-right: 5vw;
        margin-left: 5vw;
    }
}

@media screen and (max-width: 800px) {
    .description-title{
        font-size: 40px;
    }
    .description-text{
        font-size: 18px;
        width: 320px;
        padding-right: 40px;
        line-height: 28px;
    }

    .description-team img{
        width: 475px;
        top: 200px;
    }
    
    .team-flex {
        padding-left: 12px;
        margin-right: 5vw;
        margin-left: 5vw;
    }

    .team-flex img{
        height: 140px;
        width: 140px;
        margin-top: 30px;
        flex: 0 0 50%;
        margin-right: 10px;
    }

    .member-name{
        font-size: 17px;
        margin-left:13%;
    }

    .icon-team-member {
        height: 40px !important;
        width: 40px !important;
        margin-top: 20px !important;
        margin-right: 0px !important;
    }
}

@media screen and (max-width: 400px) {
    .description-team{
        height: 200px;
        background-color:white;
        position: relative;
    }

    .description-title{
        font-size: 30px;
        padding-top: 10px;
    }

    .description-text{
        font-size: 16px;
        width: 250px;
        padding-right: 30px;
        padding-left: 20px;
        line-height: 24px;
    }

    .description-team img{
        width: 475px;
        top: 150px;
    }

    .team{
        padding-top: 20px;
    }
    
    .team-flex {
        margin-right: 2vw;
        margin-left: 2vw;
    }

    .team-flex img{
        height: 120px;
        width: 120px;
        margin-top: 5px;
        flex: 0 0 50%; margin-right: 10px;
    }

    .member-name{
        margin-left:6%;
    }
    
}
</style>
