import { NavLink } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
import CartSVG from '../../assets/CartSVG';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import './ProductsList.css';

export const ProductsList = () => {
  const {loading, products, setCart, cart} = useDataContext();

  if (loading) return (<LoadingSpinner />)

  return (
    <>
    <section className="products">
    {products.map((item) => (
      <div className="wsk-cp-product" key={item.id}>
        <NavLink to={`/${item.id}`}>
          <div className="wsk-cp-img">
            <img src={item.image} alt={item.title} className="img-responsive" />
          </div>
        </NavLink>
        
        <div className="card-footer">
          <div className="wsk-cp-text">
            <div className="category">
              <span>{item.category}</span>
            </div>
            <div className="title-product">
              <h4>{item.title}</h4>
            </div>
          </div>
          <div className="wcf-left">
            <span className="price">
              {item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          </div>
          <div className="wcf-right">
            <span className="buy-btn" onClick={() => { setCart([...cart, item]) }}>
              <CartSVG title='Adicionar ao carrinho' color='#000' />
            </span>
          </div>
        </div>
      </div>
    ))}
  </section>
    </>   
  )
}
