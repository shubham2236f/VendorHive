import { useState } from 'react'
import './App.css'
import { Header2,Footer,ScrollToTop } from './Components/index.js'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header2/>
    <ScrollToTop/>
   <Outlet/>
   <Footer/>
 
    </>
  )
}

export default App
