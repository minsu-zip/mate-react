import axios from 'axios'

const API_END_POINT = 'http://13.209.30.200'

export default async function PostUploadPhoto(imageUpload) {
  const formData = new FormData()
  formData.append('isCover', false)
  formData.append('image', imageUpload)

  const BearerToken = `Bearer ${sessionStorage
    .getItem('userInformation')
    .replace(/\"/gi, '')}`

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
