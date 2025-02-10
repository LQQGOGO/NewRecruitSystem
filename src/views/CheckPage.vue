<script setup>
import { ref } from 'vue'
import { useStudentStore } from '@/stores/student'
import { change } from '@/api/change'
const studentStore = useStudentStore()

const input = ref(false)

// 创建响应式变量存储新信息
const newInfo = ref({
  name: '',
  major: '',
  school: '',
  phone: '',
  qq: '',
  direction: ''
})

// 监听input的变化，当打开编辑模式时，将当前方向赋值给newInfo
const handleEdit = () => {
  if (!input.value) {
    input.value = true
    newInfo.value.direction = studentStore.direction
  } else {
    changeInfo()
  }
}

// 提交信息的方法
const changeInfo = async () => {
  try {
    // 调用 change API
    await change({
      name: newInfo.value.name || studentStore.name,
      major: newInfo.value.major || studentStore.major,
      school: newInfo.value.school || studentStore.school,
      phone: newInfo.value.phone || studentStore.phone,
      qq: newInfo.value.qq || studentStore.qq,
      direction: newInfo.value.direction || studentStore.direction
    })

    // 更新 store 中的信息
    studentStore.$patch({
      name: newInfo.value.name || studentStore.name,
      major: newInfo.value.major || studentStore.major,
      school: newInfo.value.school || studentStore.school,
      phone: newInfo.value.phone || studentStore.phone,
      qq: newInfo.value.qq || studentStore.qq,
      direction: newInfo.value.direction || studentStore.direction
    })

    // 关闭输入状态
    input.value = false

    // 清空输入
    newInfo.value = {
      name: '',
      major: '',
      school: '',
      phone: '',
      qq: '',
      direction: ''
    }

    alert('修改成功！')
  } catch (error) {
    alert('修改失败：' + error.message)
  }
}
</script>

<template>
  <div class="check-page-content">
    <div class="check-infomation">
      <h1>你的信息</h1>
      <div class="check-infomation-item" :class="{ 'input-wrapper': input }">
        <span>姓名：</span>
        <span v-if="!input">{{ studentStore.name }}</span>
        <input
          v-else
          v-model="newInfo.name"
          type="text"
          :placeholder="studentStore.name"
          name="text"
          class="input"
        />
      </div>
      <div class="check-infomation-item" :class="{ 'input-wrapper': input }">
        <span>专业：</span>
        <span v-if="!input">{{ studentStore.major }}</span>
        <input
          v-else
          v-model="newInfo.major"
          type="text"
          :placeholder="studentStore.major"
          name="text"
          class="input"
        />
      </div>
      <div class="check-infomation-item" :class="{ 'input-wrapper': input }">
        <span>学号：</span>
        <span v-if="!input">{{ studentStore.school }}</span>
        <input
          v-else
          v-model="newInfo.school"
          type="text"
          :placeholder="studentStore.school"
          name="text"
          class="input"
        />
      </div>
      <div class="check-infomation-item" :class="{ 'input-wrapper': input }">
        <span>电话：</span>
        <span v-if="!input">{{ studentStore.phone }}</span>
        <input
          v-else
          v-model="newInfo.phone"
          type="text"
          :placeholder="studentStore.phone"
          name="text"
          class="input"
        />
      </div>
      <div class="check-infomation-item" :class="{ 'input-wrapper': input }">
        <span>QQ：</span>
        <span v-if="!input">{{ studentStore.qq }}</span>
        <input
          v-else
          v-model="newInfo.qq"
          type="text"
          :placeholder="studentStore.qq"
          name="text"
          class="input"
        />
      </div>
      <div class="check-infomation-item" :class="{ 'input-wrapper': input }">
        <span>方向：</span>
        <span v-if="!input">{{ studentStore.direction }}</span>
        <select v-else v-model="newInfo.direction" class="input">
          <option value="ios" :selected="studentStore.direction === 'ios'">
            iOS
          </option>
          <option value="web" :selected="studentStore.direction === 'web'">
            Web
          </option>
          <option
            value="server"
            :selected="studentStore.direction === 'server'"
          >
            Server
          </option>
          <option
            value="android"
            :selected="studentStore.direction === 'android'"
          >
            Android
          </option>
        </select>
      </div>
    </div>

    <!-- 修改按钮 -->
    <button @click="handleEdit">
      {{ input === false ? '修改信息' : '提交信息' }}
    </button>
  </div>
</template>

<style scoped>
.check-page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 50rem;
  margin: 0 auto;
}
.check-infomation {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
}
.check-infomation-item {
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 800;
  color: rgb(125, 48, 17);
  font-family: 'Pacifico', serif;
}
.input-wrapper input {
  background-color: #eee;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  width: 13em;
  border-radius: 1rem;
  color: lightcoral;
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
}

.input-wrapper input:focus {
  outline-color: lightcoral;
}

.input-wrapper select {
  background-color: #eee;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  width: 13em;
  border-radius: 1rem;
  color: lightcoral;
  box-shadow: 0 0.4rem #dfd9d9;
  cursor: pointer;
}

.input-wrapper select:focus {
  outline-color: lightcoral;
}

/* 修改按钮 */
button {
  outline: none;
  color: #daa06d;
  padding: 1em;
  padding-left: 3em;
  padding-right: 3em;
  border: 2px dashed #daa06d;
  border-radius: 15px;
  background-color: #eaddca;
  box-shadow:
    0 0 0 4px #eaddca,
    2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition:
    0.1s ease-in-out,
    0.4s color;
}

button:active {
  transform: translateX(0.1em) translateY(0.1em);
  box-shadow:
    0 0 0 4px #eaddca,
    1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
}
</style>
