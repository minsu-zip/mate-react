import axios from 'axios'
import { getItem_UserInformation } from '@SessionStorage'
const API_END_POINT = 'http://13.209.30.200'

export default async function GetAuthUser(articleDataUrl) {
  const BearerToken = `Bearer ${getItem_UserInformation('userInformation')}`

  return await axios({
    method: 'get',
    url: `${API_END_POINT}/auth-user`,
    headers: {
      Authorization: BearerToken,
    },
    body: {
      isCover: false,
      image: articleDataUrl,
    },
  })
    .then((response) => response.data)
    .then(({ image }) => {
      return image
    })
    .catch((error) => {
      console.log(error)
    })
}
