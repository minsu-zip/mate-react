import axios from 'axios'
import { setItem_UserInformation } from '@SessionStorage'
const API_END_POINT = 'http://13.209.30.200'
export default async function PostSignIn({ id, pw }) {
  console.log(id, pw)
  let isProblem
  try {
    const response = await axios.post(`${API_END_POINT}/login`, {
      email: id,
      password: pw,
    })
    setItem_UserInformation('userInformation', response)
    alert('정상작동')
    isProblem = false
    return isProblem
  } catch (error) {
    isProblem = true
    return isProblem
  }
}
