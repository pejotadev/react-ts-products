import { useState } from 'react';
import { useDataContext } from '../../Context/DataContext';
import CartSVG from '../../assets/CartSVG';
import { PurchaseModal } from '../PurchaseModal/PurchaseModal';
import { Search } from '../Search/Search';
import './Header.css';

export const Header = () => {
  const {cart, totalPrice} = useDataContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <img 
        className="logo" 
        src="https://www.aec.com.br/wp-content/themes/aec/dist/img/logotipo.webp" 
        alt="AEC Teste" />

      <Search />

      <div 
        className="cart-menu" 
        onClick={() => setIsModalOpen(true)}> 
        <CartSVG 
          title={'Ver Carrinho de compras'} 
          color='currentColor' />
        {cart.length} | {totalPrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
      </div>

      <PurchaseModal 
        isModalOpen={isModalOpen} 
        toggleModal={() => setIsModalOpen(!isModalOpen)} 
        />
    </header>
  )
}
