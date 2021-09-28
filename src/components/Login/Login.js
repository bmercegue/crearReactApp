import React from 'react'
import './Login.css'


export const Login = () => {
    return (
        <div className="login-container">
            <div className="top">
                <h1 className="hidden" id="title">
                    <span className="logo">BeaStore Admin</span>
                </h1>
            </div>
            <div className="login-box animated fadeInUp">
                <div className="box-header">
                    <h2 className="login-text">LOG IN</h2>
                </div>
                <label for="username">Usuario</label>
                <br/>
                <input type="text" className="usuario"></input>
                <br/>
                <label for="password">Contraseña</label>
                <input type="password" className="pass"></input>
                <br/>
                <button type="submit">Sign In</button>
                <br/>
                <p className="small">Olvidé mi contraseña</p>
            </div>
        </div>

    )
}
