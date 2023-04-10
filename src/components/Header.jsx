import React from "react";
import { useState } from "react";
import { AddModal } from "./AddModal";
import "./Header.css";
export default function Header({taskToDo, saveTask}){
        const [serachTaskValue, setSerachTaskValue] = useState("");
        const [openModal, setOpenModal] = useState(false);
        const [formData, setFormData] = useState({name:"", description:""})
        const [formError, setFormError] = useState({name:"", description:""});
        const handleSerchTaskValue = event => {
                setSerachTaskValue(event.target.value);
        }
        const handleAddNewTask = event => {
                event.preventDefault();
                saveTask([{"name": formData.name,"description":formData.description, "state": false}, ...taskToDo]);
                setFormData({...formData, name:'', description:''})
                setOpenModal(false);
        };
        const handleSetNameTask = event =>{
                if(!event.target.value){
                        setFormError({...formError, name:"name is required"});
                }else if(event.target.value.length < 4){
                        setFormError({...formError, name:"name must be have more than 3 characters"});
                }else{
                        setFormError({...formError, name:""});
                }
                setFormData({...formData, name: event.target.value})
        };
        const handleSetDescriptionTask = event =>{

        }
        return <div className="addTask">
                <h1>Todo App</h1>
                <input type="text"  placeholder="Search a Task" value={serachTaskValue} onChange={handleSerchTaskValue}/>
                <button  onClick={()=>{setOpenModal(true)}}>+</button>
                {openModal && 
                <AddModal>
                        <form onSubmit={handleAddNewTask}>
                                <div>
                                        <label>Name of Taks </label>
                                        <input onChange={handleSetNameTask}/>
                                        {formError.name && <span style={{color:"red"}}>{formError.name}</span>}
                                </div>
                                <div>
                                        <label>description </label>
                                        <input onChange={event =>setFormData({...formData, description: event.target.value})}/>
                                </div>
                                <button onClick={()=> setOpenModal(false)}>Close</button>
                                <button>Send</button>
                        </form>
                </AddModal>}
               </div>
}