import axios from 'axios'
import { getItem } from '@SessionStorage'
const API_END_POINT = 'http://13.209.30.200'
export default async function PutMyPw(pw) {
  const BearerToken = `Bearer ${getItem('userInformation')}`
  try {
    await axios
      .put(
        `${API_END_POINT}/settings/update-password`,
        {
          password: pw,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: BearerToken,
          },
        },
      )
      .then((res) => res.data)
      .then((data) => {})
  } catch (error) {
    console.log(error)
  }
}
