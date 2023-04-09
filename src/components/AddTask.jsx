import React from "react";
import { useState } from "react";
import "./AddTask.css";
export default function AddTask({taskToDo, saveTask}){
        const [newTaskValue, setNewTaskValue] = useState("");
        const handleNewTaskValue = (event) => {
                setNewTaskValue(event.target.value);
              };
        const handleAddNewTask = () => {
                saveTask([{"description":newTaskValue, "state": false}, ...taskToDo]);
                setNewTaskValue(""); 
        };
        return <div className="addTask">
                <input type="text"  value={newTaskValue} onChange={handleNewTaskValue}/>
                <button onClick={handleAddNewTask}>+</button>
               </div>
}