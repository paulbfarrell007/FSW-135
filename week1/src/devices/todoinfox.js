import { useState } from "react";

const ToDoInfo = ({addToDo})=>{
    const [emptyInput, setEmptyInput]=useState(false);
    const [toDoInput, setToDoInput]=useState("");
    const inputChangeHandler=(event)=>{
   setToDoInput(event.target.value);
    };
    const setFalseHandler=()=>{
  setEmptyInput(false);
    };
    const setTrueHandler=()=>{
        setEmptyInput(true);
    };
    const sendToDo=(event)=>{
event.preventDefault();
    if(event.target.children[0].value==="")
        {
       setTrueHandler();        }
        else
        {     addToDo(toDoInput);
        setFalseHandler();
        }
    }; return(
        <>
    <form onSubmit={sendToDo}>
            <input type="text" value={toDoInput} onChange={inputChangeHandler}/>
        <button>Add To Do</button>
</form>
        {
      emptyInput && <h3 style={{color:"red"}}>Todo is Empty</h3>
            }
        </>    )}; export default ToDoInfo;