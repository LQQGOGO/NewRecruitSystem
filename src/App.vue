<script setup></script>

<template>
  <div class="bg"></div>
  <div class="w">
    <RouterView />
  </div>
</template>

<style scoped>
.bg {
  position: fixed; /* 将元素固定在视口内 */
  top: 0; /* 距离视口顶部的距离为 0 */
  left: 0; /* 距离视口左侧的距离为 0 */
  z-index: -1;
  height: 100vh;
  width: 100%;
  --color: #e1e1e1;
  background-color: #f3f3f3;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      var(--color) 25%,
      var(--color) 26%,
      transparent 27%,
      transparent 74%,
      var(--color) 75%,
      var(--color) 76%,
      transparent 77%,
      transparent
    );
  background-size: 55px 55px;
}
.w {
  width: 100%;
}
</style>
