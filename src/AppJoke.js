import React from 'react'
import Joke from './components/Joke'
import jokesData from './data/jokesData'

function App() {

  // Longhand function
  // const jokeComponents = jokesData.map(function(joke) {
  //   return (
  //     <Joke question={joke.question} punchline={joke.punchline} />
  //   )
  // })

  // Longhand arrow function
  // const jokeComponents = jokesData.map((joke) => {
  //   return (
  //     <Joke question={joke.question} punchline={joke.punchline} />
  //   )
  // })

  // Shorthand arrow function on one line with implicit return as there is only 1 component
  const jokeComponents = jokesData.map(joke => <Joke question={joke.question} punchline={joke.punchline} />)

  return (
    <div>
      {jokeComponents}
    </div>
  )
}

export default App