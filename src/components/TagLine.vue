<script setup>
import { computed } from 'vue'

// 接收父组件传递的文本内容
const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

// 将传入的文本内容分割成单个字符数组
const text = computed(() => props.content.split(''))
</script>

<template>
  <div class="tagline">
    <span
      v-for="(char, index) in text"
      :key="index"
      class="splitted-char"
      :style="{
        transform: `translateX(${index % 2 === 0 ? '-40%' : '40%'}) skewX(${index % 2 === 0 ? '10deg' : '-10deg'})`,
        transitionDelay: `${index * 0.1}s`
      }"
    >
      {{ char }}
    </span>
  </div>
</template>

<style scoped>
.tagline {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4rem;
  line-height: 1.2;
}

.splitted-char {
  color: transparent;
  background-image: linear-gradient(
    45deg,
    rgb(111, 111, 208),
    rgb(46, 187, 177)
  );
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  position: relative;
  margin: 0.5rem 0;
  -webkit-text-stroke: 2px #a481e2;
  text-shadow: 1px 1px 12px rgb(230, 207, 254);
  transition:
    font-weight 1s ease,
    font-size 1s ease; /* 添加过渡效果 */
}

.tagline:hover .splitted-char {
  transform: scale(1.1); /* 鼠标经过时放大 */
  font-weight: bold; /* 鼠标经过时字体加粗 */
  border-radius: 5px; /* 增加圆润度 */
  font-variation-settings: "BEVL" 100;
}
</style>
