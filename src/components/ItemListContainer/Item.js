import React from 'react'
import '../ItemListContainer/Item.css'

export const Item = ({id, nombre, precio, desc, img}) => {

    return (
        <div className="card" key={id}>
            <img src={img} alt=""/>

            <div className="content">
                <h3>{nombre}</h3>
                <p>{desc}</p>
                <span>${precio}</span>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}


