import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap"
import {Link} from 'react-router-dom';

export const Item = ( {id, title, price, img, desc, stock} ) => {

    return (
        <Card style={{ width: '16rem', padding:'2rem',margin:'2rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    Precio: ${price}
                </Card.Text>
                <Card.Text>
                    Stock: {stock}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="info btn-lg">Ver más</Button>
                </Link>
            </Card.Body>
        </Card>
    )
} 
export default Item;