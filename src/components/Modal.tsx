import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useProducts } from '../context/CartContext';
import { ProductI } from '../interfaces/product.interface';

function ModalDelete({ item }: { item: ProductI }) {
  const { show, setShow, removeItem } = useProducts();

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Esta seguro que desea eliminar{' '}
          <span className="fw-bold">{item.name}</span> de su carro e compras?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => removeItem(item.id)}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDelete;
