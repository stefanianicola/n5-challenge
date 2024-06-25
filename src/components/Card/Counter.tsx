import { useEffect, useState } from 'react';
import { CardButton } from './Card.styled';
import { ProductI } from '../../interfaces/product.interface';

interface CounterProps {
  onAdd: (count: number) => void;
  product: ProductI;
}

const Counter: React.FC<CounterProps> = ({ onAdd, product }) => {
  const [amountAdded, setAmountAdded] = useState(0);
  // Obtener la lista existente de localStorage o inicializar una nueva
  const existingList = JSON.parse(localStorage.getItem('listAdded') || '[]');

  useEffect(() => {
    if (existingList.length > 0) {
      for (let i of existingList) {
        if (product.id === i.productId) setAmountAdded(i.count);
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
      productId: product.id,
      count: amountAdded,
    };

    // Actualizar la lista existente con el nuevo objeto
    const updatedList = [...existingList, newEntry];
    console.log(updatedList);
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
