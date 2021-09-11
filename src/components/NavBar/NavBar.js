import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { CartWidget } from '../CartWidget/CartWidget'
import { FaUser } from 'react-icons/fa'


export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container d-flex justify-content-between align-items-center">

                <Link to={"/"}><h1 className="logo align-self-center">BeaStore</h1></Link>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="main-nav">
                    <div className="flex-fill">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/productos"} className="nav-link">PRODUCTOS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar align-self-center d-flex">
                        <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputMobileSearch" placeholder="Buscar"></input>
                                <div className="input-group-text">
                                    <i><FaSearch/></i>
                                </div>
                            </div>
                        </div>
                        <i className="nav-icon d-none d-lg-inline" data-bs-toggle="modal" data-bs-target="nav-search">
                            <FaSearch/>
                        </i>
                        <Link to={"/cart"}><i className="nav-icon position-relative">
                            <CartWidget/></i>
                        </Link>
                        <Link to={"/login"}><i className="nav-icon position-relative text-decoration-none">
                            <FaUser/></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
                        
    )
}
