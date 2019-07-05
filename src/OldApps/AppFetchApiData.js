import React, {Component} from 'react'

// https://swapi.co/api

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})

    // Using javascript promises to chain commands
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json()) // turn the response into JSON we can use
      .then(data => this.setState({
        loading: false,
        character: data}))
  }

  render() {
    const text = this.state.loading ? "Loading..." : this.state.character.name

    return(
      <div>
        <p>{text}</p>
      </div>
    )
  }
}

export default App
