import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div style={{border:'2px solid black',padding:'10px 30px'}}>
               <h1>{props.car}</h1>
               <p>A full package with super speed</p>
               <img src={props.image} alt="cars" style={{height:'100px',width:'100px'}}/>
               <p>price:{props.pri}</p>
      </div>
    </div>
  )
}

export default Card
