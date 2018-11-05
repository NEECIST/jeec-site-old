<template>
    <div class="contacts">
<!--         <router-link router-link :to="{ name: 'Home' }">) -->


        <div class="title-contact">
                <h1>Contacts</h1>
        </div>
        <div class="subtitle-contact">
                <h2>come meet us for a talk</h2>
        </div>

        <div class="c_location">Instituto Superior Técnico- Campus da Alameda Av. Rovisco Pais, 1049-001 Lisboa</div>

        <div class="email">jeec@neecist.tecnico.pt</div>

        <div class="foot_title">JORNADAS DE ENGENHARIA ELECTROTÉCNICA E DE COMPUTADORES</div>


        <a href="https://tecnico.ulisboa.pt/pt/">
            <img src="../../static/ist_logo.png" class= "contacts-icon-IST" >
        </a>

        <a href="https://neecist.org">
                <img src="../../static/neec_logo.png" class="contacts-icon-NEEC1">
            </a>


        <a href="https://www.google.com/maps/place/Pavilhão+Central,+Av.+Rovisco+Pais+1,+1049-001+Lisboa/@38.7349257,-9.1365347,16z/data=!4m5!3m4!1s0xd1933a2302b2157:0x11c13201e2cf8229!8m2!3d38.7368464!4d-9.1393457">
                <img src="../../static/mapa_ist.png" class="mapa_pav">
            </a>

<!--         </router-link> -->

    </div>
</template>

<script>
    export default {
        name: 'contacts',
    }
</script>

<style>
.contacts {
    background-color: #f3f3f3;
    height: 435vh; /* verificar isto */
}


.title-contact 
{
    position: absolute;
    width: 244pt;
    margin-left: 66pt ;
    margin-top: 4182pt;
    height: 45pt;
}

h1
{
    color: black;
    text-transform: uppercase;
    font-size: 45pt;
    text-align: center;
    line-height: 44pt;
    font-family:"Roboto", sans-serif;
}

.subtitle-contact 
{
    position: absolute;
    width: 400pt;
    margin-left: 76pt ;
    margin-top: 4233pt;
    height: 30pt;
}

h2
{
    color: black;
    font-size: 30pt;
    text-align: center;
    line-height: 44pt;
    letter-spacing: -0.9pt;
    font-family:"Roboto", text style;
}
.c_location 
{
    position: absolute;
    width: 900pt;
    margin-left: 140pt;
    margin-top: 4321pt;
    height: 65pt;

    color: black;
    font-size: 30pt;
    text-align: left;
    line-height: 35pt;
    font-family: "Roboto", text style;
}
.email
{
    position: absolute;
    width: 319pt;
    margin-left: 141pt;
    margin-top: 4485pt;
    height: 30pt;

    color:black;
    font-size:30pt;
    text-align: left;
    line-height: 35pt; 
    font-family: "Roboto", text style;

}
.foot_title
{
    position: absolute;
    width: 897pt;
    margin-left: 31pt;
    margin-top: 4773pt;
    height: 24pt;

    color:black;
    font-size:20pt;
    text-align: left;
    line-height: 39pt; 
    letter-spacing: 3.8pt;
    font-family: "Roboto", text style;
}


.contacts-icon-IST
{   position: absolute;
    width: 216pt;
    height: 83.53pt;
    margin-left: -845pt;
    margin-top: 4689.29pt;
}
.contacts-icon-NEEC1
{
    width: 216pt;
    height: 62pt;
    position: absolute;

    margin-left: -530pt;
    margin-top: 4700pt;
}
.mapa_pav
{
    width: 977px;
    height: 612px;
    position: absolute;
    margin-top: 4173pt;
    margin-left: 70pt;


}
</style>