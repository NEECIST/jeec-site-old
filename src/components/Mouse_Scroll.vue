<template>
    <div class="mouse"><span></span>
    
    </div>
</template>
    
<style>
/* That's it: */
.mouse {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 26px;
  height: 46px;
  border-radius: 16px;
  border: 3px solid #4fa6ee;
  bottom: 20px;
  left: 50%;
  margin-left: -13px;
}
.mouse span {
  display: block;
  margin: 6px auto;
  width: 4px;
  height: 7px;
  border-radius: 50%;
  background: #4fa6ee;
  border: 1px solid transparent;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
  animation-name: scroll;
}
@-webkit-keyframes scroll {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(16px);
    transform: translateY(16px);
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(16px);
    -ms-transform: translateY(16px);
    transform: translateY(16px);
  }
}

</style>
