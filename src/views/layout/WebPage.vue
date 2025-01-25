<script setup>
import MouseComponent from '@/components/MouseComponent.vue'
import TextComponent from '@/components/TextComponent.vue'
import ArrowComponent from '@/components/ArrowComponent.vue'
import RegistButton from '@/components/RegistButton.vue'
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
    <div class="left"></div>

    <!-- 右边装饰部分 -->
    <div class="right"></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  margin: 0 auto;
}

.left {
  position: absolute;
  height: 50rem;
  width: 25rem;
  background-color: #fff;
  top: 5rem;
  left: -30rem;
}

.right {
  position: absolute;
  height: 50rem;
  width: 25rem;
  background-color: #d42525;
  top: 5rem;
  left: 55rem;
}
</style>
