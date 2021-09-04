import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import './CartScreen.css'

export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return (
            <div className="cartContainer">
                <div className="container"> 
                    <h1>Resumen de tu compra</h1>

                        {carrito.map(prod => (
                            <div key={prod.id} className="itemContent">
                                <h3>{prod.nombre}</h3>
                                <p>Cantidad: {prod.cantidad}</p>
                                <p>Precio: ${prod.precio * prod.cantidad}</p>
                                <p className="eliminar">Eliminar <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.id)}/></p>
                                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>              
                            </div>
                         ))}                         
                </div>  
            </div>                                       
    )
}
