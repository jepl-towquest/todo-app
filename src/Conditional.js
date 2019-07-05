import React from 'react'

function Conditional(props) {
  return(
    <div>
      {
        props.isLoading ? <h1>Loading. . .</h1> : <div>Some coool stuff about conditional rendering...</div>
      }
    </div>
  )
}

export default Conditional