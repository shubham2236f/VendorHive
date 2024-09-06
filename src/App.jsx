import { useState } from 'react'
import './App.css'

import Header2 from './Components/Header/Header2.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer.jsx'
import Loader from './Components/Loader/Loader.jsx'
import Login from './Components/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header2/>
   <Outlet/>
   <Footer/>
 
    </>
  )
}

export default App
