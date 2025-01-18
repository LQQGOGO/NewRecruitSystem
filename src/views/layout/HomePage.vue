<script setup>
import TrcukComponent from '@/components/TrcukComponent.vue'
import MouseComponent from '@/components/MouseComponent.vue'
import DirectionsButton from '@/components/DirectionsButton.vue'
</script>

<template>
  <div class="container">
    <!-- 导航按钮部分 -->
    <DirectionsButton></DirectionsButton>

    <!-- 实验室介绍部分 -->
    <div class="introduction"></div>

    <!-- 卡车部分 -->
    <TrcukComponent class="truck"></TrcukComponent>

    <!-- 仓鼠部分 -->
     <MouseComponent class="mouse"></MouseComponent>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  margin: 0 auto;
}

/* 实验室介绍部分 */
.introduction {
  width: 100%;
  height: 50rem;
  background-color: #fff;
}

/* 卡车样式 */
.truck {
  position: fixed;
  bottom: 0;
  left: 0;
}

/* 老鼠样式 */
.mouse {
  position: fixed;
  bottom: 0;
  right: 8vw;
}
</style>
