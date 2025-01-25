<template>
  <div class="tagline">
    <span
      v-for="(char, index) in text"
      :key="index"
      class="splitted-char"
      :style="{ transform: `translateX(${index % 2 === 0 ? '-40%' : '40%'}) skewX(${index % 2 === 0 ? '10deg' : '-10deg'})` }"
    >
      {{ char }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 接收父组件传递的文本内容
const props = defineProps({
  content: {
    type: String,
    default: ''
  }
});

// 将传入的文本内容分割成单个字符数组
const text = computed(() => props.content.split(''));
</script>

<style scoped>
.tagline {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4rem; /* 增大字体大小 */
  line-height: 1.2; /* 调整行高 */
}

.splitted-char {
  color: transparent;
  background-image: linear-gradient(45deg, rgb(111, 111, 208), rgb(46, 187, 177));
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  position: relative;
  margin: 0.5rem 0; /* 增加垂直间距 */
}
</style>
