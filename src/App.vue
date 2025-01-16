<script setup></script>

<template>
  <div class="w">
    <RouterView />
  </div>
</template>

<style scoped>
.w {
  padding-top: 10rem;
  height: 98vh;
  width: 100%;
  background-image: url('./assets/loginbg.jpg');
  background-size: cover; /* 确保背景图片覆盖整个元素 */
  background-position: center; /* 将背景图片居中 */
  background-repeat: no-repeat;
}
</style>
