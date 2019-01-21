<template>
    <div class="gold-partners">
        <component-title title="Gold Partners"/>

        <div class="partners-container">
            <div class="partners-flex">
                <div class="partner" v-for="partner in partners" :key="partner.name">
                    <div><img class="logo" :src="partner.logo"></div>

                    <div class="partner-name-container">
                        <div class="partner-name">{{ partner.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'gold-partners',
        data() {
            return {
                partners: [
                    {
                        logo: 'http://logok.org/wp-content/uploads/2014/03/Accenture-red-arrow-logo.png',
                        name: 'Accenture'
                    },
                    {
                        logo: 'https://logos-download.com/wp-content/uploads/2016/10/Deloitte_logo.png',
                        name: 'Deloitte'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'Epimetheus'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'Everis'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'EY'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'KPMG'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'Navigator'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'Nova Base'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'Siemens'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'Outsystems'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'Talkdesk'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'Thales'
                    },
                    {
                        logo: 'https://i2.wp.com/humansideoftech.com/wp-content/uploads/PNGPIX-COM-Microsoft-Logo-PNG-Transparent-1.png?ssl=1',
                        name: 'WEG'
                    },
                ]
            }
        },
    }
</script>

<style>
.partners-container {
    background-color: white;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-color: #cfbf2c;
    border-width: 2px;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 300px;
    margin-right: 300px;
}

.partners-flex {
  display: -webkit-box;  /* iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* IE 10 */
  display: -webkit-flex; /* Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /*Firefox, Chrome, Opera */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 5vw;
  padding-right: 5vw;
}

.partners-flex img {
      justify-content: center;
    max-height: 100px;
    max-width: 150px;
    margin: 5px 12px;
    opacity: .85;
    transition: all .3s;
 
}
.partners-flex img:hover {
	opacity: 1;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
}

.reason-to-come {
  width: 32%;
  text-align: center;
}

.logo {
  width: 80px;
  height: 80px;
  display: inline-block;
}

.icon-text-container {
    padding: 10px;
}

.icon-text {
  display: inline-block;
  font-family: 'Raleway';
  font-size: 20px;
  line-height: 1.47;
  color: #000000;
  margin-top: 20px;
}
</style>

