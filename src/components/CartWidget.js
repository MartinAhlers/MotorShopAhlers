import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom';

const CartWidget = () =>{
    
    const { cantidadCart, cart } = useContext(CartContext);

return (
<>   
<Link to="/cart" className={`cart-widget ${cart.length === 0 ? 'cart-hidden' : ''}`}>
    <FontAwesomeIcon icon={faCartShopping} />
    <span>{cantidadCart()|| ''}</span>
    </Link>
</>

)
  
};

export default CartWidget;