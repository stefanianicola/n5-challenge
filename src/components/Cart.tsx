import { Link } from 'react-router-dom';
import { useProducts } from '../context/CartContext';
import { Alert, Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import CartItem from './CartItem';

function Cart() {
  const contextProduct = useProducts();

  return (
    <Container>
      {contextProduct.list.length > 0 ? (
        <div className="my-4">
          <h4>Compra Pendiente de confirmación</h4>
          <hr />
          <ListGroup as="ul" variant="flush">
            {contextProduct.list.map((l) => (
              <CartItem key={l.id} item={l} />
            ))}
          </ListGroup>

          <div className="d-flex flex-column align-items-end">
            <div className="d-flex flex-row ">
              <p className="mx-4 ">Total de tu compra:</p>
              <p className="fw-bold">${contextProduct.total}</p>
            </div>

            <Button variant="danger" onClick={contextProduct.clear}>
              Cancelar compra
            </Button>
          </div>
        </div>
      ) : (
        <Alert variant={'warning'}>
          No tienes elementos en el carrito!!
          <Alert.Link as={Link} to="/" className="mx-3">
            Volver al inicio.
          </Alert.Link>
        </Alert>
      )}
    </Container>
  );
}

export default Cart;
