import Input from '../Forms/Input'
import { useDataContext } from '../../Context/DataContext';
import React from 'react';
import './Search.css'

export const Search = () => {
  const {products, setProducts, data} = useDataContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value) {
      const filteredProducts = products?.filter((product) => {
        return product.title.toLowerCase().includes(value.toLowerCase())
      })
      setProducts(filteredProducts)
    }else{
      if (data)
        setProducts(data)
    }
  }

  return (
    <div>
      <div className="input-container">
          <Input 
          placeholder="Pesquisar" 
          label={''} 
          labelId={'pesquisar'}
          onChange={handleChange}
          />
      </div>
    </div>
  )
}
