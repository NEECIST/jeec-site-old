<template>
    <div class="home-top-comp">

        <div class="date-location">
            <img src="../../static/calendar.svg" id="calendar-icon">11 to 15 March 2019
            
            <div class="location">Instituto Superior Técnico</div>
        </div>
            
        <div class="main-logo-container">
            <img src="../../static/jeec_logo.png" class="logo-home">
        </div>

        <div class="social-networks">
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
    </div>
</template>


<style>
.home-top-comp {
    background-image: url('/static/background.jpg');
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center;   
    height: 103vh;
}

#calendar-icon {
    width: 35px;
    margin-right: 20px;
    vertical-align: middle;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
}

.date-location {
    width: 100%;
    height: 72px;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 500;
    color: white;
    padding-top: 130px;
    text-align: center;
} 

.location {
    font-size: 20px;
    margin-top: 10px;
    margin-left: 30px;
}

.main-logo-container {
    margin-top: 30px;
    padding: 35px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    background: rgba(235, 235, 235, 0.9);
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
    border-radius: 500px;
    width: 1200px;
}

.logo-home {
    height: auto;
    width: 1100px;
}

.social-networks {
    margin-top: 50px;
    padding-top: 20px;
    width: 500px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    background: rgba(235, 235, 235, 0.95);
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
}

.follow-us {
    position: relative;
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

