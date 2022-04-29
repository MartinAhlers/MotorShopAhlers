import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
export const Contacto = () => {

  return <div className='container'>

      <h3 className="col-6 offset-4">Contacto </h3>
      <hr/>
      <div className="form-container">
            <Form className="col-md-5 offset-4 form">
                <Form.Group>
                    <Form.Control className="name-input" type="text" placeholder="Nombre" name="name"style={{margin:"5px"}}></Form.Control>
                    <Form.Control className="email-input" type="text" placeholder="Email" name="email" style={{margin:"5px"}}></Form.Control>
                   <Form.Control className="text-area" type="text" placeholder="Mensaje" name="mensaje" style={{marginLeft:"5px"}}/>  
                    <div className="d-grid gap-2 text-center" >
                  <Button variant="success text-center"  size="lg" style={{margin:"5px"}} >Enviar Mensaje</Button>
                  </div>
                </Form.Group>
            </Form>
  
        </div>
  </div>;
};

export default Contacto;