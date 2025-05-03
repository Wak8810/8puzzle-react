import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Board8 from './components/Board8';
import './css/index.css'

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Board8 />
      <Footer />
    </div>
  );
};

export default App
