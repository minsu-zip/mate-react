import axios from 'axios'
import { getItem } from '@SessionStorage'
const API_END_POINT = 'https://learn.programmers.co.kr'

export default async function PutMyInformation(fullName, username) {
  const BearerToken = `Bearer ${getItem('userInformation')}`
  try {
    await axios
      .put(
        `${API_END_POINT}/settings/update-user`,
        {
          fullName,
          username,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: BearerToken,
          },
        },
      )
      .then((res) => res.data)
  } catch (error) {
    console.log(error)
  }
}
