// CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Item {
  id: number;
  thumbnailUrl: string;
  title: string;
  price: number;
}

interface CartContextProps {
  cartItems: Item[];
  addToCart: (item: Item) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
