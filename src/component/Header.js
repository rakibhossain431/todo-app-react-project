import React from "react"
import Bgimages from '../images/bg-desktop-light.jpg'
import Sicon from '../images/icon-sun.svg'



const Header = () => {
    return(
        <div><header style={{backgroundImage: `url(${Bgimages})`}}>
     
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a href="index.html">
                <h1>TODO</h1>
              </a>
            </div>
            <div className="theme-icon">
              <img src={Sicon} alt="Sun Icon" />
            </div>
          </div>
        </div>
      </header> </div>
    )
}
export default Header