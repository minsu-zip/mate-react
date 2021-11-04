export const getItem = (target) => {
  const userInformationStorage = sessionStorage.getItem(target)
  return userInformationStorage
    ? userInformationStorage.replace(/\"/gi, '')
    : undefined
}

export const setItem = (target, response) => {
  if (target === 'userImage') {
    sessionStorage.setItem('userImage', JSON.stringify(response))
  } else {
    sessionStorage.setItem(target, JSON.stringify(response.data.token))
    sessionStorage.setItem(
      'userEmail',
      JSON.stringify(response.data.user.email),
    )
    sessionStorage.setItem('userId', JSON.stringify(response.data.user._id))
    sessionStorage.setItem(
      'userImage',
      JSON.stringify(response.data.user.image),
    )
  }
}

export const removeItem = () => {
  sessionStorage.clear()
}
