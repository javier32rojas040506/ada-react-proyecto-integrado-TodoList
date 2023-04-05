import React from "react";
import "./Task.css";

function Task({todo}){
    return <div className="task">
                <input type="checkbox"/> 
                {todo.description}
                <img alt="edit"
                onClick={()=> console.log("edit")} 
                src="https://cdn.discordapp.com/attachments/831560691252068372/1092867472027291799/icons8-edit-24.png"/>
                <img alt="delte"
                onClick={()=> console.log("delete")}  
                src="https://cdn.discordapp.com/attachments/831560691252068372/1092867471813378098/icons8-trash-32.png"/>
           </div>
}

export default Task;