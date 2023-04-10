import React from "react";
import Task from "./Task";
function TaskList(props){
    return <ul>
        {props.taskToDo.map( 
            todo => 
            <div key={todo.name}>
                <Task todo={todo} deleteTasks={props.deleteTasks} editTasks={props.editTasks}/> 
            </div>
            )}
        </ul>
}

export default TaskList;