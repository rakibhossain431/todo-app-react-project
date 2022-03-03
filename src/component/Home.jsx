
import React from 'react'
import TasksForm from './TasksForm'
import TasksFooter from './TasksFooter'
import { useState } from 'react'

 const Home = () => {
    const [todoTasks, setTodoTasks] = useState([]);
      console.log(todoTasks)

  return (
   
        <div className="container">

            <TasksForm tasks={todoTasks} setTodoTasks = {setTodoTasks}/>
            
            <TasksFooter todoTasks={todoTasks}/>
        </div>
        
                  
          
    
  )
}
export default Home