import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setvalue] = useState(0);
  useEffect(() => {
   if(localStorage.getItem('value')) {
     setvalue(Number(localStorage.getItem('value')));
   }else{
      localStorage.setItem('value', value);
   }
  }, []);

  return (
    <>
      <button onClick={() => {setvalue(value + 1); localStorage.setItem('value', value + 1)}}>Increment</button>
      {value}
      <button onClick={() => {setvalue(value - 1); localStorage.setItem('value', value - 1)}}>Decrement</button>
    </>
  )
}

export default App
