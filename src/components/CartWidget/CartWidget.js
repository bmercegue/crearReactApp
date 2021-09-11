import React, { useContext } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)
    
    return (
        <Link to="/cart"> 
            <FaCartArrowDown/>
            <span>{cantidadCarrito()}</span>          
        </Link>
    )
}
