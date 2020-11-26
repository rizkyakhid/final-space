import React from 'react'
import { Link } from 'react-router-dom'
import CharacterList from '../components/CharacterList'
import LoadingSpinner from '../components/LoadingSpinner'
import useFetch from '../helpers/fetchData'

function Home() {
  const [characters, loading] = useFetch('https://finalspaceapi.com/api/v0/character')
  const showButton = true

  if (loading) {
    return (
      <LoadingSpinner></LoadingSpinner>
    )
  }

  return (
    <React.Fragment>
      <div className="container my-3">
        <Link to="/favorites" className='btn btn-danger mb-2'>My Favorites Char</Link>
        <CharacterList characters={characters} showButton={showButton} />
      </div>
    </React.Fragment>
  )
}

export default Home