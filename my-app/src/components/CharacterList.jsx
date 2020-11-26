import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavChar } from '../store/actions/addFavChar'
import Swal from 'sweetalert2';


function CharacterList(props) {
  const { characters, showButton } = props

  const dispatch = useDispatch()

  const handleFavorite = (char) => {
    dispatch(addFavChar(char))
    Swal.fire('Successfull', `You've added ${char.name} to favorite list!`, 'success')
  }

  return (
    <React.Fragment>
      <div className="row">
        {characters.map((char) => {
          return (
            <div className="col-3">
              <div className="card my-2 bg-danger text-light" key={char.id} style={{ width: '250px'}}>
                <figure className='d-flex justify-content-center'>
                  <img src={char.img_url} style={{ width: '248px', marginTop: '1px', borderRadius: '4px' }} alt='Char Pic' />
                </figure>
                <div className="card-body">
                  <h5 className="card-title"><strong>{char.name}</strong></h5>
                  <p className="card-text">
                    Status: {char.status}
                  </p>
                  {
                    showButton &&
                    <div className='additional-btn'>
                      <Link className="btn btn-outline-light" to={`/characters/${char.id}`} >Details</Link>
                      <button className="btn btn-outline-light ml-1" onClick={() => { handleFavorite(char) }} >Add To Favorites</button>
                    </div>
                  }
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default CharacterList