export const addFavChar = (char) => {
  return {
    type: 'ADD_FAV_CHAR',
    payload: {
      char
    }
  }
}