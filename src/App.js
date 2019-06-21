import React from 'react'
import ToDoItem from './components/ToDoItem'
import todosData from './data/todosData'

function App() {
  const ToDoItemComponents = todosData.map(todo => <ToDoItem key={todo.id} item={todo} />)

  return (
    <div className='todo-list'>
      {ToDoItemComponents}
    </div>
  )
}

export default App