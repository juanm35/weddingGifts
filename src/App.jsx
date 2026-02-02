import { useState } from 'react';
import GiftCard from './components/GiftCard';
import Modal from './components/Modal';
import { gifts, coupleInfo } from './data/gifts';
import './App.css';

function App() {
  const [selectedGift, setSelectedGift] = useState(null);
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', ...new Set(gifts.map(g => g.category))];

  const filteredGifts = filter === 'Todos'
    ? gifts
    : gifts.filter(g => g.category === filter);

  return (
    <div className="app">
      <div className="hero-banner">
        <img src={coupleInfo.bannerImage} alt={coupleInfo.names} className="hero-image" />
        <div className="hero-overlay">
          <h1>{coupleInfo.names}</h1>
          <p className="date">{coupleInfo.date}</p>
        </div>
      </div>

      <header className="header">
        <p className="message">{coupleInfo.message}</p>
      </header>

      <nav className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <main className="gifts-grid">
        {filteredGifts.map(gift => (
          <GiftCard
            key={gift.id}
            gift={gift}
            onSelect={setSelectedGift}
          />
        ))}
      </main>

      <footer className="footer">
        <p>Hecho con amor para nuestro día especial</p>
      </footer>

      <Modal gift={selectedGift} onClose={() => setSelectedGift(null)} />
    </div>
  );
}

export default App;
