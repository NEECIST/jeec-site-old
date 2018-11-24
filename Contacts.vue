<template>
    <div class="contacts-comp">
        <div class="title-contacts">
            Contacts
        </div>

        <div class="subtitle-contacts">
            come <span style="color: #00c2ff;">meet</span> us for a talk
        </div>

        <div class="contact-location">
            Instituto Superior Técnico- Campus da Alameda Av. Rovisco Pais,<p/>1049-001 Lisboa
        </div>

        <div class="email">
            jeec@neecist.tecnico.pt
        </div>
        <div class="foot_coordinates">Google Maps Coordinates</div>

        <div class="foot-title">JORNADAS DE ENGENHARIA ELECTROTÉCNICA E DE COMPUTADORES</div>

		<div class='foot_icons'>
        	<a href="https://tecnico.ulisboa.pt/pt/">
            	<img src="../../static/ist_logo.png" class= "contacts-icon-IST" >
        	</a>

        	<a href="https://neecist.org">
            	<img src="../../static/NEEC_BLUE.png" class="contacts-icon-NEEC1">
        	</a>
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

    padding-top: 50px;
   	padding-bottom: 80px;
    background-color: #eeeeee;
    text-align: left;
    width: 100%;

}

.title-contacts
{
    font-size: 40px;
    width: 100%;
    margin-left: 50px
}

.subtitle-contacts 
{
    font-size: 30px;
    width: 100%;
    margin-bottom: 50px;
    margin-left: 50px;
}

.contact-location 
{
    color: black;
    font-size: 20px;
    font-family: "Roboto", text style;
    margin-top: 80px;
    width: 100%;
    margin-left: 50px;
}

.email
{
    width: 100%;
    color:black;
    font-size:20px;
    text-align: left;
    line-height: 35pt; 
    font-family: "Roboto", text style;
    margin-top: 40px;
    margin-left: 50px;
}
.foot_coordinates
{
width: 100%;
text-align: left;
color: black;
font-size: 20px;
line-height:35px;
font-family:"Raleway", text style;
margin-top: 40px;
margin-left: 50px;

}




.foot_title
{	width: 100%;
    color:black;
    font-size:20pt;
    text-align: left;
    line-height: 39pt; 
    letter-spacing: 3.8pt;
    font-family: "Roboto", text style;
    margin-left: 500px;
}


.contacts-icon-IST
{   
    width: 10%;
    position: absolute;
    margin-left: 1203pt;
    margin-top: -200pt;

}

.contacts-icon-NEEC1
{
    width: 10%;  
    position:absolute;  
    margin-left: 1503pt;
    margin-top: -190pt;
}

/* On screens that are 992px wide or less*/

@media only screen and (max-width: 2257px)
{
	.contacts-icon-NEEC1 {
	width:10%;
	margin-left:1800px;
	}

	.contacts-icon-IST
	{   
	    width: 10%;
	    margin-left: 1500px;
	}
}
@media only screen and(max-width: 2140px)
{
	.contacts-icon-NEEC1 {
	width:10%;
	margin-left:1683px;
	}

	.contacts-icon-IST
	{   
	    width: 10%;
	    margin-left: 1383px;
	}
}
/*este novo resize não funciona.(PK?). Os novos valroes de margin não sao os corretos para este caso, era só para testar. 
*/
@media only screen and(max-width: 2043px)
{
	.contacts-icon-NEEC1 {
	width:10%;
	margin-left:1266px;
	}

	.contacts-icon-IST
	{   
	    width: 10%;
	    margin-left: 1066px;
	}
}





</style>