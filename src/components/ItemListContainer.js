import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList.js';
import { useEffect, useState } from "react";
import { pedirDatos } from "./helpers/data";
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { catId } = useParams()

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (catId) {
                    setProductos( res.filter((el) => el.categoria === catId ) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })
  }, [catId])




    return ( 
   <> <div className="col-md-9 offset-2">
     { loading  ? <h2>Cargando Contenido..</h2>  : <ItemList productos={productos}/>} 
   </div>
     
   </> )

};

export default ItemListContainer;
