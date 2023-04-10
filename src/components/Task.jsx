import React from "react";
import "./Task.css";

function Task({todo, deleteTasks, editTasks}){
    return <div className="task">
                <input type="checkbox"/> 
                <div>
                    <h3>{todo.name}</h3>
                    <p>{todo.description}</p>
                </div>
                <div className="task_actions">
                    <img alt="edit"
                    onClick={() => editTasks(todo, "Texto por defecto || no hay modal")} 
                    src="https://cdn.discordapp.com/attachments/831560691252068372/1092867472027291799/icons8-edit-24.png"/>
                    <img alt="delte"
                    onClick={() => deleteTasks(todo)}  
                    src="https://cdn.discordapp.com/attachments/831560691252068372/1092867471813378098/icons8-trash-32.png"/>
                </div>
           </div>
}

export default Task;