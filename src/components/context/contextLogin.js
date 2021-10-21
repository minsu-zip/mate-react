import { createContext } from 'react'
import axios from 'axios'
export const UserLoginContext = createContext()

const UserLoginStore = (props) => {
  const users = {
    name: 'khw',
    job: 'college student',
  }
  return (
    <UserLoginContext.Provider value={users}>
      {props.children}
    </UserLoginContext.Provider>
  )
}

const API_END_POINT = 'http://13.209.30.200'
export async function Post_Login({ id, pw }) {
  console.log(id, pw)
  try {
    const response = await axios.post(`${API_END_POINT}/login`, {
      email: id,
      password: pw,
    })
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

export default UserLoginStore
