export const fetchCharacters = () => {
  return (dispatch) => {
    fetch('https://finalspaceapi.com/api/v0/character', {
      method: 'get'
    })
      .then(res => res.json())
      .then(char => {
        dispatch({ type: 'SET_CHAR', payload: char })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch({ type: 'SET_LOADING', payload: false })
        }, 1000)
      })
  }
}

export const fetchIndividualCharacters = (id) => {
  return (dispatch) => {
    fetch(`https://finalspaceapi.com/api/v0/character/${id}`, {
      method: 'get'
    })
      .then(res => res.json())
      .then(char => {
        dispatch({ type: 'SET_INDV_CHAR', payload: char })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch({ type: 'SET_INDV_LOADING', payload: false })
        }, 1000)
      })
  }
}