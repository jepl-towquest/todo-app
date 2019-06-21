import React from 'react'

function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>£{props.price}</p>
      <p>{props.description}</p>
      <hr />
    </div>
  )
}

export default Product