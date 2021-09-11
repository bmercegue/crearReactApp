import React from 'react'
import { Link } from 'react-router-dom'
import '../Contador/Contador.css'
import { FaStore } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa'


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
                            <button className="btn btn-success" onClick={agregar}>Agregar al carrito</button>
                        </div>
                }       
                        <hr/>
                        <h5>Tipo de entrega</h5>
                        <i className="compra-icon"><FaTruck/></i>
                        <span></span>
                        <h6>Despacho a domicilio</h6>
                        <p className="compra">Recibe tu compra en 10 días hábiles</p>
                        <i className="compra-icon"><FaStore/></i>
                        <span></span>
                        <h6>Retiro en tienda</h6>
                        <p className="compra">Solo para Región Metropolitana</p>
                        <hr/>
            </div>                                         
        </>
    )
}
