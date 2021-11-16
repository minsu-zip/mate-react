import { defaultInstance, authInstance } from '@apis/utils'

export const getPost = async (selectChannel) => {
  try {
    const { data } = await defaultInstance.get(
      `posts/channel/${selectChannel}?offset&limit`,
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = async (id) => {
  try {
    await authInstance.delete('posts/delete', { data: id })
  } catch (error) {
    console.log(error)
  }
}
