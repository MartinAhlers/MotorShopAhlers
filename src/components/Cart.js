import {React, useContext } from "react";
import { CartContext } from "./CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';



export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);


    return (
        <div className="container my-4">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.price}</p>
                        <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                    </div>
                ))
            }

            <hr/>
            <h2>Total: ${totalCart()}</h2>

           
                <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
                <button className="btn btn-success">Terminar mi compra</button>
           
        </div>
    )
} 