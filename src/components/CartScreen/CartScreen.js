import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import './CartScreen.css'
import { Link } from 'react-router-dom'

export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div className="cartContainer">
            <h1>Resumen de tu compra</h1>
            <hr/>
                {carrito.map(prod => (
                <div key={prod.id} className="itemContent">
                    <img src={prod.img} alt={prod.nombre}/>
                    <h3>{prod.nombre}</h3>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                    <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.id)}/>
                </div>
                ))}

                <hr/>
                <div classname="botonCarrito">
                    <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <button className="btn btn-outline-dark"><Link to={"/"}>Ver más productos</Link></button>

                </div>                                      
        </div>                                       
    )
}
