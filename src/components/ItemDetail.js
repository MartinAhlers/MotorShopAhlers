import { React, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import ItemCount from './ItemCount';
import {Container, Row} from 'react-bootstrap';

export const ItemDetail = ({id, title, img, desc, price, stock, categoria}) => {

    const [cantidad, setCantidad] = useState(0);

    const { agregarAlCarrito, isInCart } = useContext(CartContext);
    const handleAgregar = () => {
        if (cantidad === 0) return
    
        
    if (!isInCart(id)) {
        const addItem = {
            id, title, price, stock, cantidad
        }

        agregarAlCarrito(addItem)
    }
}
    return (
        <>
        <Container>
            <Row>
        <div className="col-md-6 col-sm-12"><img src={img} alt={title}style={{width:'30rem',height:'30rem'}}/></div>
        <div className="col-md-6 col-sm-12 ">
            <h1>{title}</h1>
            <p>{desc}</p>
            <h5>Precio: ${price}</h5>
            {
                isInCart(id) 
                ?  <Link to="/cart" className="btn btn-success my-3">
                        Finalizar compra
                    </Link>
                :
                    <>
                        <ItemCount 
                            stock={stock} 
                            counter={cantidad} 
                            setCounter={setCantidad}
                        />

                        <button
                            className="btn btn-success my-2"            
                            onClick={handleAgregar}
                        >
                            Agregar al carrito
                        </button>
                    </>
            }
            <h5>Productos en Stock: {stock}</h5>
        </div>
        </Row>
        </Container>
        </>
    )
}
export default ItemDetail;