import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import CoinContextProvider from '../context/CoinContextProvider.jsx'
import Footer from './Footer/Footer.jsx'
function Layout() {
  return (
    <div>
      <CoinContextProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </CoinContextProvider>
    </div>
  )
}

export default Layout
