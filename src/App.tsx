import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Board8 from './components/Board8';
import Board15 from './components/Board15';
import './css/index.css'

const App: React.FC = () => {
  const [isBoard8, setIsBoard8] = useState<boolean>(true);
  const [isBoard15, setIsBoard15] = useState<boolean>(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        showBoard8={() => {
          setIsBoard8(true);
          setIsBoard15(false);
        }}
        showBoard15={() => {
          setIsBoard8(false);
          setIsBoard15(true);
        }}
      />
      {isBoard8 && <Board8 />}
      {isBoard15 && <Board15 />}
      <Footer />
    </div>
  );
};

export default App
