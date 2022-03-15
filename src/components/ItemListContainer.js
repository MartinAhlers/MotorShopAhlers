import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = ({title , content}) =>{
    return ( 
    <p className="col-md-6 offset-3">{title}
          <br/>  {content}</p>
    )

};

export default ItemListContainer;
