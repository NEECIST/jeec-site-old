<template>
    <div class="prev_stats">
        <component-title title="Statistics from our previous iteration" subtitle="Growing numbers every year"/>

        <div v-for="(group, index) in audience" :key="group.title">
            <div class="stats-title">
                <span v-html="group.title"></span>
            </div>
            
            <div class="numbers-container">
                <div class="icons-flex">
                    <div class="numbers" v-for="icon in group.icons" :key="icon.link">
                        <div><img class="icon" :src="icon.link"></div>
                        
                        <div class="icon-text" v-html="icon.description"/>
                    </div>
                </div>
            </div>
            
            <hr v-if="index != audience.length - 1">
        </div>
    </div>
</template>

<script>
export default {
  name: "stats",
  data() {
      return {
          audience: [
              {
                title: 'Join our community',
                icons: [
                    {
                        link: '../../static/student_icon.svg',
                        description: '10000 Students'
                    },
                    {
                        link: '../../static/company_icon.svg',
                        description: '40 Companies'
                    },
                    {
                        link: '../../static/speaker_icon.svg',
                        description: '30 Speakers'
                    },
                    {
                        link: '../../static/activity_icon.svg',
                        description: '25 Activities'
                    }
                ]
              }
          ]
      }
  }
};
</script>

<style>
.prev_stats {
  background-color: #dfe6f5;
  padding-top: 10px;
  padding-bottom: 50px;
  text-align: center;
}

.stats-title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Karla';
  font-size: 30px;
  font-weight: 600;
  color: #2e2e2e;
  display: inline-block;
  margin-top: 20px;
}

.icons-flex {
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 10vw;
  padding-right: 10vw;
}

.numbers-container {
    background-color: #fafafa;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
}

.numbers {
  width: 32%;
  text-align: center;
}

.icon {
  width: 80px;
  height: 80px;
  display: inline-block;
}

.icon-text {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  display: inline-block;
  font-family: 'Lato';
  font-size: 20px;
  line-height: 1.47;
  color: #000000;
  margin-top: 20px;
  padding: 10px;
}

hr {
  left: 5%;
  width: 80%;
  margin-top: 40px;
  height: 0;
  border: solid 1px #c2c2c2;
  margin-bottom: 15px;
}


/* On screens that are 1400px wide or less*/
@media (max-width: 1400px) {
  .numbers-container {
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
@media (max-width: 700px) {
  .numbers {
      width: 100%;
  }

  .stats-title {
      font-size: 25px;
      margin-top: 10px;
  }

  
  .numbers-container {
    margin-left: 40px;
    margin-right: 40px;
}

  .icons-flex {
      -webkit-flex-direction: column;
	  -moz-flex-direction: column;
	  -ms-flex-direction: column;	
	  flex-direction: column;
      padding-top: 50px;
      padding-left: 10px;
      padding-right: 10px;
  }

  .icon {
    width: 80px;
    height: 80px;
  }

  .numbers {
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