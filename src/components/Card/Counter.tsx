import { useState } from 'react';
import { ProductI } from '../../interfaces/product.interface';
import { CardButton } from './Card.styled';
import { useNavigate } from 'react-router-dom';

const Counter = ({ product }: { product: ProductI }) => {
  const [amountAdded, setAmountAdded] = useState(0);
  const navigate = useNavigate();

  //increment value
  const handleAddValue = (product: ProductI) => {
    if (product.amount <= amountAdded) {
      alert('no hay mas stock');
    } else {
      setAmountAdded(amountAdded + 1);
    }
  };
  //decrement value
  const handleRemoveValue = () => {
    if (amountAdded === 0) {
      alert('no hay mas stock en el carrito');
    } else {
      setAmountAdded(amountAdded - 1);
    }
  };
  //redirect to cart
  const addToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <div className="input-group mb-3 mt-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={handleRemoveValue}
        >
          -
        </button>
        <input
          type="text"
          className="form-control"
          placeholder={amountAdded.toString()}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={() => handleAddValue(product)}
        >
          +
        </button>
      </div>

      {amountAdded > 0 ? (
        <CardButton onClick={addToCart}>Add to cart</CardButton>
      ) : (
        <CardButton disabled onClick={addToCart}>
          Add to cart
        </CardButton>
      )}
    </>
  );
};

export default Counter;
