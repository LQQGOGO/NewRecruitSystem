<script setup>

</script>

<template>
  <div class="container">
    <div class="title">
      <div class="title_content">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  background-color: #ffffff;
  background-image: radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px;
  box-sizing: border-box;
  padding: 3rem;
}
.title {
  width: 100%;
  border-bottom: 3px solid brown;
}
.title_content {
  display: inline-block;
  border-bottom: 3px solid greenyellow;
  margin-bottom: -3px;
  font-size: 2rem;
}
.text {
  font-size: 1.3rem;
  font-family: Arial, sans-serif;  /* 字体类型 */
  font-weight: 400;  /* 字体粗细 */
  line-height: 1.6;  /* 行高 */
  color: #333;  /* 字体颜色 */
  text-align: justify;  /* 文本对齐方式 */
}
</style>
