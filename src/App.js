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

function App() {
  return (
    <>
  <BrowserRouter>
  <NavBar />
   <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path="/nosotros" element={ <Nosotros /> } />
            <Route path="/contacto" element={ <Contacto /> } />

            {/* <Route path='/404' element={ <Error404/> }/> */}
            <Route path='*' element={ <Navigate to='/'/> }/>
          </Routes>
          <Footer/>
          </BrowserRouter>
          </>
  )
};

export default App;
