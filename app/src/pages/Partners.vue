<template>
    <div class="partners-app">

       <image-center-text text="Our Partners"/>

        <component-title title="Main Sponsor"/>
        <a href="http://www.vtxrm.com/">
            <img class="main-sponsor-logo" src="../../static/partner-logos/vtxrm.png">
        </a>

        <partner-tier tier="Gold Partners" v-bind:partners="partners.gold" tier_color="#cfbf2c"/>
        <partner-tier tier="Silver Partners" v-bind:partners="partners.silver" tier_color="#B7B7B7"/>
        <partner-tier tier="Bronze Partners" v-bind:partners="partners.bronze" tier_color="#CE8F6B"/>

        <contacts/>
    </div>
</template>

<script>
    export default {
        name: 'partners',
        data() {
            return {
                partners:
                {
                    gold: [
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
                            logo: 'https://www.epimetheus.pt/client/skins/images/logo.svg',
                            name: 'Epimetheus',
                            link: 'https://www.epimetheus.pt/'
                        },
                        {
                            logo: '../../static/partner-logos/everis.png',
                            name: 'Everis',
                            link: 'https://www.everis.com/portugal/pt-pt'
                        },
                        {
                            logo: '../../static/partner-logos/ey.png',
                            name: 'EY',
                            link: 'https://www.ey.com/en_gl'
                        },
                        {
                            logo: '../../static/partner-logos/kpmg.svg',
                            name: 'KPMG',
                            link: 'https://home.kpmg/pt/en/home.html'
                        },
                        {
                            logo: '../../static/partner-logos/navigator.png',
                            name: 'Navigator',
                            link: 'http://www.thenavigatorcompany.com/'
                        },
                        {
                            logo: '../../static/partner-logos/novabase.svg',
                            name: 'Nova Base',
                            link: 'http://www.novabase.pt/pt'
                        },
                        {
                            logo: '../../static/partner-logos/siemens.png',
                            name: 'Siemens',
                            link: 'https://www.siemens.com/pt/pt/home.html'
                        },
                        {
                            logo: '../../static/partner-logos/outsystems.jpg',
                            name: 'Outsystems',
                            link: 'https://www.outsystems.com/'
                        },
                        {
                            logo: '../../static/partner-logos/talkdesk.png',
                            name: 'Talkdesk',
                            link: 'https://www.talkdesk.com/'
                        },
                        {
                            logo: '../../static/partner-logos/thales.png',
                            name: 'Thales',
                            link: 'https://www.thalesgroup.com/pt-pt'
                        },
                        {
                            logo: '../../static/partner-logos/weg.png',
                            name: 'WEG',
                            link: 'https://www.weg.net/pt'
                        },
                    ],
                    silver: [
                        {
                            logo: '../../static/partner-logos/alten.png',
                            name: 'Alten',
                            link: 'http://www.alten.com/'
                        },
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
                            logo: '../../static/partner-logos/microsoft.png',
                            name: 'Premium Minds',
                            link: 'https://www.premium-minds.com/'
                        },
                    ]
                }
            }
        },
    }
</script>

<style>
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
