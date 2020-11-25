import React, { useEffect } from 'react'
import CharacterList from '../components/CharacterList'
import useFetch from '../helpers/fetchData'

function Home() {
  const [characters] = useFetch('https://finalspaceapi.com/api/v0/character')
  // const [charDetail, setCharDetail] = useFetch()

  // useEffect(() => {
  //   if(charDetail.length !== 0) console.log(charDetail)
  // }, [charDetail])

  // function handleCharDetail(id) {
  //   setCharDetail('https://finalspaceapi.com/api/v0/character/' + id)
  // }

  return (
    <React.Fragment>
      <div className="container my-3">
        <CharacterList characters={characters}/>
      </div>
    </React.Fragment>
  )
}

export default Home