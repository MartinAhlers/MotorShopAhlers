import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
export const Home = () => {

  return <div className='container'>
    
      <h3 className="col-6 offset-4">Bienvenido a Motor Shop </h3>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/motorshop-ahlers.appspot.com/o/Slider-PX70.jpg?alt=media&token=471978d0-6d4e-4631-b419-d32ec2f82141"
      alt="Motos Shop"
    />
    <Carousel.Caption>
      <h3 class="text-white bg-dark">Motos Shop</h3>
      <p class="text-white bg-dark">Las mejores ofertas del país.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/motorshop-ahlers.appspot.com/o/Slider-MOTO-YUMBO-SK200-1440x700-2.jpg?alt=media&token=2117464a-4c05-4dee-89dc-8af30e4644ea"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 class="text-white bg-dark">Yumbo SK200</h3>
      <p class="text-white bg-dark">Nuevos Lanzamientos 2022</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/motorshop-ahlers.appspot.com/o/Slider-e-yumbo-dic21.jpg?alt=media&token=5d51ccaf-61ee-4943-b99a-c64db2f2a8d5"
      alt="electric"
    />

    <Carousel.Caption>
      <h3 class="text-white bg-dark">Modelos Electricos</h3>
      <p class="text-white bg-dark">Los mejores precios en vehiculos electricos.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>;
};

export default Home;