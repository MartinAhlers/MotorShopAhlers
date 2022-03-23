import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';



const ItemList = ({props}) => {
 
    return ( 
    <>
        {props.map(prod => (
     <Item key={prod.id} {...props} />
))}
</>
        )
};

export default ItemList;