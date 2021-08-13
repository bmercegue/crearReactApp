import React from 'react'
import './NavBar.css'
import {CartWidget} from './CartWidget/CartWidget'



export const NavBar = () => {
    return (
        <div>
            <header className="navbar">
            <h1 className="logo">LOGO</h1>
                <nav>
                    <ul className="navList">
                        <li className="navItem"> 
                            <a className="navLink" href="#">INICIO</a>
                        </li>
                        <li>
                            <a className="navLink" href="#">NOSOTROS</a>
                        </li>
                        <li>
                            <a className="navLink" href="#">TIENDA</a>
                        </li>
                        <li>
                            <a className="navLink" href="#">REUTILIZA</a>
                        </li>
                        <li>
                            <a className="navLink" href="#">CONTACTO</a>
                        </li>
                    </ul>                   
                </nav>               
                <CartWidget/>
            </header>
        </div>
    )
}
