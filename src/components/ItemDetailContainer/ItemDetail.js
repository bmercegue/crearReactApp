import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Contador } from '../Contador/Contador'
import './ItemDetail.css'


export const ItemDetail = ({categoria, id, nombre, desc, img, precio, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAdd = () => {
        agregarAlCarrito({
            categoria, id, nombre, desc, img, precio, cantidad
        })
    }


    return (
            <div key={id} className="details">
                <img src={img} alt={nombre}/>

                <div className="content">
                    <div className="row">
                        <h2>{nombre}</h2>
                        <span>${precio}</span> 
                        <p>{desc}</p> 
                        <p className="stock">Stock: {stock}</p> 
                    </div>  
                    
                    <Contador 
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAdd}
                        agregado={isInCart(id)}
                    />
                    <Link to={`/categoria/${categoria}`} className="category">
                        <span>Volver a productos</span>
                    </Link>                           
                </div>                   
            </div>
    )
}
