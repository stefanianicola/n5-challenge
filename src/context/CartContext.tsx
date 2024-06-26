import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

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
  existingList: ProductI[];
  finalizarCompra: () => void;
  successBuy: boolean;
  setSuccessBuy: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
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
  existingList: [],
  finalizarCompra: () => [],
  successBuy: false,
  setSuccessBuy: () => false,
  show: false,
  setShow: () => false,
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductI[]>(productData);
  const [list, setList] = useState<ProductI[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [item, setItem] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [successBuy, setSuccessBuy] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  // Obtener la lista existente de localStorage o inicializar una nueva
  let existingList = JSON.parse(localStorage.getItem('listAdded')!) || [];

  useEffect(() => {
    if (existingList.length > 0) {
      setList(existingList);
    }
  }, []);

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

    const newProductList = products.map((item: ProductI) =>
      item.id === id ? { ...item, amount: item.amount - amount } : item
    );
    setProducts(newProductList);
  };

  const clear = () => {
    setList([]);
    setItem(0);
    setProducts(productData);
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
        const newProductList = products.map((item: ProductI) =>
          item.id === id
            ? { ...item, amount: item.amount + list[i].amount }
            : item
        );
        setProducts(newProductList);
        setItem(items);

        setTotal(Number(suma));
      }
    }

    setList(dataAux);
    setShow(false);
    localStorage.removeItem('listAdded');
    localStorage.setItem('listAdded', JSON.stringify(dataAux));
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

  const finalizarCompra = () => {
    setList([]);
    localStorage.removeItem('listAdded');
    setSuccessBuy(true);
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
        existingList,
        finalizarCompra,
        successBuy,
        setSuccessBuy,
        show,
        setShow,
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
