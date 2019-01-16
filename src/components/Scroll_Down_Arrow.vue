<template>
    <div class="scroll-down"></div>
</template>
    
<style>
.scroll-down {
	position: relative;
	left: calc(50% - 15px);
	text-align: center;
	z-index: 100;
  width: 25px;
  height: 25px;
  border-bottom: 2px solid rgb(70, 140, 206);
  border-right: 2px solid rgb(70, 140, 206);
  z-index: 9;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
	-webkit-animation: fade_move_down 2s ease-in-out infinite;
	-moz-animation:    fade_move_down 2s ease-in-out infinite;
	animation:         fade_move_down 2s ease-in-out infinite;
}


/*animated scroll arrow animation*/
@-webkit-keyframes fade_move_down {
  0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@-moz-keyframes fade_move_down {
  0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@keyframes fade_move_down {
  0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
</style>
