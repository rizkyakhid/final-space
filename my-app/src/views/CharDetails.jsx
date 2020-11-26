import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../helpers/fetchData'
import LoadingSpinner from '../components/LoadingSpinner'

function CharDetails() {
  const { id } = useParams()
  const [details, loading] = useFetch(`https://finalspaceapi.com/api/v0/character/${id}`)

  if (loading) {
    return (
      <LoadingSpinner></LoadingSpinner>
    )
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <div className="card user-card bg-danger text-light">
              <div className="card-block">
                <div className="user-image">
                  <img src={details.img_url} className="img-radius" alt="Char-Icon" />
                </div>
                <h5 className="my-2"><strong>{details.name.toUpperCase()}</strong></h5>
                <hr />
                <ul className='text-left' style={{ listStyleType: "none", margin: "0px", padding: "0px" }}>
                  <li>Status<span><p>{details.status.toUpperCase()}</p></span></li>
                  <li>Species<span><p>{details.species.toUpperCase()}</p></span></li>
                  <li>Origin<span><p>{details.origin.toUpperCase()}</p></span></li>
                  <li>Gender<span><p>{details.gender.toUpperCase()}</p></span></li>
                  <li>Hair<span><p>{details.hair.toUpperCase()}</p></span></li>
                  {/* <li>Abilities<span className='text-muted'><p>{ details.abilities }</p></span></li> */}
                </ul>
                <hr className='mb-4' />
                <div>
                  <Link className='text-light' to='/'> Home </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CharDetails