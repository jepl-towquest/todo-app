import React from 'react'

function Joke(props) {
  return (
    <div>
      <p style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</p>
      <p style={{color: !props.joke.question && '#999666'}}>Pubchline: {props.joke.punchline}</p>
      <hr />
    </div>
  )
}

export default Joke