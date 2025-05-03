import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './components/Board';
import './css/index.css'

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Board />
      <Footer />
    </div>
  );
};

export default App
