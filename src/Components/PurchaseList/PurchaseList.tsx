import { useDataContext } from '../../Context/DataContext';
import './PurchaseList.css';

export const PurchaseList = () => {
  const {cart, totalPrice} = useDataContext();
  return (
    <ul className="cart-list">
      {cart.map((item, index) => (
        <li key={index} className="cart-item">
          <span className="item-title">{item.title}</span>
          <span className="item-price">{item.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
        </li>
      ))}
      <li className="cart-total">
        <span>Total</span>
        <span>{totalPrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
      </li>
    </ul>
  )
}
