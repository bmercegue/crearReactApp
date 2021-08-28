import React from 'react'
import '../ItemListContainer/Item.css'
import { Link } from 'react-router-dom'

export const Item = ({img, nombre, desc, precio, id }) => {

    return (
        <div className="card" key={id}>
            <Link to={`/detail/${id}`}>
                <img src={img} alt=""/>
            </Link>
            <div className="box">
                <Link to={`/detail/${id}`}>
                    <h3>{nombre}</h3>
                </Link>
                <p>{desc}</p>
                <span>${precio}</span>
                <Link to={`/cart`}>
                    <button>Agregar al carrito</button>
                </Link>
            </div>
        </div>
    )
}


