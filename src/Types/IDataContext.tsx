import { IProduct } from "./IProduct";

export type IDataContext = {
  data: IProduct[] | null;
  loading: boolean;
  error: string | null;
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
};