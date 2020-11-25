import React from 'react'
import { Link } from 'react-router-dom'
import CharacterList from '../components/CharacterList'
import useFetch from '../helpers/fetchData'

function Home() {
  const [characters] = useFetch('https://finalspaceapi.com/api/v0/character')

  return (
    <React.Fragment>
      <div className="container my-3">
        <Link to="/favorites" className='btn btn-dark mb-2'>My Favorites Char</Link>
        <CharacterList characters={characters}/>
      </div>
    </React.Fragment>
  )
}

export default Home