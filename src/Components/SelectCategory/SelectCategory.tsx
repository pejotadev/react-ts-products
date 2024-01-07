import Select from '../Forms/Select';
import useFetch from '../../Hooks/useFetch';
import { useDataContext } from '../../Context/DataContext';
import './SelectCategory.css';

export const SelectCategory = () => {
  const {data} = useFetch<string[]>(`${import.meta.env.VITE_API_URL}/products/categories`);
  const {setUrl} = useDataContext();

  if (!data) return null;

  const options = data.map((category: string) => {
    return {value: category, label: category}
  });

  options.push({value: '', label: 'Todas'});

  const handleChange = (value: string) => {
    if(value)
      value = `category/${value}`
    
    setUrl(`${import.meta.env.VITE_API_URL}/products/${value}`);
  }

  return (
    <div className="select-category">
      <Select label={'Categorias'} onChange={handleChange} options={options}  
      />
    </div>
  )
}
