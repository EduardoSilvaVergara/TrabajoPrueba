import React from 'react'

import store1 from './../assets2/tienda-1.jpg';
import store2 from './../assets2/tienda-2.jpg';

import { Link } from 'react-router-dom';

function Stores() {
  return (
    <>
        <ol className="section-banner py-3 position-relative">
            <li className="position-relative"><Link to='/'>Inicio</Link></li>
            <li className="position-relative active"><span className="ps-5">Tiendas</span></li>
        </ol>
        
        {/* store */}
        <div className="container store-wrap my-5 py-5">
            <div className="row">
                <div className="section-title mb-5 stores-title text-center">
                    <h2 className="fw-semibold fs-1">Encontrar una tienda</h2>
                    <p>Estamos hablando, por supuesto, de los mejores productos de nuestro huerto, <br /> 
                    y tenemos un carrito lleno de frutas, verduras, lácteos y productos orgánicos tanto para ti como para quienes más quieres. </p>
                </div>
            </div>

            <div className="row align-items-center g-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src={store1} alt="store" className="img-fluid" />
                </div>

                <div className="col-lg-6">
                    <h2 className='mb-4'>Tienda de Valparaiso</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h5 className="subtitle fw-semibold mb-4">Direccion</h5>
                            <p className="text-muted mb-0">1255 Camino Verde -</p>
                            <p className="text-muted"> Local 3, Valparaiso, Chile</p>
                            <a href="" className="underline-link text-black">Obtener direcciones</a>
                        </div>

                        <div className="col-md-6 mb-4">
                            <h5 className="subtitle fw-semibold mb-4">Horario de atención:</h5>
                            <div className="d-flex gap-3 text-muted">
                                <span>Lun - Vie:</span>
                                <span>08:30 - 20:00</span>
                            </div>
                            <div className="d-flex gap-3 text-muted">
                                <span>Sab - Dom:</span>
                                <span>09:30 - 21:30</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h5 className="subtitle fw-semibold mb-4">Contacto</h5>
                            <p className="text-muted mb-0">Móvil: <strong className='text-dark'>+56 9 8765 4321</strong></p>
                            <p className="text-muted mb-0">Móvil: <strong className='text-dark'>+56 2 2345 6789</strong></p>
                            <p className="text-muted">Correo Electronico: Huerto@hogar.cl</p>
                        </div>

                        <div className="col-md-6 mb-4">
                            <h5 className="fw-semibold">Redes sociales</h5>
                            <div className="store-social-icons d-flex gap-3 mt-4">
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-twitter-x"></i>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container store-wrap my-5 py-5">
            <div className="row align-items-center g-5">
                <div className="col-lg-6">
                    <h2 className="section-title mb-4">Tienda de Santiago</h2>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h5 className="subtitle fw-semibold mb-4">Direccion</h5>
                            <p className="text-muted mb-0">789 Calle del Sol -</p>
                            <p className="text-muted mb-0">Local 7, Santiago, Chile</p>
                            <a href="#" className="underline-link text-black">Obtener direcciones</a>
                        </div>

                        <div className="col-md-6 mb-4">
                            <h5 className="subtitle fw-semibold mb-4">Horario de atención:</h5>
                            <div className="d-flex gap-3 text-muted">
                                <span>Mar - Vie:</span>
                                <span>09:30 - 20:30</span>
                            </div>
                            <div className="d-flex gap-3 text-muted">
                                <span>Sab - Dom:</span>
                                <span>09:30 - 20:00</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h5 className="subtitle fw-semibold mb-4">Contacto</h5>
                            <p className="text-muted mb-0">Móvil: <strong className='text-dark'>+56 9 8722 4241</strong></p>
                            <p className="text-muted mb-0">Móvil: <strong className='text-dark'>+56 2 3345 6719</strong></p>
                            <p className="text-muted">Correo Electronico: Huertosa@hogar.cl</p>
                        </div>

                        <div className="col-md-6 mb-4">
                            <h5 className="fw-semibold">Redes sociales</h5>
                            <div className="store-social-icons d-flex gap-3 mt-4">
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-twitter-x"></i>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src={store2} alt="store" className="img-fluid" />
                </div>
            </div>
        </div>

    </>
  )
}

export default Stores