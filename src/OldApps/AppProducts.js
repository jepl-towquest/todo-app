import React from 'react'
import Product from './components/Product'
import vschoolProducts from './data/vschoolProducts'

function App() {
  const productComponents = vschoolProducts.map(item => <Product key={item.id} product={item} />)

  return(
    <div>
      {productComponents}
    </div>
  )
}

export default App