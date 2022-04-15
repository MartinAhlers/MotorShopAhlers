import React,{ useContext } from "react";
import { CartContext } from "./CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem} = useContext(CartContext);

    if (cart.length === 0) {
        return <div className="container my-5">
                    <h2>Tu carrito está vacío</h2>
                    <hr/>
                    <h5>Vuelve al shop</h5>
                    <Link to={"/"} className="btn btn-primary">Volver</Link>
                </div>
    }

    return (
        <div className="container my-4">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>SubTotal: ${item.cantidad * item.price}</p>
                        <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                        <FontAwesomeIcon icon={faCartShopping} /> Eliminar Item
                        </button>
                    </div>
                ))
            }

            <hr/>
            <h2>Total: ${totalCart()}</h2>

           
                <button className="btn btn-danger" onClick={vaciarCart} style={{margin:'5px'}}>Vaciar carrito</button>
                <Link to="/checkout" className="btn btn-success mx-2"style={{margin:'5px'}}>Terminar mi compra</Link>
        </div>
    )
} 

export default Cart;