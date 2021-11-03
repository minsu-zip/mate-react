import axios from 'axios'
import { setItem } from '@SessionStorage'
import { removeItem } from '../SessionStorage'
const API_END_POINT = 'https://learn.programmers.co.kr'
const adminId = '617fabc8f4da0a041dfc80fd'
export default async function PostSignIn({ id, pw }) {
  let isProblem
  let isAdmin = false
  try {
    const response = await axios.post(`${API_END_POINT}/login`, {
      email: id,
      password: pw,
    })
    removeItem()
    setItem('userInformation', response)
    if (response.data.user._id === adminId) {
      isAdmin = true
    }
    isProblem = false
    return { isProblem: isProblem, isAdmin: isAdmin }
  } catch (error) {
    isProblem = true
    return { isProblem: isProblem, isAdmin: isAdmin }
  }
}
