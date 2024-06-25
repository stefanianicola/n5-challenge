import { Link } from 'react-router-dom';
import { useProducts } from '../context/CartContext';

function Cart() {
  const contextProduct = useProducts();

  return (
    <>
      {contextProduct.list.length > 0 ? (
        <div>
          <h4>Compra Pendiente de confirmación</h4>
          <hr />
          {contextProduct.list.map((l) => (
            <div key={l.id}>
              <h3>{l.name}</h3>

              <p>Cantidad: {l.amount}</p>

              <p>{l.price * l.amount}</p>

              <div>
                <button
                  onClick={() => {
                    contextProduct.removeItem(l.id);
                  }}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ))}

          <p>Total de tu compra:</p>
          <p>{contextProduct.total}</p>

          <button onClick={contextProduct.clear}>Cancelar compra</button>
        </div>
      ) : (
        <div>
          <h5>No tienes elementos en el carrito!!</h5>
          <Link to="/">
            <button>Volver al inicio</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
