import React, { useEffect, useState } from 'react'
import CharacterList from '../components/CharacterList'
import useFetch from '../helpers/fetchData'

function Home() {
  const [characters] = useFetch('https://finalspaceapi.com/api/v0/character')
  const [characterById, setCharacterById] = useState('')

  useEffect(() => {
    console.log(characterById)
  }, [characterById])

  function charDetail(id) {
    console.log('Fetch detail from: https://finalspaceapi.com/api/v0/character/' + id)
    fetch('https://finalspaceapi.com/api/v0/character/' + id, {
      method: 'get'
    })
      .then(res => { return res.json() })
      .then(charData => {
        setCharacterById(charData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <React.Fragment>
      <div className="container my-3">
        <CharacterList characters={characters} charDetail={charDetail} />
      </div>
    </React.Fragment>
  )
}

export default Home