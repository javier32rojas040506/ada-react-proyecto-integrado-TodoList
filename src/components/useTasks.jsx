import React from "react";
import { useState } from "react";
function useTasks(){
    const [taskToDo, setTaskToDo]  = useState([]);
    const saveTask = newTasks => {
        localStorage.setItem('TaskToDo', JSON.stringify(newTasks));
        setTaskToDo(newTasks);
    }
    const deleteTasks = taskToDelete => {
        const newTasksToDo = taskToDo.filter( task => task.description !== taskToDelete.description);
        saveTask(newTasksToDo);
    }

    const editTasks = (taskToEdit, newText) => {
        const indexOfTask = taskToDo.findIndex( task => task.description === taskToEdit.description);
        const newTasksToDo = taskToDo;
        newTasksToDo[indexOfTask].description = newText;
        saveTask([...newTasksToDo]);
    }
    //Simulating a api function
    React.useEffect(()=>{
        setTimeout(()=>{
          let Tasks = JSON.parse(localStorage.getItem("TaskToDo"));
          if(Tasks){
            saveTask(Tasks);
          }else{
            saveTask([]);
          }
          
        }, 1000);
      },[])
    
    //Storage actions
    React.useEffect(() => {
    const handleStorageChange = (event) => {
        if (event.key === 'TaskToDo') {
        setTaskToDo(JSON.parse(event.newValue));
        }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
        window.removeEventListener('storage', handleStorageChange);
    };
    }, []);

    return {taskToDo, saveTask, deleteTasks, editTasks}
};
export {useTasks}