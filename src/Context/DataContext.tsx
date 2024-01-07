import React from "react";
import useFetch from "../Hooks/useFetch";
import { IDataContext } from "../Types/IDataContext";
import { IProduct } from "../Types/IProduct";
import useLocalStorage from "../Hooks/useLocalStorage";

const DataContext = React.createContext<IDataContext | null>(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) 
    throw new Error("useDataContext must be used within a DataContextProvider");
  return context;
}

export const DataContextProvider = (
  { children }: React.PropsWithChildren
) => {
  const [url, setUrl] = React.useState<string>(`${import.meta.env.VITE_API_URL}/products`);
  const { data, loading, error } = useFetch<IProduct[]>(url);
  const [cart, setCart] = React.useState<IProduct[]>([]);
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = React.useState(0.00);

  const [localStoragedCart, setLocalStoragedCart] = useLocalStorage<IProduct[]>('cart', cart);

  React.useEffect(() => {
    if (localStoragedCart.length) {
      setCart(localStoragedCart)
    }
  }, []);

  React.useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price
    }
    , 0.00)
    setTotalPrice(total)
    setLocalStoragedCart(cart)
  }, [cart, setLocalStoragedCart])

  React.useEffect(() => {
    if (data) {
      setProducts(data)
    }
  }, [data])

  return (
    <DataContext.Provider
      value={{ 
        data, loading, error, 
        cart, setCart,
        totalPrice, setTotalPrice,
        url, setUrl,
        products, setProducts
       }}
    >
      {children}
    </DataContext.Provider>
  );
}