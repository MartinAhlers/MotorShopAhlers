import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import {Card, Button} from 'react';

const Item = ({props}) =>{
    return ( 
        <>
        <Card style={{ width: '18rem' }} key={this.props.id}>
        <Card.Img variant="top" src={this.props.pictureUrl} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{this.props.price}</Card.Text>
        </Card.Body> 
        <ItemCount {...this.props.stock} />
        <Button>Agregar al Carrito</Button>
        </Card>
        </>
        )

};

export default Item;
