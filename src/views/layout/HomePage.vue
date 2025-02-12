<script setup>
import TrcukComponent from '@/components/TrcukComponent.vue'
import DirectionsButton from '@/components/DirectionsButton.vue'
import TextComponent from '@/components/TextComponent.vue'
import ArrowComponent from '@/components/ArrowComponent.vue'
import BookComponent from '@/components/BookComponent.vue'
import TagLine from '@/components/TagLine.vue'
import { useStudentStore } from '@/stores/student'

const studentStore = useStudentStore()
</script>

<template>
  <div class="container">
    <!-- 名字部分 -->
    <BookComponent class="name">
      <template #name>{{ studentStore.name }}</template>
      <template #major>{{ studentStore.major }}</template>
      <template #school>{{ studentStore.school }}</template>
      <template #phone>{{ studentStore.phone }}</template>
      <template #qq>{{ studentStore.qq }}</template>
    </BookComponent>

    <!-- 实验室介绍部分 -->
    <div class="introduction">
      <TextComponent>
        <template #title>
          <div>实验室简介</div>
        </template>
        <template #text>
          <p>
            西安邮电大学移动应用开发实验室，亦称西安邮电大学3G手机应用开发实验室，创建于2011年，隶属于西安邮电大学计算机学院，专注于目前主流的三大移动平台的应用开发和Web开发，并以服务在校学生、丰富在校学生移动应用为目标，自行设计和开发了多款手机客户端软件以及PC、移动Web服务。实验室针对不同平台和成员兴趣，相应地划分为4个开发小组，包括苹果iOS、谷歌Android、微软Windows（Windows
            8 Metro及Windows
            Phone）和Web小组。实验室以自主学习与共同交流并行的自发式学习方式为主，培养成员的学习兴趣及自主学习能力，努力为每位成员创造最佳的学习环境和学习氛围，为打造一批移动应用开发能手而不断努力！
          </p>
          <p>
            实验室位于西安邮电大学长安校区东区教学楼一层FZ155教室，西邮IT应用型人才实训中心，是"Google
            大学合作部--Android
            人才培养示范基地"。实验室内部设有众多移动应用开发设备，包括若干台iMac一体机、Mac
            Mini以及PC，除此之外，各小组还配备有相关的测试设备，包括iPhone、iPad、iPod
            Touch、HTC Android智能手机以及Windows Phone
            智能手机可供成员测试相关应用程序。Android开发组还配有由公司提供的Android底层开发箱，可用于开发和测试Android底层程序。
          </p>
          <p>
            实验室已开发多款不同平台的手机应用，包括iOS平台流媒体播放器，Android平台酷步软件，Windows
            Phone平台通讯中心，以及面向全平台的校园软件iXiyou和校园图书借阅查询系统客户端，实现了西邮图书馆图书随时随地查询借阅。由于成员作品比较多，此处不再一一列举。
          </p>
        </template>
      </TextComponent>
    </div>

    <!-- 箭头部分 -->
    <ArrowComponent>
      <h1>点击下方按钮了解方向详情</h1>
    </ArrowComponent>

    <!-- 导航按钮部分 -->
    <DirectionsButton></DirectionsButton>

    <!-- 实验室宣传语部分 -->
    <div class="right">
      <TagLine content="实验室宣传语"></TagLine>
    </div>

    <!-- 卡车部分 -->
    <TrcukComponent class="truck"></TrcukComponent>
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
}

/* 实验室介绍部分 */
.introduction {
  width: 100%;
  padding: 1rem;
}

/* 卡车样式 */
.truck {
  position: fixed;
  bottom: -2vh;
  left: 0vw;
  width: auto;
  height: 15vh;
}

/* 名字标签样式 */
.name {
  position: absolute;
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
  .name,
  .right,
  .truck {
    display: none;
  }

  .container {
    width: 90%;
    font-size: 1rem;
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
  }

  .introduction {
    font-size: 0.85em;
    padding: 0.5rem;
  }

  h1 {
    font-size: 1em;
  }

  .truck {
    transform: scale(0.7);
    bottom: 1vh;
    left: 1vw;
  }
}

@media screen and (max-width: 480px) {
  .container {
    width: 98%;
    font-size: 0.8rem;
  }

  .introduction {
    font-size: 0.8em;
    padding: 0.3rem;
  }
}
</style>
