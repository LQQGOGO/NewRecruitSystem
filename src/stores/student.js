import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('student', () => {
  const name = ref('')
  const setName = (t) => {name.value = t}

  const school = ref('')
  const setSchool = t => {
    school.value = t
  }

  const major = ref('')
  const setMajor = t => {
    major.value = t
  }

  const phone = ref('')
  const setPhone = t => {
    phone.value = t
  }

  const qq = ref('')
  const setQQ = t => {
    qq.value = t
  }

  const direction = ref('')
  const setDirection = t => {
    direction.value = t
  }

  return { name, setName, school, setSchool, major, setMajor, phone, setPhone, qq, setQQ, direction, setDirection }

})
