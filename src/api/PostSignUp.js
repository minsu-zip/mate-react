import axios from 'axios'
const API_END_POINT = 'https://learn.programmers.co.kr'
export default async function PostSignUp({ email, fullName, password }) {
  try {
    const response = await axios.post(`${API_END_POINT}/signup`, {
      email,
      fullName,
      password,
    })
  } catch (error) {
    alert('회원 가입 중 문제가 발생하였습니다')
  }
}
