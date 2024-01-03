import React from 'react'

function Post(props) {
  return (
    <div>
       
       
            <div className="card"  >
  <img src={props.img} className="card-img-top" alt="jk"/>
  <div className="card-body">
    <h5 className="card-title">{props.title} </h5>
    <p className="card-text">{props.shorttitle} </p>
    <a href="#" className="btn bg-light">Go somewhere</a>
  </div>
</div>
            
    
    </div>
  )
}

export default Post
