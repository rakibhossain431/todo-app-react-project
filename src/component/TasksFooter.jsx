import React from 'react'
import Task from './Task'

const TasksFooter = ({todoTasks}) => {
  return (
    
      
         <div className="todo-footer">
         <div className="left-items">5 Items left</div>
            <ul className="footer-menus">
             <li className="all selected">All</li>
             <li className="active">Active</li>
             <li className="completed">Completed</li>
             </ul>
         <button className="clear-completed">Clear Completed</button>
         <button className="clear-completed">reset </button>
        </div>
         
    
  )
}

export default TasksFooter