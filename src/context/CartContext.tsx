import { useState, createContext, ReactNode, useContext } from 'react';

import { productData } from '../data/products';
import { ProductI } from '../interfaces/product.interface';

type CartContextType = {
  products: ProductI[];
  setProducts: React.Dispatch<React.SetStateAction<ProductI[]>>;
  list: ProductI[];
  setList: React.Dispatch<React.SetStateAction<ProductI[]>>;
  addList: (id: number, name: string, amount: number, price: number) => void;
  clear: () => void;
  totalCompra: () => void;
  total: number;
  removeItem: (id: number) => void;
  item: number;
  setItem: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartContext = createContext<CartContextType>({
  products: [],
  setProducts: () => [],
  list: [],
  setList: () => [],
  addList: () => [],
  clear: () => [],
  totalCompra: () => [],
  total: 0,
  removeItem: () => [],
  item: 0,
  setItem: () => 0,
  loading: false,
  setLoading: () => false,
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductI[]>(productData);
  const [list, setList] = useState<ProductI[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [item, setItem] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const addList = (id: number, name: string, amount: number, price: number) => {
    let aux = list;
    let isInCart = false;
    aux.forEach((a) => {
      if (a.id === id) {
        isInCart = true;
        a.amount = a.amount + amount;
        setList(aux);
      }
    });
    !isInCart &&
      setList([
        ...aux,
        {
          id: id,
          name: name,
          amount: amount,
          price: price,
        },
      ]);
  };

  const clear = () => {
    setList([]);
    setItem(0);
    localStorage.removeItem('listAdded');
  };

  const removeItem = (id: number) => {
    let dataAux = [...list];
    let items = item;
    let suma = total;
    for (let i = 0; i < list.length; i++) {
      if (id === list[i].id) {
        dataAux.splice(i, 1);
        items = items - list[i].amount;
        suma = Number(suma - list[i].price * list[i].amount);
        setItem(items);
        setTotal(Number(suma));
      }
    }

    setList(dataAux);
    // totalCompra();
  };

  const totalCompra = () => {
    let aux = [...list];
    let suma = 0;

    aux.forEach((a) => {
      if (a.amount > 1) {
        suma = Number(suma) + Number(a.price) * Number(a.amount);
      } else {
        suma = Number(suma) + Number(a.price);
      }
    });

    setTotal(Number(suma));
    addItems();
  };

  const addItems = () => {
    let aux = [...list];
    let items = 0;

    aux.forEach((a) => {
      if (a.amount > 1) {
        items = items + a.amount;
      } else {
        items = items + a.amount;
      }
    });
    setItem(items);
  };
  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        list,
        setList,
        addList,
        clear,
        totalCompra,
        total,
        removeItem,
        item,
        setItem,
        loading,
        setLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useProducts = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useSocialMedia must be used inside a SocialMediaProvider');
  }
  return context;
};
