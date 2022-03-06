
import React from 'react'
import TasksForm from './TasksForm'
import TasksFooter from './TasksFooter'
import { useState } from 'react'
import Task from './Task'

 const Home = () => {
    const [todoTasks, setTodoTasks] = useState([]);

    const [edit , setEdit] = useState({})
    const [delate,setdelate] = useState({})
    //  console.log(edit)
     function hendleRemove(id){
      const  newList =delate.filter((item) => item.id !==id)}

  return (
   
        <div className="container">

            <TasksForm  setTodoTasks = {setTodoTasks}/>
            
             <div className="todo-items-wrapper">
              {Array.isArray(todoTasks) && todoTasks.length > 0 && (
 
              <ul className="todo-items">
               {todoTasks.map((item , index) =>  <Task 
                 item={item}
                 key={index} 
                 setEdit={setEdit}
                 setdelate={setdelate}
                 /> )}

              </ul>
             )}
            
            <TasksFooter todoTasks={todoTasks}/>
           </div>
      
        </div>
        
                  
          
    
  )
}
export default Home