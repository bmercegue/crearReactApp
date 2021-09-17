import React, { useEffect, useState } from 'react'
import './IndexComponent.css'
import { Link } from 'react-router-dom'

export const IndexComponent = () => {

    const [contador, setContador] = useState(1)

    useEffect(() => {
        setTimeout(() => {
            if (contador === 3) {
                setContador(1)
            } else {
                setContador(contador + 1)
            }
        },3000)
    },[contador])


    

    return (

        <main>
            <section className="hero-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center">
                        <div className="container">
                            <div className="row">
                                <div class="col-lg-8 offset-lg-2 text-center" className={'banner back' + contador}>
                                    <div className="hero-content">
                                        <h3>Temporada Primavera</h3>
                                        <h2>Prendas para todos los estilos</h2>
                                        <Link to={"/catalogo"} className="boxed-btn">VER CATÁLOGO</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main> 
            

    )
}
