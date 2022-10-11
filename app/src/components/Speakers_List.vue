<template>
<div class="latest-speakers-comp">
  <div class="speakers-list-comp">
    <component-title
      :title="'Speakers at ' + event_name"
      subtitle="List of guest speakers that will steal the show!"
    />
      <div class="latest-speakers-flex">
        <div class="speaker-card" v-for="speaker in speakers" :key="speaker.name">
          <div>
            <img class="speaker-image" :src="speaker.image">
          </div>
          
          <div class="speaker-name">{{ speaker.name }}</div>

          <div class="speaker-current-function">{{ speaker.position }}</div>

          <a :href="speaker.company_link" target="_blank">
            <img class="speaker-company-logo" :src="speaker.company_logo">
          </a>

          <div>
            <div class="origin-text" v-html="speaker.country">
          </div>

          <div class="speaker-notes" v-html="speaker.bio"></div>
          
          <div class="speaker-card-bottom">
            <div class="speaker-links">
                <a v-if="speaker.linkedin_url.length" :href="speaker.linkedin_url" target="_blank"><img class="speaker-link-logo" src="../../static/linkedin.svg"/></a>
                <a v-if="speaker.youtube_url.length" :href="speaker.youtube_url" target="_blank"><img class="speaker-link-logo" src="../../static/youtube.svg"/></a>
            </div>

            <!--
            <div class="speaker-schedule">
              <div class="speaker-schedule-day">{{ speaker.schedule.date }}</div>
              <div class="speaker-schedule-hour">{{ speaker.schedule.time }}</div>
            </div>
            -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "speakers_list",
  data() {
    return {
      speakers: [{name:"Telmo Pires",country:"New York City, USA",
          bio:"Young AI and Machine Learning specialist, with previous focus on unsupervised learning methods and NN’s. IST Alumnus from Aerospace Engineering. Formerly an AI Engineer at Unbabel and Google.",
          position:"Senior Machine Learning Engineer",image:"../../static/imagens/speakers/real speakers/telmo_pires.png",company_link:"https://www.apple.com/pt/",
          company_logo:"../../static/imagens/speakers/companies/apple.png",
          linkedin_url:"https://www.linkedin.com/in/tjppires/",youtube_url:""},
          {name:"Morgan Roe",country:"Cornwall, UK",
          bio:"Morgan studied in Plymouth, UK and was involved in a wide range of engineering tasks, such as making parts for animation, maintaining and setting up robotic camera rigs.",
          position:"Director Of Operations",image:"../../static/imagens/speakers/real speakers/morgan_roe.png",company_link:"https://www.engineeredarts.co.uk/",
          company_logo:"../../static/imagens/speakers/companies/engineered_arts.jpg",
          linkedin_url:"https://discordapp.com/channels/@me/758276093458251796/1026971616091046029",youtube_url:""},
          {name:"Scott Mackenzie",country:"France",
          bio:"Scott Mackenzie is the CTO and Co-Founder of Edapt, an education-legal support company for school staff. He is also Head of Product of Truphone, working with the telecommunications market with eSIM.",
          position:"Head of Product",image:"../../static/imagens/speakers/real speakers/scott_mackenzie.png",company_link:"https://www.truphone.com/",
          company_logo:"../../static/imagens/speakers/companies/truphone.png",
          linkedin_url:"https://www.linkedin.com/in/scottmackenzie/",youtube_url:""},
          {name:"Karim Chamaa",country:"Boston, Massachusetts, USA",
          bio:"Masters in Mechatronics Engineering in NYU, developed and taught the Robotics course of Udacity.",
          position:"Head of Product",image:"../../static/imagens/speakers/real speakers/karim_chamaa.png",company_link:"https://www.amazon.jobs/en/teams/amazon-robotics",
          company_logo:"../../static/imagens/speakers/companies/amazon_robotics.png",
          linkedin_url:"https://www.linkedin.com/in/karimchamaa/",youtube_url:""},
          {name:"Luís Andrade",country:"Portugal",
          bio:"IST Alumnus in Electrical and Computer Engineering. Luís works as a Data Scientist at Spotify.",
          position:"Data Scientist",image:"../../static/imagens/speakers/real speakers/luís_andrade.png",company_link:"https://www.spotify.com/",
          company_logo:"../../static/imagens/speakers/companies/spotify.png",
          linkedin_url:"https://www.linkedin.com/in/luis-andrade-58728461/",youtube_url:""},
          {name:"Bruce Howe",country:"Honolulu, Hawaii, USA",
          bio:"Bruce Howe studied in Stanford and works today in the Joint Task Force for SMART Cables Initiative, a project to incorporate sensors into the global network of submarine telecommunication cables.",
          position:"Chair",image:"../../static/imagens/speakers/real speakers/bruce_howe.png",company_link:"https://www.smartcables.org/",
          company_logo:"../../static/imagens/speakers/companies/smart_subsea_cables.png",
          linkedin_url:"https://www.linkedin.com/in/bruce-howe-1a3746b/",youtube_url:""},
          {name:"Cláudia Queirós",country:"Lisbon, Portugal",
          bio:"",
          position:"Manager",image:"../../static/imagens/speakers/5G/cláudia_queirós.png",company_link:"https://www.ericsson.com/en",
          company_logo:"../../static/imagens/speakers/companies/ericsson.jpg",
          linkedin_url:"https://www.linkedin.com/in/claudia-queiros/?originalSubdomain=pt",youtube_url:""},
          {name:"Guilherme Alves",country:"Lisbon, Portugal",
          bio:"",
          position:"Manager",image:"../../static/imagens/speakers/5G/guilherme_alves.jpg",company_link:"https://www.ericsson.com/en",
          company_logo:"../../static/imagens/speakers/companies/ericsson.jpg",
          linkedin_url:"https://www.linkedin.com/in/guilhermerochaalves/",youtube_url:""},
          {name:"Nuno Roso",country:"Lisbon, Portugal",
          bio:"",
          position:"Head of Digital Services Portugal",image:"../../static/imagens/speakers/5G/nuno_roso.jpg",company_link:"https://www.ericsson.com/en",
          company_logo:"../../static/imagens/speakers/companies/ericsson.jpg",
          linkedin_url:"https://www.linkedin.com/in/nunoroso/",youtube_url:""},
          {name:"Rui Aguiar",country:"Aveiro, Portugal",
          bio:"",
          position:"Senior Researcher",image:"../../static/imagens/speakers/5G/rui_aguiar.jpg",company_link:"https://www.it.pt/",
          company_logo:"../../static/imagens/speakers/companies/it.png",
          linkedin_url:"",youtube_url:""},
          {name:"Catarina Barata",country:"Portugal",
          bio:"",
          position:"ISR Researcher",image:"../../static/imagens/speakers/AI/catarina_barata.png",company_link:"https://welcome.isr.tecnico.ulisboa.pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"",youtube_url:""},
          {name:"Dianka Alexieva",country:"Lisbon, Portugal",
          bio:"",
          position:"Head of Data",image:"../../static/imagens/speakers/AI/dianka_alexieva.png",company_link:"https://www.eutopiagreen.com/",
          company_logo:"../../static/imagens/speakers/companies/eutopia.png",
          linkedin_url:"https://www.linkedin.com/in/dianka-alexieva-585670165/?originalSubdomain=bg",youtube_url:""},
          {name:"Koen Bertels",country:"Portugal",
          bio:"Koen's main focus is on defining a system architecture for a future quantum computer.",
          position:"Founder",image:"../../static/imagens/speakers/QI/koen_bertels.png",company_link:"",
          company_logo:"../../static/imagens/speakers/companies/bluebee.png",
          linkedin_url:"https://www.linkedin.com/in/kbertels/",youtube_url:""},
          {name:"Mário Figueiredo",country:"Lisbon, Portugal",
          bio:"",
          position:"Professor",image:"../../static/imagens/speakers/AI/mário_figueiredo.png",company_link:"",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"https://www.linkedin.com/in/mario-figueiredo-138b099/",youtube_url:""},
          {name:"Leonel Sousa",country:"Portugal",
          bio:"His research interests include VLSI architectures, computer architectures, parallel computing, computer arithmetic, and signal processing systems.",
          position:"Researcher",image:"../../static/imagens/speakers/QI/leonel_sousa.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"https://www.linkedin.com/in/leonels/?originalSubdomain=pt",youtube_url:""},
          {name:"Mário Caldeira",country:"Portugal",
          bio:"Mário Caldeira is a full professor at ISEG (University of Lisbon), and associate partner at Deloitte in the area of ​​Innovation Ecosystems.",
          position:"Associate Partner",image:"../../static/imagens/speakers/QI/mário_caldeira_.png",company_link:"https://www2.deloitte.com/pt/pt.html",
          company_logo:"../../static/imagens/speakers/companies/delloite.png",
          linkedin_url:"https://www.linkedin.com/in/mario-caldeira-07b8796/",youtube_url:""},
          {name:"Paulo Dimas",country:"Lisbon, Portugal",
          bio:"",
          position:"VP of Product Innovation",image:"../../static/imagens/speakers/AI/paulo_dimas.png",company_link:"https://unbabel.com/",
          company_logo:"../../static/imagens/speakers/companies/unbabel.png",
          linkedin_url:"https://www.linkedin.com/in/paulodimas/",youtube_url:""},
          {name:"Filipe Moura",country:"Portugal",
          bio:"Filipe Moura's expertise relates to Urban Mobility, in particular, travel behavior analysis, transport demand modelling, sustainable mobility and many more.",
          position:"Professor",image:"../../static/imagens/speakers/SM/filipe_moura.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"https://www.linkedin.com/in/mourafilipe",youtube_url:""},
          {name:"Yasser Omar",country:"Portugal",
          bio:"Theoretical physicist at the Physics of Information and Quantum Technologies Group, involved in the #WorldQuantumDay.",
          position:"Professor",image:"../../static/imagens/speakers/QI/yasser_omar.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"",youtube_url:""},
          {name:"João Vieira",country:"Portugal",
          bio:"João Vieira is director for strategy and innovation at CARRIS since 2017, involved in R&D activities and pilot-projects across several areas.",
          position:"Director for Strategy and Innovation",image:"../../static/imagens/speakers/SM/joão_vieira.png",company_link:"https://www.carris.pt",
          company_logo:"../../static/imagens/speakers/companies/carris.png",
          linkedin_url:"https://www.linkedin.com/in/joaofilipevieira/",youtube_url:""},
          {name:"Prof. António Rodrigues",country:"Portugal",
          bio:"Université Catholique de Louvain Alumnus in Electrical and Computer Engineering. Works as a teacher at IST.",
          position:"University Professor",image:"../../static/imagens/speakers/stores/prof._antónio_rodrigues.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"",youtube_url:""},
          {name:"Nuno Inácio",country:"Portugal",
          bio:"Experienced professional in launching and managing businesses in multiple countries, in sectors such as Mobility, E-commerce, Retail and Marketing.",
          position:"Country Manager",image:"../../static/imagens/speakers/SM/nuno_inácio_.png",company_link:"https://bolt.eu/pt-pt/",
          company_logo:"../../static/imagens/speakers/companies/carris.png",
          linkedin_url:"https://www.linkedin.com/in/nunoinacio84/",youtube_url:""},
          {name:"Prof. João Miranda Lemos",country:"Portugal",
          bio:"Full professor since 2000 in IST. Received the PhD in Electrical and Computer Engineering. Researcher of INESC-ID and scientific coordinator of INESC-ID's research group on Control of Dynamic Systems.",
          position:"University Professor",image:"../../static/imagens/speakers/stores/prof._joão_miranda_lemos.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"",youtube_url:""},
          {name:"Pedro Gaspar",country:"Lisbon, Portugal",
          bio:"Católica Lisbon School of Business and Economics Alumnus in Entrepreneurship and Innovation. Works as Future Business Technology Director at CEiiA.",
          position:"Future Business Technology Director",image:"../../static/imagens/speakers/SM/pedro_gaspar.png",company_link:"https://www.ceiia.com/",
          company_logo:"../../static/imagens/speakers/companies/ceiia.png",
          linkedin_url:"https://www.linkedin.com/in/pedrodiezgaspar/",youtube_url:""},
          {name:"Prof. Jorge Ribeiro Fernandes",country:"Lisbon, Portugal",
          bio:"Assistant Professor of the DEEC at IST and senior researcher of INESC-ID. Senior member of IEEE. Former visiting scholar at TU Delft and at Columbia University.",
          position:"University Professor",image:"../../static/imagens/speakers/stores/prof._jorge_ribeiro_fernandes.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"",youtube_url:""},
          {name:"Prof. Paulo Oliveira",country:"Lisbon, Portugal",
          bio:"Full Professor at ACSDC/DEEC, IST since 2020. Received the PhD in Electrical and Computer Engineering. Former vice-President of the SPR. Researcher of the CSI - IDMEC and collaborator of ISR.",
          position:"University Professor",image:"../../static/imagens/speakers/stores/prof._paulo_oliveira.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"https://www.linkedin.com/in/paulo-oliveira-87618bb/?originalSubdomain=pt",youtube_url:""},
          {name:"Prof. Luís Marcelino Ferreira",country:"Lisbon, Portugal",
          bio:"Received the Electrical Engineering degree from IST and the M.S.E.E. and Ph.D. degrees from Georgia Institute of Technology, Atlanta, GA, USA. Full professor in DEEC for IST.",
          position:"University Professor",image:"../../static/imagens/speakers/stores/prof._luís_marcelino_ferreira.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"",youtube_url:""},
          {name:"Prof. Luís Miguel Silveira",country:"Lisbon, Portugal",
          bio:"Full Professor at IST. Received the PhD Degree in Electrical and Computer Engineering at Massachusetts Institute of Technology. Researcher in the ALGOS group at INESC-ID.",
          position:"University Professor",image:"../../static/imagens/speakers/stores/prof._luís_miguel_silveira.png",company_link:"https://tecnico.ulisboa.pt/pt/",
          company_logo:"../../static/imagens/speakers/companies/ist.png",
          linkedin_url:"https://www.linkedin.com/in/luis-miguel-silveira-77a3304/?originalSubdomain=pt",youtube_url:""}
        ]
    };
  },
  props: {
    event_name: String,
  },
};
</script>

<style scoped>
.latest-speakers-comp {
  width: 100%;
  background-color: #dfe6f5;
  padding-top: 90px;
  padding-bottom: 40px;
  text-align: center;
}

.latest-speakers-flex {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 6vw;
  padding-right: 6vw;
  text-align: center;
  margin-bottom: 20px;
}

a {
  color: rgb(55, 123, 190);
  text-decoration: underline;
}

.speaker-card {
  background-color: #ffffff;
  padding-top: 20px;
  padding-bottom: 5px;
  border-radius: 20px;
  width: 450px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  margin-bottom: 40px;
}

.origin-text {
  font-family: "Lato";
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
}

.origin-logo,
.origin-text {
  display: inline-block;
}

.speaker-image {
  width: 160px;
  height: 160px;
}

.speaker-name {
  margin-top: 15px;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
}

.speaker-current-function {
  height: 40px;
  margin-top: 10px;
  text-align: center;
  font-family: "Lato";
  font-size: 18px;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

.company-container {
  width: 100%;
  background-color: rgb(41, 141, 235);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 15px;
}

.speaker-company-logo {
  max-height: 65px;
  max-width: 230px;
  transition: all 0.2s ease-in-out;
}

.speaker-company-logo:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.1);
}

.speaker-notes {
  margin-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  font-family: "Lato";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin-bottom: 7px;
}

.speaker-card-bottom {
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.speaker-links {
  margin-top: 20px;
  width: 50%;
}

.speaker-link-logo {
  max-width: 30px;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 0.2s ease-in-out;
}

.speaker-link-logo:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.2);
}

.speaker-schedule {
  margin-top: 12px;
  width: 50%;
  float: right;
}

.speaker-schedule-day {
  font-family: "Lato";
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}

.speaker-schedule-hour {
  font-family: "Lato";
  font-weight: bold;
  font-size: 16px;
  color: #3477f3;
  margin-bottom: 5px;
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1600px) {
  .latest-speakers-flex {
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .speaker-card {
    width: 350px;
  }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1200px) {
  .latest-speakers-flex {
    justify-content: space-between;
    display: inline-block;
    padding-left: 7vw;
    padding-right: 7vw;
  }

  .speaker-card {
    margin-top: 40px;
    width: 450px;
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
    width: 140px;
    height: 140px;
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

  .speaker-name {
    margin-top: 10px;
  }
}

/* On screens that are 350px wide*/
@media only screen and (max-width: 350px) {
  .speaker-card {
    width: 280px;
  }

  .speaker-image {
    width: 130px;
    height: 130px;
  }
}
</style>