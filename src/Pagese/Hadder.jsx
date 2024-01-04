import React from 'react'
import { Link } from "react-router-dom";

function Hadder() {
  return (
    
    <div className='allfonts'>
        <div className="jumbotron jumbotron-fluid  ">
      <nav class="navbar navbar-expand-lg navbar-light  px-3">
   
  <a class="navbar-brand" href="#">JAPAN2.2</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/About">About </ Link >
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Blog</a>
      </li>
    </ul>
     
  </div>
</nav>
</div>
    </div>
  )
}

export default Hadder
