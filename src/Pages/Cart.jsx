import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart)
    }, []);

    const updateQuantity = (id, type) => {
        const updated = cartItems.map(item => {
            if (item.id === id) {
                if (type === 'increase') {
                    return { ...item, quantity: item.quantity + 1 };
                } else if (type === 'decrease' && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
    };


    const removeItem = (id) => {
        const updated = cartItems.filter(item => item.id !== id);
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
        window.dispatchEvent(new Event('cartUpdated'));
        toast.error('Artículo eliminado de la lista de deseos!')
    };
    

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return acc + price * item.quantity;
    }, 0);

    return (
        <>
            <ol className="section-banner py-3 position-relative">
                <li className="position-relative"><Link to='/'>Inicio</Link></li>
                <li className="position-relative active"><a href="#" className='ps-5'>Carrito</a></li>
            </ol>

            <div className="container my-5">
                <h2 className="text-center mb-4 fw-bold">❤️ Tu Carrito</h2>
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="lead">¡Tu carrito está vacío!</p>
                        <Link to='/shop' className='btn mt-3'>Volver a la tienda</Link>
                    </div>
                ) : (
                    <div className="row g-4">
                        <div className="col-lg-8">
                            {cartItems.map(item => (
                                <div key={item.id} className="card shadow-sm border-0 rounded-4 mb-3 p-3">
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <img src={item.image} alt={item.Productname} className='img-fluid rounded-3' />
                                        </div>
                                        <div className="col-9 d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="text-start w-100">
                                                <h5 className="mb-2">{item.Productname}</h5>
                                                <p className="text-muted mb-1">Precio ${item.price}</p>
                                                <p className="text-muted mb-0">Total ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(3)}</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-3 mt-3 mt-md-0">
                                                <button className="btn btn-sm" onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
                                                <span>{item.quantity}</span>
                                                <button className='btn btn-sm' onClick={() => updateQuantity(item.id, 'increase')}>+</button>
                                                <button className='btn btn-sm' onClick={() => removeItem(item.id)}>Remover</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm rounded-4 p-4">
                                <h4 className="fw-bold">Resumen del Carrito</h4>
                                <hr />
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Total de Artículos</span>
                                    <span>{cartItems.length}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Precio Total</span>
                                    <span className='fw-bold'>${totalPrice.toFixed(3)}</span>
                                </div>
                                <Link to='/checkout' className='btn w-100'>
                                    Proceder al Pago
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                <ToastContainer
                    position='top-right'
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='colored'
                />
            </div>
        </>
    )
}

export default Cart