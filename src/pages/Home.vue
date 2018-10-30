<template>
    <div class="home-app">
        <div class="date-location">
            <img src="../../static/calendar.svg" id="calendar-icon">11 to 15 March 2019
        
            <div class="location">Instituto Superior Técnico</div>
        </div>
        
        <div class="main-logo-container">
            <img src="../../static/jeec_logo.png" class="logo-home">
        </div>

        <div class="follow-us">Follow us on</div>
        <div class="social-icons">
            <a href="https://www.linkedin.com/company/jeecist/">
                <img src="../../static/linkedin.svg" class="icon shadow"></a>

            <a href="https://www.facebook.com/JEECIST/">
            <img src="../../static/facebook.svg" class="icon shadow"></a>

            <a href="https://www.youtube.com/channel/UCTO2g_8WD8ZEQ_VvIeQ1QRQ">
            <img src="../../static/youtube.svg" class="icon"></a>

            <a href="https://www.instagram.com/jeec.ist/">
            <img src="../../static/instagram.svg" class="icon"></a>

        </div>
    </div>

</template>


<style>
.home-app {
    background-color: #f3f3f3;
    height: 1080px;
}

#calendar-icon {
    width: 35px;
    margin-right: 20px;
    vertical-align: middle;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
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

.location {
    font-size: 20px;
    margin-top: 10px;
    margin-left: 30px;
}

.main-logo-container {
    height: 500px;
}

.logo-home {
    margin-top: 100px;
    max-width: 90%;
    height: auto;
    width: 1100px;
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

.icon {
    width: 45px;
    height: 45px;
    margin: 20px;
}

.shadow {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
}

.icon:hover {
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
</style>
