import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export const Item = ( {id, title, price, img, desc, stock} ) => {

    return (
        <Card style={{ width: '16rem', padding:'2rem',margin:'2rem'}}>
            <Card.Img variant="top" src={img} style={{maxWidth: '200px',maxHeight:'250px'}} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   <h1>${price}</h1>
                </Card.Text>
                <Link to={`/detail/${id}`}>
                <Button variant="success btn-lg"><FontAwesomeIcon icon={faBasketShopping} style={{marginRight:'5px'}} />Comprar</Button>
                </Link>
            </Card.Body>
        </Card>
    )
} 
export default Item;