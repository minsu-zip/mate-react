import axios from 'axios'
const API_END_POINT = 'http://13.209.30.200'
export default async function PostSignUp({ email, fullName, password }) {
  try {
    const response = await axios.post(`${API_END_POINT}/signup`, {
      email,
      fullName,
      password,
    })
    alert('회원 가입이 완료되었습니다')
  } catch (error) {
    alert('회원 가입 중 문제가 발생하였습니다')
  }
}
