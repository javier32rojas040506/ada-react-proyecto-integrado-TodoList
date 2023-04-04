import React from "react";
import Task from "./Task";
class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoItems: props.todoItems
        };
      }
    render(){
        return <ul>
            {this.state.todoItems.map( 
                todo => 
                <div key={todo.text}>
                    <Task todo={todo}/> 
                </div>
                )}
            </ul>
    }
}

export default TaskList;