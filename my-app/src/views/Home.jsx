import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CharacterList from '../components/CharacterList'
import LoadingSpinner from '../components/LoadingSpinner'
import { fetchCharacters } from '../store/actions/charAct'

function Home() {

  const characters = useSelector(({ characters }) => characters.list)
  const loading = useSelector(({ characters }) => characters.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

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
        <div className="row">
          {
            characters.map(char => {
              return (
                <CharacterList key={char.id} char={char} showButton={showButton} />
              )
            })
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home