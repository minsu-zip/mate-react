import axios from 'axios'
import { removeItem } from '@SessionStorage'
const API_END_POINT = 'https://learn.programmers.co.kr'

export default async function GetSignOut() {
  try {
    await axios
      .post(`${API_END_POINT}/logout`)
      .then((res) => res.data)
      .then((data) => {
        alert(data)
      })
    removeItem('userInformation')
  } catch (error) {
    console.log(error)
  }
}
