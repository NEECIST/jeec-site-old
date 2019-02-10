<template>
    <div class="workshops-comp">
        <component-title title="Workshops" subtitle="Interesting topics that our partners will be teaching!"/>

        <div class="workshops-flex">
            <div class="workshop-card" v-for="workshop in workshops" :key="workshop.company">
                <div class="workshop-left">
                    <a class="helper" :href="workshop.company_link" target="_blank"><img class="workshop-logo" :src="workshop.logo"/></a>
                </div>

                <div class="workshop-right">
                    <div class="workshop-date-time">{{ workshop.day}} at {{ workshop.time }}</div>

                    <div class="workshop-title">{{ workshop.title }}</div>

                    
                    <a :href="workshop.eventbride_link" target="_blank" v-if="workshop.registration_open">
                        <div class="registration-button">Attend</div>
                    </a>

                    <div class="registration-closed" v-else>
                    Registrations will open soon
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "workshops",
    data() {
        return {
            workshops: [
                {
                    company: "BCG",
                    company_link: "www.bcg.com",
                    title: "How to crack a case",
                    day: "Monday, 11",
                    time: "12 pm",
                    logo: "../../static/partner-logos/bcg.png",
                    eventbride_link: "",
                    registration_open: false
                },
                {
                    company: "Outsystems",
                    company_link: "www.outsystems.com",
                    title: "IoT devices",
                    day: "Monday, 11",
                    time: "5:30 pm",
                    logo: "../../static/partner-logos/outsystems.jpg",
                    eventbride_link: "",
                    registration_open: false,
                    show: true
                },
                {
                    company: "Deloitte",
                    company_link: "www.deloitte.com",
                    title: "IoT devices",
                    day: "Tuesday, 12",
                    time: "12 pm",
                    logo: "../../static/partner-logos/deloitte.png",
                    eventbride_link: "",
                    registration_open: false,
                    show: true
                },
                {
                    company: "CS",
                    company_link: "www.microsoft.com",
                    title: "How to build something out of nothing",
                    day: "Tuesday, 12",
                    time: "5:30 pm",
                    logo: "../../static/partner-logos/microsoft.png",
                    eventbride_link: "",
                    registration_open: true,
                    show: true
                },
                {
                    company: "KPMG",
                    company_link: "www.microsoft.com",
                    title: "IoT devices",
                    day: "Wednesday, 13",
                    time: "12 pm",
                    logo: "../../static/partner-logos/kpmg.svg",
                    eventbride_link: "",
                    registration_open: true,
                    show: true
                },
                {
                    company: "Talkdesk",
                    company_link: "www.talkdesk.com",
                    title: "IoT devices",
                    day: "Wednesday, 13",
                    time: "5:30 pm",
                    logo: "../../static/partner-logos/talkdesk.png",
                    eventbride_link: "",
                    registration_open: true,
                    show: true
                },/*
                {
                    company: "Vodafone",
                    company_link: "www.vodafone.pt",
                    title: "IoT devices",
                    day: "Thursday, 14",
                    time: "12 pm",
                    logo: "../../static/partner-logos/vodafone.svg",
                    eventbride_link: "",
                    registration_open: true,
                    show: true
                },*/
                {
                    company: "Microsoft",
                    company_link: "www.vodafone.pt",
                    title: "IoT devices",
                    day: "Thursday, 14",
                    time: "5:30 pm",
                    logo: "../../static/partner-logos/microsoft.png",
                    eventbride_link: "",
                    registration_open: true,
                    show: true
                },
                {
                    company: "VTXRM",
                    company_link: "www.vodafone.pt",
                    title: "IoT devices",
                    day: "Friday, 15",
                    time: "12 pm",
                    logo: "../../static/partner-logos/vtxrm.png",
                    eventbride_link: "",
                    registration_open: true,
                    show: true
                },
            ]
        }
    }
}
</script>

<style scoped>
.workshops-comp {
  width: 100%;
  background-color: #dfe6f5;
  padding-top: 100px;
  padding-bottom: 40px;
  text-align: center;
}

.workshops-flex {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 10vw;
  padding-right: 10vw;
  text-align: center;
  margin-top: 20px;
}

.workshop-card {
    background-color: #fafafa;
    padding-top: 20px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 20px;
    width: 550px;
    margin-bottom: 20px;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);
}

.workshop-left {
    float: left;
    width: 40%;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center; margin: 1em 0;
}

.workshop-right {
    float: right;
    width: 60%;
    text-align: left;
}

.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

.workshop-logo {
    justify-content: center;
    max-height: 80px;
    max-width: 160px;
    vertical-align: middle;
    opacity: .85;
    transition: all .1s ease-in-out;
}

.workshop-logo:hover {
    transform: scale(1.1,1.1)
}

.workshop-title {
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
  height: 60px;
}

.registration-button {
    background-color: #396c96;
    padding: 8px;
    width: 100px;
    border-radius: 5px;
    font-family: 'Karla';
    font-size: 18px;
    color: white;
    float: right;
    text-align: center;
    transition: all .2s ease-in-out;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
}

.registration-closed {
    font-size: 16px;
    color:#396c96;
    font-weight: 600;
}

.registration-button:hover {
    transform: scale(1.1,1.1);
}


/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1600px) {
  .latest-speakers-flex {
    justify-content: space-between;
    padding-left: 13vw;
    padding-right: 13vw;
  }

  .speaker-card {
      width: 450px;
  }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1200px) {
  .latest-speakers-flex {
    padding-left: 7vw;
    padding-right: 7vw;
  }
  
  .speaker-card {
      width: 350px;
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
    width: 120px;
    height: 120px;
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

  .speaker-image {
    width: 100px;
    height: 100px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 350px) {
  .speaker-card {
    width: 280px;
  }
}
</style>

