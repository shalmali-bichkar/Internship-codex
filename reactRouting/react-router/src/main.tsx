import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import {Layout} from './Layout.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path ='' element ={<Home/>}/>
      <Route path ='about' element ={<About/>}/>
      <Route path ='contact' element ={<Contact/>}/>
    </Route>
  )
)
const rootElement = document.getElementById("root") as HTMLElement;
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router = {router}/> 
  </StrictMode>,
)
