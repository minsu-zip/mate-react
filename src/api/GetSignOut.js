import axios from 'axios'

const API_END_POINT = 'http://13.209.30.200'

export default async function GetSignOut() {
  try {
    await axios
      .post(`${API_END_POINT}/logout`)
      .then((res) => res.data)
      .then((data) => {
        alert(data)
      })
    sessionStorage.removeItem('useInformation')
  } catch (error) {
    console.log(error)
  }
}
