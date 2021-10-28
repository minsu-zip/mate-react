import axios from 'axios'
import { getItem_UserInformation } from '@SessionStorage'
const API_END_POINT = 'http://13.209.30.200'

export default async function PostUploadPhoto(imageUpload) {
  const formData = new FormData()
  formData.append('isCover', false)
  formData.append('image', imageUpload)

  const BearerToken = `Bearer ${getItem_UserInformation('userInformation')}`

  await axios({
    method: 'post',
    url: `${API_END_POINT}/users/upload-photo`,
    headers: {
      Authorization: BearerToken,
    },
    data: formData,
  })
    .then((response) => {
      alert('이미지 업로드')
    })
    .catch((error) => {
      console.log(error)
    })
}
