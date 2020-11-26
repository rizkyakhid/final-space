import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

const initialState = {
  favChar: [],
  characters: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAV_CHAR": {
      const newFavChar = state.favChar.concat(action.data.char)
      return { ...state, favChar: newFavChar }
    }
    default: return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store