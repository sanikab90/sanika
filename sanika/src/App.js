import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header title="Sanika Buche" />
      <Footer note="Add other links here or just leave blank idk" />
    </div>
  );
}
