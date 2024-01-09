import Select from '../Forms/Select';
import useFetch from '../../Hooks/useFetch';
import { useDataContext } from '../../Context/DataContext';
import './SelectCategory.css';

export const SelectCategory = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { data } = useFetch<string[]>(`${apiUrl}/products/categories`);
  const { setUrl } = useDataContext();

  if (!data) return null;

  const buildOptions = () => {
    const categoryOptions = data.map(category => ({ value: category, label: category }));
    categoryOptions.push({ value: '', label: 'Todas' });
    return categoryOptions;
  };

  const handleChange = (selectedCategory: string) => {
    const categoryPath = selectedCategory ? `category/${selectedCategory}` : '';
    setUrl(`${apiUrl}/products/${categoryPath}`);
  }

  return (
    <div className="select-category">
      <Select label="Categorias" onChange={handleChange} options={buildOptions()} />
    </div>
  );
};
