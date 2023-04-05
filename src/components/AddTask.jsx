import React from "react";
import { useState } from "react";
export default function AddTask({todoItems, saveTask}){

        const [newTaskValue, setNewTaskValue] = useState("");
        const handleNewTaskValue = (event) => {
                setNewTaskValue(event.target.value);
              };
        const handleAddNewTask = () => {
                saveTask([{"description":newTaskValue, "state": false}, ...todoItems]);
                setNewTaskValue(""); 
        };
        return <>
                <input type="text" value={newTaskValue} onChange={handleNewTaskValue}/>
                <button onClick={handleAddNewTask}>+</button>
              </>
}