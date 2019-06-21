import React, {Component} from 'react'
import ToDoItem from './components/ToDoItem'
import todosData from './data/todosData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }

    this.handleChange = this.handleChange.bind(this)
  }  

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const ToDoItemComponents = this.state.todos.map(todo => <ToDoItem key={todo.id} item={todo} handleChange={this.handleChange} />)

    return (
      <div className='todo-list'>
        {ToDoItemComponents}
      </div>
    )
  }  
}

export default App