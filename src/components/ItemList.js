import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from "./Item";




export const ItemList = ( {productos} ) => {

    return (
          <>
            <h2 className="col-6 offset-4">Productos</h2>   
            <hr/>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
            </>
    )
}
export default ItemList;