import React from "react";

function Task({todo}){
    return <div>
                <input type="checkbox"/> 
                {todo.text}
           </div>
}

export default Task;