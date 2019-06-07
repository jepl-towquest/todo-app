import React from 'react'
import Joke from './components/Joke'

function App() {
  return (
    <div>
      <Joke 
        joke={{question:"Why did the chicken cross the road?", punchline:"To get to the other side"}}
        />
      <Joke 
        joke={{punchline:"I tried to kidnap my blacksmith but when I turned my back he made a bolt for the door"}}
        />
      <Joke 
        joke={{question:"Why was the broom late for work?", punchline:"It overswept"}}
        />
      <Joke 
        joke={{punchline:"I relabeled all the jars in my wife's spice rack. I'm not in trouble yet but the thyme is cumin"}}
        />
      <Joke 
        joke={{question:"Why does snow white use Samsung?", punchline:"Because of a bad experience with an Apple"}}
        />
    </div>
  )
}

export default App