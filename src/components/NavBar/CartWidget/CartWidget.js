import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'

export const CartWidget = ({title}) => {
    return (
        <div className="cartWidget">
            <FaShoppingCart/>
            <p>{title="Carrito"}</p>          
        </div>
    )
}
