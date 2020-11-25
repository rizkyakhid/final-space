import { createStore } from 'redux';

const initialState = {
  favChar: [
    {
      id: 27,
      name: 'David Dewinter',
      status: 'Alive',
      species: 'Hooblot',
      gender: 'Male',
      hair: 'None',
      alias: [],
      origin: 'Tera Con Prime',
      abilities: [],
      img_url: 'https://finalspaceapi.com/api/character/avatar/david_dewinter.jpg'
    }
  ]
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

const store = createStore(reducer)

export default store