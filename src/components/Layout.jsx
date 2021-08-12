import React from 'react'
import Footer from './footer/Footer'
import Nav from './navbar/Nav'

const Layout = (props) => {
    return (
        <div>
            <Nav/>
            {props.children}
            <Footer/>          
        </div>
    )
}

export default Layout
