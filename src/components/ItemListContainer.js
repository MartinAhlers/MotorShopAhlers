import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';



let productosArray = [];
fetch("productos.json")
  .then((response) => response.json())
    .then((data) => {
      productosArray = data;
      });
      

const ItemListContainer = () =>{
    return ( 
   <> <div className="col-md-6 offset-3">
     <ItemList {...productosArray}/>
   </div>
     
   </> )

};

export default ItemListContainer;
