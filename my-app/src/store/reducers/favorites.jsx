const favState = {
  list: []
}

function favChar(state = favState, action) {
  switch (action.type) {
    case "ADD_FAV_CHAR": {
      const newFavChar = state.list.concat(action.payload.char)
      console.log(newFavChar, "INI DARI FAVORITES")
      return { ...state, list: newFavChar }
    }
    default: return state
  }
}

export default favChar