<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { useStudentStore } from '@/stores/student'
import { useUserStore } from '@/stores/user'
const router = useRouter()
const studentStore = useStudentStore()
const userStore = useUserStore()
const formModel = ref({
  QQNumber: '',
  SchoolNumber: '',
  Name: '',
  Major: '',
  PhoneNumber: ''
})
const rules = {
  QQNumber: [
    { required: true, message: '请输入QQ账号', trigger: 'blur' },
    { pattern: /^\d{6,14}$/, message: '请输入正确的QQ账号', trigger: 'blur' }
  ],
  SchoolNumber: [
    { required: true, message: '请输入学号', trigger: 'blur' },
    { pattern: /^\d{8}$/, message: '请输入8位数字的学号', trigger: 'blur' }
  ],
  Name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { pattern: /^[\u4e00-\u9fa5]{2,8}$/, message: '姓名应为2到8个汉字', trigger: 'blur' }
  ],
  Major: [
    { required: true, message: '请输入专业', trigger: 'blur' },
    { pattern: /^[\u4e00-\u9fa5]{2,20}$/, message: '专业应为2到20个汉字', trigger: 'blur' }
  ],
  PhoneNumber: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入11位有效手机号', trigger: 'blur' }
  ]
}

const form = ref()

const login = async () => {
  try {
    const isValid = await form.value.validate()
    if (!isValid) {
      ElMessage.error('验证失败，请检查输入')
      return
    }
    //将信息存入仓库
    studentStore.setName(formModel.value.Name)
    studentStore.setSchool(formModel.value.SchoolNumber)
    studentStore.setMajor(formModel.value.Major)
    studentStore.setPhone(formModel.value.PhoneNumber)
    studentStore.setQQ(formModel.value.QQNumber)
    //存个假的token
    userStore.setToken('12138')
    // 显示成功消息并导航到首页
      ElMessage.success('登录成功')
      router.push('/')
  } catch (error) {
    // 捕获任何未捕获的错误，并显示错误信息
    ElMessage.error(`请求失败：${error.message || '请稍后重试'}`)
    console.error('登录过程中的错误:', error)
    console.error('错误的详细信息:', JSON.stringify(error))
  }
}
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" :offset="6" class="form">
      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="Name">
          <el-input
            v-model="formModel.Name"
            :prefix-icon="User"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="SchoolNumber">
          <el-input
            v-model="formModel.SchoolNumber"
            :prefix-icon="Lock"
            placeholder="请输入学号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="QQNumber">
          <el-input
            v-model="formModel.QQNumber"
            :prefix-icon="Lock"
            placeholder="请输入QQ账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="Major">
          <el-input
            v-model="formModel.Major"
            :prefix-icon="Lock"
            placeholder="请输入专业"
          ></el-input>
        </el-form-item>
        <el-form-item prop="PhoneNumber">
          <el-input
            v-model="formModel.PhoneNumber"
            :prefix-icon="Lock"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="login"
            class="button"
            type="primary"
            auto-insert-space
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style scoped>
.login-page {
  padding-top: 5rem;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  .title {
    margin: 0 auto;
  }
  .button {
    width: 100%;
  }
  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>

