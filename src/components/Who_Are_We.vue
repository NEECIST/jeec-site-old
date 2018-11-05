<template>
    <div class="who-are-we-comp">
      <div class="title" style="margin-left: 101px">
        <div class="title_left">WHO</div>
        <div class="title_right">ARE WE?</div>
      </div>

      <div class="subtitle" style="margin-left: 101px">Why you should attend the event</div>

      <div class="subtitle2" style="margin-left: 101px">
        <div class="subtitle2_left">AS A</div>
        <div class="subtitle2_right">STUDENT</div>
      </div>

      <div class="icons">
        <div class="logo003">
          <img class="logo3" src="../../static/organized_by_students.svg">
          <p>Organized by students </p> <p> for the students</p>
        </div>

        <div class="logo001">
          <img class="logo1" src="../../static/high_academic_value.svg">
          <p>High academic</p> <p>value</p>
        </div>

        <div class="logo005">
          <img class="logo5" src="../../static/quality_speakers.svg">
          <p>Quality speakers from</p> <p>the engineering areas</p>
        </div>
      </div>

      <hr>

      <div class="subtitle3" style="margin-left: 101px">
        <div class="subtitle3_left">AS A</div>
        <div class="subtitle3_right">COMPANY</div>
      </div>

      <div class="icons2">
        <div class="logo004">
          <img class="logo4" src="../../static/find_the_best_students.svg">
          <p>Find the best </p> <p> graduating students</p>
        </div>

        <div class="logo002">
          <img class="logo2" src="../../static/publicize_your_company.svg">
          <p>Promote your company </p>
        </div>

        <div class="logo006">
          <img class="logo6" src="../../static/promote_your_areas.svg">
          <p>Promote your</p> <p>areas of expertise</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'as_a_student'
  }
</script>

<style>
.who-are-we-comp {
    background-color: #f3f3f3;
    height: 100%;
    width: 100vw;
}

.title {
  width: 100%;
  font-family: Raleway;
  font-size: 70px;
  text-align: left;
  display:inline-flex;
} 

.title_left {
  font-weight: bold;
  color: #1d67d5;
}

.title_right {
  color: #19245b;
}

.subtitle {
  width: 100%;
  font-family: Raleway;
  font-size: 40px;
  letter-spacing: -1.2px;
  text-align: left;
  color: #7a7a7a;
}

.subtitle2 {
  width: 100%;
  font-family: Roboto;
  font-size: 35px;
  text-align: left;
  color: #2e2e2e;
  display:inline-flex;
  margin-top: 45px;
}

.subtitle2_left {
  font-weight: normal;
}

.subtitle2_right {
  font-weight: bold;
}

.icons , .icons2 {
    width: 100%;
    height: auto;
    display:inline-flex;
    height: 100%;
    font-family: Roboto;
    font-size: 39px;
    line-height: 1.13;
    letter-spacing: -0.6px;
    text-align: center;
    color: #000000;
    margin-top: 71px;
    margin-right: 267px;
}

.logo3 , .logo1 , .logo5 {
    width: 204px;
    height: 172px;
}

.logo003, .logo001, .logo005 {
    width: 100%;
    margin-top: 80px;
}

.logo4 , .logo2 , .logo6 {
    width: 204px;
    height: 172px;
}

.logo004 , .logo002 , .logo006 {
  width: 100%;
}

hr {
  left: 5%;
  width: 90%;
  margin-top: 80px;
  height: 0;
  border: solid 1px #707070;
}

.subtitle3 {
  width: 100%;
  font-family: Roboto;
  font-size: 35px;
  text-align: left;
  color: #2e2e2e;
  display:inline-flex;
  margin-top: 80px;
}

.subtitle3_left {
  font-weight: normal;
}

.subtitle3_right {
  font-weight: bold;
}

@media screen and (max-width: 900px) {
    .icons{
        display: block;
        width: 100%;
    }
    .logo3 , .logo1 , .logo5 {
      width: 204px;
      height: 172px;
      margin-bottom: 380px;
      margin-left: 200px;
    }
    .logo_description {
    width: 100%;
    display: block;
    float: top;
}

  .logo_desc {
    font-size: 30px;
    margin-bottom: 380px;
  }
}
</style>