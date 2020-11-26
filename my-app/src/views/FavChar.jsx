import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CharacterList from '../components/CharacterList'
import LoadingSpinner from "../components/LoadingSpinner"

function FavChar() {

  const favChar = useSelector((state) => state.favChar)

  if(!favChar) {
    <LoadingSpinner></LoadingSpinner>
  }

  return (
    <React.Fragment>
      <div className="container my-3">
        <Link to="/" className='btn btn-danger mb-2'>Home</Link>
        <CharacterList characters={favChar}></CharacterList>
      </div>
    </React.Fragment>
  )
}

export default FavChar