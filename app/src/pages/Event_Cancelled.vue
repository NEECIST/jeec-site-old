<template>
  <div class="event_cancelled-comp">
    <component-title title="A note from the Team" subtitle />

    <div class="info_text">
      <span v-html="text"></span>
    </div>

    <contacts />
  </div>
</template>


<script>
export default {
  name: "event_cancelled",
  data() {
    return {
      text:
        "It is with great sadness that the JEEC team informs that the event will be postponed to 2021 due to the statement by the President of IST regarding COVID-19 and Information Note CG/11/2020, taking into account the IST Contingency Plan regarding the virus.<br>Our team remains committed to doing everything possible to bring an unforgettable event to the entire MEEC course and the IST community."
    };
  }
};
</script>

<style>
.event_cancelled-comp {
  /*background-image: url('/static/background.jpg');
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center; */
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding-top: 70px;
}

.info_text {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 75%;
  font-family: "Lato";
  margin-top: 20px;
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 35px;
  letter-spacing: normal;
  color: #505050;
  display: inline-block;
  text-align: justify;
  text-justify: inter-word;
}

@media only screen and (max-width: 600px) {
  .info_text {
      font-size: 20px;
  }
}

</style>
