import React, {Component} from 'react'
import ToDoItem from './components/ToDoItem'
import todosData from './data/todosData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }  

  render() {
    const ToDoItemComponents = this.state.todos.map(todo => <ToDoItem key={todo.id} item={todo} />)

    return (
      <div className='todo-list'>
        {ToDoItemComponents}
      </div>
    )
  }  
}

export default App