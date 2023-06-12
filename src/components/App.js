import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);
  
  function addItem(inputText) {    
    setItems(prevValue => {
      return [...prevValue, inputText];
    })
  }
  function deleteItem(id) {    
    setItems(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea onAdd={addItem} />
      </div>
      <div>
        <ul>  
          {items.map((item,index) => {          
            return <ToDoItem key={index} id={index} list={item} onDelete={deleteItem} />           
          })}  
        </ul>
      </div>
    </div>
  );
}

export default App;
