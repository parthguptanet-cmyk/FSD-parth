import React from 'react'
import Card from './Components/Card'
const App = () => {
  return (
    <div style={{display:'flex',gap:'10px',padding:'20px 50px'}}>
      <Card car="Car1" pri="10000" image="https://samstoy.in/cdn/shop/files/rolls-royce-battery-operated-ride-on-car-red.jpg?v=1749480085"/>
      <br />
      <Card car="Car2" pri="20000" image="https://media.istockphoto.com/id/2225077827/photo/a-blue-plastic-toy-car-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=FHLo1hIlaDpLBUwehXpwCnroV0EhuT7Al5yvtmFPFHI="/>
    </div>
  )
}

export default App
