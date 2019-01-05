<template>
    <div class="speakers-at-jeec-comp">
        <div class="div-title-speaker">
            <span v-html="title"></span>
        </div>

        <div v-for="(group) in audience" :key="group.title">

                <div class="icons-flex">
                    <div class="speakers-to-come" v-for="icon in group.icons" :key="icon.link">
                        <div><img class="icon" :src="icon.link"></div>
                        
                        <div class="icon-text-container">
                            <div class="icon-text">{{ icon.description }}</div>
                            <div class="icon-company">{{ icon.description2 }}</div>
                        </div>
                    </div>
                </div>

            
        </div>
    </div>
</template>

<script>
export default {
  name: "as_a_student",
  data() {
      return {
          title: '<span class="first-word-style">SPEAKERS</span> AT <span class="third-word-style">JEEC</span>',
          audience: [
              {
                icons: [
                    {
                        link: '../../static/organized_by_students.svg',
                        description: 'Elon Musk',
                        description2: 'Tesla'
                    },
                    {
                        link: '../../static/high_academic_value.svg',
                        description: 'Elon Musk',  
                        description2: 'Tesla'   
                    },
                    {
                        link: '../../static/quality_speakers.svg',
                        description: 'Elon Musk',
                        description2: 'Tesla'
                    }
                ]
              },
              {
                icons: [
                    {
                        link: '../../static/find_the_best_students.svg',
                        description: 'Elon Musk',
                        description2: 'Tesla'
                    },
                    {
                        link: '../../static/publicize_your_company.svg',
                        description: 'Elon Musk',
                        description2: 'Tesla'
                    },
                    {
                        link: '../../static/promote_your_areas.svg',
                        description: 'Elon Musk',
                        description2: 'Tesla'
                    }
                ]
              }
          ]
      }
  }
};
</script>

<style>
.speakers-at-jeec-comp {
    padding-top: 200px;
    background-color: #ffffff;  
}

.div-title-speaker {
  width: 80%;
  font-family: 'Raleway';
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #777777;
  display: inline-block;
  margin-top: 20px;
  text-align: left;
}

.first-word-style {
    font-weight: bolder;
    text-shadow: 0px 2px, 2px 0px, 2px 2px;
}

.third-word-style {
    color: #007fb8;
}

.icons-flex {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-left: 150px;
  padding-right: 150px;
}

.speakers-to-come {
  width: 32%;
  text-align: center;
}

.icon {
  width: 120px;
  height: 120px;
  display: inline-block;
}

.icon-text-container {
    padding: 20px;
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


/* On screens that are 992px wide or less*/
@media only screen and (max-width: 1400px) {
  .speakers-to-come {
      width: 50%;
      margin-bottom: 30px;
  }

  .audience-container {
    margin-left: 40px;
    margin-right: 40px;
}

.icons-flex {
    padding-left: 20px;
    padding-right: 20px;
}
 .icon {
    width: 90px;
    height: 90px;
  }

  .icon-text , .icon-company {
      font-size: 20px;
  }
}

/* On screens that are 600px wide*/
@media screen and (max-width: 700px) {
  .speakers-at-jeec-comp {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
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
      margin-bottom: 40px;
  }

  .icon-text, .icon-company {
      font-size: 17px;
      margin-top: 10px;
  }
}
</style>