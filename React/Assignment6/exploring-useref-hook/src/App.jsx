import { useState } from 'react'
import './App.css'
import Focus from './component/Focus'
import Uncont from './component/Uncont'
import Intract from './component/Intract'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Focus/>
    <Uncont/>
    <Intract/>
      
    </>
  )
}

export default App
