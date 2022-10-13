import {todos} from "./shop";
function List({tasks}) {const list = todos.map((task, index) => {
return(<div key={index}>
<input type="checkbox" id={index} name="item"></input>
<label> {task.text}</label></div>)});
return(<>{list}</>)}
 export default List