import axios from 'axios'
import { getItem_UserInformation } from '@SessionStorage'
const API_END_POINT = 'http://13.209.30.200'
export default async function PutMyPw(pw) {
  const BearerToken = `Bearer ${getItem_UserInformation('userInformation')}`
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
      .then((data) => alert(data))
  } catch (error) {
    console.log(error)
  }
}
