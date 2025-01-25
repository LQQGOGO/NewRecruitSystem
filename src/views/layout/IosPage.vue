<script setup>
import MouseComponent from '@/components/MouseComponent.vue'
import TextComponent from '@/components/TextComponent.vue'
import ArrowComponent from '@/components/ArrowComponent.vue'
import RegistButton from '@/components/RegistButton.vue'
import TagLine from '@/components/TagLine.vue';
</script>

<template>
  <div class="container">
    <!-- Ios组介绍部分 -->
    <div class="introduction">
      <TextComponent>
        <template #title>
          <div>Ios组简介</div>
        </template>
        <template #text>
          <p>
            iOS 开发组现有成员12个。分别来自计科、软件、网络等专业。iOS组配备了
            15 台 Mac mini 和 7 台
            iMac。是目前实验室设备配置最好，规模最大的开发组。
            组成员们利用实验室设备和iOS平台的种种优势，积极进取，共同奋斗。先后开发了
            《iXiyou》、《西邮图书馆》、《快递查询》、《生活百事通》、
            《微博客户端》、《天气查询系统》等移动应用,并在不断的完善、优化。
          </p>
        </template>
      </TextComponent>
    </div>

    <!-- 箭头部分 -->
    <ArrowComponent>
      <h1>点击下方按钮即可报名Ios组</h1>
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
