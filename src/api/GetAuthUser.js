// import axios from 'axios'
// import { getItem } from '@SessionStorage'
// const API_END_POINT = 'http://13.209.30.200'

// export default async function GetAuthUser(articleDataUrl) {
//   const BearerToken = `Bearer ${getItem('userInformation')}`

//   return await axios({
//     method: 'get',
//     url: `${API_END_POINT}/auth-user`,
//     headers: {
//       Authorization: BearerToken,
//     },
//   })
//     .then((response) => response.data)
//     .then((data) => {
//       return data
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }
