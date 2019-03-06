<template>
    <div class="activities-app">
        
        <workshops v-bind:workshop_data="workshop_data"/>
        <job-fair v-bind:job_fair_data="job_fair_data"/>
        <matchmaking v-bind:matchmaking_data="matchmaking_data"/>
        
        <contacts/>
    </div>
</template>

<script>
export default {
    name: 'partners',
    data() {
        return {
            workshop_data: {
                days: [
                    {
                        day_name: 'Monday, 11th',
                        day_number: '11',
                        border_color: '#D1E71C',
                        sessions: [
                            {
                                company: "BCG",
                                company_link: "www.bcg.com",
                                title: "How to crack a case",
                                description: "Come and join us to better understand BCG's approach to solving a real case! Attend our crack the case session on March 11 to understand how we tackle a problem. We will discuss why BCG uses case interviews, how we evaluate the candidates and the do's and don'ts to succeed in our recruitment process. We will also put our advices into action by solving a case together with you in the session!",
                                time: "12 pm",
                                logo: "../../static/partner-logos/bcg.png",
                                eventbride_link: "https://www.eventbrite.pt/e/bilhetes-workshop-bcg-how-to-crack-a-case-57612259820",
                                registration_open: true,
                                /*full: false*/
                            },
                            {
                                company: "Outsystems",
                                company_link: "www.outsystems.com",
                                title: "Mobile and web rapid application development with OutSystems",
                                description: "Build and deliver better apps faster",
                                time: "5:30 pm",
                                logo: "../../static/partner-logos/outsystems.jpg",
                                eventbride_link: "https://www.eventbrite.pt/e/bilhetes-workshop-outsystems-mobile-and-web-rapid-application-development-with-outsystems-57617016046",
                                registration_open: true,
                                show: true
                            },
                        ]
                    },
                    {
                        day_name: 'Tuesday, 12th',
                        day_number: '12',
                        border_color: '#D1E71C',
                        sessions: [
                            {
                                company: "Deloitte",
                                company_link: "www.deloitte.com",
                                title: "Understanding (Deep) Reinforcemente Learning",
                                description: "Some of the most interesting advances in AI recently have come from the field of (deep) reinforcement learning (RL). RL represents a step towards building autonomous systems with a higher level understanding of the visual world. For this reason, RL has a great potential for real-world applications. If you want to know more and try out some exercises, please join this workshop.",
                                time: "12 pm",
                                logo: "../../static/partner-logos/deloitte.png",
                                eventbride_link: "https://www.eventbrite.pt/e/bilhetes-workshop-deloitte-understanding-deep-reinforcement-learning-57613151487",
                                registration_open: true,
                                show: true
                            },/*
                            {
                                company: "CS",
                                company_link: "www.microsoft.com",
                                title: "How to build something out of nothing",
                                time: "5:30 pm",
                                logo: "../../static/partner-logos/microsoft.png",
                                eventbride_link: "",
                                registration_open: true,
                                show: true
                            },*/
                        ]
                    },
                    {
                        day_name: 'Wednesday, 13th',
                        day_number: '13',
                        border_color: '#D1E71C',
                        sessions: [
                            /*{
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
                            },*/
                        ]
                    },
                    {
                        day_name: 'Thursday, 14th',
                        day_number: '14',
                        border_color: '#D1E71C',
                        sessions: [
                            {
                                company: "Vodafone",
                                company_link: "www.vodafone.pt",
                                title: "Vodafone: Evolução e dimensionamento da rede móvel",
                                description: "Tecnologias 2G, 3G, 4G e 5G; Evolução dos padrões de consumo dos utilizadores de rede móvel: Das simples chamadas de voz às live stories do Instagram; Dimensionamento da rede para multidões (Jogos futebol, Concertos, conferencias mundiais, …)",
                                day: "Thursday, 14",
                                time: "12 pm",
                                logo: "../../static/partner-logos/vodafone.jpg",
                                eventbride_link: "",
                                registration_open: false,
                                show: true
                            },
                            {
                                company: "Microsoft",
                                company_link: "www.vodafone.pt",
                                title: "Azure IoT Introduction",
                                description: "Learn how to connect a device, send device-to-cloud (D2C) and cloud-to-device (C2D) messages, and build costume dashboards.",
                                day: "Thursday, 14",
                                time: "5:30 pm",
                                logo: "../../static/partner-logos/microsoft.png",
                                eventbride_link: "",
                                registration_open: false,
                                show: true
                            },
                        ]
                    },
                ]
            },
            job_fair_data: {
                days: [
                    {
                        day_name: 'Monday, 11th',
                        day_number: '11',
                        border_color: '#D1E71C',
                        partners: [
                            {
                                logo: '../../static/partner-logos/altran.png',
                                name: 'Altran',
                                link: 'https://www.altran.com/pt/pt-pt/'
                            },
                            {
                                logo: '../../static/partner-logos/aubay.png',
                                name: 'Aubay',
                                link: 'https://www.aubay.pt/'
                            },
                            {
                                logo: '../../static/partner-logos/celfinet.png',
                                name: 'Celfinet',
                                link: 'https://www.celfinet.com/'
                            },
                            {
                                logo: '../../static/partner-logos/ey.png',
                                name: 'EY',
                                link: 'https://www.ey.com/en_gl'
                            },
                            {
                                logo: '../../static/partner-logos/novabase.jpg',
                                name: 'Nova Base',
                                link: 'http://www.novabase.pt/pt'
                            },
                            {
                                logo: '../../static/partner-logos/neyond.svg',
                                name: 'Neyond',
                                link: 'https://www.epimetheus.pt/'
                            },
                            {
                                logo: '../../static/partner-logos/outsystems.jpg',
                                name: 'Outsystems',
                                link: 'https://www.outsystems.com/'
                            },
                            {
                                logo: '../../static/partner-logos/premium_minds.png',
                                name: 'Premium Minds',
                                link: 'https://www.premium-minds.com/'
                            },    
                            {
                                logo: '../../static/partner-logos/technoedif.png',
                                name: 'Technoedif',
                                link: 'https://www.technoedif.com/pt/homepage/'
                            },
                            {
                                logo: '../../static/partner-logos/thales.png',
                                name: 'Thales',
                                link: 'https://www.thalesgroup.com/pt-pt'
                            },
                            {
                                logo: '../../static/partner-logos/vtxrm.png',
                                name: 'VTXRM',
                                link: 'http://www.vtxrm.com/'
                            },
                        ]
                    },
                    {
                        day_name: 'Tuesday, 12th',
                        day_number: '12',
                        border_color: '#3399ff',
                        partners: [
                            {
                                logo: '../../static/partner-logos/coreso.png',
                                name: 'Coreso',
                                link: 'https://www.coreso.eu/'
                            },
                            {
                                logo: '../../static/partner-logos/critical_techworks.png',
                                name: 'Critical Techworks',
                                link: 'https://www.criticaltechworks.com/'
                            },
                            {
                                logo: '../../static/partner-logos/dellent_consulting.png',
                                name: 'Dellent Consulting',
                                link: 'https://www.dellentconsulting.com/'
                            },
                            {
                                logo: '../../static/partner-logos/everis.png',
                                name: 'Everis',
                                link: 'https://www.everis.com/portugal/pt-pt'
                            },
                            {
                                logo: '../../static/partner-logos/kpmg.svg',
                                name: 'KPMG',
                                link: 'https://home.kpmg/pt/en/home.html'
                            },
                            {
                                logo: '../../static/partner-logos/neyond.svg',
                                name: 'Neyond',
                                link: 'https://www.epimetheus.pt/'
                            },
                            {
                                logo: '../../static/partner-logos/novabase.jpg',
                                name: 'Nova Base',
                                link: 'http://www.novabase.pt/pt'
                            },
                            {
                                logo: '../../static/partner-logos/outsystems.jpg',
                                name: 'Outsystems',
                                link: 'https://www.outsystems.com/'
                            },
                            {
                                logo: '../../static/partner-logos/ren.png',
                                name: 'REN',
                                link: 'https://www.ren.pt/'
                            },
                            {
                                logo: '../../static/partner-logos/thales.png',
                                name: 'Thales',
                                link: 'https://www.thalesgroup.com/pt-pt'
                            },
                            {
                                logo: '../../static/partner-logos/vtxrm.png',
                                name: 'VTXRM',
                                link: 'http://www.vtxrm.com/'
                            },
                        ]
                    },
                    {
                        day_name: 'Wednesday, 13th',
                        day_number: '13',
                        border_color: '#3bd6c6',
                        partners: [
                            {
                                logo: '../../static/partner-logos/accenture.png',
                                name: 'Accenture',
                                link: 'https://www.accenture.com/pt-pt/new-applied-now'
                            },
                            {
                                logo: '../../static/partner-logos/deloitte.png',
                                name: 'Deloitte',
                                link: 'https://www2.deloitte.com/pt/pt.html'
                            },
                            {
                                logo: '../../static/partner-logos/everis.png',
                                name: 'Everis',
                                link: 'https://www.everis.com/portugal/pt-pt'
                            },
                            {
                                logo: '../../static/partner-logos/infineon.png',
                                name: 'Infineon',
                                link: 'https://www.infineon.com/'
                            },
                            {
                                logo: '../../static/partner-logos/kwan.png',
                                name: 'Kwan',
                                link: 'www.kwan.pt/'
                            },
                            {
                                logo: '../../static/partner-logos/microsoft.png',
                                name: 'Microsoft',
                                link: 'https://www.microsoft.com/pt-pt'
                            },
                            {
                                logo: '../../static/partner-logos/navigator.png',
                                name: 'Navigator',
                                link: 'http://www.thenavigatorcompany.com/'
                            },                            
                            {
                                logo: '../../static/partner-logos/siemens.jpg',
                                name: 'Siemens',
                                link: 'https://www.siemens.com/'
                            },
                            {
                                logo: '../../static/partner-logos/synopsys.png',
                                name: 'Synopsys',
                                link: 'https://www.synopsys.com/'
                            },
                            {
                                logo: '../../static/partner-logos/talkdesk.png',
                                name: 'Talkdesk',
                                link: 'https://www.talkdesk.com/'
                            },
                            {
                                logo: '../../static/partner-logos/weg.jpg',
                                name: 'WEG',
                                link: 'https://www.weg.net/pt'
                            }
                        ]
                    },
                    {
                        day_name: 'Thursday, 14th',
                        day_number: '14',
                        border_color: '#afabd2',
                        partners: [
                            {
                                logo: '../../static/partner-logos/accenture.png',
                                name: 'Accenture',
                                link: 'https://www.accenture.com/pt-pt/new-applied-now'
                            },
                            {
                                logo: '../../static/partner-logos/alten.png',
                                name: 'Alten',
                                link: 'http://www.alten.com/'
                            },
                            {
                                logo: '../../static/partner-logos/deloitte.png',
                                name: 'Deloitte',
                                link: 'https://www2.deloitte.com/pt/pt.html'
                            },
                            {
                                logo: '../../static/partner-logos/infineon.png',
                                name: 'Infineon',
                                link: 'https://www.infineon.com/'
                            },
                            {
                                logo: '../../static/partner-logos/microsoft.png',
                                name: 'Microsoft',
                                link: 'https://www.microsoft.com/pt-pt'
                            },
                            {
                                logo: '../../static/partner-logos/navigator.png',
                                name: 'Navigator',
                                link: 'http://www.thenavigatorcompany.com/'
                            },
                            {
                                logo: '../../static/partner-logos/nos.png',
                                name: 'NOS',
                                link: 'www.nos.pt/'
                            },
                            {
                                logo: '../../static/partner-logos/primeit.png',
                                name: 'PrimeIT',
                                link: 'https://www.primeit.pt/'
                            },
                            {
                                logo: '../../static/partner-logos/siemens.jpg',
                                name: 'Siemens',
                                link: 'https://www.siemens.com/'
                            },
                            {
                                logo: '../../static/partner-logos/talkdesk.png',
                                name: 'Talkdesk',
                                link: 'https://www.talkdesk.com/'
                            },
                            {
                                logo: '../../static/partner-logos/voice_interaction.png',
                                name: 'Voiceinteraction',
                                link: 'https://www.voice-interaction.com/pt/'
                            },
                        ]
                    },
                ]
            },
            matchmaking_data: {
                days: [
                    {
                        day_name: 'Monday, 11th',
                        day_number: '11',
                        border_color: '#3399ff',
                        sessions: [
                            {
                                time: '10 am - 12 pm',
                                registration_open: true,
                                eventbride_link: 'https://www.eventbrite.pt/e/bilhetes-matchmaking-sessao-1-outsystems-nova-base-ey-thales-57614033124',
                                partners: [
                                    {
                                        logo: '../../static/partner-logos/outsystems.jpg',
                                        name: 'Outsystems',
                                        link: 'https://www.outsystems.com/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/novabase.jpg',
                                        name: 'Nova Base',
                                        link: 'http://www.novabase.pt/pt'
                                    },
                                    {
                                        logo: '../../static/partner-logos/ey.png',
                                        name: 'EY',
                                        link: 'https://www.ey.com/en_gl'
                                    },
                                    {
                                        logo: '../../static/partner-logos/thales.png',
                                        name: 'Thales',
                                        link: 'https://www.thalesgroup.com/pt-pt'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        day_name: 'Tuesday, 12th',
                        day_number: '12',
                        border_color: '#3399ff',
                        sessions: [
                            {
                                time: '10 am - 12 pm',
                                registration_open: true,
                                eventbride_link: 'https://www.eventbrite.pt/e/bilhetes-matchmaking-sessao-2-adentis-epimetheus-kpmg-hitachi-vantara-57614581765',
                                partners: [
                                    {
                                        logo: '../../static/partner-logos/neyond.svg',
                                        name: 'Neyond',
                                        link: 'https://www.epimetheus.pt/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/adentis.png',
                                        name: 'Adentis',
                                        link: 'http://www.adentis.pt/'
                                    },     
                                    {
                                        logo: '../../static/partner-logos/kpmg.svg',
                                        name: 'KPMG',
                                        link: 'https://home.kpmg/pt/en/home.html'
                                    },
                                    {
                                        logo: '../../static/partner-logos/hitachi.png',
                                        name: 'Hitachi Vantara',
                                        link: 'https://www.hitachivantara.com/en-us/home.html'
                                    },
                                ]
                            },
                            {
                                time: '12 pm - 14 pm',
                                registration_open: true,
                                eventbride_link: 'https://www.eventbrite.pt/e/bilhetes-matchmaking-sessao-3-vtxrm-it-sector-vodafone-cs-57615192592',
                                partners: [
                                    {
                                        logo: '../../static/partner-logos/vtxrm.png',
                                        name: 'VTXRM',
                                        link: 'http://www.vtxrm.com/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/itsector.png',
                                        name: 'ITSector',
                                        link: 'https://www.itsector.pt/pt/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/vodafone.jpg',
                                        name: 'Vodafone',
                                        link: 'https://www.vodafone.pt/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/critical_techworks.png',
                                        name: 'Critical Techworks',
                                        link: 'https://www.criticaltechworks.com/'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        day_name: 'Wednesday, 13th',
                        day_number: '13',
                        border_color: '#3399ff',
                        sessions: [
                            {
                                time: '10 am - 12 pm',
                                registration_open: false,
                                eventbride_link: '',
                                partners: [
                                    {
                                        logo: '../../static/partner-logos/synopsys.png',
                                        name: 'Synopsys',
                                        link: 'https://www.synopsys.com/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/everis.png',
                                        name: 'Everis',
                                        link: 'https://www.everis.com/portugal/pt-pt'
                                    },
                                    {
                                        logo: '../../static/partner-logos/talkdesk.png',
                                        name: 'Talkdesk',
                                        link: 'https://www.talkdesk.com/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/kwan.png',
                                        name: 'Kwan',
                                        link: 'www.kwan.pt/'
                                    },
                                ]
                            },
                            {
                                time: '12 pm - 14 pm',
                                registration_open: false,
                                eventbride_link: '',
                                partners: [
                                    {
                                        logo: '../../static/partner-logos/celfinet.png',
                                        name: 'Celfinet',
                                        link: 'https://www.celfinet.com/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/siemens.jpg',
                                        name: 'Siemens',
                                        link: 'https://www.siemens.com/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/microsoft.png',
                                        name: 'Microsoft',
                                        link: 'https://www.microsoft.com/pt-pt'
                                    },
                                    {
                                        logo: '../../static/partner-logos/rumos.png',
                                        name: 'Rumos',
                                        link: 'https://www.rumos.pt/'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        day_name: 'Thursday, 14th',
                        day_number: '14',
                        border_color: '#3399ff',
                        sessions: [
                            {
                                time: '10 am - 12 pm',
                                registration_open: false,
                                eventbride_link: '',
                                partners: [ 
                                    {
                                        logo: '../../static/partner-logos/deloitte.png',
                                        name: 'Deloitte',
                                        link: 'https://www2.deloitte.com/pt/pt.html'
                                    },
                                    {
                                        logo: '../../static/partner-logos/infineon.png',
                                        name: 'Infineon',
                                        link: 'https://www.infineon.com/'
                                    },
                                    {
                                        logo: '../../static/partner-logos/accenture.png',
                                        name: 'Accenture',
                                        link: 'https://www.accenture.com/pt-pt/new-applied-now'
                                    },
                                    {
                                        logo: '../../static/partner-logos/navigator.png',
                                        name: 'Navigator',
                                        link: 'http://www.thenavigatorcompany.com/'
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}
</script>
