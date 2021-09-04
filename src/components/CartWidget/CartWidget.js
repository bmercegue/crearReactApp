import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)
    
    return (
        <Link to="/cart"> 
            <div className="cart-widget">
                <FaShoppingCart/>
                <span>{cantidadCarrito()}</span>          
            </div>
        </Link>
    )
}
