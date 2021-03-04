<template>
  <div class="flex-all">
    <component-title
      title="Our Prizes"
      subtitle="Start collecting points by logging in to our Web APP, via fenix."
    />

		<div class="prizes margin-top">
			<div class="section-header">Singleplayer</div>

			<div class="prizes-flex">
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/ffa079ef-a957-4590-9e6e-89f6eb9c98a0.png">
					<div class="prize-name">Progress Bar</div>
					<div class="prize-notes">Simply by participating in our activities, collecting points, you are rewarded with several items from our JEEC merchandise.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" src="../../static/anti-stress.jpg">
					<div class="prize-name">Partners' Merchandise</div>
					<div class="prize-notes">Some booths have their own merchandise. You can collect them too just by talking with our partners via ZOOM.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" style="border-radius: 0%;" src="https://brain.jeec.ist/static/rewards/bb35950b-f149-4159-86b6-8e100e805b5e.png">
					<div class="prize-name">Activity Raffle</div>
					<div class="prize-notes">Every activity has a prize that will be drawn between the participants.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/9ebeda89-2ef7-463d-a70a-12219cbdd20a.png">
					<div class="prize-name">King of Networking</div>
					<div class="prize-notes">Highest Number of 15/15's visited.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/cfaba5c8-ad36-46bc-9169-7fe6d1e71749.png">
					<div class="prize-name">King of the Job Fair</div>
					<div class="prize-notes">Highest number of booths visited.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/e8883962-f2a7-4be1-a526-8844a3012aeb.png">
					<div class="prize-name">King of Knowledge</div>
					<div class="prize-notes">Highest number of Speakers and Discussion Panels visited.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/e8883962-f2a7-4be1-a526-8844a3012aeb.png">
					<div class="prize-name">King of Hacking</div>
					<div class="prize-notes">Highest number of workshops visited.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/a56676a9-dc10-47d4-b22a-69173b78d629.png">
					<div class="prize-name">Top 3 Individual Participants</div>
					<div class="prize-notes">The tree highest ranked Individual Participants at the end of the week will win the specific reward.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/7632097a-b4a0-48e1-a6ab-17e594a747c8.png">
					<div class="prize-name">CV Platform Raffle</div>
					<div class="prize-notes">By submitting your CV to our platform, you are automatically registered in a Raffle to win an iPad 6th Gen. 9.7''.</div>
				</div>
			</div>
		
			<div class="section-header">Multiplayer</div>

			<div class="prizes-flex">
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/98d73548-c24f-4f51-8b46-efce06ebbef8.png">
					<div class="prize-name">Daily Squad Prizes</div>
					<div class="prize-notes">Every day, the squad with the highest score of the day will win that specific day big prize.</div>
				</div>
				<div class="prize-card">
					<img class="prize-image" src="https://brain.jeec.ist/static/rewards/c3ae9766-f381-4e49-857b-493a666ce8e1.png">
					<div class="prize-name">Top 3 Squad of the week</div>
					<div class="prize-notes">The tree highest ranked Squads at the end of the week will win the specific reward.</div>
				</div>
			</div>
    </div>

		<div class="bottom">
			<div class="bottom-text">
				<div class="first-text">What are you waiting for?</div>
				<!-- COLOCAR LINK DA APP -->
				<!-- <div class="second-text">Log in to our <a class="link" href="www.jeec.ist">Web APP</a>, via fenix, to see all our detailed Prizes' information and start earning points today!</div> -->
				<div class="second-text">Log in to our Web APP, via fenix, to see all our detailed Prizes' information and start earning points today!</div>
			</div>
			<div class="trophy-all">
				<img class="trophy" src="../../static/podium.svg">
				<img class="line-middle" src="../../static/line.svg">
				<img class="line-left" src="../../static/line.svg">
				<img class="line-right" src="../../static/line.svg">
			</div>
		</div>
    
    <contacts />
  </div>
</template>


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