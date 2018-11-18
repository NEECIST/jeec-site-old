<template>
    <div class="home-top-comp">
        <div class="date-location">
            11 to 15 March 2019
            <p>Instituto Superior Técnico</p>
        </div>
            
        <div class="main-logo-container">
            <img src="../../static/jeec_logo.png" class="logo-home">
        </div>

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
</template>


<style>
.home-top-comp { 
    /*background-image: url('/static/background.jpg');
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center; */
    background-color: #ffffff;
    width: 100%;
    padding-bottom: 47px;
}

.date-location {
    width: 100%;
    height: 42px;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 500;
    padding-top: 130px;
    text-align: center;
} 

.main-logo-container {
    text-align: center;
}

.logo-home {
    margin-top: 100px;
    max-width: 100%;
    height: auto;
    width: 1100px;
    display: inline-block;
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
    margin-top: 100px;
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
    .social-icon {
        width: 25px;
        height: 25px;
        margin: 10px;
    }

    .date-location {
        font-size: 20px;
    }
}
</style>
