<template>
    <div class="activities-app">
        
        <workshops v-bind:workshop_data="workshop_data"/>
        <matchmaking v-bind:matchmaking_data="matchmaking_data"/>
        <job-fair v-bind:job_fair_data="job_fair_data"/>
        <techtalks v-bind:workshop_data="techtalks_data" />
        
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
                            },
                            {
                                company: "Critical TechWorks",
                                company_link: "https://www.criticaltechworks.com/",
                                title: "To be confirmed",
                                time: "5:30 pm",
                                logo: "../../static/partner-logos/critical_techworks.png",
                                eventbride_link: "https://www.eventbrite.pt/e/bilhetes-workshop-critical-techworks-by-cs-titulo-a-confirmar-57620076199",
                                registration_open: true,
                                show: true
                            },
                        ]
                    },
                    {
                        day_name: 'Wednesday, 13th',
                        day_number: '13',
                        border_color: '#D1E71C',
                        sessions: [
                            {
                                company: "KPMG",
                                company_link: "www.microsoft.com",
                                title: "Cyber Security",
                                description: '',
                                day: "Wednesday, 13",
                                time: "12 pm",
                                logo: "../../static/partner-logos/kpmg.svg",
                                eventbride_link: "https://www.eventbrite.pt/e/bilhetes-workshop-kpmg-cyber-security-57620601771",
                                registration_open: true,
                                show: true
                            },/*
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
                                eventbride_link: "https://www.eventbrite.pt/e/bilhetes-workshop-vodafone-vodafone-evolucao-e-dimensionamento-da-rede-movel-57622905662",
                                registration_open: true,
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
                                eventbride_link: "https://www.eventbrite.pt/e/bilhetes-workshop-microsoft-azure-iot-introduction-57623025019",
                                registration_open: true,
                                show: true
                            },
                        ]
                    },
                ]
            },
            techtalks_data: {
                days: [
                    {
                        day_name: 'Monday, 11th',
                        day_number: '11',
                        border_color: '#D1E71C',
                        sessions: [
                            {
                                company: "VTXRM",
                                company_link: "www.vtxrm.com",
                                title: "How we work",
                                description: "",
                                time: "10 am",
                                logo: "../../static/partner-logos/vtxrm.png",
                            },
                            {
                                company: "Thales",
                                company_link: "www.thalesgroup.com",
                                title: "O Pulsar da Cidade / Big Data",
                                description: "",
                                time: "10:45 am",
                                logo: "../../static/partner-logos/thales.png",
                            },
                            {
                                company: "EY",
                                company_link: "www.ey.com",
                                title: "ThEY Pitch",
                                description: "",
                                time: "11:30 am",
                                logo: "../../static/partner-logos/ey.png",
                            },
                        ]
                    },
                    {
                        day_name: 'Tuesday, 12th',
                        day_number: '12',
                        border_color: '#D1E71C',
                        sessions: [
                            {
                                company: "Outsystems",
                                company_link: "www.outsystems.com",
                                title: "AI-powered Data Model Design",
                                description: "Machine Learning applied to Software",
                                time: "10 am",
                                logo: "../../static/partner-logos/outsystems.jpg"
                            },
                            {
                                company: "Novabase",
                                company_link: "www.novabase.com",
                                title: "Introdução ao Processamento de Linguagem Natural dentro do contexto de Inteligência Artificial",
                                description: "Quais os desafios, as suas aplicações e limitações",
                                time: "10:45 am",
                                logo: "../../static/partner-logos/novabase.jpg"
                            },
                            {
                                company: "Everis",
                                company_link: "www.everis.com",
                                title: "Everything that can be digital will be digital",
                                description: "Como identificar e automatizar processos/tarefas de grande volume mas pouco valor acrescentado, realizadas por humanos, e transformar operações utilizando robots de software, seguindo regras para processar dados estruturados.",
                                time: "11:30 am",
                                logo: "../../static/partner-logos/everis.png"
                            },
                        ]
                    },
                    {
                        day_name: 'Wednesday, 13th',
                        day_number: '13',
                        border_color: '#D1E71C',
                        sessions: [
                            {
                                company: "The Navigator Company",
                                company_link: "www.thenavigatorcompany.com",
                                title: "Descarbonização da Navigator. Parece impossível?",
                                description: 'No âmbito deste tech talk, será debatido o roadmap para atingir, até 2035, a neutralidade carbónica dos processos industriais da Navigator Company.',
                                day: "Wednesday, 13",
                                time: "10 am",
                                logo: "../../static/partner-logos/navigator.png"
                            },
                            {
                                company: "Deloitte",
                                company_link: "www.deloitte.com",
                                title: "Network Functions Virtualization, where are we now?",
                                description: 'Introdução da tecnologia NFV seguido do âmbito/atividades de um projeto Deloitte num operador multinacional relativamente ao tema NFV. Finalização com uma reflexão do estado atual do NFV nas operadoras e quais os próximos passos.',
                                day: "Wednesday, 13",
                                time: "10:45 am",
                                logo: "../../static/partner-logos/deloitte.png"
                            },
                            {
                                company: "Talkdesk",
                                company_link: "www.talkdesk.com",
                                title: "From a contest to great tech challenges",
                                description: '',
                                day: "Wednesday, 13",
                                time: "11:30 am",
                                logo: "../../static/partner-logos/talkdesk.png"
                            },
                        ]
                    },
                    {
                        day_name: 'Thursday, 14th',
                        day_number: '14',
                        border_color: '#D1E71C',
                        sessions: [
                            {
                                company: "NOS",
                                company_link: "www.nos.pt",
                                title: "An insight view of NOS",
                                description: "",
                                day: "Thursday, 14",
                                time: "10 am",
                                logo: "../../static/partner-logos/nos.png"
                            },
                            {
                                company: "Alten",
                                company_link: "www.alten.com",
                                title: "Join the largest IT Hub in Europe",
                                description: "Come join us at the talk to know more about what we do and what you could gain from this experience!",
                                day: "Thursday, 14",
                                time: "10:45 am",
                                logo: "../../static/partner-logos/alten.png"
                            },
                            {
                                company: "Voice Interaction",
                                company_link: "www.voice-interaction.com",
                                title: "Automatic Live-Subtitling: Pushing the Limits of Speech Recognition",
                                description: "ASR – Automatic Speech Recognition, com base em técnicas de Machine Learning e DNN’s",
                                day: "Thursday, 14",
                                time: "11:30 am",
                                logo: "../../static/partner-logos/voice_interaction.png"
                            }
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
                                registration_open: true,
                                eventbride_link: 'https://www.eventbrite.pt/e/bilhetes-matchmaking-sessao-4-synopsys-everis-talkdesk-kwan-57615316964',
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
                                registration_open: true,
                                eventbride_link: 'https://www.eventbrite.pt/e/bilhetes-matchmaking-sessao-5-rumos-celfinet-siemens-microsoft-57615939827',
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
                                registration_open: true,
                                eventbride_link: 'https://www.eventbrite.pt/e/bilhetes-matchmaking-sessao-6-navigator-deloitte-infinion-accenture-57616196595',
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
