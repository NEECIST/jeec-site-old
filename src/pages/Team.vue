<template>
    <div class="team-app">
        <div class="slider-container">
            <div class="image-slider">
                <img class="images-title" src="https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg">
                <div class="title-team1">KNOW OUR</div>
                <div class="title-team2">TEAM</div>
            </div>
            
            <button class="prev"> < </button>
            <button class="next" onclick="change_slide()"> ></button>
        </div>

        <div class="description-team">
            <div class="description-title">
                <span class="first-word-style"> JEEC'S</span> TEAM
            </div>
            <div class="description-text">Há 19 anos que trazemos ao Técnico os melhores
                empregadores de eletrotecnia!
            </div>
            <img class="image-description" src="https://us.123rf.com/450wm/tupungato/tupungato1611/tupungato161100074/66488989-science-doodle-background-seamless-vector-texture-with-physics-concepts-.jpg?ver=6">
        </div>

        <contacts/>
    </div>
</template>

<script>
var x = document.getElementsByClassName("image-slider");
var t = x.length;

var slide_selected=0;
function change_slide(){
    if(slide_selected<t){
        slide_selected++;
    }
    else{slide_selected=0;}
    for(i=0;i<t;i++){
        if(i=slide_selected){
            x[i].style.display="initial";
        }
        else{
            x[i].style.display="none";
        }
    }
}

</script>


<style>
.slider-container{
    height: 300px;
}

.image-slider{
    display: initial;
    
}

.title-team1{
    position: absolute;
    top: 20%;
    left: 40%;
    color: #ffffff;
    font-family:'Raleway' sans-serif;
    font-size: 30px;
    text-shadow: 2px 2px 4px black;
}
.title-team2{
    position: absolute;
    top: 27%;
    left: 43%;
    color: #ffffff;
    font-family:'Raleway' sans-serif;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 2px 4px black;
}

.images-title{
    width: 100%;
    height: 300px;
    filter: blur(0.7px);

}

button{
    padding: 20px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: white;
    background-color: transparent;

}
.next{
    position: absolute;
    top: 20%;
    left:92%;
}

.prev{
    position: absolute;
    top: 20%;
    left: 1%;
}

.description-team{
    height: 250px;
    background-color:white;
}

.description-title{
    font-family: 'Raleway', sans-serif;
    float: right;
    padding-top: 50px;
    padding-right: 20px;
    font-size: 35px;
    color: #505050;
    font-weight:900;
    }

.description-text{
    text-align: right;
    font-size: 20px;
    width: 400px;
    position: relative;
    top: 40%;
    left: 44%;


}

.image-description{
    transform: rotate(30deg);
    position: absolute;
    top: 61.8%;
    left: -20%;
    overflow: hidden;
    clip-path: polygon(0 0, 0 57.7%, 100% 0);
}

</style>
