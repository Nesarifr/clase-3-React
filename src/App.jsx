import { useState } from 'react'
import reactLogo from './assets/react.svg'
import isOdd from 'is-odd'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(isOdd(1))
  return (
    <div className="App">
      
    </div>
  )
}

export default App
