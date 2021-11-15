import { defaultInstance, authInstance } from '@apis/utils'

export const likeComment = async (postId) => {
  try {
    const { data } = await authInstance.post('likes/create', postId)
    return data._id
  } catch (error) {
    console.log(error)
    return
  }
}

export const likeCancelComment = async (id) => {
  try {
    await authInstance.delete('likes/delete', { data: id })
  } catch (error) {
    console.log(error)
  }
}
