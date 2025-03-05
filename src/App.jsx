import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path=""element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Route>
    )
  )
  return (
    <div className='app'>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App


