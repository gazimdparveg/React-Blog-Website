import React from 'react'
import Slider from './Slider';
 
import Post from './Post';
function Home() {
  return (
    <div>
      
      <Slider/>
      <div className='container'>
      <div className="row">
            <div className="col-md-3">
            <Post img="Img/imgp1.jpg" title="This is Post 1" shorttitle="Some quick example text to build on the card title and make up the bulk of the card's content."/>      
            </div>
            <div className="col-md-3">
            <Post img="Img/imgp2.jpg" title="This is Post 2" shorttitle="Some quick example text to build on the card title and make up the bulk of the card's content."/>      
            </div>
            <div className="col-md-3">
            <Post img="Img/imgp3.jpg" title="This is Post 3" shorttitle="Some quick example text to build on the card title and make up the bulk of the card's content."/>      
            </div>
            <div className="col-md-3">
            <Post img="Img/imgp4.jpg" title="This is Post 4" shorttitle="Some quick example text to build on the card title and make up the bulk of the card's content."/>      
            </div>
            <div className="col-md-3">
            <Post img="Img/imgp5.jpg" title="This is Post 5" shorttitle="Some quick example text to build on the card title and make up the bulk of the card's content."/>      
            </div>
            <div className="col-md-3">
            <Post img="Img/img1.jpg" title="This is Post 6" shorttitle="Some quick example text to build on the card title and make up the bulk of the card's content."/>      
            </div>
            <div className="col-md-3">
            <Post img="Img/img2.jpg" title="This is Post 7" shorttitle="Some quick example text to build on the card title and make up the bulk of the card's content."/>      
            </div>
            <div className="col-md-3">
            <Post img="Img/img3.jpg" title="This is Post 8" shorttitle="Some quick example text to build on the card title and make up the bulk of the card's content."/>      
            </div>


        </div>
      </div>
     
    </div>
  )
}

export default Home
