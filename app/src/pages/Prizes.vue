<template>
  <div class="flex-all">
    <component-title
      title="Our Prizes"
      subtitle="Start collecting points by logging in to our Web APP, via fenix."
    />

		<div class="prizes margin-top" v-if="loaded">
			<div class="section-header">Singleplayer</div>

			<div class="prizes-flex">
       			<div class="prize-card"> <!-- Progress Bar -->
					<img class="prize-image" :src="brain_url + singleplayer_prizes.progress_bar.image">
					<div class="prize-name">Progress Bar</div>
					<div class="prize-notes">Simply by participating in our activities, collecting points, you are rewarded with several items from our JEEC merchandise.</div>
				</div>
				<div class="prize-card"> <!-- Partners' Merchandise -->
					<img class="prize-image" src="../../static/anti-stress.jpg">
					<div class="prize-name">Partners' Merchandise</div>
					<div class="prize-notes">Some booths have their own merchandise. You can collect them too just by talking with our partners in the Job Fair.</div>
				</div>
				<div class="prize-card"> <!-- Activity Raffle -->
					<img class="prize-image" :src="brain_url + singleplayer_prizes.activity_raffle.image">
					<div class="prize-name">Activity Raffle</div>
					<div class="prize-notes">Every activity has a prize that will be drawn between the participants.</div>
				</div>
				<div class="prize-card"> <!-- King of Networking -->
					<img class="prize-image" :src="brain_url + singleplayer_prizes.king_networking.image">
					<div class="prize-name">King of Networking</div>
					<div class="prize-notes">Highest Number of 15/15's visited.</div>
				</div>
				<div class="prize-card"> <!-- King of the Job Fair -->
					<img class="prize-image" :src="brain_url + singleplayer_prizes.king_job_fair.image">
					<div class="prize-name">King of the Job Fair</div>
					<div class="prize-notes">Highest number of booths visited.</div>
				</div>
				<div class="prize-card"> <!-- King of Knowledge -->
					<img class="prize-image" :src="brain_url + singleplayer_prizes.king_knowledge.image">
					<div class="prize-name">King of Knowledge</div>
					<div class="prize-notes">Highest number of Speakers and Discussion Panels visited.</div>
				</div>
				<div class="prize-card"> <!-- King of Hacking -->
					<img class="prize-image" :src="brain_url + singleplayer_prizes.king_hacking.image">
					<div class="prize-name">King of Hacking</div>
					<div class="prize-notes">Highest number of workshops visited.</div>
				</div>
				<div class="prize-card"> <!-- Top 3 Individual Participants -->
					<img class="prize-image" :src="brain_url + singleplayer_prizes.top_participants.image">
					<div class="prize-name">Top 3 Individual Participants</div>
					<div class="prize-notes">The tree highest ranked Individual Participants, at the end of the week, will win a reward according to the rank, starting with a {{singleplayer_prizes.top_participants.name}}.</div>
				</div>
				<div class="prize-card"> <!-- CV Platform Raffle -->
					<img class="prize-image" :src="brain_url + singleplayer_prizes.cv_platform_raffle.image">
					<div class="prize-name">CV Platform Raffle</div>
					<div class="prize-notes">By submitting your CV to our platform, you are automatically registered in a Raffle to win an {{singleplayer_prizes.cv_platform_raffle.name}}.</div>
				</div>
			</div>
		
			<div class="section-header">Multiplayer</div>

			<div class="prizes-flex">
				<div class="prize-card"> <!-- Daily Squad Prizes -->
					<img class="prize-image" :src="brain_url + multiplayer_prizes.top_squads.image">
					<div class="prize-name">Daily Squad Prizes</div>
					<div class="prize-notes">Every day, the squad with the highest score of the day will win the daily big prize (changes daily).</div>
				</div>
				<div class="prize-card"> <!-- Top 3 Squad of the week -->
					<img class="prize-image" :src="brain_url + multiplayer_prizes.daily_squad.image">
					<div class="prize-name">Top 3 Squad of the week</div>
					<div class="prize-notes">The tree highest ranked Squads, at the end of the week, will win a reward according to the rank, starting with {{multiplayer_prizes.daily_squad.name}}.</div>
				</div>
			</div>

			<div class="warning">All prizes (excluding activity raffles) are exclusive to <a class= "link" v-on:click="redirect('Web_App')">Web App</a> IST students</div>

    </div>

		<div class="bottom">
			<div class="bottom-text">
				<div class="first-text">What are you waiting for?</div>
				<div class="second-text">Log in to our <a class="link" v-on:click="redirect('Web_App')">Web APP</a>, via fenix, to see all our detailed Prizes' information and start earning points today!</div>
			</div>
			<div class="trophy-all">
				<img class="trophy" src="../../static/podium.svg">
				<img class="line-middle" src="../../static/line.svg">
				<img class="line-left" src="../../static/line.svg">
				<img class="line-right" src="../../static/line.svg">
			</div>
		</div>
    
    <contacts :email="event ? event.email : []"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
	name: 'prizes',
	data() {
		return {
			event: null,
			jeec_api_url: process.env.VUE_APP_JEEC_WEBSITE_API_URL,
      brain_url : process.env.VUE_APP_JEEC_BRAIN_URL,
      singleplayer_prizes: {},
      multiplayer_prizes: {},
      loaded: false
		}
	},
  methods: {
    redirect(page) {
      this.show_menu = false;
      this.$router.push({ name: page });
    }
  },

  mounted() {
    axios
      .get(
        process.env.VUE_APP_JEEC_WEBSITE_API_URL +
          "/prizes",
        {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          }
        }
      )
      .then(response => (this.singleplayer_prizes = response.data["singleplayer"], 
                         this.multiplayer_prizes = response.data["multiplayer"],
						 this.loaded = true));

    axios
		.get(this.jeec_api_url + "/event", {
			auth: {
				username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
				password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
			},
		})
		.then((response) => (this.event = response.data["data"]));
  }
};
</script>

<style scoped>

.flex-all {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 70px;
}

.prizes {
	width: 100%;
  background-color: #dfe6f5;
  padding-top: 30px;
  padding-bottom: 40px;
  text-align: center;
}

.margin-top {
	margin-top: 40px;
}

.section-header {
  position: relative;
  padding-bottom: 10px;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-header::before {
  content: '';
  position: absolute;
  display: block;
  width: 100px;
  height: 2px;
  background: #4089ff;
  bottom: -15px;
  left: calc(50% - 50px);
}

.prizes-flex {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  justify-content: space-around;
  flex-wrap: wrap;
	padding-top: 3vh;
  padding-left: 6vw;
  padding-right: 6vw;
  text-align: center;
  margin-bottom: 20px;
}

.prize-card {
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 15px;
  border-radius: 20px;
  width: 350px;
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  margin-bottom: 40px;
}

.prize-image {
  width: 160px;
  height: 160px;
	border-radius: 50%;
  background-color: white;
  background-size: 105%;
  background-repeat: no-repeat;
  background-position: center;
}

.prize-name {
  margin-top: 15px;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
}

.prize-notes {
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

.bottom {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 5vw;
}

.bottom-text {
	width: 60%;
	padding-left: 5vw;
	margin-right: 5vw;
	font-family: Montserrat;
}

.first-text {
	font-weight: 600;
  font-size: 3.5vw;
  text-align: left;
	margin-bottom: 2vw;
}

.second-text {
	color: #646578;
	font-weight: 400;
  font-size: 2vw;
  text-align: left;
}

.warning {
	color: #000000;
	font-size: 1vw;
	font-weight: 600;
}

.trophy-all {
	position: relative;
	width: 18vw;
	padding-right: 10vw;
}

.trophy {
	width: 18vw;
}

.line-middle {
	width: 0.2vw;
	position: absolute;
	left: 32%;
	top: -18%;
	animation-name: move-middle;
	animation-duration: 1s;
	animation-iteration-count: infinite;
}

.line-left {
	width: 0.2vw;
	position: absolute;
	left: 15%;
	top: -15%;
	transform: rotate(-45deg);
	animation-name: move-left;
	animation-duration: 1s;
	animation-iteration-count: infinite;
}

.line-right {
	width: 0.2vw;
	position: absolute;
	left: 49%;
	top: -15%;
	transform: rotate(45deg);
	animation-name: move-right;
	animation-duration: 1s;
	animation-iteration-count: infinite;
}

.link {
	color: #00D4E4;
}

@media screen and (max-width: 800px) {

.bottom-text {
	width: 60%;
	padding-left: 7vw;
	padding-top: 1vw;
	margin-right: 7vw;
	font-family: Montserrat;
}

.first-text {
	font-weight: 600;
  font-size: 3.8vw;
  text-align: left;
	margin-bottom: 2vw;
}

.second-text {
	color: #646578;
	font-weight: 400;
  font-size: 2.9vw;
  text-align: left;
}

.trophy-all {
	width: 25vw;
	padding-top: 2vw;
}

.trophy {
	width: 25vw;
}

.line-middle {
	width: 0.25vw;
	left: 35%;
	top: -10%;
}

.line-left {
	width: 0.25vw;
	left: 18%;
	top: -7%;
}

.line-right {
	width: 0.25vw;
	left: 52%;
	top: -7%;
}

.warning {
	color: #000000;
	font-size: 2vw;
	font-weight: 600;
}

}

@keyframes move-middle {
  0%   {transform: translateY(0);}
  50%  {transform: translateY(-1vw);}
  100% {transform: translateY(0);}
}

@keyframes move-left {
  0%   {transform: rotate(-45deg) translateY(0);}
  50%  {transform: rotate(-45deg) translateY(-1vw);}
  100% {transform: rotate(-45deg) translateY(0);}
}

@keyframes move-right {
  0%   {transform: rotate(45deg) translateY(0);}
  50%  {transform: rotate(45deg) translateY(-1vw);}
  100% {transform: rotate(45deg) translateY(0);}
}

</style>