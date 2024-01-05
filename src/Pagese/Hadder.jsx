import React from 'react'
import { Link } from "react-router-dom";
 


function Hadder() {
  return (
    
    <div className='allfonts'>
        <div className="jumbotron jumbotron-fluid  ">
      <nav className="navbar navbar-expand-lg navbar-light  px-3">
    
  <Link className="navbar-brand" to={"/"}>JAPAN2.2</Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        
        <Link className="nav-link" to={"/"}>Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to={"/About"}>About </ Link >
      
      </li>
      <li className="nav-item">
      <Link className="nav-link" to={"/Blog"}>Blog </ Link >
      </li>
    </ul>
     
  </div>
</nav>
</div>
    </div>
  )
}

export default Hadder
