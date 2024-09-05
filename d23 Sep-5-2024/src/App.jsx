import { useState } from 'react'
import './App.css'

function App() {
  const studentName = 'Shafayet';
  const shafayetStyle = {
    fontSize: "26px",
    color: "red",
    backgroundColor: "lightblue",
    padding: "20px"
  }
  return (
    <>
      <div style={{ fontSize: "26px", color: "red", backgroundColor: "lightpink", padding: "20px" }}>
        {studentName}
      </div>
      <div style={shafayetStyle}>
        My First React App
      </div>
      <div className='shefayetClass'>
        {studentName} is not a bad boy!
      </div>
    </>
  )
}

export default App
