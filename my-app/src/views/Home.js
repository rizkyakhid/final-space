import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import CharacterList from '../components/CharacterList'

function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character', {
      method: 'get'
    })
      .then(res => res.json())
      .then(charData => {
        setCharacters(charData)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function charDetail(id) {
    console.log('Fetch detail from: https://finalspaceapi.com/api/v0/character/' + id)
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