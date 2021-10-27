import axios from 'axios'

const API_END_POINT = 'http://13.209.30.200'

export default async function PutMyInformation(fullName, username) {
  const BearerToken = `Bearer ${sessionStorage
    .getItem('userInformation')
    .replace(/\"/gi, '')}`
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
