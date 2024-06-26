import { Button } from 'react-bootstrap';
import { useProducts } from '../context/CartContext';

function CartTotal() {
  const { total, clear, finalizarCompra } = useProducts();
  return (
    <div className="d-flex flex-column align-items-end">
      <div className="d-flex flex-row ">
        <p className="mx-4 ">Total de tu compra:</p>
        <p className="fw-bold">${total}</p>
      </div>
      <div className="d-flex flex-row ">
        <Button variant="outline-danger" className="mx-3" onClick={clear}>
          Cancelar compra
        </Button>
        <Button variant="success" onClick={finalizarCompra}>
          Comprar
        </Button>
      </div>
    </div>
  );
}

export default CartTotal;
