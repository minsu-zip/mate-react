import axios from 'axios'
import { removeItem, getItem, setItem } from '@SessionStorage'
import { message } from 'antd'
const API_END_POINT = 'https://learn.programmers.co.kr'
const adminId = '617fabc8f4da0a041dfc80fd'

const getRequest = async (url, options = {}) => {
  const returnResult = await axios({
    method: 'get',
    url: `${API_END_POINT}/${url}`,
    ...options,
  })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
    })

  if (url === 'logout') {
    message.success('로그아웃 되었습니다')
    removeItem()
  }

  return returnResult
}

const postRequest = async (url, options = {}) => {
  let isProblem
  let isAdmin = false

  const returnResult = await axios({
    method: 'post',
    url: `${API_END_POINT}/${url}`,
    ...options,
  })
    .then((response) => setItem('userImage', response.data.image))
    .catch((error) => {
      console.log(error)
    })

  if (url === 'login') {
    removeItem()
    setItem('userInformation', returnResult)
    if (returnResult.data.user._id === adminId) {
      isAdmin = true
    }
    isProblem = false
    return { isProblem: isProblem, isAdmin: isAdmin }
  }

  return returnResult
}

const putRequest = async (url, options = {}) => {
  const returnResult = await axios({
    method: 'put',
    url: `${API_END_POINT}/${url}`,
    ...options,
  })
    .then((response) => response)
    .catch((error) => {
      console.log(error)
    })

  return returnResult
}

export { getRequest, postRequest, putRequest }
