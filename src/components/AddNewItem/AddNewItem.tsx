import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/esm/Form';
import { ProductI } from '../../interfaces/product.interface';
import { productData } from '../../data/products';

function AddNewItem() {
  const resetItem = {
    id: Math.floor(Math.random() * 999999),
    name: ' ',
    amount: 0,
    price: 0,
  };

  const [item, setItems] = useState<ProductI>(resetItem);

  //tomo valor del input para cargar items en mi coleccion
  const handleChange = (e: any) => {
    setItems({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  //envio item a a bd
  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      productData.push(item);
      console.log('upload success');
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
    setItems(resetItem);
  };

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nombre del producto"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            placeholder="Cantidad de producto"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Precio de producto"
            onChange={handleChange}
          />
        </Form.Group>
        <Button as="input" type="submit" value="Agregar" />
      </Form>
    </Container>
  );
}

export default AddNewItem;
