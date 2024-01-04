import React, { Component } from 'react'
import './Style.css'

 class Slider extends Component {
 constructor(props){
  super(props)
  this.state ={
    shottitle:{
      stitle1 :" This is Short title one.",
      stitle2 :" This is Short Title tow.",
      stitle3 :" This is Short Title Three."
    },
    mtitle:{
     mtitel1:"Live with Md Parveg Gazi",
     mtitel2:"Live with Mahamuda Akter",
     mtitel3:"Live with fizia Islam Mahara"
    } ,
    blogtitle:{
      blogtitle1:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem praesentium possimus nam assumenda quidem, id quibusdam aut laboriosam autem ipsum vel eaque ratione optio maiores libero dolorum amet vero voluptate saepe ducimus sunt? Esse nobis provident sit dignissimos ratione quisquam laboriosam! Autem atque incidunt vel saepe molestiae quae eos cum?",
      blogtitle2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem praesentium possimus nam assumenda quidem, id quibusdam aut laboriosam autem ipsum vel eaque ratione optio maiores libero dolorum amet vero voluptate saepe ducimus sunt? Esse nobis provident sit dignissimos ratione quisquam laboriosam! Autem atque incidunt vel saepe molestiae quae eos cum?",
      blogtitle3:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem praesentium possimus nam assumenda quidem, id quibusdam aut laboriosam autem ipsum vel eaque ratione optio maiores libero dolorum amet vero voluptate saepe ducimus sunt? Esse nobis provident sit dignissimos ratione quisquam laboriosam! Autem atque incidunt vel saepe molestiae quae eos cum?"

    },
    channame:"Japan2.2"
  }
 }

  render() {
    return (
      <div>
       

     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
  <div className="carousel-item active">
        <div className="container">
        <div className='row bg-light'>
      <div className="col-md-6 "> 
      <img src="Img/img1.jpg" className="simage d-block w-100" alt="sd"/>
      </div>
      <div className="col-md-6 "> 
       <p className="shottitle">{this.state.shottitle.stitle1}</p>
       <h3 className='mtitle'>{this.state.mtitle.mtitel1}</h3> 
       <p className="blogtitle">{this.state.blogtitle.blogtitle1}</p>
       <p className='channame'>{this.state.channame}</p>
      </div>
        </div>
        </div>
    </div>
    <div className="carousel-item  ">
        <div className="container">
        <div className='row bg-light'>
      <div className="col-md-6 "> 
      <img src="Img/img2.jpg" className="simage d-block w-100" alt="df"/>
      </div>
      <div className="col-md-6 "> 
       <p className="shottitle">{this.state.shottitle.stitle2} </p>
       <h3 className='mtitle'>{this.state.mtitle.mtitel1}</h3> 
       <p className="blogtitle">{this.state.blogtitle.blogtitle1}</p>
       <p className='channame'>{this.state.channame}</p>
      </div>
        </div>
        </div>
    </div> 
     <div className="carousel-item  ">
        <div className="container">
        <div className='row bg-light'>
      <div className="col-md-6 "> 
      <img src="Img/img3.jpg" className="simage d-block w-100" alt="sdf"/>
      </div>
      <div className="col-md-6 "> 
       <p className="shottitle"> {this.state.shottitle.stitle3}</p>
       <h3 className='mtitle'>{this.state.mtitle.mtitel1}</h3> 
       <p className="blogtitle">{this.state.blogtitle.blogtitle1}</p>
       <p className='channame'>{this.state.channame}</p>
      </div>
        </div>
        </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  <dir className="contriner">
  <h2>Recent Post</h2>
  </dir>
 
</div>

 
      </div>
    )
  }
}

export default Slider