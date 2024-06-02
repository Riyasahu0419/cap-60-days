import {Routes , Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Tickets from '../Pages/Tickets'
import Login from '../Pages/Login'
import PrivateRoutes from './PrivateRoutes'
import TextCreate from '../Pages/TextCreate'
import TicketView from '../Pages/TicketView'



function AllRoutes() {
  return (
    
    <Routes>
        <Route path="/" element={
          <PrivateRoutes>
            <Home/>
          </PrivateRoutes>
        }/>
        <Route path="/about" element={
          <PrivateRoutes>
          <About/>
          </PrivateRoutes>
        }/>
        <Route path="/contact" element={
          <PrivateRoutes>
            <Contact/>
          </PrivateRoutes>
        }/>
        <Route path="/tickets" element={
        <PrivateRoutes>
          <Tickets/>
        </PrivateRoutes>
        }/>
        <Route path="/login" element={
        <Login/>
      }/>

      <Route path="/tickets/createTicket" element={
      <TextCreate/>}/>

      <Route path="/tickets/viewticket/:id" element={
      <TicketView/>}/>

      <Route path="/login" element={
      <Login/>}/>

      
      

    </Routes>

    
  )
}

export default AllRoutes