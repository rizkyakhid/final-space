import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-4">
            <div class="card user-card">
              <div class="card-header">
                <h5>Character Details</h5>
              </div>
              <div class="card-block">
                <div class="user-image">
                  <img src={details.img_url} class="img-radius" alt="User-Profile-Image" />
                </div>
                <h6 class="f-w-600 m-t-25 m-b-10">{details.name}</h6>
                {/* <p class="text-muted">Active | Male | Born 23.05.1992</p> */}
                <hr />
                <ul className='text-left' style={{ listStyleType: "none", margin: "0px", padding: "0px" }}>
                  <li>Name<span className='text-muted'><p>{ details.name }</p></span></li>
                  <li>Status<span className='text-muted'><p>{ details.status }</p></span></li>
                  <li>Species<span className='text-muted'><p>{ details.species }</p></span></li>
                  <li>Origin<span className='text-muted'><p>{ details.origin }</p></span></li>
                  <li>Gender<span className='text-muted'><p>{ details.gender }</p></span></li>
                </ul>
                <hr />
                <div class="row justify-content-center user-social-link">
                  <div class="col-auto"><a href="#!"><i class="fa fa-facebook text-facebook"></i></a></div>
                  <div class="col-auto"><a href="#!"><i class="fa fa-twitter text-twitter"></i></a></div>
                  <div class="col-auto"><a href="#!"><i class="fa fa-dribbble text-dribbble"></i></a></div>
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