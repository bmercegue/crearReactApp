import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({img, nombre, precio, id }) => {

    return (
        <div className="card" key={id}>
            <img src={img} alt={nombre}/>
            <div className="box">
                <Link to={`/detail/${id}`}>
                    <h3>{nombre}</h3>
                </Link>
                <span>${precio}</span>
                <Link to={`/detail/${id}`}>
                    <button>Ver más</button>
                </Link>
            </div>
        </div>
    )
}


