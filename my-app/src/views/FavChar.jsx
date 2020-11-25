import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function FavChar() {

  const favChar = useSelector((state) => state.favChar)

  return (
    <React.Fragment>
      <div className='container'>
        <div className="row d-flex justify-content-around">
          {favChar.map((char) => {
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
                </div>
              </div>
            )
          })}
        </div>
        <div className="row d-flex justify-content-around mt-3">
          <Link className='btn btn-primary' to='/'>Home</Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FavChar