import React from "react";
import Task from "./Task";
function TaskList(props){
    console.log(props)
    return <ul>
        {props.todoItems.map( 
            todo => 
            <div key={todo.description}>
                <Task todo={todo}/> 
            </div>
            )}
        </ul>
}

export default TaskList;