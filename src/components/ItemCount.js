import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus,faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {Button , ButtonGroup , Card}  from 'react-bootstrap';
import {useState} from 'react';



const ItemCount = ({stock}) =>{

let [contador, setContador] = useState(1);

 const handleResta = () =>{
   if (contador>1){
     setContador(contador-1)
   }
 }
 const handleSuma = () =>{
  if (contador<stock){
    setContador(contador+1)
  }
 }

const handleAdd = () =>{
  console.log(`Se Agrego al Carrito ${contador} productos`);
}



    
        
return (
<Card className="container-fluid">
<Card.Body>
<ButtonGroup aria-label="grupoBtn">
  <Button variant="outline-secondary" onClick={handleResta}><FontAwesomeIcon icon={faCircleMinus} /></Button>{' '}
  <Button variant="outline-secondary" disabled>{contador}</Button>{' '}
  <Button variant="outline-secondary" onClick={handleSuma}><FontAwesomeIcon icon={faCirclePlus} /></Button>{' '}
</ButtonGroup>
 <Button style={{margin:'1rem'}} onClick={handleAdd} >Agregar</Button>
 </Card.Body>
</Card>
     )
   
}
    
export default ItemCount;