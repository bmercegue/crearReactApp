import React from 'react'
import { Link } from 'react-router-dom'
import '../ItemDetailContainer/ItemDetail.css'


export const Contador = ({max, cantidad, setCantidad, agregar, agregado}) => {
    console.log(agregado)

    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className="cartItemContainer">
                {
                    agregado
                        ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                        :
                        <div className="cartButtons d-inline-flex">
                            <button className="btn btn-outline-dark" onClick={handleRestar}>-</button>
                            <p className="cantidad">{cantidad}</p>
                            <button className="btn btn-outline-dark" onClick={handleSumar}>+</button>                                               
                            <Link to={`/cart`} className="cart">
                                <button className="btn btn-primary" onClick={agregar}>Agregar al carrito</button>
                            </Link>
                        </div>
                }       
                        <hr/>
                        <h4>Tipo de entrega</h4>
                        <i class="fas fa-truck"></i>
                        <span></span>
                        <h6>Despacho a domicilio</h6>
                        <p>Recibe tu compra en 10 días hábiles</p>
                        <i class="fas fa-store"></i>
                        <span></span>
                        <h6>Retiro en tienda</h6>
                        <p>Solo para Región Metropolitana</p>
                        <hr/>
            </div>                                         
        </>
    )
}
