<template>
    <div class="contacts-comp">
        <div class="title-contacts">
            Contact <span style="color: #00c2ff;">Information</span>
        </div>

        <div class="contact-location">
            Instituto Superior Técnico- Campus da Alameda<p/>Av. Rovisco Pais,<p/>1049-001 Lisboa
        </div>

        <div class="email">
            jeec@neecist.tecnico.pt
        </div>

        <div class="sponsor">
            <div class="sponsor-type">Main Sponsor</div>

            <a href="https://tecnico.ulisboa.pt/pt/">
                <img src="../../static/ist_logo.png" class= "sponsor-icon" >
            </a>
        </div>

        <div class="sponsor">
            <div class="sponsor-type">IST Sponsors</div>
            
            <a href="https://tecnico.ulisboa.pt/pt/">
                <img src="../../static/ist_logo.png" class= "sponsor-icon" >
            </a>

            <a href="https://neecist.org">
                <img src="../../static/neec_logo.png" class="sponsor-icon">
            </a>
        </div>

        <google-map/>

        <div class="bottom-bar">
            <div id="copyright">
                Copyright © 2018 - Jornadas de Engenharia Eletrotécnica e de Computadores do Instituto Superior Técnico
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'contacts',
    }
</script>

<style>
.contacts-comp {
    position: relative;
    background-color: #f3f3f3;
    text-align: left;
}

.title-contacts
{
    font-size: 40px;
    padding: 30px;
}

.contact-location 
{
    color: black;
    font-size: 20px;
    line-height: 10px;
    font-family: "Roboto";
    padding-left: 30px;
}

.email
{
    color:black;
    font-size:20px;
    text-align: left;
    margin-top: 30px;
    font-family: "Roboto";
    padding-left: 30px;
}

.sponsor {
    float: left;
    background-color: #fafafa;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 120px;
    width: 200px;
}

.sponsor-type {
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
}

.sponsor-icon
{  
    height: 30px;
    width: 30px;
}

.bottom-bar {
  margin-top: 45px;
  width: 100%;
  height: 30px;
  background-color: rgb(91, 170, 223);
  color: white;
  position: relative;
  overflow: hidden;
  text-align: left;
  bottom: 0;
}

#copyright {
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  margin-top: 9px;
  margin-left: 20px;
}

@media screen and (max-width: 900px){
    .contact-location {
        color: black;
        font-size: 15px;
        line-height: 10px;
        font-family: "Roboto";
        padding-left: 30px;
    }

  .sponsor-icon {
    position: relative;
    width: 90px;
    height: 30px;
  }
}
</style>