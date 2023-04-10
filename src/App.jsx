import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { useTasks } from "./components/useTasks";

function App() {
  const {taskToDo, saveTask, deleteTasks, editTasks} = useTasks();
  return (
    <div className="App">
        <Header taskToDo={taskToDo} saveTask={saveTask}/>
        <TaskList taskToDo={taskToDo} deleteTasks={deleteTasks} editTasks={editTasks} />
        <Footer saveTask={saveTask}/>
    </div>
  )
}

export default App
