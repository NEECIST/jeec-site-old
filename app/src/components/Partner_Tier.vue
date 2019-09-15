<template>
    <div class="partner-tier-comp" v-if="partners.length">
        <component-title v-bind:title="tier"/>

        <div class="partners-container" v-bind:style="{ borderColor: tier_color }">
            <div class="partners-flex">
                <div class="partner" v-for="partner in partners" :key="partner.name">
                    <a v-bind:href="partner.link" target="_blank">
                        <img class="partner-logo" :src="jeec_api_url + partner.logo">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'partner-tier',
        props: ['partners', 'tier', 'tier_color'],
        data() {
            return {
                jeec_api_url : process.env.VUE_APP_JEEC_BRAIN_URL,
            };
        },
    }
</script>

<style>
.partners-container {
    background-color: white;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 2px;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 9vw;
    margin-right: 9vw;
    margin-bottom: 50px;
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
  padding-left: 3vw;
  padding-right: 3vw;
}

.partner-logo {
    justify-content: center;
    max-height: 100px;
    max-width: 150px;
    margin: 10px 25px;
    opacity: .85;
    transition: all .2s ease-in-out;
}

.partner-logo:hover {
	opacity: 1;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transform: scale(1.15); 
}

.partner-name {
  display: inline-block;
  font-family: 'Raleway';
  font-size: 20px;
  line-height: 1.47;
  color: #000000;
  margin-top: 20px;
  padding: 10px;
}

@media screen and (max-width: 1400px) {
    .partner-logo {
      max-width: 175px;
      max-height: 88px;
      margin: 20px 25px;
  }
}

@media screen and (max-width: 560px) {
  .partners-container {
    margin-left: 10vw;
    margin-right: 10vw;
  }

  .partner-logo  {
      max-width: 160px;
      max-height: 60px;
      margin: 20px 10px;
  }

  .partners-flex {
    flex-direction: column;
  }
}
</style>

