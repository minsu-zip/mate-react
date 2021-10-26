import axios from 'axios'

const API_END_POINT = 'http://13.209.30.200'
export default async function PutMyPw(pw) {
  const BearerToken = `Bearer ${sessionStorage
    .getItem('userInformation')
    .replace(/\"/gi, '')}`
  console.log(pw)
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
