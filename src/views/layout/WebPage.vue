<script setup>
import MouseComponent from '@/components/MouseComponent.vue'
import TextComponent from '@/components/TextComponent.vue'
import ArrowComponent from '@/components/ArrowComponent.vue'
import RegistButton from '@/components/RegistButton.vue'
import TagLine from '@/components/TagLine.vue'
</script>

<template>
  <div class="container">
    <!-- Web组介绍部分 -->
    <div class="introduction">
      <TextComponent>
        <template #title>
          <div>Web组简介</div>
        </template>
        <template #text>
          <p>
            致力于以HTML/HTML5、CSS/CSS3、Less、Javascript、jQuery、Ajax为主的Web前端开发，和以Node.js、PHP、JSP、ASP.NET为主的后台开发。如今已上线项目有手机版网站《西邮图书馆》、《高校成绩》，校园综合网站《MyCollege》（包含有易校园（校园二手市场）、论坛、资料库、订餐吧、PC浏览器版成绩单和图书查询、学生会、实验室等模块）正在进行中。
          </p>
        </template>
      </TextComponent>
    </div>

    <!-- 箭头部分 -->
    <ArrowComponent>
      <h1>点击下方按钮即可报名Web组</h1>
    </ArrowComponent>

    <!-- 屏幕底部仓鼠部分 -->
    <MouseComponent></MouseComponent>

    <!-- 报名按钮部分 -->
    <RegistButton></RegistButton>

    <!-- 左边装饰部分 -->
    <div class="left">
      <TagLine content="这是一段测试文字"></TagLine>
    </div>

    <!-- 右边装饰部分 -->
    <div class="right">
      <TagLine content="被用作宣传语"></TagLine>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem;
}

.left {
  position: absolute;
  height: 80vh;
  width: 20vw;
  top: 5vh;
  left: -25vw;
}

.right {
  position: absolute;
  height: 80vh;
  width: 20vw;
  top: 5vh;
  left: calc(100% + 5vw);
}

@media screen and (max-width: 1200px) {
  .left,
  .right {
    display: none;
  }

  .container {
    width: 90%;
    font-size: 1rem;
    padding: 0.8rem;
  }

  .introduction {
    font-size: 0.9em;
  }

  h1 {
    font-size: 1.2em;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
    font-size: 0.9rem;
    padding: 0.5rem;
  }

  .introduction {
    font-size: 0.85em;
  }

  h1 {
    font-size: 1em;
  }
}

@media screen and (max-width: 480px) {
  .container {
    width: 98%;
    font-size: 0.8rem;
    padding: 0.3rem;
  }

  .introduction {
    font-size: 0.8em;
  }
}
</style>
