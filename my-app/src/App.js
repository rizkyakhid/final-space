import React from 'react'
import axios from 'axios'
import CharacterList from './CharacterList'

class App extends React.Component {
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

  render() {
    const { characters } = this.state
    return (
      <React.Fragment>
        <div className="container my-3">
          <h1>Character List</h1>
          <CharacterList characters={characters} />
        </div>
      </React.Fragment>
    )
  }
}

export default App