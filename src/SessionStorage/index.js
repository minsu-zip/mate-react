export const getItem = (target) => {
  const userInformationStorage = sessionStorage.getItem(target)
  return userInformationStorage
    ? userInformationStorage.replace(/\"/gi, '')
    : undefined
}

export const setItem = (target, response) => {
  sessionStorage.setItem(target, JSON.stringify(response.data.token))
}

export const removeItem = (target) => {
  sessionStorage.setItem(target)
}
