import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/addTask";
import Footer from "./components/Footer";

function App() {
  const [taskToDo, setTaskToDo]  = useState([]);

    const saveTask = newTasks => {
        localStorage.setItem('TaskToDo', JSON.stringify(newTasks));
        setTaskToDo(newTasks);
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
        
      }, 2000);
    },[])

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

  return (
    <div className="App">
      <Header/>
      <AddTask todoItems={taskToDo} saveTask={saveTask}/>
      <TaskList todoItems={taskToDo}/>
      <Footer saveTask={saveTask}/>
    </div>
  )
}

export default App
