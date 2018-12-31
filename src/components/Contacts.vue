<template>
    <div class="contacts-comp">
        <div class="title-contacts">
            Contacts
        </div>

        <div class="subtitle-contacts">
            come <span style="color: #00c2ff;">meet</span> us for a talk
        </div>

        <div class="contact-location">
            Instituto Superior Técnico- Campus da Alameda<p/>Av. Rovisco Pais,<p/>1049-001 Lisboa
        </div>

        <div class="email">
            jeec@neecist.tecnico.pt
        </div>

        <div class="foot-title">JORNADAS DE ENGENHARIA ELECTROTÉCNICA E DE COMPUTADORES</div>

        <a href="https://tecnico.ulisboa.pt/pt/">
            <img src="../../static/ist_logo.png" class= "contacts-icon-IST" >
        </a>

        <a href="https://neecist.org">
            <img src="../../static/neec_logo.png" class="contacts-icon-NEEC1">
        </a>

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
    width: 100%;
}

.subtitle-contacts 
{
    font-size: 30px;
    width: 100%;
    margin-bottom: 50px;
}

.contact-location 
{
    color: black;
    font-size: 20px;
    font-family: "Roboto", text style;
    margin-bottom: 25px;
}

.email
{
    width: 100%;
    color:black;
    font-size:20px;
    text-align: left;
    line-height: 35pt; 
    font-family: "Roboto", text style;
    margin-bottom: 25px;
}

.foot_title
{
    color:black;
    font-size:20pt;
    text-align: left;
    line-height: 39pt; 
    letter-spacing: 3.8pt;
    font-family: "Roboto", text style;
}

.contacts-icon-IST
{  
    position: absolute;
    height: 40pt;
    right: 300px;
    top: 50px;
}

.contacts-icon-NEEC1
{
    position: absolute;
    height: 40pt;
    right: 100px;
    top: 45px;
}

.bottom-bar {
    margin-top: 37px;
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
  .contacts-icon-IST{
    position: relative;
    width: 90px;
    height: 30px;
    left: 50px;
  }
  .contacts-icon-NEEC1{
    position: relative;
    width: 90px;
    height: 30px;
    left: 100px;
  }
}

</style>