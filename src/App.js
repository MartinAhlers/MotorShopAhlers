import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const greeting = {
  title : "Motor Shop Products",
  content :"Items list"
} 

function App() {
  return (
  
  <><NavBar />
  <ItemListContainer {...greeting} /></>
  )
};

export default App;
