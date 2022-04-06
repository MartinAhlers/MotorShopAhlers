import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';
import { useContext, Link } from 'react';

const CartWidget = () =>{
    
    const { cantidadCart } = useContext(CartContext);


return (
<>   
    <Link to="/cart" className='cart-widget'>
    <FontAwesomeIcon icon={faCartShopping} />
    <span>{cantidadCart()}</span>
    </Link>
</>

)
  
};

export default CartWidget;