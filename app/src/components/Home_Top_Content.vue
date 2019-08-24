<template>
    <div class="home-top-comp">
        <div class="date-location">
            {{ date }}
            <p>{{ location }}</p>
        </div>
        
        <!--
        <div class="warning">Thank you for attending the event!</div>-->

        <div class="main-logo-container">
            <img :src="center_image_link" class="logo-home">
        </div>

        <div class="social-media">
            <div class="follow-us">{{ social_media_text }}</div>
                <div class="social-icons">
                    <a href="https://www.facebook.com/JEECIST/">
                        <img :src="facebook_icon_link" class="social-icon shadow"></a>

                    <a href="https://www.youtube.com/channel/UCTO2g_8WD8ZEQ_VvIeQ1QRQ">
                        <img :src="youtube_icon_link" class="social-icon"></a>

                    <a href="https://www.instagram.com/jeec.ist/">
                        <img :src="instagram_icon_link" class="social-icon"></a>
            </div>
        </div>

        <scroll-down-arrow id="scroll-down-arrow"/>
    </div>
</template>

<script>
export default {
  name: 'home-top-comp',
  data() {
    return {

      date: "9th to 13th of March",
      location: "Instituto Superior Técnico",
      social_media_text: "Follow us on",
      center_image_link: "../../static/jeec-logo.png",
      linkedin_icon_link: "../../static/linkedin.svg",
      facebook_icon_link: "../../static/facebook.svg",
      youtube_icon_link: "../../static/youtube.svg",
      instagram_icon_link: "../../static/instagram.svg"
    }
  },

  methods: {
    openNav () {
      document.getElementById('mySidenav').style.width = '250px'
    },

    closeNav () {
      document.getElementById('mySidenav').style.width = '0'
    }
  }
}
</script>

<style>
.home-top-comp { 
    /*background-image: url('/static/background.jpg');
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center; */
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    padding-bottom: 70px;
}

.date-location {
    width: 100%;
    height: 80px;
    font-family: 'Lato', sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 20px;
    padding-top: 125px;
    text-align: center;
} 

.warning {
    font-size: 22px;
    font-weight: 600;
    font-family: 'Lato';
    margin-top: 20px;
    margin-bottom: 10px;
    color: #3391c2;
}

.main-logo-container {
    text-align: center;
}

.logo-home {
    margin-top: 0px;
    max-width: 100%;
    height: auto;
    width: 1100px;
    display: inline-block;
}

.social-media {
    position: relative;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    bottom: 20px;
}

.follow-us {
    width: 100%;
    height: 28px;
    font-family: 'Lato', sans-serif;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 0.7px;
    text-align: center;
    color: #3391c2;
}

.social-icons {
    width: 100%;
}

.social-icon {
    width: 45px;
    height: 45px;
    margin: 20px;
}

.shadow {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
}

.social-icon:hover {
  display: inline-block;
  position: relative;
  -moz-animation: bounce 0.5s infinite linear;
  -o-animation: bounce 0.5s infinite linear;
  -webkit-animation: bounce 0.5s infinite linear;
  animation: bounce 0.5s infinite linear;
  color:000;
}
.icon:active {
    width: 50px;
    height: 50px;
}
@-webkit-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.8em; }
    70% { top: -0.4em; }
    100% { top: 0; }
}
@-moz-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.8em; }
    70% { top: -0.4em; }
    100% { top: 0; }
}
@-o-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.8em; }
    70% { top: -0.4em; }
    100% { top: 0; }
}
@-ms-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.8em; }
    70% { top: -0.4em; }
    100% { top: 0; }
}
@keyframes bounce {
    0% { top: 0; }
    50% { top: -0.8em; }
    70% { top: -0.4em; }
    100% { top: 0; }
}

/* On screens that are 600px wide*/
@media only screen and (max-width: 600px) {
    .logo-home {
        max-width: 85%;
    }

    .social-media {
        margin-top: 10vh;
    }

    .social-icon {
        width: 25px;
        height: 25px;
        margin: 10px;
    }

    .date-location {
        font-size: 20px;
    }

    .warning {
        font-size: 18px;
        font-weight: 600;
        font-family: 'Lato';
        margin-top: 10px;
        margin-bottom: 15px;
        color: #3391c2;
    }
}
</style>
