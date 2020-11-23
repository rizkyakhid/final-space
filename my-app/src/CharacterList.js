import React from 'react'

class CharacterList extends React.Component {
  render() {
    const { characters } = this.props
    return (
      <div>
        {characters.map((char) => {
          return (
            <div className="card" key={char.id}>
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">
                  Status: {char.status} <br />
                  Origin: {char.origin} <br />
                  Gender: {char.gender}
                </p>
                <button>Details</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CharacterList