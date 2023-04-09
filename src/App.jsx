import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { useTasks } from "./components/useTasks";

function App() {
  const {taskToDo, saveTask, deleteTasks, editTasks} = useTasks();
  return (
    <div className="App">
        <Header/>
        <AddTask taskToDo={taskToDo} saveTask={saveTask}/>
        <TaskList taskToDo={taskToDo} deleteTasks={deleteTasks} editTasks={editTasks} />
        <Footer saveTask={saveTask}/>
    </div>
  )
}

export default App
