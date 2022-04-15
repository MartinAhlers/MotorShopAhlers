import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Home from './components/Home';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <>
    <div className='d-flex flex-column min-vh-100'>
    <CartProvider>
  <BrowserRouter>
  <NavBar />
   <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path="/nosotros" element={ <Nosotros /> } />
            <Route path="/contacto" element={ <Contacto /> } />
            <Route path='/cart' element={ <Cart/> } />
            <Route path='/checkout' element={ <Checkout/> } />
            {/* <Route path='/404' element={ <Error404/> }/> */}
            <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>
          <Footer/>
          </BrowserRouter>
          </CartProvider>
          </div>
          </>
  )
};

export default App;
