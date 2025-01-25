<template>
  <div class="header-title" data-v-373e6324="">
    <!--[--><span class="splitted-char" style="--delay: 0.1s" data-v-373e6324=""
      >纸</span
    ><span class="splitted-char" style="--delay: 0.2s" data-v-373e6324=""
      >鹿</span
    ><span
      class="splitted-char"
      style="--delay: 0.3s"
      data-v-373e6324=""
      >摸</span
    ><span class="splitted-char" style="--delay: 0.4s" data-v-373e6324=""
      >鱼</span
    ><span class="splitted-char" style="--delay: 0.5s" data-v-373e6324=""
      >处</span
    ><!--]-->
  </div>
</template>

<style scoped>
.header-title {
  font-family: AlimamaFangYuanTi;
  font-size: 5.5em;
  font-synthesis: none;
  font-variation-settings: 'wght' 600, 'BEVL' 100;
}

.splitted-char {
  animation: vf-weight 10s infinite alternate, vf-bevel 1.72s infinite alternate;
  animation-delay: var(--delay);
  animation-play-state: paused; /* 默认状态下动画暂停 */
}

/* 鼠标悬停在父容器时，所有字的动画开始 */
.header-title:hover .splitted-char {
  animation-play-state: running; /* 鼠标悬停时所有字开始动画 */
}

@keyframes vf-weight {
  0% {
    font-weight: 600;
  }
  38.2% {
    font-weight: 300;
  }
  100% {
    font-weight: 900;
  }
}

@keyframes vf-bevel {
  0% {
    font-variation-settings: 'BEVL' 100;
  }
  100% {
    font-variation-settings: 'BEVL' 1;
  }
}


</style>
