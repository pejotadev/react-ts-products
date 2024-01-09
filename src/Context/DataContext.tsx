import React, { useState, useEffect, useMemo } from "react";
import useFetch from "../Hooks/useFetch";
import useLocalStorage from "../Hooks/useLocalStorage";
import { IDataContext } from "../Types/IDataContext";
import { IProduct } from "../Types/IProduct";

const DataContext = React.createContext<IDataContext | null>(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [url, setUrl] = useState<string>(`${import.meta.env.VITE_API_URL}/products`);
  const { data, loading, error } = useFetch<IProduct[]>(url);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  const [localStoragedCart, setLocalStoragedCart] = useLocalStorage<IProduct[]>('cart', cart);

  // Atualiza o carrinho com os dados do localStorage na montagem do componente
  useEffect(() => {
    if (localStoragedCart.length) {
      setCart(localStoragedCart)
    }
  }, [localStoragedCart]);

  // Atualiza o totalPrice e o localStorage quando o carrinho muda
  useEffect(() => {
    setLocalStoragedCart(cart);
  }, [cart, setLocalStoragedCart]);

  // Atualiza os produtos quando os dados são recebidos
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price, 0.00);
  }, [cart]);

  return (
    <DataContext.Provider
      value={{ 
        data, loading, error, 
        cart, setCart,
        totalPrice,
        url, setUrl,
        products, setProducts
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
