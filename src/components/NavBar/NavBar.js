import React from 'react'
import './NavBar.css'
import {CartWidget} from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const NavBar = () => {

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to={"/"}><h1>LOGO</h1></Link>
                </div>
                <ul className="menu">
                    <Link to={"/"}><li>INICIO</li></Link>                  
                    <Link to={"/categoria/vestidos"}><li>VESTIDOS</li></Link>                   
                    <Link to={"/categoria/jeans"}><li>JEANS</li></Link>                   
                    <Link to={"/categoria/poleras"}><li>POLERAS</li></Link>
                    <Link to={"/login"}><li>LOGIN</li></Link>                                                                                        
                </ul>
                <Link to={"/cart"}><div className="cart"><CartWidget/></div></Link>                   
            </nav>
        </header>                              
    )
}
