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

        <div class="team" v-for="team in teams" :key="team.name">      <!-- v-if="team.members['data'].length" -->
            <component-title 
                :title="team.name"
                :subtitle="team.description"
            />

            <div class="team-flex">
                <div v-for="member in team.members" :key="member.name">
                    <div class="teams_container">
                        <div class="team-member">
                            <img :src="member.image">
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

        <contacts email="coordination@jeec.ist"/>
    </div>
</template>

<script>
//import axios from 'axios';

export default {
  name: "team",
  data() {
      return {
        event: null,
        //jeec_api_url : process.env.VUE_APP_JEEC_BRAIN_URL,
        linkedin_icon_link: "../../static/linkedin.svg",

        teams: [
            {name: 'Coordination', description: 'Manage the entire team and envision the event', members: [
                {name: 'Pedro Pedrosa', image: '../../static/imagens/members/pedro_pedrosa.png', linkedin_url: 'https://www.linkedin.com/in/pedro-pedrosa-367a69184/'},
                {name: 'Alice Rosa', image: '../../static/imagens/members/alice_rosa.png', linkedin_url: 'https://www.linkedin.com/in/alicerosa20/'},
                {name: 'Eduardo Cunha', image: '../../static/imagens/members/eduardo_cunha.png', linkedin_url: 'https://www.linkedin.com/in/eduardo-cunha-84b59b182/'}
            ]},
            {name: 'Business', description: 'Speak with companies and create new partnerships for the event', members: [
                {name: 'Ana Reis', image: '../../static/imagens/members/ana_reis.png', linkedin_url: 'https://www.linkedin.com/in/ana-l%C3%BAcia-reis/'},
                {name: 'Tomás Rodrigues', image: '../../static/imagens/members/tomás_rodrigues.png', linkedin_url: 'https://www.linkedin.com/in/tom%C3%A1s-bessa-152491195/'},
                {name: 'Maria Leite', image: '../../static/imagens/members/maria_leite.png', linkedin_url: 'https://www.linkedin.com/in/carolina-carvalho-leite-19199019a'},
                {name: 'Afonso Vilela', image: '../../static/imagens/members/afonso_vilela.png', linkedin_url: 'https://www.linkedin.com/in/afonso-miguel-delgado-vilela-9b262b205/'},
                {name: 'Diogo Pereira', image: '../../static/imagens/members/diogo_pereira.png', linkedin_url: 'https://www.linkedin.com/in/diogo-de-brito-pereira/'},
                {name: 'Rodrigo Gomes', image: '../../static/imagens/members/rodrigo_gomes.png', linkedin_url: 'https://www.linkedin.com/in/rodrigo-gomes-ab6574224/'},
                {name: 'Afonso Barroco', image: '../../static/imagens/members/afonso_barroco.png', linkedin_url: 'https://www.linkedin.com/in/afonsobarroco/'},
                {name: 'Marta Catalão', image: '../../static/imagens/members/marta_catalão.png', linkedin_url: 'https://www.linkedin.com/in/marta-catal%C3%A3o-93a34a226/'},
                {name: 'Rodrigo Silva', image: '../../static/imagens/members/rodrigo_silva.png', linkedin_url: 'https://www.linkedin.com/in/rodrigo-silva-178634183/'},
                {name: 'Maria Cabral', image: '../../static/imagens/members/maria_cabral.png', linkedin_url: 'https://www.linkedin.com/in/maria-francisca-pinto-cabral-70b3a81b8/'}
            ]},

            {name: 'Marketing', description: 'Design all the media of the event', members: [
                {name: 'Miguel Graça', image: '../../static/imagens/members/miguel_graça.png', linkedin_url: 'https://www.linkedin.com/in/miguel-gra%C3%A7a-74219719b/'},
	    		{name: 'Inês Fernandes', image: '../../static/imagens/members/inês_fernandes.png', linkedin_url: 'https://www.linkedin.com/in/in%C3%AAs-fernandes-478157209/'},
		    	{name: 'António Mata', image: '../../static/imagens/members/antónio_mata.png', linkedin_url: 'https://www.linkedin.com/in/ant%C3%B3nio-mata-5184aa178/'},
			    {name: 'Miguel Cardoso', image: '../../static/imagens/members/miguel_cardoso.png', linkedin_url: 'https://www.linkedin.com/in/miguelpdcardoso/'},
			    {name: 'Ivan Figueiredo', image: '../../static/imagens/members/ivan_figueiredo.png', linkedin_url: 'https://www.linkedin.com/in/ivanfigueiredo/'}
            ]},

            {name: 'Partnerships', description: 'Find the best speakers from all around the world', members: [
                {name: 'Margarida Mendes', image: '../../static/imagens/members/margarida_sá_mendes.png', linkedin_url: 'https://www.linkedin.com/in/margaridasamendes/'},
	    		{name: 'Teresa Fernandes', image: '../../static/imagens/members/teresa_fernandes.png', linkedin_url: 'https://www.linkedin.com/in/teresaacsf/'},
		    	{name: 'Catarina Grilo', image: '../../static/imagens/members/ana_grilo.png', linkedin_url: 'https://www.linkedin.com/in/ana-catarina-grilo-860471218/'},
			    {name: 'Lourenço Silva', image: '../../static/imagens/members/lourenço_silva.png', linkedin_url: 'https://www.linkedin.com/in/louren%C3%A7o-silva-022986224/'},
			    {name: 'Francisco Enguita', image: '../../static/imagens/members/francisco_enguita.png', linkedin_url: 'https://www.linkedin.com/in/franciscoenguita/'},
                {name: 'Tiago Felizardo', image: '../../static/imagens/members/tiago_felizardo.png', linkedin_url: 'https://www.linkedin.com/in/tiago-felizardo-5a629a171/'}
            ]},

            {name: 'WebDev', description: 'Manage the entire team and envision the event', members: [
                {name: 'Rafael Abranches', image: '../../static/imagens/members/rafael_abranches.png', linkedin_url: 'https://www.linkedin.com/in/rafael-abranches-0663671a3/'},
                {name: 'Daniel Pacheco', image: '../../static/imagens/members/daniel_pacheco.png', linkedin_url: ''},
                {name: 'José Antunes', image: '../../static/imagens/members/josé_antunes.png', linkedin_url: 'https://www.linkedin.com/in/jos%C3%A9-antunes-291640232'}
            ]},

        ],
      }
  },

  /*mounted () {
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
  }*/
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
    height: 220px;
    width: 220px;
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
