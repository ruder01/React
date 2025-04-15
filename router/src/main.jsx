import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import About from './components/aboutus'
import Layout from './layout'
import Contact from './components/contactus'
import Github from './components/github'
const router=createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} />
    </Route>


   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
