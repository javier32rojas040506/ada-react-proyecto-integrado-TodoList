import Header from "./components/Header"
import TaskList from "./components/TaskList"

function App() {
  const taskToDo = [
    {text:"Buy a new gaming laptop", done: false},
    {text:"Complete a previous task", done: false},
    {text:"Create video for Youtube", done: true},
    {text:"Create a new portafolio site", done: true}
  ] 
  return (
    <div className="App">
      <Header/>
      <TaskList todoItems={taskToDo}/>
    </div>
  )
}

export default App