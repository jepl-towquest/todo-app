import React from 'react'
import ToDoItem from './components/ToDoItem'
import ContactCard from './components/ContactCard'

function App() {
  return (
    // <div className='todo-list'>
    //   <ToDoItem />
    //   <ToDoItem />
    //   <ToDoItem />
    //   <ToDoItem />
    // </div>
    <div classname="contacts">
      <ContactCard 
        name="Mr. Whiskerson"
        imgUrl="http://placekitten.com/300/200"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnam.meow"
      />
      <ContactCard 
        name="Flyffykins"
        imgUrl="http://placekitten.com/400/200"
        phone="(212) 555-2345"
        email="fluff@catnam.meow"
      />
      <ContactCard 
        name="Destroyer"
        imgUrl="http://placekitten.com/400/300"
        phone="(212) 555-3456"
        email="ofworlds@catnam.meow"
      />
      <ContactCard 
        name="Felix"
        imgUrl="http://placekitten.com/200/100"
        phone="(212) 555-4567"
        email="thecat@catnam.meow"
      />
    </div>
  )
}

export default App