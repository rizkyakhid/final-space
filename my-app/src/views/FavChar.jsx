import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CharacterList from '../components/CharacterList'
import LoadingSpinner from "../components/LoadingSpinner"

function FavChar() {
  const favChar = useSelector(({ favChar }) => favChar.list)

  if (!favChar) {
    <LoadingSpinner></LoadingSpinner>
  }

  return (
    <React.Fragment>
      <div className="container my-3">
        <Link to="/" className='btn btn-danger mb-2'>Home</Link>
        <div className="row">
          {favChar.map(char => {
            return (
              <CharacterList char={char}></CharacterList>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default FavChar