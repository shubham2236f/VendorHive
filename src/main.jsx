import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Store from "./store/Store.js"
import { Provider } from 'react-redux'
import Profile from './Pages/Profile.jsx'
import {Feedback,Login,Doc1,Doc2, RequestForm, RequestPage} from './Components/index.js'
import Register from './Pages/Register.jsx'
import VendorProfile from './Pages/VendorProfile.jsx'
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
      },
      {
        path:"/VendorProfile/:userId",
        element:<VendorProfile/>
      },
      {
        path:"/RequestForm/:userId",
        element:<RequestForm/>
      }
       
    ],
},
{
  path: "/profile",
  element: <Profile/>,
},
{
  path: "/Requests",
  element: <RequestPage/>,
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
