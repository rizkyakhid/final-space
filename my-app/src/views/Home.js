import React from 'react'
import axios from 'axios'
import CharacterList from '../components/CharacterList'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://finalspaceapi.com/api/v0/character'
    })
      .then(({ data }) => {
        this.setState({ characters: data })
      })
  }

  charDetail(id) {
    console.log('Detail of character with id ' + id)
  }

  render() {
    const { characters } = this.state
    return (
      <React.Fragment>
        <div className="container my-3">
          <h1>Character List</h1>
          <CharacterList characters={characters} charDetail={this.charDetail} />
        </div>
      </React.Fragment>
    )
  }
}

export default Home