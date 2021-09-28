import React, { useContext, useState, useEffect } from 'react'
import './CartScreen.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Loader } from '../Loader/Loader'


export const CartScreen = () => {

    const [loading, setLoading] = useState(true)
    const {carrito, eliminarDelCarrito, vaciarCarrito, totalCarrito} = useContext(CartContext)

    useEffect(()=> {
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    },[])

    return (
        <div className="cartContainer">
            { loading ? <Loader/>
                :
                <>

                {!carrito.length ? <div className="carritoVacio">
                                        <p className="carrito-text"> No hay productos en el carrito</p>  
                                        <Link to="/catalogo"><p>Ir a productos</p></Link>
                                   </div>
                                :

                                <>
            
                                    <h2 className="carrito-text">Carrito de compras</h2>
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
                                        <hr/>  
                                        </div>
                                        
                                        ))}
                                        
                                        <div className="totalCarrito">
                                            <p className="totalCompra">Total compra: ${totalCarrito().toFixed()}</p>
                                        </div>

                                        <div className="cartButtons d-inline-flex">
                                            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>                  
                                            <button className="btn btn-success"><Link to="/checkout" className="botonTerminar">Terminar compra</Link></button>
                                        </div> 

                                        <hr/>

                                        <Link to={"/catalogo"} className="botonLink">
                                            <span>Seguir comprando</span>
                                        </Link>                                                                                                        
                                    </>
                }
                </> 
            }
        </div>                                      
    )
}
