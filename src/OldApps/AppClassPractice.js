import React from 'react'
import Header from '../components/HeaderClass'
import Greeting from '../components/GreetingClass'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header username="jepl" />
        <Greeting />
      </div>
    )
  }
}

export default App