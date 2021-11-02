import axios from 'axios'
import { setItem } from '@SessionStorage'
const API_END_POINT = 'https://learn.programmers.co.kr'
export default async function PostSignIn({ id, pw }) {
  console.log(id, pw)
  let isProblem
  try {
    const response = await axios.post(`${API_END_POINT}/login`, {
      email: id,
      password: pw,
    })
    setItem('userInformation', response)
    isProblem = false
    return isProblem
  } catch (error) {
    isProblem = true
    return isProblem
  }
}
