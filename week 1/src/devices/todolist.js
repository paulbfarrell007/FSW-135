import ToDo from "./todo";

const ToDoList = ({data, completeToDo, deleteToDo}) => {
    return(
        <ToDo data={data} completeToDoProp={completeToDo} deleteToDoProp={deleteToDo}/>
    )
};

export default ToDoList;