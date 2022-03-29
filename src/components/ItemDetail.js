import React from 'react';
import ItemCount from './ItemCount';
import {Container, Row} from 'react-bootstrap';

export const ItemDetail = ({id, title, img, desc, price, stock, categoria}) => {



    return (
        <>
        <Container>
            <Row>
        <div className="col-md-6 col-sm-12"><img src={img} alt={title}style={{width:'30rem',height:'30rem'}}/></div>
        <div className="col-md-6 col-sm-12 ">
            <h1>{title}</h1>
            <p>{desc}</p>
            <h5>Precio: ${price}</h5>
               <ItemCount stock = {stock}/>
            <h5>Productos en Stock: {stock}</h5>
        </div>
        </Row>
        </Container>
        </>
    )
}
export default ItemDetail;