
import { useState } from "react"
import React from 'react'

const TasksForm = ( {tasks, setTodoTasks} ) => {

    const [task, setTask] = useState("")

    const hendleSubmit = (e) => { 
        e.preventDefault()
        const item = {
            id:Date.now(),
            task,
            isCompleted:false
        }
        setTodoTasks((prevState) => [item, ...prevState])
        e.target.reset(item)
        
     }
  return (
    <div>
         <form className="todo_form" autoComplete="off" onSubmit={hendleSubmit}>
         <button type="submit" className="submit_btn">Submit</button>
         <input type="text"
          name="add-todo"
          placeholder="Create a new todo..." 
         onChange={(e) => setTask (e.target.value)} />
         <input type="text" name="hidden-item" hidden />
         </form>
    </div>  
  )
}

export default TasksForm