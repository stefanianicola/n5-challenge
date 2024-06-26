import { useProducts } from '../context/CartContext';
import ListGroup from 'react-bootstrap/ListGroup';
import { ProductI } from '../interfaces/product.interface';
import { Button, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ModalDelete from './Modal';

function CartItem({ item }: { item: ProductI }) {
  const { totalCompra, show, setShow } = useProducts();
  const [itemTotal, setItemTotal] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ProductI | null>(null);

  useEffect(() => {
    const subTotal = item.price * item.amount;
    setItemTotal(subTotal);
    totalCompra();
  }, []);

  useEffect(() => {
    !show && setSelectedItem(null);
  }, [show]);

  const handleShow = () => {
    setShow(true);
    setSelectedItem(item);
  };

  return (
    <>
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

          <p>${itemTotal.toFixed(2)}</p>

          <Button variant="danger" onClick={handleShow}>
            Eliminar
          </Button>
        </Col>
      </ListGroup.Item>
      {selectedItem !== null && <ModalDelete item={selectedItem} />}
    </>
  );
}

export default CartItem;
