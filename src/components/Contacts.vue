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



    </div>
</template>

<script>
    export default {
        name: 'contacts',
    }
</script>

<style>
.contacts-comp {
    padding-top: 50px;
    padding-left: 50px;
    background-color: #f3f3f3;
    text-align: left;
}

.title-contacts
{
    width: 244pt;
}

.subtitle-contacts 
{
    width: 400pt;
}

.c_location 
{
    position: absolute;
    width: 900pt;

    color: black;
    font-size: 30pt;
    text-align: left;
    line-height: 35pt;
    font-family: "Roboto", text style;
}
.email
{
    width: 319pt;

    color:black;
    font-size:20px;
    text-align: left;
    line-height: 35pt; 
    font-family: "Roboto", text style;

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
{   position: absolute;
    width: 216pt;
}

.contacts-icon-NEEC1
{
    width: 216pt;
    height: 62pt;
}

</style>