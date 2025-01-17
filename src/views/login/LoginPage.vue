<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStudentStore } from '@/stores/student'
import { useUserStore } from '@/stores/user'

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

const validateField = (field) => {
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

const login = () => {
  let valid = true
  for (let field in formModel.value) {
    if (!validateField(field)) {
      valid = false
    }
  }
  if (valid) {
    alert('登录成功')
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
          <span class="error" v-if="errors.SchoolNumber">{{ errors.SchoolNumber }}</span>
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
          <span class="error" v-if="errors.QQNumber">{{ errors.QQNumber }}</span>
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
          <span class="error" v-if="errors.PhoneNumber">{{ errors.PhoneNumber }}</span>
        </div>
        <button type="submit" class="button">登录</button>
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
  transform: translateX(-10%);
  .button {
    width: 100%;
  }
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
  border: 2px solid rgb(200, 200, 200);
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
  color: rgb(100, 100, 100);
}

.inputGroup input:focus ~ label,
.inputGroup input:valid ~ label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: #e8e8e8;
}

.inputGroup input:focus {
  border-color: rgb(150, 150, 200);
}

.error {
  color: red;
  font-size: 0.9em;
  margin-top: 0.5em;
  margin-left: 1em;
}
</style>
