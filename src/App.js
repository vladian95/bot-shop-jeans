import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>togglee</button>
    </div>
  );
}

export default App;
