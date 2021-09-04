import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const NavBar = () => {

    return (
        <header>
            <nav className="navbar">
                <Link to={"/"}><h1 className="logo">Bea Store</h1></Link>
                <Link to={"/"}>TIENDA</Link>
                <Link to={`/categoria/vestidos`}>VESTIDOS</Link>                   
                <Link to={`/categoria/jeans`}>JEANS</Link>                   
                <Link to={`/categoria/poleras`}>POLERAS</Link>
                <Link to={`/categoria/sweaters`}>SWEATERS</Link>                 
                <Link to={"/cart"}><CartWidget/></Link>
            </nav>
        </header>                              
    )
}
