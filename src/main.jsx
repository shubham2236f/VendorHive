import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Store from "./store/Store.js"
import { Provider } from 'react-redux'
import Profile from './Pages/Profile.jsx'
import Feedback from './Components/Feedback.jsx'
import Login from './Components/Login.jsx'
import Doc1 from './Components/Doc1.jsx'
import Doc2 from './Components/Doc2.jsx'
import Register from './Pages/Register.jsx'
import VendorsList from './Pages/VendorsList.jsx'

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
          path: "/Vendors",
          element: <VendorsList/>,
      },
      {
        path:"/feedback",
        element:<Feedback/>
      },
      {
        path:"/doc1",
        element:<Doc1/>
      },
      {
        path:"/doc2",
        element:<Doc2/>
      }
       
    ],
},
{
  path: "/profile",
  element: <Profile/>,
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
