import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { gitHubInfoLoader } from './Components/Github/Github.jsx'



//  METHOD-1 for creating routers
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path:'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])


//  METHOD-2 for creating routers
const router = createBrowserRouter(
  createRoutesFromElements(

      <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='user/:userid' element={<User/>}/>
          <Route
          loader={gitHubInfoLoader}
           path='github' 
           element={<Github
           />}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
