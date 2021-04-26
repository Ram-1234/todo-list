import React, { useState } from 'react';
import TodoList from './TodoList'; 
import AddCircleIcon from '@material-ui/icons/AddCircle';



function App() {
  const [inputList, setInput]=useState("");
  const [Items,setItems]=useState([]);

  const  itemEvent=(event)=>{ 
    setInput(event.target.value);
  };

  const listofItem=()=>{

    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
   setInput("");
  };

  const deleteItem=(id)=>{
    //console.log("delete");
    setItems((olditems)=>{
      return olditems.filter((arrele,index)=>{
          return index !==id;
      })
    })
}

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList}/>
        <button onClick={listofItem}>
        <AddCircleIcon/>
        </button>

        <ul>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval,index)=>{
        return <TodoList key={index} id={index} onSelect={deleteItem} text={itemval} />;
          })}
        </ul>
      </div>

    </div>
    </>
  );
}

export default App;
