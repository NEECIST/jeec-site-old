<template>
    <div class="why-attend-comp">
        <div class="div-title">
            <span v-html="title"></span>
        </div>

        <div v-for="(group, index) in audience" :key="group.title">
            <div class="target-audience-title">
                <span v-html="group.title"></span>
            </div>

            <div class="icons-flex">
                <div class="reason-to-come" v-for="icon in group.icons" :key="icon.link">
                    <div><img class="icon" :src="icon.link"></div>
                    <div class="icon-text">{{ icon.description }}</div>
                </div>
            </div>

            <hr v-if="index != audience.length - 1">
        </div>
    </div>
</template>

<script>
export default {
  name: "as_a_student",
  data() {
      return {
          title: '<span class="first-word-style">WHY</span> YOU SHOULD ATTEND',
          audience: [
              {
                title: 'AS A <span class="target-second-word-style">STUDENT</span>',
                icons: [
                    {
                        link: '../../static/organized_by_students.svg',
                        description: 'Organized by students, for the students'
                    },
                    {
                        link: '../../static/high_academic_value.svg',
                        description: 'High academic value'
                    },
                    {
                        link: '../../static/quality_speakers.svg',
                        description: 'Quality speakers from the engineering areas'
                    }
                ]
              },
              {
                title: 'AS A <span class="target-second-word-style">COMPANY</span>',
                icons: [
                    {
                        link: '../../static/find_the_best_students.svg',
                        description: 'Find the best graduating students'
                    },
                    {
                        link: '../../static/publicize_your_company.svg',
                        description: 'Promote your company'
                    },
                    {
                        link: '../../static/promote_your_areas.svg',
                        description: 'Promote your areas of expertise'
                    }
                ]
              }
          ]
      }
  }
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
  padding-left: 150px;
  padding-right: 150px;
}

.reason-to-come {
  width: 32%;
  text-align: center;
}

.icon {
  width: 120px;
  height: 120px;
  display: inline-block;
}

.icon-text {
  display: inline-block;
  width: 80%;
  font-family: 'Raleway';
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
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
      padding-top: 50px;
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
      font-size: 17px;
      margin-top: 10px;
  }

  hr {
    margin-top: 30px;
    margin-bottom: 40px;
  }
}
</style>