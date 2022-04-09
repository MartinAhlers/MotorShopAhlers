import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList.js';
import { useEffect, useState } from "react";
import { db } from "./firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { catId } = useParams()

    useEffect( () => {
        setLoading(true)


       const productosRef = collection(db, 'productos')
       const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef

       getDocs(q)
           .then((resp) => {
               setProductos( resp.docs.map((doc) => {
                   return {
                       id: doc.id,
                       ...doc.data()
                   }
               }))
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
