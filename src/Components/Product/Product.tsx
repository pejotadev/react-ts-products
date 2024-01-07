import './Product.css'
import { NavLink, useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { IProduct } from '../../Types/IProduct'
import { useDataContext } from '../../Context/DataContext'
import CartSVG from '../../assets/CartSVG'
import Button from '../Forms/Button'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'

export const Product = () => {
  const { id } = useParams()
  const { data } = useFetch<IProduct>(`https://fakestoreapi.com/products/${id}`)
  const {cart, setCart} = useDataContext()

  if (!data) return (<LoadingSpinner />)
  
  return (
    <section className='product-box'>
      <div className='product-img'>
        <img src={data.image} alt={data.title} />
      </div>
      <div className='product-info'>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>
          {data.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
        </p>
        <p>{data.category}</p>

        <span className="buy-btn" onClick={() => { setCart([...cart, data]) }}>
          <CartSVG title='Adicionar ao carrinho' color='#000' />
        </span>
        <NavLink to={'/'}>
          <Button>Voltar</Button>
        </NavLink>
      </div>
    </section>
  )
}
