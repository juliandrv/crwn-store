import { CategoriesList } from './components/categoriesList/CategoriesList';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl:
        'https://images.pexels.com/photos/1144721/pexels-photo-1144721.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl:
        'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl:
        'https://images.pexels.com/photos/7500610/pexels-photo-7500610.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl:
        'https://images.pexels.com/photos/3457726/pexels-photo-3457726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl:
        'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return <CategoriesList categories={categories} />;
};

export default App;
