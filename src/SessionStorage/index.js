export const getItem_UserInformation = (target) => {
  const userInformationStorage = sessionStorage.getItem(target)
  return userInformationStorage
    ? userInformationStorage.replace(/\"/gi, '')
    : undefined
}

export const setItem_UserInformation = (target, response) => {
  sessionStorage.setItem(target, JSON.stringify(response.data.token))
}

export const removeItem_UserInformation = (target) => {
  sessionStorage.setItem(target)
}
