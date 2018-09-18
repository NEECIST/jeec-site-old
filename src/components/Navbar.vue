<template>
    <div id="navbar">
        
        <div class="navbar-logo">
            <router-link to="/">JEEC|19</router-link>
        </div>
        

        <div class="navbar-title">
            <router-link to="/about">About</router-link>
        </div>

        <div class="navbar-title">
            <router-link to="/activities">Activities</router-link>
        </div>
        

        <div class="navbar-title">
            <router-link to="/speakers">Speakers</router-link>
        </div>

        <div class="navbar-title">
            <router-link to="/team">Team</router-link>
        </div>

        <div class="navbar-title">
            <router-link to="/contacts">Contacts</router-link>
        </div>

        

    </div>
</template>



<script>
export default {
  name: "Navbar",
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#navbar {
    width: 100%;
    height: 80px;
    background-color: rgba(45, 46, 46, 0.09);
}

.navbar-logo {
    width: 120px;
    float: left;
    font-family: 'Open Sans';
    font-size: 30px;
    padding-left: 40px;
    padding-right: 30px;
    margin-top: 16px;
    height: 50px;
    color: #000000;
    -webkit-text-stroke: 1.5px #353535;
    border-right: 1px solid #000000;
}

.navbar-title {
    float: left;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 26px;
    font-family: 'Open Sans';
    font-size: 20px;
    color: #000000;
}

.navbar-logo, .navbar-title {
    display: inline-block;
}
</style>
