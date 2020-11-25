import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function CharDetails() {
  const { id } = useParams()
  const [details, setDetails] = useState('')

  useEffect(() => {
    fetch(`https://finalspaceapi.com/api/v0/character/${id}`, {
      method: 'get'
    })
      .then(res => res.json())
      .then(char => {
        setDetails(char)
      })
      .catch(err => {
        console.log(err)
      })
  }, [details])

  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="card user-card bg-dark text-light">
              <div className="card-header">
                <h5>Character Details</h5>
              </div>
              <div className="card-block">
                <div className="user-image">
                  <img src={details.img_url} className="img-radius" alt="User-Profile-Image" />
                </div>
                <h6 className="f-w-600 m-t-25 m-b-10">{details.name}</h6>
                {/* <p className="text-muted">Active | Male | Born 23.05.1992</p> */}
                <hr />
                <ul className='text-left' style={{ listStyleType: "none", margin: "0px", padding: "0px" }}>
                  <li>Name<span className='text-muted'><p>{ details.name }</p></span></li>
                  <li>Status<span className='text-muted'><p>{ details.status }</p></span></li>
                  <li>Species<span className='text-muted'><p>{ details.species }</p></span></li>
                  <li>Origin<span className='text-muted'><p>{ details.origin }</p></span></li>
                  <li>Gender<span className='text-muted'><p>{ details.gender }</p></span></li>
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