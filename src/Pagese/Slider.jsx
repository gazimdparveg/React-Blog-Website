import React, { Component } from 'react'
import './Style.css'

export default class Slider extends Component {
  render() {
    return (
      <div>
       

     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
  <div class="carousel-item active">
        <div className="container">
        <div className='row bg-light'>
      <div className="col-md-6 "> 
      <img src="Img/img1.jpg" class="d-block w-100" alt="sd"/>
      </div>
      <div className="col-md-6 "> 
       <p className="shottitle">Lorem ipsum dolor sit amet.</p>
       <h3 className='mtitle'>Live with Md Parveg Gazi</h3> 
       <p className="blogtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem praesentium possimus nam assumenda quidem, id quibusdam aut laboriosam autem ipsum vel eaque ratione optio maiores libero dolorum amet vero voluptate saepe ducimus sunt? Esse nobis provident sit dignissimos ratione quisquam laboriosam! Autem atque incidunt vel saepe molestiae quae eos cum?</p>
       <p className='channame'>Japan2.2</p>
      </div>
        </div>
        </div>
    </div>
    <div class="carousel-item  ">
        <div className="container">
        <div className='row bg-light'>
      <div className="col-md-6 "> 
      <img src="Img/img2.jpg" class="d-block w-100" alt="df"/>
      </div>
      <div className="col-md-6 "> 
       <p className="shottitle">Lorem ipsum dolor sit amet.</p>
       <h3 className='mtitle'>Live with Md Parveg Gazi</h3> 
       <p className="blogtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem praesentium possimus nam assumenda quidem, id quibusdam aut laboriosam autem ipsum vel eaque ratione optio maiores libero dolorum amet vero voluptate saepe ducimus sunt? Esse nobis provident sit dignissimos ratione quisquam laboriosam! Autem atque incidunt vel saepe molestiae quae eos cum?</p>
       <p className='channame'>Japan2.2</p>
      </div>
        </div>
        </div>
    </div> 
     <div class="carousel-item  ">
        <div className="container">
        <div className='row bg-light'>
      <div className="col-md-6 "> 
      <img src="Img/img3.jpg" class="d-block w-100" alt="sdf"/>
      </div>
      <div className="col-md-6 "> 
       <p className="shottitle">Lorem ipsum dolor sit amet.</p>
       <h3 className='mtitle'>Live with Md Parveg Gazi</h3> 
       <p className="blogtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem praesentium possimus nam assumenda quidem, id quibusdam aut laboriosam autem ipsum vel eaque ratione optio maiores libero dolorum amet vero voluptate saepe ducimus sunt? Esse nobis provident sit dignissimos ratione quisquam laboriosam! Autem atque incidunt vel saepe molestiae quae eos cum?</p>
       <p className='channame'>Japan2.2</p>
      </div>
        </div>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

 
      </div>
    )
  }
}

