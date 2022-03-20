import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus,faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {Button , ButtonGroup , Card}  from 'react-bootstrap';
import {useState} from 'react';

let stock = 9;

const ItemCount = () =>{

let [contador, setContador] = useState(0);
 
const click = (tipo,stock) =>{
     if(tipo === 'resta' && contador>0){
        setContador(contador - 1)
     }else if(tipo === 'suma' && contador<stock){
         setContador(contador + 1)
     }
    }
return (
<Card className="col-md-6 offset-2">
<Card.Body>
    <Card.Title>Producto</Card.Title>
    <Card.Text>Stock de Producto: {stock}</Card.Text>
<ButtonGroup aria-label="grupoBtn">
  <Button variant="outline-secondary" onClick={() => click('resta')}><FontAwesomeIcon icon={faCircleMinus} /></Button>{' '}
  <Button variant="outline-secondary" disabled>{contador}</Button>{' '}
  <Button variant="outline-secondary" onClick={() => click('suma',stock)}><FontAwesomeIcon icon={faCirclePlus} /></Button>{' '}
</ButtonGroup>
</Card.Body>
</Card>
     )
      
    };
export default ItemCount;