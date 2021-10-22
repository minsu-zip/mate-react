import axios from 'axios'

const API_END_POINT = 'http://13.209.30.200'

export async function PostSignIn({ id, pw }) {
  console.log(id, pw)
  let isProblem
  try {
    const response = await axios.post(`${API_END_POINT}/login`, {
      email: id,
      password: pw,
    })
    sessionStorage.setItem('userInformation', JSON.stringify(response.data))
    alert('정상작동')
    isProblem = false
    return isProblem
  } catch (error) {
    isProblem = true
    return isProblem
  }
}

export async function GetSignOut() {
  try {
    await axios
      .post(`${API_END_POINT}/logout`)
      .then((res) => res.data)
      .then((data) => {
        alert(data)
      })
    sessionStorage.removeItem('useInformation')
  } catch (error) {
    console.log(error)
  }
}

export async function PostSignUp({ email, fullName, password }) {
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
