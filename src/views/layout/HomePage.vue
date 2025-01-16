<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

//定义导航栏数据
const channels = ['web', 'android', 'ios', 'server']

const route = useRoute()
const router = useRouter()
const currentChannel = ref(route.query.channel || '0')
//切换channel方法
const switchChannel = nav => {
  currentChannel.value = nav
  router.push(`/${nav}`)
}
// 监听路由变化，同步更新 Tab
watch(
  () => route.query.channel,
  newChannel => {
    if (newChannel) {
      currentChannel.value = newChannel
    }
  }
)
</script>

<template>
  <div class="container">
    <div class="channel">
      <button
        v-for="channel in channels"
        :key="channel"
        :class="{ active: currentChannel === channel }"
        @click="switchChannel(channel)"
      >
        {{ channel }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
/* 导航栏样式按钮 */
button {
  font-size: 15px;
  height: 40px;
  padding: 10px 20px;
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 20px;
  background-color: #fff;
}
button:hover {
  background-color: #f7f7f7;
}
.active {
  background-color: #f7f7f7;
  font-weight: bold;
}
</style>
