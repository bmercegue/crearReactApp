import React from 'react'
import './NavBar.css'
import {CartWidget} from './CartWidget/CartWidget'



export const NavBar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">NOSOTROS</a></li>
                    <li><a href="#">TIENDA</a></li>
                    <li><a href="#">REUTILIZA</a></li>
                    <li><a href="#">CONTACTO</a></li>
                    </ul>
                    <div className="navIcon">
                        <span><CartWidget/></span>
                    </div>                   
            </nav>                              
        </header>
    )
}
