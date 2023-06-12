import React from 'react'

function ToDoItem(props) {
  return (
    <div className='todolist'>
      <li>{props.list}</li>
      <button onClick={() => {
        props.onDelete(props.id);
      }}>
        <span>Delete</span>
      </button>
    </div>
  )
}

export default ToDoItem;
