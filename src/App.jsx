import { useState } from 'react'
import './App.css'

import Header from './Components/Header/Header.jsx'
import Home from './Components/Home.jsx'
import Profile from './Components/Profile.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   <Outlet/>
    </>
  )
}

export default App
