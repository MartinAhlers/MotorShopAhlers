import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const ItemListContainer = ({title , content}) =>{
    return ( 
   <> <p className="col-md-6 offset-3">{title}
          <br/>  {content}</p>
     <p className="col-md-4 offset-3"> <ItemCount  /></p>
         
   </> )

};

export default ItemListContainer;
