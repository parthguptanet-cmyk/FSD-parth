import React from 'react'

const Card = () => {
  return (
    <div style={{border:"2px solid black",height:'320px',width:'250px',marginLeft:'250px'}}>
      <h1>My Car</h1>
      <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRnIIzA4GVQibNsuA23aa5cBd9xv4jOz17o2ky_S05w&s" alt="Car" height={"100px"} width={"100px"}/></p>
       <h2>Car Name: Lamborghini</h2>
       <h2>Price: $20000</h2>
    </div>
  )
}

export default Card
