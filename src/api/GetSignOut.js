import axios from 'axios'
import { removeItem } from '@SessionStorage'
const API_END_POINT = 'http://13.209.30.200'

export default async function GetSignOut() {
  try {
    await axios
      .post(`${API_END_POINT}/logout`)
      .then((res) => res.data)
      .then((data) => {
        alert(data)
      })
    removeItem()
  } catch (error) {
    console.log(error)
  }
}
