import React from 'react'

const Task = ({item , setEdit,setdelate}) => {
  // console.log(item)
  return (
    <li>
            <label id="" className="todo-left completed" htmlFor="item-${item.id}">
                <input type="checkbox" id="" value="${item.id}" />
                {item.task} 
            </label>

              <div className='todo-right'>
                  <button type="button" className="edit" value="${item.id}"
                   onClick={() =>setEdit(item)}>
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png" />
                  </button>

                 <button type="button" className="delete" value="${item.id}"
                 onClick ={() =>setdelate(item.id)}>
                   <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/>
                </button>

              </div>

                 
            </li>
  )
}

export default Task