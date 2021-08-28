import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'
import { Link } from 'react-router-dom'

export const CartWidget = ({articulos}) => {
    return (
        <Link to={`/cart`}> 
        <div className="cartWidget">
            <FaShoppingCart/>
            <p>Carrito: {articulos="0"}</p>          
        </div>
        </Link>
    )
}
