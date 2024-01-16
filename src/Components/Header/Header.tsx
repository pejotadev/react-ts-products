import { useState } from 'react';
import { useDataContext } from '../../Context/DataContext';
import CartSVG from '../../assets/CartSVG';
import { PurchaseModal } from '../PurchaseModal/PurchaseModal';
import { Search } from '../Search/Search';
import 'src/Components/Header/header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const {cart, totalPrice} = useDataContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <NavLink to='/'>
        <img 
          className="logo" 
          src="https://www.aec.com.br/wp-content/themes/aec/dist/img/logotipo.webp" 
          alt="AEC Teste" />
      </NavLink>
      
      <Search />

      <div className="cart-menu" onClick={() => setIsModalOpen(true)}> 
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
