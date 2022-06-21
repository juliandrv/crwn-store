import { CategoryItem } from '../categoryItem/CategoryItem';
import './categoriesList.scss';

export const CategoriesList = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
