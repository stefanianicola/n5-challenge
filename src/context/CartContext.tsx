import { useState, createContext, ReactNode, useContext } from 'react';

import { productData } from '../data/products';
import { ProductI } from '../interfaces/product.interface';

type CartContextType = {
  products: ProductI[];
  setProducts: React.Dispatch<React.SetStateAction<ProductI[]>>;
};

const CartContext = createContext<CartContextType>({
  products: [],
  setProducts: () => [],
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductI[]>(productData);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
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
