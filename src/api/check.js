import request from '@/utils/request'

export const check = async (
  SchoolNumber
) => {
  try {
    const response = await request.post(
      '/api/check',
      {
        school: SchoolNumber
      },
      {
        headers: {
          platform: 'H5'
        }
      }
    )
    console.log(response.data)
    return response // 确保返回响应
  } catch (error) {
    console.error('请求失败:', error)

    throw error // 重新抛出错误以便在调用处捕获
  }
}
