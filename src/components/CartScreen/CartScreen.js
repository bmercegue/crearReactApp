import React, { useContext } from 'react'
import './CartScreen.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'


export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div className="cartContainer">
            <h1>Carrito de compras</h1>
            <hr/>
                {carrito.map(prod => (
                <div key={prod.id} className="itemContent">
                    <img src={prod.img} alt={prod.nombre}/>
                    <h3>{prod.nombre}</h3>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                    <button className="btn btn-danger">
                        <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.id)}/>
                    </button>
                </div>
                ))}

                <hr/>
                <div classname="botonContainer">
                    <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link to="/checkout">
                        <button className="btn btn-success mx-3">Terminar compra</button>
                    </Link> 

                    <hr/>

                    <p className="btn btn-outline-dark"><Link to={"/"}>Ver más productos</Link></p>
                </div>                                      
        </div>                                       
    )
}
