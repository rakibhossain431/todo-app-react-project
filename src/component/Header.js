import React from "react"


const Header = () => {
    return(
        <div>

          
             <header style={"background-image: url(./assets/images/bg-desktop-dark.jpg)"}>
      <div class="container">
        <div class="header-wrapper">
          <div class="logo">
            <a href="index.html">
              <h1>TODO</h1>
            </a>
          </div>
          <div class="theme-icon">
            <img src="./assets/images/icon-sun.svg" alt="Sun Icon" />
          </div>
        </div>
      </div>
    </header> 

    {/* <div class="container">
      <form class="todo_form" autocomplete="off">
        <button type="submit" class="submit_btn">Submit</button>
        <input type="text" name="add_todo" placeholder="Create a new todo..." />
        <input type="text" name="hidden_item" hidden />
      </form>

      <div class="todo-items-wrapper">
        <ul class="todo-items"></ul>

        <div class="todo-footer">
          <div class="left-items">5 Items left</div>
          <ul class="footer-menus">
            <li class="all selected">All</li>
            <li class="active">Active</li>
            <li class="completed">Completed</li>
          </ul>
          <button class="clear-completed">Clear Completed</button>
        </div>
      </div>
    // </div> */}

        </div>
    )
}
export default Header