<template>
    <div class="team-app">
        <image-center-text text="Our Team"/>

       <div class="description-team">
           <div class="team-text">
                <div class="description-title">
                    <span class="first-word-style"> JEEC'S</span> TEAM
                </div>

                <div class="description-text">Há 19 anos que trazemos ao Técnico os melhores
                    empregadores de eletrotecnia!
                </div>
            </div>
            <img src="https://us.123rf.com/450wm/tupungato/tupungato1611/tupungato161100074/66488989-science-doodle-background-seamless-vector-texture-with-physics-concepts-.jpg?ver=6">
        </div>

        <div v-for="team in teams" :key="team.name">
            <div class="coordenacao">
                <div class="title-div">{{ team.name }}</div>
                <div class="team-flex2">
                    <div v-for="member in team.members" :key="member.name">
                        <div class="team-member">
                            <img v-bind:src="member.picture">
                            <p class="member-name">{{ member.name }}</p>
                        </div>
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
                        picture: '../../static/team/ana_amaro.svg'
                    },
                    {
                        name: 'José Correia',
                        picture: '../../static/team/jose_correia.svg'
                    },
                    {
                        name: 'Maria Teles',
                        picture: '../../static/team/maria_teles.svg'
                    },
                    {
                        name: 'Rita Machado',
                        picture: '../../static/team/rita_machado.svg'
                    }
                ]
              },
              {
                name: 'Contact',
                members: [
                    {
                        name: 'Adelaide Ambrósio',
                        picture: '../../static/team/adelaide.svg'
                    },
                    {
                        name: 'André Pereira',
                        picture: '../../static/team/andre.svg'
                    },
                    {
                        name: 'Carolina Roque',
                        picture: '../../static/team/carolina_roque.svg'
                    },
                    {
                        name: 'Catarina Pires',
                        picture: '../../static/team/catarina_pires.svg'
                    },
                    {
                        name: 'Gonçalo Morais',
                        picture: '../../static/team/gonçalo_morais.svg'
                    },
                    {
                        name: 'Ion Ciobotari',
                        picture: '../../static/team/ion.svg'
                    },
                    {
                        name: 'Isabel Castelo',
                        picture: '../../static/team/isabel_castelo.svg'
                    },
                    {
                        name: 'João Janeiro',
                        picture: '../../static/team/joao_janeiro.svg'
                    },
                    {
                        name: 'Manuel Diniz',
                        picture: ''
                    },
                    {
                        name: 'Maria Salgueiro',
                        picture: ''
                    },
                    {
                        name: 'Matilde Peixoto',
                        picture: '../../static/team/matilde_peixoto.svg'
                    },
                    {
                        name: 'Nuno Pavia',
                        picture: '../../static/team/nuno_paiva.svg'
                    },
                    {
                        name: 'Sérgio Marinheiro',
                        picture: '../../static/team/sergio_marinheiro.svg'
                    },
                    {
                        name: 'Tarcísio Silva',
                        picture: '../../static/team/tarcisio.svg'
                    },
                    {
                        name: 'Tiago Felizardo',
                        picture: ''
                    },
                    {
                        name: 'Vasco Araújo',
                        picture: '../../static/team/vasco_araujo.svg'
                    }
                ]
              },
              {
                name: 'Speakers',
                members: [
                    {
                        name: 'Bárbara Correia',
                        picture: '../../static/team/barbara_correia.svg'
                    },
                    {
                        name: 'Bernardo Gonilho',
                        picture: '../../static/team/bernardo_gonilho.svg'
                    },
                    {
                        name: 'Duarte Honrado',
                        picture: '../../static/team/duarte_honrado.svg'
                    },
                    {
                        name: 'Pedro Martins',
                        picture: '../../static/team/pedro_martins.svg'
                    },
                    {
                        name: 'Sara Barroso',
                        picture: ''
                    },
                    {
                        name: 'Sofia Bebiano',
                        picture: '../../static/team/sofia_bebiano.svg'
                    },
                    {
                        name: 'Sophie Taboada',
                        picture: ''
                    },
                    {
                        name: 'Teresa Araújo',
                        picture: '../../static/team/teresa_araújo.svg'
                    },
                    {
                        name: 'Tiago Brito',
                        picture: '../../static/team/tiago_brito.svg'
                    }
                ]
              },
              {
                name: 'Marketing',
                members: [
                    {
                        name: 'Ana Silvestre',
                        picture: '../../static/team/catarina_silvestre.svg'
                    },
                    {
                        name: 'Rita Pagaimo',
                        picture: '../../static/team/rita_pagaimo.svg'
                    },
                    {
                        name: 'Beatriz Silva',
                        picture: '../../static/team/beatriz_silva.svg'
                    },
                    {
                        name: 'Inês Coelho',
                        picture: '../../static/team/ines_coelho.svg'
                    },
                    {
                        name: 'Madalena Ramos',
                        picture: '../../static/team/madalena.svg'
                    },
                    {
                        name: 'Sara Bernardes',
                        picture: '../../static/team/sara_bernardes.svg'
                    },
                    {
                        name: 'Tiago Silvério',
                        picture: '../../static/team/tiago_silverio.svg'
                    }
                ]
              },
              {
                name: 'Development',
                members: [
                    {
                        name: 'Carlos Silva',
                        picture: '../../static/team/carlos_silva.svg'
                    },
                    {
                        name: 'Gilberto Silva',
                        picture: '../../static/team/gilberto.svg'
                    },
                    {
                        name: 'Guilherme Lopes',
                        picture: '../../static/team/guilherme.svg'
                    },
                    {
                        name: 'Ivan Andrushka',
                        picture: '../../static/team/ivan.svg'
                    },
                    {
                        name: 'Marina Relvas',
                        picture: '../../static/team/marina.svg'
                    },
                    {
                        name: 'Raúl Vaqueiro',
                        picture: '../../static/team/raul_vaqueiro.svg'
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
    width: 600px;
    transform: rotate(30deg);
    clip-path: polygon(0 0, 0 57.7%, 100% 0);
    position: absolute;
    top:110px;
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
    font-size: 30px;
    width: 600px;
    text-align: right;
    color: #505050;
    padding-top: 20px;
}

.coordenacao{
    height: 100%;
    background-color: #ecf7ff;
}

.title-div{
    font-family: 'Raleway', sans-serif;
    font-weight: bolder;
    color: #1d67d5;
    font-size: 60px;
    letter-spacing: -1px;
    padding-top: 30px;
}

.team-flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-right: 115px;
    margin-left: 115px;
    margin-top: 30px;
}


.team-flex img{
    border-radius: 100%;
    height: 220px;
    width: 220px;
    margin-top: 30px;
}
.team-flex2{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-right: 250px;
    margin-left: 250px;
    margin-top: 30px;
}

.team-flex2 img{
    border-radius: 100%;
    height: 220px;
    width: 220px;
    margin-top: 30px;
}

.member-name{
    width: 120px;
    font-size: 20px;
    text-align: center;
    font-family:'Raleway', sans-serif;
    color: #262626;
    margin-left: 50px;
}

.oradores{
    background-color: #eeeeee;
    height: 100%;
}
@media screen and (max-width: 900px) {
    .description-title{
        font-size: 40px;
    }
    .description-text{
        font-size: 20px;
        width: 400px;
    }

    .description-team img{
        width: 500px;
        top: 142px;
    }
    .title-div{
        font-size: 40px;
    }
    .team-flex, .team-flex2{
        margin-left: 50px;
        margin-right: 50px;

    }
    .team-flex img, .team-flex2 img{
        width: 180px;
        height: 180px;
    }
    .member-name{
        font-size: 20px;
        margin-left:30px;
    }
}
</style>
