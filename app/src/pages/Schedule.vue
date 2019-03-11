<template>
  <div class="schedule-app">
    <component-title
      title="Schedule"
    />
    <img class="schedule_pc" src="../../static/schedule_pc.png">
    <img class="schedule_phone" src="../../static/schedule_1.png">
    <img class="schedule_phone" src="../../static/schedule_2.png">
    <img class="schedule_phone" src="../../static/schedule_3.png">
    <img class="schedule_phone" src="../../static/schedule_4.png">
    <img class="schedule_phone" src="../../static/schedule_5.png">
    <contacts/>
  </div>
</template>


<style>
.schedule-app {
    padding-top: 90px;
    background-color: #dfe6f5;
}
.schedule_pc {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 90px;
}
.schedule_phone {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 90px;
    display: none;
}

@media only screen and (max-width: 750px) {
  .schedule_pc {
      display: none;
  }

  .schedule_phone {
      display: block;
  }
}
</style>
