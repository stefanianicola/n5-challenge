import { Button } from 'react-bootstrap';
import { useProducts } from '../context/CartContext';
import { TextElement } from '../shared/GlobalStyle.styled';

function CartTotal() {
  const { total, clear, finalizarCompra } = useProducts();
  return (
    <div className="d-flex flex-column align-items-end">
      <div className="d-flex flex-row my-3">
        <TextElement className="mx-4 ">Total de tu compra:</TextElement>
        <TextElement className="fw-bold">${total}</TextElement>
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
