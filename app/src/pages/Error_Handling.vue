<template>
    <div class="error-comp">
        <div>
            <img src="https://clipart.info/images/ccovers/1496175203emoji-android-heavy-exclamation-mark-symbol.png">
        </div>
        <div class="error-msg">Error 404<p>The page you requested doesn't exist</p></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.error-comp {
    height: 78vh;
    padding-top:200px;
}

.error-msg {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Lato';
  margin-top: 20px;
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 35px;
  letter-spacing: normal;
  color: #505050;
  display: inline-block;
}
</style>
