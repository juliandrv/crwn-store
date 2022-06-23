import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { Authentication } from './routes/authentication/Authentication';
import { Home } from './routes/home/Home';

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
