function Footer({saveTask, taskToDo}){
    const countTodos = () => {
        let counterDone = 0;
        taskToDo.forEach(task => {
            task.state && counterDone++;
        });
        return counterDone;
    }
    return <>
        {console.log(taskToDo)}
            {`You have ${countTodos()} pending task of ${taskToDo.length}`} <button onClick={()=>{saveTask([])}}>Clear All</button>
           </>
}
export default Footer;