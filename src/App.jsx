import { useState } from 'react'
import './App.css'
import Navber from './components/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='max-w-[1280px] mx-auto'>
    <Navber></Navber>
    <Outlet></Outlet>

    <Footer></Footer>
    </div>

    
    </>
  )
}

export default App
