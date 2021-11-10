import axios from 'axios'

const BASE_URL = 'https://learn.programmers.co.kr/'

const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options })
  return instance
}

const axiosAuthApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options })
  return instance
}

export const initApi = axiosApi(BASE_URL)
export const authApi = axiosAuthApi(BASE_URL)
