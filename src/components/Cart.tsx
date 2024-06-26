import { Link } from 'react-router-dom';
import { useProducts } from '../context/CartContext';
import { Alert, Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

function Cart() {
  const { list, successBuy, setSuccessBuy } = useProducts();

  return (
    <Container>
      {!successBuy ? (
        list.length > 0 ? (
          <div className="my-4">
            <h4>Compra Pendiente de confirmación</h4>
            <hr />
            <ListGroup as="ul" variant="flush">
              {list.map((l) => (
                <CartItem key={l.id} item={l} />
              ))}
            </ListGroup>

            <CartTotal />
          </div>
        ) : (
          <Alert variant={'warning'}>
            No tienes elementos en el carrito!!
            <Alert.Link as={Link} to="/" className="mx-3">
              Volver al inicio.
            </Alert.Link>
          </Alert>
        )
      ) : (
        <Alert variant={'info'}>
          Tu compra fue realizada con exito!!
          <Alert.Link
            as={Link}
            to="/"
            className="mx-3"
            onClick={() => setSuccessBuy(false)}
          >
            Volver al inicio.
          </Alert.Link>
        </Alert>
      )}
    </Container>
  );
}

export default Cart;
