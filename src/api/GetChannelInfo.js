import axios from 'axios'
import useAsync from '../hooks/useAsync'

const baseUrl = 'http://13.209.30.200'
const GetChannelInfo = () => {
  const initialPost = useAsync(async () => {
    return await axios
      .get(`${baseUrl}/channels`)
      .then((response) => response.data)
  }, [])

  return (initialPost.value || []).filter((channel) => {
    if (
      channel.name.indexOf('ron2') > -1 ||
      channel.name.indexOf('론 2팀') > -1
    ) {
      return true
    } else {
      return false
    }
  })
}

export default GetChannelInfo
