import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaLocationArrow } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className="bg-dark" id="bottom-nav">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 pt-5">
                        <h2 className="text-success border-bottom pb-3 border-light">BeaStore</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="map-icon"><FaLocationArrow/></i>
                                <span className="icon-info text-light">Santo Domingo #850, Santiago, CL</span>
                            </li>
                            <li>
                                <i className="phone-icon text-light"><FaPhone/></i>
                                <span className="icon-info text-light">+567898765432</span>
                            </li>
                            <li>
                                <i className="email-icon text-light"><MdEmail/></i>
                                <span className="icon-info text-light">info@beastore.cl</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Productos</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li className="text-decoration-none"><Link to={"/categoria/vestidos"}>Vestidos</Link></li>
                            <li className="text-decoration-none"><Link to={"/categoria/jeans"}>Jeans</Link></li>
                            <li className="text-decoration-none"><Link to={"/categoria/poleras"}>Poleras</Link></li>
                            <li className="text-decoration-none"><Link to={"/categoria/sweaters"}>Sweaters</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Más info</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li className="text-decoration-none">Inicio</li>
                            <li className="text-decoration-none">Reutiliza</li>
                            <li className="text-decoration-none">FAQs</li>
                            <li className="text-decoration-none">Login</li>
                        </ul>
                    </div>
                </div>

                    <div className="row text-light mb-4">
                        <div className="col-12 mb-3">
                            <div className="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <i className="facebook text-light text-decoration-none"><FaFacebook/></i>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <i className="instagram text-light text-decoration-none"><FaInstagram/></i>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <i className="pinterest text-light text-decoration-none"><FaPinterest/></i>
                                </li>
                            </ul>
                        </div>
                            <div className="col-auto">
                                <div className="input-group mb-2">
                                    <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Ingresa tu email"></input>
                                    <div className="input-group-text btn-success text-light" id="subscribeText">Subscribir</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-100 bg-black py-3">
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-12">
                                    <p className="text-left text-light">
                                        Copyright &copy; 2021 BeaStore
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
        </footer>
    )
}
