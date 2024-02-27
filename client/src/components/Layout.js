import React from 'react'
import Header from './Header'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import '../styles/layout.css'
const Layout = () => {
    return (
        <><div className="main">

            <div className="container">

                <div className="menu">
                    <Menu />
                </div>
                <div className="content">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>


        </>
    )
}

export default Layout