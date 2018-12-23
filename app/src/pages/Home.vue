<template>
    <div class="home-app">
        <div class="date-location">
            11 to 15 March
            <p>Instituto Superior Técnico</p>
        </div>
            
        <div class="main-logo-container">
            <img src="../../static/jeec_logo.svg" class="logo-home">
        </div>

        <div class="social-media">
            <div class="follow-us">Follow us on</div>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/company/jeecist/">
                        <img src="../../static/linkedin.svg" class="social-icon shadow"></a>

                    <a href="https://www.facebook.com/JEECIST/">
                        <img src="../../static/facebook.svg" class="social-icon shadow"></a>

                    <a href="https://www.youtube.com/channel/UCTO2g_8WD8ZEQ_VvIeQ1QRQ">
                        <img src="../../static/youtube.svg" class="social-icon"></a>

                    <a href="https://www.instagram.com/jeec.ist/">
                        <img src="../../static/instagram.svg" class="social-icon"></a>
            </div>
        </div>
    </div>
</template>


<style>
.home-app {
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    padding-bottom: 10px;
}

.date-location {
    width: 100%;
    height: 42px;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 20px;
    padding-top: 140px;
    text-align: center;
} 

.main-logo-container {
    text-align: center;
}

.logo-home {
    margin-top: 50px;
    max-width: 1100px;
    height: auto;
    width: 100%;
    display: inline-block;
}

.social-media {
    position: relative;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 0px;
}

.follow-us {
    width: 100%;
    height: 28px;
    font-family: 'Roboto', sans-serif;
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
    .home-app {
        height: 100vh;
    }

    .social-media {
        position: absolute;
        bottom: 100px;
    }

    .social-icon {
        width: 50px;
        height: 50px;
        margin: 10px;
    }

    .date-location {
        font-size: 20px;
    }
}
</style>
