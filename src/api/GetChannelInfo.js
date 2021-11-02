import axios from 'axios'
import useAsync from '../hooks/useAsync'

const baseUrl = 'http://13.209.30.200'
const GetChannelInfo = async () => {
  const { data } = await axios.get(`${baseUrl}/channels`)

  // const initialPost = useAsync(async () => {
  //   return await axios
  //     .get(`${baseUrl}/channels`)
  //     .then((response) => response.data)
  // }, [])

  const channelData = data.filter((channel) => {
    if (
      channel.name.indexOf('ron2') > -1 ||
      channel.name.indexOf('론 2팀') > -1
    ) {
      return true
    } else {
      return false
    }
  })

  return channelData
}

export default GetChannelInfo
