import { useDataContext } from '../../Context/DataContext';
import Button from '../Forms/Button';
import { Each } from '../Utils/Each';
import './PurchaseList.css';

export const PurchaseList = () => {
  const { cart, totalPrice, setCart } = useDataContext();

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const removeItem = (index: number) => {
    const newCart = cart.filter((_item, i) => i !== index);
    setCart(newCart);
  };

  return (
    <ul className="cart-list">
      <Each of={cart} render={(item, index) => (
        <li key={item.id || index} className="cart-item">
          <span className="item-title">{item.title}</span>
          <span className="item-price">{formatPrice(item.price)}</span>
          <Button
            className="remove-item"
            onClick={() => removeItem(index)}
            aria-label={`Remover ${item.title} do carrinho`}>
            x
          </Button>
        </li>
      )} />
      <li className="cart-total">
        <span>Total</span>
        <span>{formatPrice(totalPrice)}</span>
      </li>
    </ul>
  );
};
