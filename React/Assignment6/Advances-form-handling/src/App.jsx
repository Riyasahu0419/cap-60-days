// import React ,{ useRef } from 'react'
// import './App.css'
// import Custom from './component/Custom'
// import Validation from './component/Validation'
// import Dynamic from './component/dynamic'

// function App() {

//   return (
//     <>
//     <Custom/>
//     <Dynamic/>
//     <Validation/>
    

//     </>
//   )
// }

// export default App


import React, { useRef} from 'react'
import './App.css'
import Dynamic from './component/Dynamic'
import Validation from'./component/Validation'
import Custom from './component/Custom'

function App() {
  

  return (
    <>
    <Dynamic />   
    <Validation />
    <Custom />
    </>
  )
}

export default App
