import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { generarOrden } from '../../firebase/generarOrden'
import { Link } from 'react-router-dom'
import './Checkout.css'


export const Checkout = () => {

    const {carrito, totalCarrito, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre:'',
        email:'',
        tel:0,
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length > 3 && values.email.length > 3 && values.tel.length > 5) {
            generarOrden(values, carrito, totalCarrito())
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Gracias por tu preferencia. Tu pedido ha sido registrado',
                        text: `Pedido Nº: ${res}`,
                        confirmButtonText: 'OK'
                    })

                    vaciarCarrito()
                })
                .catch( err => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos incorrectos',
                text: 'Revisa la información ingresada'
            })
        }

    }

    return (

        <div className="checkoutContainer">         
            <h3>BeaStore - CHECKOUT</h3>
            <h2>Información personal</h2>
            <hr/>

        {!carrito.length
            ? <Redirect to="/"/>
            :
          
            <div className="infoCheckout">
                <form onSubmit={handleSubmit}>
                    <legend> Ingresa tus datos para completar tu compra</legend>
                    <input
                        type="text"
                        name="nombre"
                        className="buyer-info" 
                        placeholder="Nombre"                  
                        value={values.nombre}                   
                        onChange={handleInputChange}
                        required    
                    />                
                    <input 
                        type="email"
                        name="email"
                        className="buyer-info"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}                    
                        required
                    />
                    <input 
                        type="tel"
                        name="tel"
                        className="buyer-info"
                        placeholder="Teléfono"
                        value={values.tel}
                        onChange={handleInputChange}                  
                        required
                    />
                    <div className="checkoutButtons">                    
                        <Link to={'/catalogo'}>Seguir comprando</Link>
                        <button type="submit">Enviar</button>
                    </div>    
                </form>               
            </div>           
        } 
        </div>
    )
}
