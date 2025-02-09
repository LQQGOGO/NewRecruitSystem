<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStudentStore } from '@/stores/student'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
import { check } from '@/api/check'

const studentStore = useStudentStore()
const userStore = useUserStore()
const router = useRouter()
const formModel = ref({
  QQNumber: '',
  SchoolNumber: '',
  Name: '',
  Major: '',
  PhoneNumber: ''
})
const errors = ref({
  QQNumber: '',
  SchoolNumber: '',
  Name: '',
  Major: '',
  PhoneNumber: ''
})

const rules = {
  QQNumber: {
    required: true,
    pattern: /^\d{6,14}$/,
    message: '请输入正确的QQ账号'
  },
  SchoolNumber: {
    required: true,
    pattern: /^\d{8}$/,
    message: '请输入8位数字的学号'
  },
  Name: {
    required: true,
    pattern: /^[\u4e00-\u9fa5]{2,8}$/,
    message: '姓名应为2到8个汉字'
  },
  Major: {
    required: true,
    pattern: /^[\u4e00-\u9fa5]{2,20}$/,
    message: '专业应为2到20个汉字'
  },
  PhoneNumber: {
    required: true,
    pattern: /^1[3-9]\d{9}$/,
    message: '请输入11位有效手机号'
  }
}

const validateField = field => {
  const value = formModel.value[field]
  const rule = rules[field]

  if (rule.required && !value) {
    errors.value[field] = `请输入有效值`
    return false
  }
  if (rule.pattern && !rule.pattern.test(value)) {
    errors.value[field] = rule.message
    return false
  }
  errors.value[field] = ''
  return true
}

const login = async () => {
  let valid = true
  for (let field in formModel.value) {
    if (!validateField(field)) {
      valid = false
    }
  }
  //检查学号是否存在, 存在就跳转确认页
  const response = await check(formModel.value.SchoolNumber)
  if (response.data.status) {
    studentStore.setName(response.data.data.name)
    studentStore.setMajor(response.data.data.major)
    studentStore.setSchool(response.data.data.school)
    studentStore.setQQ(response.data.data.qq)
    studentStore.setPhone(response.data.data.phone)
    studentStore.setDirection(response.data.data.direction)
    userStore.setToken('12138')
    router.push('/check')
    return
  }

  if (valid) {
    ElMessage({
      message: '登录成功！',
      type: 'success'
    })
    studentStore.setName(formModel.value.Name)
    studentStore.setMajor(formModel.value.Major)
    studentStore.setSchool(formModel.value.SchoolNumber)
    studentStore.setQQ(formModel.value.QQNumber)
    studentStore.setPhone(formModel.value.PhoneNumber)

    userStore.setToken('12138')
    router.push('/')
  } else {
    alert('请检查输入内容')
  }
}
</script>

<template>
  <div class="login-page">
    <div class="form">
      <form @submit.prevent="login" autocomplete="off">
        <h1>登录</h1>
        <div class="inputGroup">
          <input
            id="name"
            v-model="formModel.Name"
            required
            type="text"
            @blur="validateField('Name')"
          />
          <label for="name">姓名</label>
          <span class="error" v-if="errors.Name">{{ errors.Name }}</span>
        </div>
        <div class="inputGroup">
          <input
            id="school"
            v-model="formModel.SchoolNumber"
            required
            type="text"
            @blur="validateField('SchoolNumber')"
          />
          <label for="school">学号</label>
          <span class="error" v-if="errors.SchoolNumber">{{
            errors.SchoolNumber
          }}</span>
        </div>
        <div class="inputGroup">
          <input
            id="qq"
            v-model="formModel.QQNumber"
            required
            type="text"
            @blur="validateField('QQNumber')"
          />
          <label for="qq">QQ</label>
          <span class="error" v-if="errors.QQNumber">{{
            errors.QQNumber
          }}</span>
        </div>
        <div class="inputGroup">
          <input
            id="major"
            v-model="formModel.Major"
            required
            type="text"
            @blur="validateField('Major')"
          />
          <label for="major">专业</label>
          <span class="error" v-if="errors.Major">{{ errors.Major }}</span>
        </div>
        <div class="inputGroup">
          <input
            id="phone"
            v-model="formModel.PhoneNumber"
            required
            type="text"
            @blur="validateField('PhoneNumber')"
          />
          <label for="phone">手机号</label>
          <span class="error" v-if="errors.PhoneNumber">{{
            errors.PhoneNumber
          }}</span>
        </div>
        <button type="submit" class="button">
          登 录
          <div id="clip">
            <div id="leftTop" class="corner"></div>
            <div id="rightBottom" class="corner"></div>
            <div id="rightTop" class="corner"></div>
            <div id="leftBottom" class="corner"></div>
          </div>
          <span id="rightArrow" class="arrow"></span>
          <span id="leftArrow" class="arrow"></span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  padding-top: 5rem;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  width: 30em;
  height: 40em;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(213, 212, 212, 0.9);
  transform: translateX(-10%);
}
h1 {
  text-align: center;
}
.inputGroup {
  font-family: 'Segoe UI', sans-serif;
  height: 4em;
  margin: 1em 0 1em 0;
  max-width: 190px;
  position: relative;
}

.inputGroup input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid #81acf7;
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}

.inputGroup label {
  font-size: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(108, 115, 122);
}

.inputGroup input:focus ~ label,
.inputGroup input:valid ~ label {
  transform: translateY(-50%) scale(0.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: #e8e8e8;
}

.inputGroup input:focus {
  border-color: #27c39f;
}

.error {
  color: red;
  font-size: 0.9em;
  margin-top: 0.5em;
  margin-left: 1em;
}

/* button 按钮样式 */
button {
  position: relative;
  width: 15em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: #252c2f;
  display: flex; /* 使用 flexbox 布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}

#clip {
  --color: #7fa6e8;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #47a0e4;
  -webkit-clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}

.arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #81acf7;
  top: 44%;
  width: 11%;
  height: 30%;
}

#leftArrow {
  left: -17%;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

#rightArrow {
  -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 106%;
}

button:hover #rightArrow {
  background-color: #27c39f;
  left: -17%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

button:hover #leftArrow {
  background-color: #27c39f;
  left: 106%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #5b88d6;
  box-shadow: inset 1px 1px 8px #5c9cca;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

#rightTop {
  top: -1.98em;
  left: 91%;
}

#leftTop {
  top: -1.96em;
  left: -3em;
}

#leftBottom {
  top: 2.1em;
  left: -2.15em;
}

#rightBottom {
  top: 45%;
  left: 88%;
}

button:hover #leftTop {
  animation:
    0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #rightTop {
  animation:
    0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #rightBottom {
  animation:
    0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #leftBottom {
  animation:
    0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover .corner {
  transform: scale(1.25) rotate(45deg);
}

button:hover #clip {
  animation: 0.2s ease-in-out 0.55s both greenLight8;
  --color: #27c39f;
}

@keyframes changeColor8 {
  from {
    background-color: #4685af;
  }

  to {
    background-color: #27c39f;
  }
}

@keyframes lightEffect8 {
  from {
    box-shadow: 1px 1px 5px #27c39f;
  }

  to {
    box-shadow: 0 0 2px #27c39f;
  }
}

@keyframes greenLight8 {
  from {
  }

  to {
    box-shadow: inset 0px 0px 15px #27c39f;
  }
}

@keyframes leftArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(10px);
  }
}

@keyframes rightArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(-10px);
  }
}
</style>
