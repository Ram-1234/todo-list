import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import './index.css';

const TodoList=(props)=>{


    return (
        <>
        <div className="todo_style">
        <CancelIcon onClick={()=>{
            props.onSelect(props.id);
        }}/>   
         <li>{props.text}</li>
        </div>
        </>
    )
     
}

export default TodoList;