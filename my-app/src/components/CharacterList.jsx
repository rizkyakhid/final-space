import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavChar } from '../store/actions/addFavChar'


function CharacterList(props) {
  const { characters } = props

  const dispatch = useDispatch()

  const handleFavorite = (char) => {
    dispatch(addFavChar(char))
  }

  return (
    <React.Fragment>
      <div className="row d-flex justify-content-around">
        {characters.map((char) => {
          return (
            <div className="card my-2 bg-dark text-light" key={char.id} style={{ width: '250px' }}>
              <figure className='d-flex justify-content-center'>
                <img src={char.img_url} style={{ width: '248px', marginTop: '1px', borderRadius: '4px' }} alt='Char Pic' />
              </figure>
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">
                  Status: {char.status}
                </p>
                <Link className="btn btn-outline-light" to={`/characters/${char.id}`} >Details</Link>
                <button className="btn btn-outline-light mt-2" onClick={() => { handleFavorite(char) }} >Add To Favorites</button>
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default CharacterList