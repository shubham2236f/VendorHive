import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Store from "./store/Store.js"
import { Provider } from 'react-redux'
import Profile from './Components/Profile.jsx'
import Login from './Components/Login.jsx'
import Doc1 from './Components/Doc1.jsx'
import Doc2 from './Components/Doc2.jsx'
import Register from './Components/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile/>,
      },
    ],
},
{
    path:"/register",
    element:<Register/>
},
  {
    path: "/doc1",
      element: <Doc1 />,
  },
  {
    path: "/doc2",
      element: <Doc2 />,
  },
  {
    path:"/Login",
    element:<Login/>,
  },
])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
