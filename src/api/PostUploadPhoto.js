import axios from 'axios'
import { getItem } from '@SessionStorage'
const API_END_POINT = 'https://learn.programmers.co.kr'

// export default async function PostUploadPhoto(imageUpload) {
//   const formData = new FormData()
//   formData.append('isCover', false)
//   formData.append('image', imageUpload)

//   const BearerToken = `Bearer ${getItem('userInformation')}`

//   await axios({
//     method: 'post',
//     url: `${API_END_POINT}/users/upload-photo`,
//     headers: {
//       Authorization: BearerToken,
//     },
//     data: formData,
//   })
//     .then((response) => {})
//     .catch((error) => {
//       console.log(error)
//     })
// }
