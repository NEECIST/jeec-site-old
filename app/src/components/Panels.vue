<template>
<div class="latest-panels-comp">
  <div class="panels-list-comp">
    <component-title
      title="Panels @ JEEC"
    />
      
      <div class="panel" v-for="panel in panels" :key="panel.title">
        <div class="panel-title">{{ panel.title }}</div>
        <div class="panel-day">{{ panel.day }}</div>
        <div class="panel-time">{{ panel.time }}</div>
        <div class="panel-description">{{ panel.description }}</div>
        <div class="latest-panels-flex">
            <div class="panel-card" v-for="speaker in panel.speakers" :key="speaker.name">
                <div>
                    <img class="panel-image" :src="speaker.image">
                </div>

                <div class="panel-name">{{ speaker.name }}</div>

                <div class="panel-current-function">{{ speaker.current_function }}</div>

                <a :href="panel.company_link" target="_blank">
                    <img class="panel-company-logo" :src="speaker.company_logo">
                </a>

                <div>
                    <div class="origin-text" v-html="speaker.origin"/>
                </div>

                <div class="panel-notes" v-html="speaker.notes"></div>

                <div class="panel-card-bottom">
                    <div class="panel-links">
                    <a v-for="link in speaker.links" :key="link.link" :href="link.link" target="_blank">
                        <img class="panel-link-logo" :src="link.logo">
                    </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "panels_list",
  data() {
    return {
        panels: [
            {
                title: 'Energias',
                day: '11 march',
                time: '5:00 pm',
                description: 'eu sou homossexual',
                speakers: [
                {
                    name: 'Pedro Carvalho',
                    current_function: 'Professor',
                    company_logo: '../../static/panel-logos/ist.png',
                    company_link: 'https://www.inesc-id.pt/member/13134/',
                    image: '../../static/panel-logos/pedro_carvalho.png',
                    origin: 'Portugal',
                },
                {
                    name: 'Jan Van Roost',
                    current_function: 'COO',
                    company_logo: '../../static/panel-logos/coreso.png',
                    company_link: 'https://www.coreso.eu/',
                    image: '../../static/panel-logos/jan_van_roost.png',
                    origin: 'Belgium',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/janvanroost/',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                {
                    name: 'Eduardo Santos',
                    current_function: 'Security and Coordination engineer',
                    company_logo: '../../static/panel-logos/coreso.png',
                    company_link: 'https://www.coreso.eu/',
                    image: '../../static/panel-logos/eduardo_santos.png',
                    origin: 'Portugal',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/eduardo-santos-28879031?originalSubdomain=pt',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                {
                    name: 'António Albino Marques',
                    current_function: 'Director',
                    company_logo: '../../static/panel-logos/coreso.png',
                    company_link: 'https://www.ren.pt/',
                    image: '../../static/panel-logos/albino_marques.png',
                    origin: 'Portugal',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/antonio-albino-marques-3596128/',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                ]
            },

            {
                title: 'Eletro pelo Mundo',
                day: '12 march',
                time: '5:00 pm',
                description: 'eu sou heterossexual',
                speakers: [
                {
                    name: 'Nuno Roma',
                    current_function: 'Professor, Researcher',
                    company_logo: '../../static/panel-logos/ist.png',
                    company_link: 'http://sips.inesc-id.pt/~nfvr/',
                    image: '../../static/panel-logos/nuno_roma.png',
                    origin: 'Portugal',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/nunoroma/',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                {
                    name: 'João Guilherme',
                    current_function: 'Power Electronics/Control Engineer',
                    company_logo: '../../static/panel-logos/abb.png',
                    company_link: 'https://new.abb.com/',
                    image: '../../static/panel-logos/joao_guilherme.png',
                    origin: 'Portugal',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/joaodtguilherme/',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                {
                    name: 'Bernardo Marques',
                    current_function: 'Data Scientist',
                    company_logo: '../../static/panel-logos/orange_nxt.png',
                    company_link: 'https://orangenxt.com/',
                    image: '../../static/panel-logos/bernardo_marques.png',
                    origin: 'Netherlands',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/bernardogcmarques/',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                {
                    name: 'Renato Negrinho',
                    current_function: 'Research intern',
                    company_logo: '../../static/panel-logos/microsoft.png',
                    company_link: 'https://www.microsoft.com/pt-pt/',
                    image: '../../static/panel-logos/renato_negrinho.png',
                    origin: 'Pittsburgh',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/renato-negrinho-716b6252/',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                {
                    name: 'Guilherme Teixeira',
                    current_function: 'Analog and Mixed Signal Methodology Engineer',
                    company_logo: '../../static/panel-logos/infineon.png',
                    company_link: 'https://www.infineon.com/',
                    image: '../../static/panel-logos/guilherme_teixeira.png',
                    origin: 'Portugal',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/guilhermebteixeira/',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                ]
            },
            {
                title: 'Startups',
                day: '13 march',
                time: '5:00 pm',
                description: 'eu sou gay',
                speakers: [
                {
                    name: 'Diana Barbosa',
                    current_function: 'Entrepreneur, Product Designer and Researcher',
                    company_logo: '../../static/panel-logos/unbabel.png',
                    image: '../../static/panel-logos/paulo_dimas.png',
                    origin: 'Portugal',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/paulodimas/',
                        logo: '../../static/panels/linkedin.png'
                        }
                    ],
                },
                {
                    name: 'Luis Batalha',
                    current_function: 'Founder',
                    company_logo: '../../static/panel-logos/amplemarket.png',
                    image: '../../static/panel-logos/luis_batalha.png',
                    origin: 'San Francisco, California',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/luis-batalha-95198980/?fbclid=IwAR3pKi2x6CvFlzZbpZ_i4mVkwownikG6YArkDFiby2_2pAxoQ0D7s07XTis',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                {
                    name: 'Paulo Dimas',
                    current_function: 'Entrepreneur',
                    company_logo: '../../static/panel-logos/unbabel.png',
                    company_link: 'https://unbabel.com/',
                    image: '../../static/panel-logos/paulo_dimas.png',
                    origin: 'Portugal',
                    links: [
                        {
                        link: 'https://www.linkedin.com/in/paulodimas/',
                        logo: '../../static/speakers/linkedin.png'
                        }
                    ],
                },
                {
                name: 'Ricardo Pereira',
                current_function: 'Entrepreneur',
                company_logo: '../../static/panel-logos/unbabel.png',
                image: '../../static/panel-logos/paulo_dimas.png',
                origin: 'Portugal',
                links: [
                    {
                    link: 'https://www.linkedin.com/in/paulodimas/',
                    logo: '../../static/speakers/linkedin.png'
                    }
                ],
                }
                ]
            }
        
        ]
    };
  }
};
</script>

<style scoped>
.latest-panels-comp {
  width: 100%;
  background-color: #dfe6f5;
  padding-top: 90px;
  padding-bottom: 40px;
  text-align: center;
}

.latest-panels-flex {
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

.panel-card {
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

.panel-image {
  width: 160px;
  height: 160px;
}

.panel-name {
  margin-top: 15px;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
}

.panel-current-function {
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

.panel-company-logo {
  max-height: 65px;
  max-width: 150px;
  transition: all 0.2s ease-in-out;
}

.panel-company-logo:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.1);
}

.panel-notes {
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

.panel-card-bottom {
  height: 60px;
}

.panel-links {
  margin-top: 20px;
  width: 50%;
  float: left;
}

.panel-link-logo {
  max-width: 30px;
  margin-right: 15px;
  transition: all 0.2s ease-in-out;
}

.panel-link-logo:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.2);
}

.panel-schedule {
  margin-top: 12px;
  width: 50%;
  float: right;
}

.panel-title {
  font-family: "Lato";
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
}

.panel-day {
  font-family: "Lato";
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}

.panel-time {
  font-family: "Lato";
  font-weight: bold;
  font-size: 16px;
  color: #3477f3;
  margin-bottom: 5px;
}

.panel-description {
  font-family: "Lato";
  font-weight: normal;
  font-size: 16px;
  color: #000000;
  margin-bottom: 5px;
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1600px) {
  .latest-panels-flex {
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .panel-card {
    width: 350px;
  }
}

/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1200px) {
  .latest-panels-flex {
    justify-content: space-between;
    display: inline-block;
    padding-left: 7vw;
    padding-right: 7vw;
  }

  .panel-card {
    margin-top: 40px;
    width: 450px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 850px) {
  .latest-panels-flex {
    justify-content: space-between;
    display: inline-block;
  }

  .panel-card {
    margin-top: 40px;
    width: 400px;
  }

  .panel-image {
    width: 140px;
    height: 140px;
  }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 550px) {
  .panel-card {
    margin-top: 40px;
    border-radius: 20px;
    width: 310px;
  }

  .panel-company {
    font-size: 17px;
  }

  .panel-name {
    margin-top: 10px;
  }
}

/* On screens that are 350px wide*/
@media only screen and (max-width: 350px) {
  .panel-card {
    width: 280px;
  }

  .panel-image {
    width: 130px;
    height: 130px;
  }
}
</style>
