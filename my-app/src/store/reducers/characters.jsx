const charState = {
  list: [],
  loading: true,
  details: '',
  detailsLoading: true
}

function characters(state = charState, action) {
  switch (action.type) {
    case "SET_CHAR": {
      const newChar = action.payload
      return { ...state, list: newChar }
    }
    case "SET_LOADING": {
      const newLoading = action.payload
      return { ...state, loading: newLoading }
    }
    case "SET_INDV_CHAR": {
      const char = action.payload
      return { ...state, details: char }
    }
    case "SET_INDV_LOADING": {
      const newLoading = action.payload
      return { ...state, detailsLoading: newLoading }
    }
    default: return state
  }
}

export default characters