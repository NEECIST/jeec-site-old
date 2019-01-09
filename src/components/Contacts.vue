<template>
    <div class="contacts-comp">
        <div class="title-contacts">
            Contact <span style="color: #00c2ff;">Information</span>
        </div>

        <div class="contact-location">
            Instituto Superior Técnico- Alameda Campus<p/>Av. Rovisco Pais,<p/>1049-001 Lisbon
        </div>

        <div class="email">
            contacto@jeec.ist
        </div>

        <div class="sponsors-flex">
                <div><img src="../../static/vtxrm.png" style="width: 100px"></div>
                <div><img src="../../static/santander_logo.png" style="width: 200px"></div>
                <div><img src="../../static/ist_logo.png" style="width: 150px"></div>
                <div><img src="../../static/neec_logo.png" style="width: 100px"></div>
                <div><img src="../../static/deec_logo.png" style="width: 250px"></div>
        </div>

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
    font-size: 30px;
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

.sponsors-flex {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  padding-left: 7vw;
  padding-right: 7vw;
}

.bottom-bar {
  margin-top: 25px;
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

  .sponsors-flex {
      flex-wrap: wrap;
      padding-top: 50px;
      padding-left: 10px;
      padding-right: 10px;
  }
}
</style>