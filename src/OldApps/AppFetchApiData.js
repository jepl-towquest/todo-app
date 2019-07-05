import React, {Component} from 'react'

// https://swapi.co/api

class App extends Component {
  constructor() {
    super()
    this.state = {
      character: {}
    }
  }

  componentDidMount() {
    // Using javascript promises to chain commands
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json()) // turn the response into JSON we can use
      .then(data => this.setState({character: data}))    
  }

  render() {
    return(
      <div>
        Name: {this.state.character.name}
      </div>
    )
  }
}

export default App
