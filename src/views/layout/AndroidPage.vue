<script setup>
import MouseComponent from '@/components/MouseComponent.vue'
import TextComponent from '@/components/TextComponent.vue'
import ArrowComponent from '@/components/ArrowComponent.vue'
import RegistButton from '@/components/RegistButton.vue'
import TagLine from '@/components/TagLine.vue';
</script>

<template>
  <div class="container">
    <!-- Android组介绍部分 -->
    <div class="introduction">
      <TextComponent>
        <template #title>
          <div>Android组简介</div>
        </template>
        <template #text>
          <p>
            利用Android系统的开放性，Android开发组进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛，并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布，《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业
          </p>
        </template>
      </TextComponent>
    </div>

    <!-- 箭头部分 -->
    <ArrowComponent>
      <h1>点击下方按钮即可报名Android组</h1>
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
  width: 50rem;
  margin: 0 auto;
}

.left {
  position: absolute;
  height: 50rem;
  width: 25rem;
  top: 5rem;
  left: -30rem;
}

.right {
  position: absolute;
  height: 50rem;
  width: 25rem;
  top: 5rem;
  left: 55rem;
}
</style>
