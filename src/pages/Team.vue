<template>
    <div class="team-app">
        <div class="title-team-image">
               <div class="title-team1">KNOW OUR<div class="title-team2">TEAM</div></div>
        </div>
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Tom_Brady_2011.JPG/330px-Tom_Brady_2011.JPG">
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
                        picture: ''
                    },
                    {
                        name: 'José Correia',
                        picture: ''
                    },
                    {
                        name: 'Maria Teles',
                        picture: ''
                    },
                    {
                        name: 'Rita Machado',
                        picture: ''
                    }
                ]
              },
              {
                name: 'Contact',
                members: [
                    {
                        name: 'Adelaide Ambrósio',
                        picture: ''
                    },
                    {
                        name: 'André Pereira',
                        picture: ''
                    },
                    {
                        name: 'Carolina Roque',
                        picture: ''
                    },
                    {
                        name: 'Catarina Pires',
                        picture: ''
                    },
                    {
                        name: 'Gonçalo Morais',
                        picture: ''
                    },
                    {
                        name: 'Ion Ciobotari',
                        picture: ''
                    },
                    {
                        name: 'Isabel Castelo',
                        picture: ''
                    },
                    {
                        name: 'João Janeiro',
                        picture: ''
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
                        picture: ''
                    },
                    {
                        name: 'Nuno Pavia',
                        picture: ''
                    },
                    {
                        name: 'Sérgio Marinheiro',
                        picture: ''
                    },
                    {
                        name: 'Tarcísio Silva',
                        picture: ''
                    },
                    {
                        name: 'Tiago Felizardo',
                        picture: ''
                    },
                    {
                        name: 'Vasco Araújo',
                        picture: ''
                    }
                ]
              },
              {
                name: 'Speakers',
                members: [
                    {
                        name: 'Bárbara Correia',
                        picture: ''
                    },
                    {
                        name: 'Bernardo Gonilho',
                        picture: ''
                    },
                    {
                        name: 'Duarte Honrado',
                        picture: ''
                    },
                    {
                        name: 'Pedro Martins',
                        picture: ''
                    },
                    {
                        name: 'Sara Barroso',
                        picture: ''
                    },
                    {
                        name: 'Sofia Bebiano',
                        picture: ''
                    },
                    {
                        name: 'Sophie Taboada',
                        picture: ''
                    },
                    {
                        name: 'Teresa Araújo',
                        picture: ''
                    },
                    {
                        name: 'Tiago Brito',
                        picture: ''
                    }
                ]
              },
              {
                name: 'Marketing',
                members: [
                    {
                        name: 'Ana Silvestre',
                        picture: ''
                    },
                    {
                        name: 'Ana Rita Pagaimo',
                        picture: ''
                    },
                    {
                        name: 'Beatriz Silva',
                        picture: ''
                    },
                    {
                        name: 'Inês Coelho',
                        picture: ''
                    },
                    {
                        name: 'Madalena Ramos',
                        picture: ''
                    },
                    {
                        name: 'Sara Bernardes',
                        picture: ''
                    },
                    {
                        name: 'Tiago Silvério',
                        picture: ''
                    }
                ]
              },
              {
                name: 'Development',
                members: [
                    {
                        name: 'Carlos Silva',
                        picture: ''
                    },
                    {
                        name: 'Gilberto Silva',
                        picture: ''
                    },
                    {
                        name: 'Guilherme Lopes',
                        picture: ''
                    },
                    {
                        name: 'Ivan Andrushka',
                        picture: ''
                    },
                    {
                        name: 'Marina Relvas',
                        picture: ''
                    },
                    {
                        name: 'Raúl Vaqueiro',
                        picture: ''
                    }
                ]
              }
          ]
      }
  }
};
</script>



<style>

.title-team-image{
    background: linear-gradient(122deg, rgba(107,191, 255, 0.7), rgba(63, 0, 70, 0.7)), url("https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;


}
.title-team1{
    text-align: center;
    position: relative;
    top: 45%;
    color: #ffffff;
    font-family:'Raleway' sans-serif;
    font-size: 35px;
    letter-spacing: -1px;
}

.title-team2{
    font-size: 60px;
    font-weight: bold;
}


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
