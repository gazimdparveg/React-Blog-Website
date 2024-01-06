import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
         
         
<div  className="container my-5">
 
  <footer>
  
    <div  className="container p-4 pb-0">
  
      <section  className="">
    
        <div  className="row">
        
          <div  className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6  className="text-uppercase mb-4 font-weight-bold">
             Japan 2.2
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
        

          <div  className="w-100 clearfix d-md-none" >
          </div>
        
          <div  className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6  className="text-uppercase mb-4 font-weight-bold">Post</h6>
            <p>
              <a  className="text-black">Post 1</a>
            </p>
            <p>
              <a  className="text-black">Post 2</a>
            </p>
            <p>
              <a  className="text-black">Post 3</a>
            </p>
            <p>
              <a  className="text-black">Post 4</a>
            </p>
          </div>
        
         

          <hr  className="w-100 clearfix d-md-none" />

        
          <div  className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6  className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a  className="text-black">Blog</a>
            </p>
            <p>
              <a  className="text-black">About</a>
            </p>
            <p>
              <a  className="text-black">Contact</a>
            </p>
           
          </div>

        
          <hr  className="w-100 clearfix d-md-none" />

        
          <div  className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6  className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i  className="fas fa-home mr-3"></i>  Kobe Japan</p>
            <p><i  className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i  className="fas fa-phone mr-3"></i> + 81 234 567 88</p>
            <p><i  className="fas fa-print mr-3"></i> + 81 234 567 89</p>
          </div>
        
        </div>
       
      </section>
     

      <hr  className="my-3"/>

     
      <section  className="p-3 pt-0">
        <div  className="row d-flex align-items-center">
     
          <div  className="col-md-7 col-lg-8 text-center text-md-start">
         
            <div  className="p-3">    2024  Copyright:
              
                <Link to='/'>Japan 2.2</Link>
            </div>
            
          </div>
           
 
          <div  className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
      
            <a
                className="btn btn-outline-light btn-floating m-1 text-block"
           
               role="button"
               ><i  className="fab fa-facebook-f"></i
              ></a>
 
            <a
                className="btn btn-outline-light btn-floating m-1 text-block"
           
               role="button"
               ><i  className="fab fa-twitter"></i
              ></a>

            
            <a
                className="btn btn-outline-light btn-floating m-1 text-block"
               
               role="button"
               ><i  className="fab fa-google"></i
              ></a>

        
            <a
                className="btn btn-outline-light btn-floating m-1 text-block"
                
               role="button"
               ><i  className="fab fa-instagram"></i
              ></a>
          </div>
         
        </div>
      </section>
      
    </div>
  
  </footer>
 
</div>
 

    </div>
  )
}

export default Footer

