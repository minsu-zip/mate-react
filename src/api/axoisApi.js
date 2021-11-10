import { initApi, authApi } from './axiosInstance'
import axios from 'axios'

export const getPost = async (selectChannel) => {
  try {
    const { data } = await initApi.get(
      `posts/channel/${selectChannel}?offset&limit`,
    )
    return data
  } catch (error) {
    console.log(error)
    return
  }
}
