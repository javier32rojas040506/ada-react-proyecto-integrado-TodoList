import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { useTasks } from "./components/useTasks";

function App() {
  const {taskToDo, saveTask} = useTasks();
  return (
    <div className="App">
        <Header/>
        <AddTask/>
        <TaskList todoItems={taskToDo}/>
        <Footer saveTask={saveTask}/>
    </div>
  )
}

export default App
