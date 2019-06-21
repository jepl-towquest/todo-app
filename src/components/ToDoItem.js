import React from 'react';

function handleOnChange() {
  console.log("Changed!")
}

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} onChange={handleOnChange} />
      <p>{props.item.text}</p>
    </div>    
  )
}

export default ToDoItem;