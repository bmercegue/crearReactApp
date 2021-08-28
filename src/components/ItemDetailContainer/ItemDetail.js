import React from 'react'
import { Link } from 'react-router-dom'
import '../ItemDetailContainer/ItemDetail.css'


export const ItemDetail = ({categoria, id, nombre, desc, img, precio}) => {


    return (
        <div className="details" key={id}>
            <img src={img} alt={nombre}/>

            <div className="content">
                <div className="row">
                    <h2>{nombre}</h2>
                    <span>${precio}</span> 
                    <p>{desc}</p>  
                </div>             
                <Link to={`/cart`} className="cart">
                    <button>Agregar al carrito</button>
                </Link> 
                <Link to={`/categoria/${categoria}`} className="return">
                    <button>Ver más productos</button>
                </Link>          
            </div>
        </div>
    )
}
