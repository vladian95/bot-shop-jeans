import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';
import './App.css';

function App() {
  // const { onToggleButton, tg } = useTelegram();

  // useEffect(() => {
  //   tg.ready();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path={'productList'} element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
