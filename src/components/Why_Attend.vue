<template>
    <div class="why-attend-comp">
        <div class="div-title">
            <span v-html="title"></span>
        </div>

        <div v-for="(group, index) in audience" :key="group.title">
            <div class="target-audience-title">
                <span v-html="group.title"></span>
            </div>
            
            <div class="audience-container">
                <div class="icons-flex">
                    <div class="reason-to-come" v-for="icon in group.icons" :key="icon.link">
                        <div><img class="icon" :src="icon.link"></div>
                        
                        <div class="icon-text-container">
                            <div class="icon-text">{{ icon.description }}</div>
                        </div>
                    </div>
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
                        description: 'Promote yourself next to top-class companies'
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
  background-color: #dfe6f5;
  padding-top: 60px;
  padding-bottom: 60px;
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
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 5vw;
  padding-right: 5vw;
}

.audience-container {
    background-color: #fafafa;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    margin-top: 20px;
    margin-left: 300px;
    margin-right: 300px;
}

.reason-to-come {
  width: 32%;
  text-align: center;
}

.icon {
  width: 80px;
  height: 80px;
  display: inline-block;
}

.icon-text-container {
    padding: 10px;
}

.icon-text {
  display: inline-block;
  font-family: 'Raleway';
  font-size: 20px;
  line-height: 1.47;
  color: #000000;
  margin-top: 20px;
}

hr {
  left: 5%;
  width: 80%;
  margin-top: 40px;
  height: 0;
  border: solid 1px #c2c2c2;
  margin-bottom: 15px;
}


/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1400px) {
  .reason-to-come {
      width: 50%;
      margin-bottom: 30px;
  }

  .audience-container {
    margin-left: 40px;
    margin-right: 40px;
}

.icons-flex {
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-right: 20px;
}

 .icon {
    width: 90px;
    height: 90px;
  }

  .icon-text {
      font-size: 20px;
  }
}

/* On screens that are 600px wide*/
@media screen and (max-width: 700px) {
  .why-attend-comp {
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
  }

  .target-audience-title {
      font-size: 25px;
      margin-top: 10px;
  }

  
  .audience-container {
    margin-left: 40px;
    margin-right: 40px;
}

  .icons-flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-top: 50px;
      padding-left: 10px;
      padding-right: 10px;
  }

  .icon {
    width: 80px;
    height: 80px;
  }

  .reason-to-come {
      width: 100%;
      margin-bottom: 30px;
  }

  .icon-text {
      font-size: 17px;
      margin-top: 10px;
  }

  hr {
    margin-top: 25px;
    margin-bottom: 10px;
  }
}
</style>