<template>
    <div class="why-attend-comp">
        <div class="div-title">
            <span class="first-word-style">WHY</span> YOU SHOULD ATTEND
        </div>

        <div class="target-audience-title">
            AS A <span class="target-second-word-style">STUDENT</span>
        </div>


        <div class="icons-flex">
            <div class="reason-to-come">
                <div><img class="icon" src="../../static/organized_by_students.svg"></div>
                <div class="icon-text">Organized by students, for the students.</div>
            </div>

            <div class="reason-to-come">
                <div><img class="icon" src="../../static/high_academic_value.svg"></div>
                <div class="icon-text">High academic value</div>
            </div>

            <div class="reason-to-come">
                <div><img class="icon" src="../../static/quality_speakers.svg"></div>
                <div class="icon-text">Quality speakers from the engineering areas</div>
            </div>
        </div>

        <hr>

        <div class="target-audience-title">
            AS A <span class="target-second-word-style">COMPANY</span>
        </div>

        <div class="icons-flex">
            <div class="reason-to-come">
                <div><img class="icon" src="../../static/find_the_best_students.svg"></div>
                <div class="icon-text">Find the best graduating students.</div>
            </div>

            <div class="reason-to-come">
                <div><img class="icon" src="../../static/publicize_your_company.svg"></div>
                <div class="icon-text">Promote your company </div>
            </div>

            <div class="reason-to-come">
                <div><img class="icon" src="../../static/promote_your_areas.svg"></div>
                <div class="icon-text">Promote your areas of expertise</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "as_a_student"
};
</script>

<style>
.why-attend-comp {
  background-color: #ecf7ff;
  padding-top: 60px;
  padding-bottom: 150px;
  text-align: center;
}

.target-audience-title {
  width: 80%;
  font-family: 'Raleway';
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e2e;
  display: inline-block;
  margin-top: 20px;
}

.target-second-word-style {
  font-weight: bold;
}

.icons-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 80px;
  padding-left: 200px;
  padding-right: 200px;
}

.reason-to-come {
  width: 32%;
  text-align: center;
}

.icon {
  width: 100px;
  height: 100px;
  display: inline-block;
}

.icon-text {
  display: inline-block;
  width: 80%;
  font-family: 'Raleway';
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: -0.5px;
  color: #000000;
  margin-top: 30px;
}

hr {
  left: 20%;
  width: 60%;
  margin-top: 80px;
  height: 0;
  border: solid 1px #c2c2c2;
  margin-bottom: 40px;
}


/* On screens that are 992px wide or less*/
@media only screen and (max-width: 992px) {
  .reason-to-come {
      width: 50%;
      margin-bottom: 30px;
  }
}

/* On screens that are 600px wide*/
@media screen and (max-width: 600px) {
  .why-attend-comp {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
  }

  .target-audience-title {
      font-size: 25px;
      margin-top: 10px;
  }

  .icons-flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-top: 40px;
      padding-left: 20px;
      padding-right: 20px;
  }

  .icon {
    width: 70px;
    height: 70px;
  }

  .reason-to-come {
      width: 100%;
      margin-bottom: 40px;
  }

  .icon-text {
      font-size: 20px;
      margin-top: 10px;
  }

  hr {
    margin-top: 30px;
    margin-bottom: 40px;
  }
}
</style>