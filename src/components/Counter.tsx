import { useEffect, useState } from 'react';
import { CardButton } from './Card/Card.styled';
import { ProductI } from '../interfaces/product.interface';
import { useProducts } from '../context/CartContext';

interface CounterProps {
  onAdd: (count: number) => void;
  product: ProductI;
}

const Counter: React.FC<CounterProps> = ({ onAdd, product }) => {
  const [amountAdded, setAmountAdded] = useState(0);
  const { existingList } = useProducts();

  useEffect(() => {
    if (existingList.length > 0) {
      for (let i of existingList) {
        if (product.id === i.id) setAmountAdded(i.amount);
      }
    }
  }, []);

  //increment value
  const handleAddValue = () => {
    if (product.amount <= amountAdded) alert('No hay mas en stock!');
    else {
      setAmountAdded(amountAdded + 1);
    }
  };
  //decrement value
  const handleRemoveValue = () => {
    if (amountAdded === 0) alert('no hay mas stock en el carrito');
    else setAmountAdded(amountAdded - 1);
  };

  //envia la cantidad seleccionada
  const handlerOnAdd = () => {
    // Crear un nuevo objeto para el producto actual
    const newEntry = {
      id: product.id,
      amount: amountAdded,
      price: product.price,
      name: product.name,
    };

    // Actualizar la lista existente con el nuevo objeto
    const updatedList = [...existingList, newEntry];
    // Guardar la lista actualizada en localStorage
    localStorage.setItem('listAdded', JSON.stringify(updatedList));
    onAdd(amountAdded);
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
          type="number"
          className="form-control"
          placeholder={amountAdded.toString()}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={handleAddValue}
        >
          +
        </button>
      </div>

      {amountAdded > 0 ? (
        <CardButton onClick={handlerOnAdd}>Add to cart</CardButton>
      ) : (
        <CardButton disabled onClick={handlerOnAdd}>
          Add to cart
        </CardButton>
      )}
    </>
  );
};

export default Counter;
