import React from 'react';

function ToDoItem(props) {
  let listItemStyle = props.item.completed ? "todo-item-complete" : "todo-item"

  return (
    <div className={listItemStyle}>
      <input 
        type="checkbox" 
        checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)} />
      <p>{props.item.text}</p>
    </div>    
  )
}

export default ToDoItem;