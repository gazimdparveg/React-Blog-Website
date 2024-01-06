import React from 'react'
import { NavLink, Link } from "react-router-dom";
 


function Hadder() {
  return (
    
    <div className='allfonts'>
        <div className="jumbotron jumbotron-fluid  ">
      <nav className="navbar navbar-expand-lg navbar-light  px-3">
    
  <Link className="navbar-brand" to={"/"}>JAPAN2.2</Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        
        <NavLink className="nav-link" to={"/"}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to={"/About"}>About </ NavLink >
      
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to={"/Blog"}>Blog </ NavLink >
      </li>
    </ul>
     
  </div>
</nav>
</div>
    </div>
  )
}

export default Hadder
