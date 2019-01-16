<template>
    <div class="component-title">
        <div class="section-header">
          <h2>{{ title }}</h2>
          <p>{{ subtitle }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'component-title',
        props: ['title', 'subtitle']
    }
</script>

<style>
.component-title {
    padding-bottom: 20px;
}

.section-header {
  position: relative;
  padding-bottom: 10px;
}

.section-header h2 {
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-header p {
  text-align: center;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-family: 'Karla';
  font-weight: 500;
  color: #9195a2;
}

.section-header::before {
  content: '';
  position: absolute;
  display: block;
  width: 100px;
  height: 2px;
  background: #4089ff;
  bottom: 0;
  left: calc(50% - 50px);
}

@media screen and (max-width: 700px) {
    .section-header h2 {
        font-size: 30px;
    }
}
</style>

