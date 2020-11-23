import React from 'react'

class CharacterList extends React.Component {
  render() {
    const { characters } = this.props
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-around">
          {characters.map((char) => {
            return (
              <div className="card my-2" key={char.id} style={{ width: '250px' }}>
                <img src={char.img_url} style={{ width: '248px' }} alt='Char Pic' />
                <div className="card-body">
                  <h5 className="card-title">{char.name}</h5>
                  <p className="card-text">
                    Status: {char.status}
                  </p>
                  <button>Details</button>
                </div>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default CharacterList