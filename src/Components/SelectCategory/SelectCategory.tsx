import Select from '../Forms/Select';
import useFetch from '../../Hooks/useFetch';
import { useDataContext } from '../../Context/DataContext';

export const SelectCategory = () => {
  const {data} = useFetch<string[]>('https://fakestoreapi.com/products/categories');
  const {setUrl} = useDataContext();

  if (!data) return null;

  const options = data.map((category: string) => {
    return {value: category, label: category}
  });

  options.push({value: '', label: 'Todas'});

  const handleChange = (value: string) => {
    if(value)
      value = `category/${value}`
    
    setUrl(`https://fakestoreapi.com/products/${value}`);
  }

  return (
    <div className="">
      <Select label={'Categorias'} onChange={handleChange} options={options}  
      />
    </div>
  )
}
