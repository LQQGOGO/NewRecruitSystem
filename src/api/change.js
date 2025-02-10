import request from '@/utils/request'

export const change = async data => {
  try {
    const response = await request.post(
      '/api/change',
      {
        qq: data.qq,
        school: data.school,
        name: data.name,
        major: data.major,
        phone: data.phone,
        direction: data.direction
      },
      {
        headers: {
          platform: 'H5'
        }
      }
    )
    console.log(response.data)
    return response
  } catch (error) {
    console.error('请求失败:', error)
    throw error
  }
}
