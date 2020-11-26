export const addFavChar = (char) => {
  return {
    type: 'ADD_FAV_CHAR',
    data: {
      char
    }
  }
}