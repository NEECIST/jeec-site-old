<template>
    <div class="team-app">

       <div class="description-team">
           <div class="team-text">
                <div class="description-title">
                    Our Team
                </div>

                <div class="description-text">For 19 years we have brought to IST some of the best
                    employers of Electrical and Computer Engineers!
                </div>
            </div>
            <img src="https://us.123rf.com/450wm/tupungato/tupungato1611/tupungato161100074/66488989-science-doodle-background-seamless-vector-texture-with-physics-concepts-.jpg?ver=6">
        </div>

        <div class="team" v-for="team in teams" :key="team.name">
            <component-title :title="team.name"/>

            <div class="team-flex">
                <div v-for="member in team.members" :key="member.name">
                    <div class="team-member">
                        <img v-bind:src="member.picture">
                        <p class="member-name">{{ member.name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <contacts/>
    </div>
</template>

<script>
export default {
  name: "team",
  data() {
      return {
          title: '<span class="first-word-style">LATEST</span> SPEAKERS',
          teams: [
              {
                name: 'Coordination',
                members: [
                    {
                        name: 'Ana Amaro',
                        picture: '../../static/team/ana_amaro.png'
                    },
                    {
                        name: 'José Correia',
                        picture: '../../static/team/jose_correia.png'
                    },
                    {
                        name: 'Maria Teles',
                        picture: '../../static/team/maria_teles.png'
                    },
                    {
                        name: 'Rita Machado',
                        picture: '../../static/team/rita_machado.png'
                    }
                ]
              },
              {
                name: 'Contact',
                members: [
                    {
                        name: 'Adelaide Ambrósio',
                        picture: '../../static/team/adelaide.png'
                    },
                    {
                        name: 'André Pereira',
                        picture: '../../static/team/andre.png'
                    },
                    {
                        name: 'Carolina Roque',
                        picture: '../../static/team/carolina_roque.png'
                    },
                    {
                        name: 'Catarina Pires',
                        picture: '../../static/team/catarina_pires.png'
                    },
                    {
                        name: 'Gonçalo Morais',
                        picture: '../../static/team/gonçalo_morais.png'
                    },
                    {
                        name: 'Ion Ciobotari',
                        picture: '../../static/team/ion.png'
                    },
                    {
                        name: 'Isabel Castelo',
                        picture: '../../static/team/isabel_castelo.png'
                    },
                    {
                        name: 'João Janeiro',
                        picture: '../../static/team/joao_janeiro.png'
                    },
                    /*{
                        name: 'Manuel Diniz',
                        picture: ''
                    },
                    {
                        name: 'Maria Salgueiro',
                        picture: ''
                    },*/
                    {
                        name: 'Matilde Peixoto',
                        picture: '../../static/team/matilde_peixoto.png'
                    },
                    {
                        name: 'Nuno Pavia',
                        picture: '../../static/team/nuno_paiva.png'
                    },
                    {
                        name: 'Sérgio Marinheiro',
                        picture: '../../static/team/sergio_marinheiro.png'
                    },
                    {
                        name: 'Tarcísio Silva',
                        picture: '../../static/team/tarcisio.png'
                    },/*
                    {
                        name: 'Tiago Felizardo',
                        picture: ''
                    },*/
                    {
                        name: 'Vasco Araújo',
                        picture: '../../static/team/vasco_araujo.png'
                    }
                ]
              },
              {
                name: 'Speakers',
                members: [
                    {
                        name: 'Bárbara Correia',
                        picture: '../../static/team/barbara_correia.png'
                    },
                    {
                        name: 'Bernardo Gonilho',
                        picture: '../../static/team/bernardo_gonilho.png'
                    },
                    {
                        name: 'Duarte Honrado',
                        picture: '../../static/team/duarte_honrado.png'
                    },
                    {
                        name: 'Pedro Martins',
                        picture: '../../static/team/pedro_martins.png'
                    },/*
                    {
                        name: 'Sara Barroso',
                        picture: ''
                    },*/
                    {
                        name: 'Sofia Bebiano',
                        picture: '../../static/team/sofia_bebiano.png'
                    },/*
                    {
                        name: 'Sophie Taboada',
                        picture: ''
                    },*/
                    {
                        name: 'Teresa Araújo',
                        picture: '../../static/team/teresa_araújo.png'
                    },
                    {
                        name: 'Tiago Brito',
                        picture: '../../static/team/tiago_brito.png'
                    }
                ]
              },
              {
                name: 'Marketing',
                members: [
                    {
                        name: 'Ana Silvestre',
                        picture: '../../static/team/catarina_silvestre.png'
                    },
                    {
                        name: 'Rita Pagaimo',
                        picture: '../../static/team/rita_pagaimo.png'
                    },
                    {
                        name: 'Beatriz Silva',
                        picture: '../../static/team/beatriz_silva.png'
                    },
                    {
                        name: 'Inês Coelho',
                        picture: '../../static/team/ines_coelho.png'
                    },
                    {
                        name: 'Madalena Ramos',
                        picture: '../../static/team/madalena.png'
                    },
                    {
                        name: 'Sara Bernardes',
                        picture: '../../static/team/sara_bernardes.png'
                    },
                    {
                        name: 'Tiago Silvério',
                        picture: '../../static/team/tiago_silverio.png'
                    }
                ]
              },
              {
                name: 'Development',
                members: [
                    {
                        name: 'Carlos Silva',
                        picture: '../../static/team/carlos_silva.png'
                    },
                    {
                        name: 'Gilberto Silva',
                        picture: '../../static/team/gilberto.png'
                    },
                    {
                        name: 'Guilherme Lopes',
                        picture: '../../static/team/guilherme.png'
                    },
                    {
                        name: 'Ivan Andrushka',
                        picture: '../../static/team/ivan.png'
                    },
                    {
                        name: 'Marina Relvas',
                        picture: '../../static/team/marina.png'
                    },
                    {
                        name: 'Raúl Vaqueiro',
                        picture: '../../static/team/raul_vaqueiro.png'
                    }
                ]
              }
          ]
      }
  }
};
</script>



<style>
.description-team{
    height: 300px;
    background-color:white;
    position: relative;
}

.description-team img{
    width: 700px;
    transform: rotate(30deg);
    clip-path: polygon(0 0, 0 57.7%, 100% 0);
    position: absolute;
    top:79px;
    left: -200px;
    z-index: 0;
}

.team-text{
    float: right;
    padding-right: 40px;
    position: relative;
    z-index: 1;
}


.description-title{
    font-family: 'Raleway', sans-serif;
    font-size: 50px;
    font-weight: bolder;
    color: #505050;
    text-align: right;
    padding-top: 30px;
}

.description-text{
    margin-top: 10px;
    background-color: rgb(95, 140, 179);
    border-radius: 5px;
    font-size: 30px;
    font-family: 'Karla';
    width: 750px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-right: -40px;
    text-align: right;
    color: #ffffff;
    line-height: 50px;
}

.team{
    padding-top: 40px;
    background-color: #ecf7ff;
}

.team-flex{
    padding-left: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: 8vw;
    margin-left: 8vw;
    margin-top: 30px;
}

.team-flex img{
    flex: 0 0 50%; margin-right: 60px;
    height: 220px;
    width: 220px;
    margin-top: 30px;
}

.member-name{
    margin-left: 20%;
    width: 100px;
    font-size: 22px;
    text-align: center;
    font-family:'Lato', sans-serif;
    color: #262626;
}


@media screen and (max-width: 1200px) {
    .team-flex {
        padding-left: 12px;
        margin-right: 5vw;
        margin-left: 5vw;
    }
}

@media screen and (max-width: 800px) {
    .description-title{
        font-size: 40px;
    }
    .description-text{
        font-size: 18px;
        width: 320px;
        padding-right: 40px;
        line-height: 28px;
    }

    .description-team img{
        width: 475px;
        top: 149px;
    }
    
    .team-flex {
        padding-left: 12px;
        margin-right: 5vw;
        margin-left: 5vw;
    }

    .team-flex img{
        height: 140px;
        width: 140px;
        margin-top: 30px;
        flex: 0 0 50%; margin-right: 10px;
    }

    .member-name{
        font-size: 17px;
        margin-left:13%;
    }
}

@media screen and (max-width: 400px) {
    .description-team{
        height: 200px;
        background-color:white;
        position: relative;
    }

    .description-title{
        font-size: 30px;
        padding-top: 10px;
    }

    .description-text{
        font-size: 16px;
        width: 250px;
        padding-right: 30px;
        padding-left: 20px;
        line-height: 24px;
    }

    .description-team img{
        width: 475px;
        top: 50px;
    }

    .team{
        padding-top: 20px;
    }
    
    .team-flex {
        margin-right: 2vw;
        margin-left: 2vw;
    }

    .team-flex img{
        height: 120px;
        width: 120px;
        margin-top: 5px;
        flex: 0 0 50%; margin-right: 10px;
    }

    .member-name{
        margin-left:6%;
    }
}
</style>
