const ToDo = ({data, completeToDoProp, deleteToDoProp})=>{
    const completeElementHandler = (id) => {
        completeToDoProp (id);
    };
    
    const deleteElementHandler = (id)=>{
        deleteToDoProp(id);
    };
    return(
        <ul>
        {
            data.map((element, index)=>{
                return(
 <li  key={element.id} style={{textDecoration:element.isCompleted === true ? "line-through" : ""}}>
             <input type="checkbox"
        checked = {element.isCompleted}
    onChange={() => completeElementHandler(element.id)}
                            />
                    {element.text}
<button onClick={() => deleteElementHandler(element.id)}>  x  </button>
 </li>
  ) 
 })
 }
  </ul>
 )
};

export default ToDo