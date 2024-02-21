import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
    </React.Fragment>
    
  )
}

export default Layout