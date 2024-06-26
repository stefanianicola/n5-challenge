import { useProducts } from '../context/CartContext';
import ListGroup from 'react-bootstrap/ListGroup';
import { ProductI } from '../interfaces/product.interface';
import { Button, Col } from 'react-bootstrap';

function CartItem({ item }: { item: ProductI }) {
  const contextProduct = useProducts();

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-baseline"
      key={item.id}
    >
      <Col>
        <h5>{item.name}</h5>
      </Col>
      <Col className="d-flex justify-content-between align-items-baseline">
        <p>
          Cantidad:
          <span className="mx-2">{item.amount}</span>
        </p>

        <p>${item.price * item.amount}</p>

        <Button
          variant="danger"
          onClick={() => {
            contextProduct.removeItem(item.id);
          }}
        >
          Eliminar
        </Button>
      </Col>
    </ListGroup.Item>
  );
}

export default CartItem;
