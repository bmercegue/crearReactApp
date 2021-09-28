import React, { useEffect, useState } from 'react'
import './IndexComponent.css'
import { Link } from 'react-router-dom'
import { Loader } from '../Loader/Loader'


export const IndexComponent = () => {

    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
    },[])
    

    return (

        <main>
            { loading ? <Loader/>
                :
                <>
                    <section className="hero-area">
                        <div className="hero-carousel">
                            <div className="single-hero d-flex align-items-center text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2 text-center">
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
                </>
            }
        </main>      

    )
}
